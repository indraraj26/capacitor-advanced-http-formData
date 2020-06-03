import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class ApiListingService {
  constructor(private _http: HTTP, private _httpClient: HttpClient) {}

  postSomeData(detail): Promise<any> {
    // const form = new cordova.plugin.http.ponyfills.FormData();
    const form = new FormData();
    for (let key in detail) {
      form.append(key, detail[key]);
    }
    console.log(form, 'formDataforFile');
    // this._http.setDataSerializer('multipart');
    return this._httpClient
      .post('https://jsonplaceholder.typicode.com/posts', form)
      .toPromise();
    // return from(
    //   this._http.get(
    //     `https://jsonplaceholder.typicode.com/postsds`,
    //     {},
    //     {
    //       'content-type': 'application/json',
    //     },
    //   ),
    // )
    //   .pipe(map(data => JSON.parse(data.data)))
    //   .toPromise();
  }
}
