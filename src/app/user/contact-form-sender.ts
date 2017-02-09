/**
 * Created by Lilith on 03/02/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response , RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";


@Injectable()
export class ContactFormSender {

  static PROVIDERS = [
    ContactFormSender

  ];

  constructor(private http: Http) {

  }



  sendFormValue(value: any): Observable<any> {
    //console.log('FORMSENDER IS PROCESSING FORM VALUE: ')

    let headers = new Headers({'Content-Type': 'text'});

    let options = new RequestOptions({headers: headers});

    headers.append("nom", value.nom);
    headers.append("email", value.email);
    headers.append("dev", value.dev);
    headers.append("cours", value.cours);

    //console.log("options ", options);

    return this.http.get('/api/v0/sendMessage', options)
      .map((res:Response) => res)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))

     // .toPromise()
     // .then(this._checkStatus)
     // .catch(this._handleError);

  };

  private _checkStatus(response: Response) {
    console.log('RESPONSE: ', response);
    if (response.status < 200 || response.status >= 300) {
      throw new Error('TODO');
    }
    return response;
  }

  private _handleError(error: any) {
    console.log('ERROR: ', error);
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
