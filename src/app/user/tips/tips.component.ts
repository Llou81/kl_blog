import { Component } from '@angular/core';
import {TipService} from "../../services/tip.service";

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html'
})
export class TipsComponent {
  constructor (public tipsvc: TipService) {

  }
}
