import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {
  constructor(private activated:ActivatedRoute){}

  // viewProfile = false;
  
  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  gender = ''
  address = ''

  users:UserProfile[]= []
  matricNo:number = 0

  user:UserProfile = 
    {
      matricNo: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      userType: '',
      address: '',
      password: ''
    }
  
  

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.matricNo = this.activated.snapshot.params['id']
    
    this.users = JSON.parse(localStorage['users']);

    let user = this.users.find((user:UserProfile) => user.matricNo == this.matricNo);


    this.user = user || this.user

    if(user){
      this.firstName = user.firstName
      this.lastName = user.lastName
      this.email = user.email
      this.phone = user.phone
      this.address = user.address
      this.gender = user.gender
    }
  }

  toggleView(): void {
    this.viewProfile = !this.viewProfile; // Toggles the visibility
  }
}
