import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent {

  constructor(public usersrc: UserService) {

  }
}
