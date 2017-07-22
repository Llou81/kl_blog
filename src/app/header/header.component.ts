import { Component } from '@angular/core';
import {RequestsService} from "../services/requests.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public usersrc: UserService) {

  }

    hideShow(id1, id2){
      document.getElementById(id1).style.display = "none";
      document.getElementById(id2).style.display = "block";
      }

}
