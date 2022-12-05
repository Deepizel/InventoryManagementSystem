import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { Staff } from '../staff/staff.module';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css'],
})
export class StaffDashboardComponent implements OnInit {
  staff: Staff = {
    id : 0,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  updatedOn: "",
  data: {},
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params: { get: (arg0: string) => any }) => {
        const id: any = params.get('id');
        console.log(id);
        if (id) {
          this.userService.getStaff(id).subscribe((res) => {
            console.log(res);
            this.staff = res.data;
          });
        }
      },
    });
  }
}
