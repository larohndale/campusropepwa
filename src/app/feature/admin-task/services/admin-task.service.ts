import { Injectable } from "@angular/core";
import { IAdminTask, ITask } from "../../../core/models/admin-task";
import { BehaviorSubject } from "rxjs";
import {
  map,
  distinctUntilChanged,
  tap,
  filter,
  switchMap
} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "src/app/core/services/auth.service";

const ADMIN_TASKS_URL = `unauth/admintasks`;
const SUPER_ADMIN_EMAIL = "ropesuper1@gmail.com";

const SUPER_ADMIN_ASSIGNMENT_TASK = {
  id: 100,
  taskName: "Assign admin task",
  assigned: true,
  pageUrl: "/admin-task/view"
};
export interface AdminTaskState {
  allAdminTasks: IAdminTask[];
  adminTasksOfLoggedUser: ITask[];
  inViewAdminTask: IAdminTask;
}

// tslint:disable-next-line: variable-name
let _state: AdminTaskState = {
  allAdminTasks: [],
  adminTasksOfLoggedUser: null,
  inViewAdminTask: null
};

@Injectable({
  providedIn: "root"
})
export class AdminTaskService {
  private store = new BehaviorSubject<AdminTaskState>(_state);
  private state$ = this.store.asObservable();

  allAdminTasks$ = this.state$.pipe(
    map(state => state.allAdminTasks),
    distinctUntilChanged()
  );

  allUserAdminTaskDataForTable$ = this.allAdminTasks$.pipe(
    map(adminTasks =>
      adminTasks
        .filter(adminTask => {
          return adminTask.user.email !== SUPER_ADMIN_EMAIL;
        })
        .map(adminTask => {
          return {
            _id: adminTask._id,
            email: adminTask.user.email,
            tasks: adminTask.tasks
              .filter(task => task.assigned)
              .map(task => task.taskName)
              .join(" , ")
          };
        })
    )
  );

  adminTasksOfLoggedUser$ = this.state$.pipe(
    map(state => state.adminTasksOfLoggedUser),
    distinctUntilChanged()
  );

  inViewAdminTask$ = this.state$.pipe(
    map(state => state.inViewAdminTask),
    distinctUntilChanged()
  );

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.loggedUser$
      .pipe(
        filter(loggedUser => !!loggedUser),
        switchMap(loggedUser => this.findAdminTasksOfUser(loggedUser))
      )
      .pipe(tap(console.log))
      .subscribe();
  }

  public getStateSnapshot(): AdminTaskState {
    return { ..._state };
  }

  public findAllAdminTasks() {
    this.http
      .get(ADMIN_TASKS_URL)
      .pipe(
        tap((allAdminTasks: IAdminTask[]) => {
          this.updateState({
            ..._state,
            allAdminTasks
          });
        })
      )
      .subscribe();
  }

  public findAdminTasksOfUser(loggedUser) {
    return this.http.get(`${ADMIN_TASKS_URL}?user=${loggedUser._id}`).pipe(
      map(adminTask => adminTask[0].tasks),
      map(tasks => tasks.filter(task => task.assigned)),
      tap((tasks: ITask[]) => {
        if (loggedUser.email === SUPER_ADMIN_EMAIL) {
          this.updateState({
            ..._state,
            adminTasksOfLoggedUser: tasks.concat([SUPER_ADMIN_ASSIGNMENT_TASK]) // api returns an array for every query
          });
        } else {
          this.updateState({
            ..._state,
            adminTasksOfLoggedUser: tasks // api returns an array for every query
          });
        }
      })
    );
  }

  public findAdminTaskById(adminTaskId) {
    this.http
      .get(`${ADMIN_TASKS_URL}/${adminTaskId}`)
      .pipe(
        tap((inViewAdminTask: IAdminTask) => {
          this.updateState({
            ..._state,
            inViewAdminTask
          });
        })
      )
      .subscribe();
  }

  public clearInViewAdminTask() {
    this.updateState({
      ..._state,
      inViewAdminTask: null
    });
  }

  public updateAdminTask(id: string, tasks: ITask[]) {
    return this.http.put(`${ADMIN_TASKS_URL}/${id}`, {
      tasks
    });
  }

  private updateState(state: AdminTaskState) {
    this.store.next((_state = state));
  }
}
