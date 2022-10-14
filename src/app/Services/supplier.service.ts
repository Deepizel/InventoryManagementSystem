import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Suppliers } from '../supplier/supplier.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}
  
  getAllSuppliers2(): Observable<Suppliers[]> {
    return this.http.get<Suppliers[]>(
      this.baseApiUrl + '/api/movies/getproduct/'
    );
  }

  // getAllProducts(): any {
  //   return this.http.get(this.baseApiUrl + '/api/movies/getproduct/');
  // }

  // addProduct(addProductRequest: Products): Observable<Products> {
  //   return this.http.post<Products>(
  //     this.baseApiUrl + '/api/movies/createproduct/',
  //     addProductRequest
  //   );
  // }

  // updateProduct(id: number, updateProduct: Products): Observable<Products[]> {
  //   return this.http.put<Products[]>(
  //     this.baseApiUrl + '/api/movies/updateproduct/' + id,
  //     updateProduct
  //   );
  // }

  // getProduct(id: any): Observable<Products> {
  //   return this.http.get<Products>(
  //     this.baseApiUrl + '/api/movies/getproductbyid?id=' + id
  //   );
  // }
}
