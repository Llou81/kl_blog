import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html'
})
export class InfoComponent {

  constructor(public usersrc: UserService) {

  }
}
