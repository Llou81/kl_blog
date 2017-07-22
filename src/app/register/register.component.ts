import { Component } from '@angular/core';
import { User } from "../models/user.model";
import { RequestsService } from "../services/requests.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  user = new User('', '', '', '', '');

  secPassField: string;

  constructor(private api: RequestsService) { }

  isPassValid() {
    if (this.user.password === this.secPassField) {
      return true;
    }
  }

  register() {
    if (!this.isPassValid()) {
      alert('Pogrešno ukucana lozinka');
    }
    else {
      alert('Uspešna registracija');
    }
    this.api.registerUser(this.user).subscribe(res => {
      console.log(res);
    });
  }

}
