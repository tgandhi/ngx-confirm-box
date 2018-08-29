import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import{ NgxConfirmBoxService} from './ngx-confirm-box.service';

@Component({
  selector: 'ngx-confirm-box',
  templateUrl:'ngx-confirm-box.component.html',
  styleUrls: ['ngx-confirm-box.component.css']
})
export class NgxConfirmBoxComponent implements OnInit {

  @Input() bgColor            = 'rgba(0,0,0,0.5)'; //overlay background color
  @Input() confirmContent     = 'Are you sure want to delete this?'; 
  @Input() confirmHeading     = 'Confirmation'; 
  @Input() confirmCanceltext  = 'No'; 
  @Input() confirmOkaytext    = 'Yes'; 

  showHide  = false; 
  returnval = false; 

  subscription: Subscription;
  
  constructor(private confirmService : NgxConfirmBoxService) { 
    this.subscription =this.confirmService.getState().subscribe( showHide => {this.showHide = showHide });
  }
  @Output() confirmEvt = new EventEmitter<boolean>();
  ngOnInit() {
    //this.showHide=true;
  }

  hideConfirm(){
    this.confirmContent     = '';
    this.confirmHeading     = '';
    this.confirmCanceltext  = '';
    this.confirmOkaytext    = '';
    this.showHide           = false;
    this.confirmEvt.emit(false); 
  }

  returConfirmBox(){
    this.showHide    = false;
    this.confirmEvt.emit(true);   
  }

}
