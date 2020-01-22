import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdminTask } from 'src/app/core/models/admin-task';
import { AdminTaskService } from '../../services/admin-task.service';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-admin-task-edit',
  templateUrl: './admin-task-edit.component.html',
  styleUrls: ['./admin-task-edit.component.scss']
})
export class AdminTaskEditComponent implements OnInit, OnDestroy {
  inEditAdminTask$: Observable<IAdminTask>;
  constructor(
    private adminTaskService: AdminTaskService,
    private activatedRoute: ActivatedRoute,
    private locationService: LocationService
  ) {
    this.inEditAdminTask$ = this.adminTaskService.inViewAdminTask$;
  }

  ngOnInit() {
    const inEditAdminTaskId = this.activatedRoute.snapshot.params.id;
    this.adminTaskService.findAdminTaskById(inEditAdminTaskId);
  }

  ngOnDestroy() {
    this.adminTaskService.clearInViewAdminTask();
  }

  goBack() {
    this.locationService.goBack();
  }

  onUpdateAdminTaskClick(adminTask: IAdminTask) {
    this.adminTaskService
      .updateAdminTask(adminTask._id, adminTask.tasks)
      .subscribe(() => this.goBack());
  }
}
