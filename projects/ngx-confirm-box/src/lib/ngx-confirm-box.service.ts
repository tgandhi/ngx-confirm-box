import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgxConfirmBoxService {
  private confirmChange = new Subject<boolean>();

  constructor() { }
  show(bgColor:'rgba(0,0,0,0.5)',confirmHeading:string,confirmContent:string,confirmCanceltext:string,confirmOkaytext:string) {
    //this.confirmChange.next(true);
    this.confirmChange.next({ bgColor:bgColor,confirmHeading: confirmHeading,confirmContent:confirmContent,confirmCanceltext:confirmCanceltext,confirmOkaytext:confirmOkaytext,show:true });
  }

  hide(){
    this.confirmChange.next(false);
  }

  getState(): Observable<any> {
    return this.confirmChange.asObservable();
  }

  
}
