import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrending } from 'src/app/core/models/trending';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http: HttpClient) { }

  private _trendingAPI = 'https://vast-sands-97057.herokuapp.com/trendings';

  getTrendingData(): Observable<ITrending[]> {
    return this.http.get<ITrending[]>(this._trendingAPI);
  }

  addTrendingData(data) {
    return this.http.post(this._trendingAPI, data);
  }

  deleteTrendingData(id) {
    return this.http.delete(`${this._trendingAPI}/${id}`);
  }
}
