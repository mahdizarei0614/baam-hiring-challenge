import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ComicModel} from "../../../shared/services/apis/comics.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  public comics: ComicModel[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({comics}) => {
      this.comics = comics.results;
    });
  }
}
