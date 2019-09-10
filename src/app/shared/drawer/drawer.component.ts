import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/core/models/admin-task';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdminTaskService } from '../../feature/admin-task/services/admin-task.service';
import { map, filter } from 'rxjs/operators';
import { LocationService } from 'src/app/core/services/location.service';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  adminTaskExpanded = false;
  assignedTasks: Observable<ITask[]>;
  constructor(
    private authService: AuthService,
    private adminTaskService: AdminTaskService,
    private locationService: LocationService,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.assignedTasks = this.adminTaskService.adminTasksOfLoggedUser$.pipe(
      filter(adminTask => !!adminTask),
      map(adminTask => adminTask.tasks)
    );
  }

  onLogout() {
    this.authService.logout();
  }

  onTaskItemClick(task: ITask) {
    this.locationService.navigate([task.pageUrl]);
    this.adminTaskExpanded = false;
    this.layoutService.toggleDrawer();
  }
}
