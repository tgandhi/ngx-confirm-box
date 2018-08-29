import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgxConfirmBoxService {
  private confirmChange = new Subject<boolean>();

  constructor() { }

  show() {
    
    this.confirmChange.next(true);
  }

  hide(){
    this.confirmChange.next(false);
  }

  getState(): Observable<any> {
    return this.confirmChange.asObservable();
  }

  
}
