import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdminTaskService } from '../../services/admin-task.service';
import { MatTableDataSource } from '@angular/material';

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
  dataSource;
  constructor(private adminTaskService: AdminTaskService) {
    this.allUserAdminTaskData$ = this.adminTaskService.allUserAdminTaskDataForTable$;
    this.allUserAdminTaskData$.subscribe(allUserAdminTasks => {
      this.dataSource = new MatTableDataSource(allUserAdminTasks);
    });
  }

  ngOnInit() {
    this.adminTaskService.findAllAdminTasks();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
