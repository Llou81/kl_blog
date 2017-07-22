import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import { User } from "../models/user.model";
import 'rxjs/add/operator/map'
import { Tip } from "../models/tip.model";

@Injectable()
export class RequestsService {

  private API_URL = 'http://138.68.76.20:8810';
  // private API_URL = 'http://192.168.1.100:8810';
    constructor(private http: Http) {
}

  private get_auth_header(){
    let _token = 's00000D82ATk378qwGRvP5BZQLzf0Fai6KSNbxgrHkODDOtrUzEnwf7oym5o8IZL';
    let header = new Headers({authorization: _token});
    return new RequestOptions({headers: header});
  }

  registerUser(user: User) {
    return this.http.post(this.API_URL + '/user/register', {
      username: user.email,
      password: user.password,
      data: {
        first_name: user.first_name,
        last_name: user.last_name,
        nickname: user.username
      }
    })
      .map(res => res.json())
  }

  addTip(tip) {
    console.log('usao')
    let _token = 's00000ixqBbUZ80FelxdJS3j2Z11sFsHSPAaclBpgC7DmKwucQneAy0QVDLqtKuh';
    let header = new Headers({authorization: _token});
    return this.http.post(this.API_URL + '/api/tips', {
      new_tip_data: tip
    }, new RequestOptions({headers: header}))
      .map(res => res.json())
  }
}
