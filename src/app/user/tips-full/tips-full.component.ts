import { Component } from '@angular/core';
import {TipService} from "../../services/tip.service";

@Component({
  selector: 'app-tips-full',
  templateUrl: './tips-full.component.html'
})
export class TipsFullComponent {

  constructor(public tipsvc: TipService){}
}
