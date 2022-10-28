import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ComicModel, ComicsService} from "../../../shared/services/apis/comics.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit, OnDestroy {
  public comics: ComicModel[] = [];
  public subscription = Subscription.EMPTY;

  constructor(private activatedRoute: ActivatedRoute,
              public comicsService: ComicsService) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(({comics}) => {
      this.comics = comics.results;
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
