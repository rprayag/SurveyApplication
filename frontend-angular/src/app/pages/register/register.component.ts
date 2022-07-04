import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User , UserType} from 'src/app/models/survey';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
 
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
                        UserType.USER
                        );

    this.userService.createUser(user).subscribe(data=>{
      console.log(data);
      if(data===null)
      {
        alert("User already exist. Enter different email")
      }
      else{

        alert("User created")
        this.router.navigate(['login']);

      


      }


      
    })
                        
  }
  
  

}
