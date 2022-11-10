import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_API = '/service/getDataFromID';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http: HttpClient) {}

  postAllList(url: string) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`${URL_API}`, url, {headers: myHeaders})
  }

}
