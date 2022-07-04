import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  message ="An error occured contact support @ 8889984911"
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}
