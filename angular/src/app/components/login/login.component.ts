import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user ={
    email: "",
    password: ""

  
  }

  public Error="";
  public Success="";
  public identity="";
  
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user)
    this.UserService.login(this.user).subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);

      }
    )

  


  }

}
