import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../Services/users.service';
import { Users } from '../user/user.module';
declare function responsive(): void;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  user: Users = {
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    password: '',
    data: {},
  };
  
  constructor(
    public route: Router,
    private userService: UsersService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe({
      next: (params) => {
        const id: any = params.get('id');
        console.log(id);
        if (id) {
          
          this.userService.getUser(id).subscribe((res) => {
            console.log(res);
            this.user = res.data;
            console.log(res.data);
          });
        }
      },
    });
    // $('#toggle-menu').click(function (e) {
    //   e.preventDefault();
    //   $('ul').toggleClass('active');
    // });
  }
  onLogout() {
    localStorage.clear();

    Swal.fire({
      title: 'Logout?',
      text: 'Are you sure you want to logout!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log me out!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Confirmed!', 'You have been logged out.', 'success');
        this.route.navigate(['login']);
      }
    });
  }
}
