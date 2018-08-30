# ngx-confirm-box
This is angular 4/5/6 package used to implement confirm box in your application.
## Installation

```bash
$ npm install ngx-confirm-box --save
```
## Usage
import the Module in the `app.module.ts` 
```typescript
import { NgxConfirmBoxModule,NgxConfirmBoxService } from 'ngx-confirm-box';
@NgModule({
  imports: [
    // ...
    NgxConfirmBoxModule
  ],
  providers: [
    // ...
    NgxConfirmBoxService
  ]
})
```
Add the service in the component you are going to use
```typescript
import { NgxConfirmBoxService } from 'ngx-confirm-box';

//example
export class AppComponent implements OnInit {
  constructor(private confirmBox: NgxConfirmBoxService) { }

    yourMethod(){
        this.confirmBox.show('rgba(0,0,0,0.5)','Confirmation','Are you sure want to delete this?','No','Yes');
    }

    confirmChange(showConfirm:boolean){
        if(showConfirm){
            //Your code goes here
        }
    }
  }

}

```
In Template Use the directive
```html
<ngx-confirm-box (confirmEvt)="confirmChange($event)"></ngx-confirm-box>
```
## Customization
Propery | Uses | Preference |
--- | --- | --- |
First parameter  | Used to change the background color of overlay div, It uses rgba value, Default value is `rgba(0,0,0,0.5)` | mantatory
Second parameter | This is representing title of confirm box, Default  value is `''` | mantatory
Third parameter  | This is representing   message what you want to show in confirm box, Default  value is `Are you sure want to delete this?` | mantatory
Fourth parameter | This is representing  reject button text in confirm box, Default  value is `Cancel` | mantatory
Fifth parameter  | This is representing  accept button text in confirm box, Default  value is `OKay` | mantatory


## License
The MIT License (MIT)