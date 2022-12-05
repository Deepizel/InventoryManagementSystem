import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-sidebar',
  templateUrl: './staff-sidebar.component.html',
  styleUrls: ['./staff-sidebar.component.css'],
})
export class StaffSidebarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

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
        Swal.fire('Deleted!', 'You have been logged out.', 'success');
        this.route.navigate(['login']);
      }
    });
  }
}
