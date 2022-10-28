import {Component, Input, OnInit} from '@angular/core';
import {LoadingService} from "../../../core/services/loading.service";

@Component({
  selector: 'app-infinite-scroll-cards',
  templateUrl: './infinite-scroll-cards.component.html',
  styleUrls: ['./infinite-scroll-cards.component.scss']
})
export class InfiniteScrollCardsComponent implements OnInit {
  @Input() public hasToolbar: boolean;
  @Input() public hasSearchbar: boolean;
  @Input() public toolbarTitleKey: string;
  @Input() public infiniteScrollContainerRef: HTMLElement;
  @Input() public apiServiceRef: any;
  @Input() public serviceFuncName: string;
  @Input() public additionalAjaxQueries: any = null;
  @Input() public initialItems: any[] = [];
  @Input() public simpleView: boolean = false;
  @Input() public cardRouterLinkPrefixPath: string[] = [];
  @Input() public cardRouterLinkSuffixPath: string[] = [];
  @Input() public itemTitleKey: string;
  @Input() public cardLargeImage: boolean = false;
  public items: any[] = [];
  public searchbarValue = '';
  private searchTimeout: any;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    if (this.initialItems.length) {
      this.items = this.initialItems;
    } else {
      this.getNextList();
    }
  }

  public getNextList(offset = 0, limit = 10, name: string = '') {
    this.loadingService.disableLoadingOnNextAjax.next(true);
    this.apiServiceRef[this.serviceFuncName](offset, limit, (name.length ? name : null) as string, this.additionalAjaxQueries).subscribe((res: any) => {
      if (offset === 0) {
        this.items = res.data.results;
      } else {
        this.items = [...this.items, ...res.data.results];
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
    this.searchbarValue = '';
  }

  public getRouterLink(item: any) {
    if (!this.cardRouterLinkPrefixPath.length) {
      return undefined;
    }
    return [...this.cardRouterLinkPrefixPath, item.id, ...this.cardRouterLinkSuffixPath];
  }

}
