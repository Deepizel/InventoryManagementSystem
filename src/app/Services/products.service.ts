import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../login/login.module';
import { Products } from '../product/product.module';
import { Sale } from '../sale/sale.module';
import { Staff } from '../staff/staff.module';
import { Users } from '../user/user.module';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public userKey: string = 'user';
  baseApiUrl: string = environment.baseApiUrl;
  GlobalUser: any;

  constructor(private http: HttpClient) {}

  getAllProducts2(): Observable<Products[]> {
    return this.http.get<Products[]>(
      this.baseApiUrl + '/api/movies/getproduct/'
    );
  }

  getAllProducts(): any {
    return this.http.get(this.baseApiUrl + '/api/movies/getproduct/');
  }

  addProduct(addProductRequest: Products): Observable<Products> {
    return this.http.post<Products>(
      this.baseApiUrl + '/api/movies/createproduct/',
      addProductRequest
    );
  }

  updateProduct(id: any, updateProduct: Products): Observable<Products> {
    return this.http.put<Products>(
      this.baseApiUrl + '/api/movies/updateproduct/?id' + id,
      updateProduct
    );
  }

  getProduct(id: any): Observable<Products> {
    return this.http.get<Products>(
      `${this.baseApiUrl}/api/movies/getproductbyid?id=${id}`
    );
  }

  deleteProduct(id: number): Observable<Products> {
    return this.http.delete<Products>(
      this.baseApiUrl + '/api/movies/deleteproducts/' + id
    );
  }

  loginUser(loginUserRequest: Login): Observable<Login> {
    return this.http
      .post<Login>(this.baseApiUrl + '/api/movies/login', loginUserRequest)
      .pipe(
        map((data) => {
          this.GlobalUser = data; // console.log(data);
          this.setUserLocalStorage(this.GlobalUser);
          return data;
        })
        // catchError(this.handleError)
      );
  }

  private setUserLocalStorage(user: Users) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  private getUserFromLocalStorage(user: Users) {
    localStorage.getItem(this.userKey);
  }

  //  Staff section
  addStaff(addStaffRequest: Staff): Observable<Staff> {
    return this.http.post<Staff>(
      this.baseApiUrl + '/api/movies/CreateStaff/',
      addStaffRequest
    );
  }

  stafflogin(loginUserRequest: Login): Observable<Login> {
    return this.http.post<Login>(
      this.baseApiUrl + '/api/movies/stafflogin',
      loginUserRequest
    );
  }

  //SALES
  addSale(addSaleRequest: Products): Observable<Sale> {
    return this.http.post<Sale>(
      this.baseApiUrl + '/api/movies/createproduct/',
      addSaleRequest
    );
  }
  
  getSales(): any {
    return this.http.get(this.baseApiUrl + '/api/movies/getallsales/');
  }
}
