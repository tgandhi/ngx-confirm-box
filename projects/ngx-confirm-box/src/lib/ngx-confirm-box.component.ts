import { Component, OnInit, Input, Output, EventEmitter,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import{ NgxConfirmBoxService} from './ngx-confirm-box.service';

@Component({
  selector: 'ngx-confirm-box',
  templateUrl:'ngx-confirm-box.component.html',
  styleUrls: ['ngx-confirm-box.component.css']
})
export class NgxConfirmBoxComponent implements OnInit, OnDestroy {

   @Input() bgColor            = 'rgba(0,0,0,0.5)'; //overlay background color
   @Input() confirmContent     = 'Are you sure want to delete this?'; 
   @Input() confirmHeading     = 'Confirmation'; 
   @Input() confirmCanceltext  = 'Cancel'; 
   @Input() confirmOkaytext    = 'Okay'; 

  //confirmHeading:string;
  showHide  = false; 
  returnval = false; 
  confirmaray:any = {bgColor:'rgba(0,0,0,0.5)',confirmHeading:'',confirmContent:'Are you sure want to delete this?',confirmCanceltext:'No',confirmOkaytext:'Yes',show:this.showHide};
  subscription: Subscription;
  
  constructor(private confirmService : NgxConfirmBoxService) { 
   
  }
  @Output() confirmEvt = new EventEmitter<boolean>();
 
  ngOnInit() {

  this.subscription =this.confirmService.getState().subscribe( showHide => {
  this.showHide = showHide });
  this.confirmaray.show    = this.showHide;

  this.confirmaray.bgColor           = this.bgColor;
  this.confirmaray.confirmHeading    = this.confirmHeading;
  this.confirmaray.confirmContent    = this.confirmContent;
  this.confirmaray.confirmCanceltext = this.confirmCanceltext;
  this.confirmaray.confirmOkaytext   = this.confirmOkaytext;
  }

  hideConfirm(){
   
    this.showHide                       = false;
    this.confirmaray.show               = false;
    this.confirmEvt.emit(false); 
  }

  returnConfirmBox(){
    this.confirmaray.show   = false;
    this.showHide           = false;
    this.confirmEvt.emit(true);   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
