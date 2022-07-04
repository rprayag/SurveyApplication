import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { map } from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  role: string;


  url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  executeAuthenticationService(email, password) {
    console.log(this.isUserLoggedIn())
    if (email === "prayag@gmail.com" && password === '123') {
      sessionStorage.setItem("authenticatedUser", email);
      console.log(this.isUserLoggedIn())

      return true;
    }
    return false;
  }

  executeAuthenticationService2(email, password) {


    let basicAuthHeaderString = 'Basic ' + window.btoa(email + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })



    return this.http.get(
      `${this.url}/login/${email}/${password}`,
      { responseType: 'text' }).pipe(
        map(
          data => {
            console.log("@@@@@@@@@@@@@@@@@@@@@@@");
            console.log(data)
            this.role = data;
            sessionStorage.setItem("authenticatedUser", email);
            sessionStorage.setItem("userRole", data);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );


  }



  createUser(user) {
    console.log(user);

    return this.http.post(
      `${this.url}createNewUser`
      , user);

  }
  isUserLoggedIn() {
    let email = sessionStorage.getItem("authenticatedUser");
    return !(email === null);
  }

  isAdmin() {
    let admin = sessionStorage.getItem("userRole");
    console.log(admin);

    if (admin === "admin")
      return true;
    else
      return false;
  }


  getEmail() {
    return sessionStorage.getItem("authenticatedUser")
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

  


}
