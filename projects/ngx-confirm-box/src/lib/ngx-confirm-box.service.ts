import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgxConfirmBoxService {
  private confirmChange = new Subject<any>();

  constructor() { }
  show(bgColor:string='rgba(0,0,0,0.5)',Heading:string,Content:string,Canceltext:string,Okaytext:string) {
    this.confirmChange.next({ bgColor: bgColor,confirmHeading: Heading,confirmContent: Content,confirmCanceltext: Canceltext,confirmOkaytext: Okaytext,show:true });
  }

  hide(){
    this.confirmChange.next(false);
  }

  getState(): Observable<any> {
    return this.confirmChange.asObservable();
  }

  
}
