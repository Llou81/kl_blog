import {Component} from '@angular/core';
import {Tip} from "../../models/tip.model";
import {RequestsService} from "../../services/requests.service";

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html'
})
export class AddTipComponent {

  tip = new Tip('', '', '', '', '', '', '', '');

  constructor(private api: RequestsService) {
  }

  addTip(){
    console.log('usao')
    this.api.addTip(this.tip).subscribe(res => {
      console.log('api')
      console.log(res);
    });
    alert("Uspešno ste uneli tip!")
  }
}
