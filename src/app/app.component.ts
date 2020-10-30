import { Component, OnInit } from '@angular/core';
import {NgxConfirmBoxService} from '../../projects/ngx-confirm-box/src/public_api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private ngconfirm: NgxConfirmBoxService) { }

  bgColor           ='rgba(0,0,0,0.5)'; // overlay background color
  confirmHeading    = '';
  confirmContent    = "Are you sure want to delete this?";
  confirmCanceltext = "Cancel";
  confirmOkaytext   = "Okay";
  ngOnInit(){
    
  }
  yourmethod(){
    this.ngconfirm.show();
  }

  confirmChange(showConfirm:boolean){    
    console.log(showConfirm);    
  }

}
