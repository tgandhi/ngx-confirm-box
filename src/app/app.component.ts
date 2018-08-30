import { Component, OnInit } from '@angular/core';
//import{ NgxConfirmBoxService} from 'ngx-confirm-box';
import {NgxConfirmBoxService} from '../../projects/ngx-confirm-box/src/public_api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private ngconfirm: NgxConfirmBoxService) { }

  bgColor           ='rgba(0,0,0,0.5)'; // overlay background color
  confirmHeading    = 'sad';
  confirmContent    = "Are you sure want to delete this?";
  confirmCanceltext = "Cancel";
  confirmOkaytext   = "Okay";
  
  ngOnInit(){
    this.ngconfirm.show(this.bgColor,this.confirmHeading,this.confirmContent,this.confirmCanceltext,this.confirmOkaytext);
  }

  confirmChange(showConfirm:boolean){    
    console.log(showConfirm);    
  }

}
