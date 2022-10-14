import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../user/user.module';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseApiUrl: string = environment.baseApiUrl;
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
}
