import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private productsUrl: string = './api/products/products.json'    

    constructor(private _http: HttpClient) {}
   
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this.productsUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err : HttpErrorResponse) {
        return Observable.throw(err.message) 
    }
}