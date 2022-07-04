import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.userService.executeAuthenticationService(this.email, this.password)) {
      this.router.navigate(['admin']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }
  handleLogin2() {
    console.log("1.login funcion");
    console.log(this.userService.executeAuthenticationService2(this.email, this.password));
    this.userService.executeAuthenticationService2(this.email, this.password).subscribe(response => {
      console.log("response is : " + response);
      if (response === "admin")
        this.router.navigate(['admin']);
      else if (response === "user")
        this.router.navigate(['surveys']);
      else if (response === "invalid-password") {
        this.invalidLogin = true;
        this.errorMessage = "Invalid Password";
        this.router.navigate(['login']);
      }
      else if (response === "invalid-user") {
        this.invalidLogin = true;
        this.errorMessage = "Invalid Credentials";
        this.router.navigate(['login']);
      }


    })

  }

  fillLoginFields(u, p) {
    this.email = u;
    this.password = p;

  }
}
