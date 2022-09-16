import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../product/product.module';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllProducts2(): Observable<Products[]> {
    return this.http.get<Products[]>(
      this.baseApiUrl + '/api/movies/getproduct/'
    );
  }

  getAllProducts(): any {
    return this.http.get(
      this.baseApiUrl + '/api/movies/getproduct/'
    );
  }

  addProduct(addProductRequest: Products): Observable<Products> {
    return this.http.post<Products>(
      this.baseApiUrl + '/api/movies/createproduct/',
      addProductRequest
    );
  }

  updateProduct(id: number, updateProduct: Products): Observable<Products[]> {
    return this.http.put<Products[]>(
      this.baseApiUrl + '/api/movies/updateproduct/' + (id), updateProduct
    );
  }

  getProduct(id: any): Observable<Products>{
    return this.http.get<Products>(this.baseApiUrl + '/api/movies/getproductbyid?id=' + id);
  }
}

