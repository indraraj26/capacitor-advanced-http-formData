import { Component } from '@angular/core';
import { ApiListingService } from '../services/api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  detail = {
    first_name: 'indraraj',
    mobile: '32432423423',
    age: null,
    comp: undefined,
    hobbies: [1, 2, 3],
    checkout: '',
  };
  constructor(private _api: ApiListingService, private _platform: Platform) {}

  onPostData(data) {
    this._platform.ready().then(() => {
      console.log(data);
      this._api
        .postSomeData(data)
        .then(data => {
          console.log(data);
        })
        .catch(e => console.log(e));
    });
  }
}
