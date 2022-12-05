import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { Users } from '../user/user.module';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css'],
})
export class OffcanvasComponent implements OnInit {
  constructor(
    public route: Router,
    public router: ActivatedRoute,
    private userService: UsersService
  ) {}
  user: Users = {
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    password: '',
    data: {},
  };
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
