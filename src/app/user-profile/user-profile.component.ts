import { Component, OnInit } from '@angular/core';
import{Signup} from '../email';
import{User} from '../user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = {

    name : 'Doe',

    firstName : 'John',
    age : 25,
    quote : "",
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg' 
  };

  toggle_text() {
    var span = document.getElementById("span_txt");
    if(span.innerHTML != "") {
      span.innerHTML = "";
    } else {
      span.innerHTML = "Age :25";
    }
  }
  texte : Signup = {
    phrase : "",
  };
  constructor() {this.user.photo = 'https://randomuser.me/api/portraits/lego/2.jpg' }

  ngOnInit() {
  };

}
