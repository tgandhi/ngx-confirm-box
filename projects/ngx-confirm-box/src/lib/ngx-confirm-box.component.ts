import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import{ NgxConfirmBoxService} from './ngx-confirm-box.service';

@Component({
  selector: 'ngx-confirm-box',
  templateUrl:'ngx-confirm-box.component.html',
  styleUrls: ['ngx-confirm-box.component.css']
})
export class NgxConfirmBoxComponent implements OnInit {

  // @Input() bgColor            = 'rgba(0,0,0,0.5)'; //overlay background color
  // @Input() confirmContent     = 'Are you sure want to delete this?'; 
  // @Input() confirmHeading     = 'Confirmation'; 
  // @Input() confirmCanceltext  = 'No'; 
  // @Input() confirmOkaytext    = 'Yes'; 

  //confirmHeading:string;
  showHide  = false; 
  returnval = false; 

  confirmaray:any = {bgColor:'rgba(0,0,0,0.5)',confirmHeading:'',confirmContent:'Are you sure want to delete this?',confirmCanceltext:'No',confirmOkaytext:'Yes',show:this.showHide};
  subscription: Subscription;
  
  constructor(private confirmService : NgxConfirmBoxService) { 
    this.subscription =this.confirmService.getState().subscribe( confirmaray => {this.confirmaray = confirmaray });
  }
  @Output() confirmEvt = new EventEmitter<boolean>();
  ngOnInit() {
    console.log(this.confirmaray.show);
    this.showHide = this.confirmaray.show;
  }

  hideConfirm(){
    this.confirmaray.confirmContent     = '';
    this.confirmaray.confirmHeading     = '';
    this.confirmaray.confirmCanceltext  = '';
    this.confirmaray.confirmOkaytext    = '';
    this.confirmaray.showHide           = false;
    this.confirmEvt.emit(false); 
  }

  returConfirmBox(){
    this.confirmaray.showHide    = false;
    this.confirmEvt.emit(true);   
  }

}
