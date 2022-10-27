import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ComicModel, ComicsService} from "../../../shared/services/apis/comics.service";
import {Subscription} from "rxjs";
import {isDesktop} from "../../../app.component";
import {Animations} from "../../../shared/configs";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
  animations: [Animations.inOutAnimation]
})
export class ComicsComponent implements OnInit, OnDestroy {
  public comics: ComicModel[] = [];
  public subscription = Subscription.EMPTY;
  public showSearchbar = false;
  public searchbarValue = '';
  public isDesktopRef = isDesktop;
  private searchTimeout: any;

  constructor(private activatedRoute: ActivatedRoute,
              private comicsService: ComicsService) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(({comics}) => {
      this.comics = comics.results;
    });
  }

  public getNextList(offset = 0, limit = 10, name: string = '') {
    this.comicsService.get(offset, limit, (name.length ? name : null) as string).subscribe((res) => {
      if (offset === 0) {
        this.comics = res.data.results as ComicModel[];
      } else {
        this.comics = [...this.comics, ...res.data.results as ComicModel[]];
      }
    });
  }

  public inputSearchbar() {
    try {
      clearTimeout(this.searchTimeout);
    } catch (e) {}
    this.searchTimeout = setTimeout(() => {
      this.getNextList(0, 10, this.searchbarValue);
    }, 500);
  }

  public hideSearchbar() {
    if (this.searchbarValue?.length) {
      this.getNextList(0, 10)
    }
    this.showSearchbar = false;
    this.searchbarValue = '';
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
