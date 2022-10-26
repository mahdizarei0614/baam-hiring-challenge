import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isDarkTheme: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
  }
}
