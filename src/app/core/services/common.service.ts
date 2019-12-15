import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrending } from 'src/app/core/models/trending';
import { Observable, from } from 'rxjs';
import { TableNames } from '../config/TableNames';
import { ConstantsService } from '../constants/constants.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public tableNames = TableNames;
  contentPerPage: number = 100
  constructor(private http: HttpClient, private readonly constantService: ConstantsService) { }
  private _commonAPI: string = 'https://vast-sands-97057.herokuapp.com/';
  getData(url, page = 1): Observable<ITrending[]> {
    const urlWithPagination = `${this._commonAPI}${url}?_start=${((this.contentPerPage * page) - 1) - (this.contentPerPage - 1)}&_limit=${this.contentPerPage}`
    return this.http.get<ITrending[]>(urlWithPagination);
  }
  getDataBy(parameter, value): Observable<ITrending[]> {
    const url = `${this._commonAPI}?${parameter}=${value}`
    return this.http.get<ITrending[]>(url);
  }
  addData(data: ITrending): Observable<any> {
    return this.http.post(this._commonAPI, data);
  }
  updateData(data: ITrending, id): Observable<any> {
    return this.http.put(`${this._commonAPI}/${id}`, data);
  }
  deleteData(id): Observable<any> {
    return this.http.delete(`${this._commonAPI}/${id}`);
  }

  getState(): Observable<{}[]> {
    return new Observable(obs => {
      obs.next(this.constantService.getStates());
      obs.complete()
    })
  }

}
