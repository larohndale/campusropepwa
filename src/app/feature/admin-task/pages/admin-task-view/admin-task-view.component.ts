import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdminTaskService } from '../../services/admin-task.service';

interface AdminTaskDatum {
  email: string;
  tasks: string;
}
@Component({
  selector: 'app-admin-task-view',
  templateUrl: './admin-task-view.component.html',
  styleUrls: ['./admin-task-view.component.scss']
})
export class AdminTaskViewComponent implements OnInit {
  allUserAdminTaskData$: Observable<AdminTaskDatum[]> = of([]);
  displayedColumns: string[] = ['email', 'tasks', 'actions'];
  constructor(private adminTaskService: AdminTaskService) {
    this.allUserAdminTaskData$ = this.adminTaskService.allUserAdminTaskDataForTable$;
  }

  ngOnInit() {
    this.adminTaskService.findAllAdminTasks();
  }
}
