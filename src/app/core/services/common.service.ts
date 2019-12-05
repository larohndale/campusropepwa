import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrending } from 'src/app/core/models/trending';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  contentPerPage: number = 100
  constructor(private http: HttpClient) { }
  private _commonAPI: string = 'https://vast-sands-97057.herokuapp.com/trendings';
  getTrendingData(page = 1): Observable<ITrending[]> {
    const urlWithPagination = `${this._commonAPI}?_start=${(this.contentPerPage * page) - (this.contentPerPage - 1)}&_limit=${this.contentPerPage}`
    return this.http.get<ITrending[]>(urlWithPagination);
  }
  getTrendingDataBy(parameter, value): Observable<ITrending[]> {
    const url = `${this._commonAPI}?${parameter}=${value}`
    return this.http.get<ITrending[]>(url);
  }
  addTrendingData(data: ITrending): Observable<any> {
    return this.http.post(this._commonAPI, data);
  }
  updateTrendingData(data: ITrending, id): Observable<any> {
    return this.http.put(`${this._commonAPI}/${id}`, data);
  }
  deleteTrendingData(id): Observable<any> {
    return this.http.delete(`${this._commonAPI}/${id}`);
  }
}
