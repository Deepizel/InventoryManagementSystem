import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../user/user.module';
import { Staff } from '../staff/staff.module';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseApiUrl: string = environment.baseApiUrl;
  public userKey: string ='user';
  userDetails: any;
  
  constructor(private http: HttpClient) {}

  addUser(addUserRequest: Users): Observable<Users> {
    return this.http.post<Users>(
      this.baseApiUrl + '/api/movies/createuser/',
      addUserRequest
    );
  }

  getUser(id: any): Observable<Users> {
    console.log(id);
    return this.http.get<Users>(
      this.baseApiUrl + '/api/movies/getuser?id=' + id
    );
  }

  getStaff(id: any): Observable<Staff> {
    console.log(id);
    return this.http.get<Staff>(
      this.baseApiUrl + '/api/movies/getuser?id=' + id
    );
  }
  private setUserLocalStorage(user: Users){
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  private getUserFromLocalStorage(user: Users ){
    localStorage.getItem(this.userKey);
  }
}
