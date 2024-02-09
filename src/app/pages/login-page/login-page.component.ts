import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserProfile } from '../../models/user';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private router:Router){}

  isSuccess = false
  isError = false
  isLoading = false
  message = ''
  email = ''
  password = ''
  isAdmin = true

  onSubmit() {
    const userExists = localStorage['users'] ? JSON.parse(localStorage['users']).find((student:UserProfile) => (student.password === this.password && student.email == this.email)) : false
  
    if(userExists){
      this.showAlert('Login successful', 'success')
      if(userExists.userType === 'admin'){
        localStorage.setItem('isAdmin',JSON.stringify(this.isAdmin))
      }
      setTimeout(() => {

        userExists.userType === 'student' ? (
        // this.router.navigate([`/dashboard/${userExists.matricNo}`])
        this.router.navigate(['/'])
        ) : (
        this.router.navigate(['/admin'])
        )
      }, 2000)
    }  else {
      this.showAlert('Invalid username or password', 'error')
    }
  }
  
  
  showAlert(msg:string, status:string) {
  
    if(status === 'success'){
      this.isSuccess = true
      this.message = msg
    } else {
      this.isError = true
      this.message = msg
    }
  
  
    setTimeout(() => {
      this.isSuccess = false
      this.isError = false
      this.message = ''
    }, 2000)
  }
}
