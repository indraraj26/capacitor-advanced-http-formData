import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class ApiListingService {
  constructor(private _http: HTTP) {}

  postSomeData(detail): Promise<any> {
    const form = new cordova.plugin.http.ponyfills.FormData();
    for (let key in detail) {
      form.append(key, detail[key]);
    }
    console.log(form, 'formDataforFile');
    this._http.setDataSerializer('multipart');
    return this._http.post(`https://jsonplaceholder.typicode.com/posts`, form, {
      'content-type': 'application/json',
    });
  }
}
