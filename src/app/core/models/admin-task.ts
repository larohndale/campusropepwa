import { IUser } from './user';

export interface IAdminTask {
  _id: string;
  tasks: ITask[];
  user: IUser;
}

export interface ITask {
  id: number;
  taskName: string;
  assigned: boolean;
  pageUrl: string;
}

export const TASKS: ITask[] = [
  {
    id: 1,
    taskName: 'Helpline Directory',
    assigned: false,
    pageUrl: '/helpline/admin'
  },
  {
    id: 2,
    taskName: 'Trending Directory',
    assigned: false,
    pageUrl: '/trending/admin'
  },
  {
    id: 3,
    taskName: 'Feed Contents',
    assigned: false,
    pageUrl: '/feed/admin'
  },
  {
    id: 4,
    taskName: 'Feed Commercials',
    assigned: false,
    pageUrl: '/feed/admin'
  }
];
