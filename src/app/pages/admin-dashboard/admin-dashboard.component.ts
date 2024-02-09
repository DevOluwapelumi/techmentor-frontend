import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserProfile } from '../../models/user';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  constructor(private activated:ActivatedRoute, private router:Router){}

  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  gender = ''
  address = ''

  

  users: UserProfile[] = []

  ngOnInit() {
   this.getUser()
  }

  getUser(){
    if(localStorage['users']) {
      this.users = JSON.parse(localStorage['users'])
    }
  }

  onDelete(matricNo:number): void {
    if(window.confirm('Are you sure you want to delete this')){
      const newUsers =  this.users.filter((user:UserProfile) => user.matricNo != matricNo)
  
      localStorage.setItem('users', JSON.stringify(newUsers))
      this.getUser()
    }
  }


}
