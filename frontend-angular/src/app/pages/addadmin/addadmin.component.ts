import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserType, User } from 'src/app/models/survey';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;


  constructor(private userService:UserService,
    private router: Router) { }

  ngOnInit()
  {

    this.registerForm= new FormGroup(
      {
      "firstName":new FormControl("",[Validators.required]),
      "lastName": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required,Validators.email]),
      "password": new FormControl("", [Validators.required]),      
      }
    )

  }
  get f() { return this.registerForm.controls; }

  onSubmit()
  {
console.log("asd");

    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    let user = new User(this.f.firstName.value,
                        this.f.lastName.value,
                        this.f.email.value,
                        this.f.password.value,
                        UserType.ADMIN
                        );

    this.userService.createUser(user).subscribe(data=>{
      console.log(data);
      if(data===null)
      {
        alert("ADMIN already exist. Enter different email")
      }
      else{

        alert("Admin added")
        this.router.navigate(['admin']);

      


      }


      
    })
                        
  }

}
