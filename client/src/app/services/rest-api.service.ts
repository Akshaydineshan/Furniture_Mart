import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    const token = localStorage.getItem("token")
    return token ? new HttpHeaders().append("auth-head", token) : undefined;

  }

  post(link: string, body: any) {

    return this.http.post(link, body).toPromise()

  }

  put(link: string, body: any) {
    console.log(link, body);


    return this.http.put(link, body, { headers: this.getHeaders() }).toPromise()

  }

  get(link: string) {


    return this.http.get(link, { headers: this.getHeaders() }).toPromise()
  }

  delete(link: string) {
    return this.http.delete(link, { headers: this.getHeaders() }).toPromise()
  }
}
