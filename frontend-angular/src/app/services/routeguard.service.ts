import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor(private userService:UserService,
    private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
    console.log("in routeguard")
    if(this.userService.isUserLoggedIn())
    {
      return true;
    }
    this.router.navigate(['login']);
    
      return false;
  }
}
