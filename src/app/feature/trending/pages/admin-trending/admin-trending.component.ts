import { Component, OnInit } from '@angular/core';
import { ITrending } from 'src/app/core/models/trending';
import { TrendingService } from '../../services/trending.service';
import { Subject, concat, of, Observable } from 'rxjs';
@Component({
  selector: 'app-admin-trending',
  templateUrl: './admin-trending.component.html',
  styleUrls: ['./admin-trending.component.scss']
})
export class AdminTrendingComponent implements OnInit {
  constructor(private trendingService: TrendingService) { }
  TrendingList$: Observable<any>;
  TrendingLoading = false;
  trendinList;
  selectedTrending: ITrending;
  selectState='Delhi'
  trending$ = this.trendingService.trending$

  ngOnInit() {
    console.log(this.trending$,"selectedState")
    this.setupTrendingList()
  }
  private setupTrendingList() {
  const data = this.trendingService.findTrendingsByState(this.selectState)
    console.log(data,"dataaa")
}
}
