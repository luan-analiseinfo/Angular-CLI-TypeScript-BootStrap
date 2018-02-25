import {Restaurant} from "./restaurant/Restaurant.model";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {API} from "../app.api";
import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ErrorHandler} from "../app.error-handler";
import {MenuItem} from "../restaurant-detail/menu-item/menu-item.model";

/**
 * Created by luana on 24/02/2018.
 */
@Injectable()
export class RestarurantService{

  constructor(private http: Http){

  }

  restaurants(): Observable<Restaurant[]>{
    return this.http.get(`${API}/restaurants`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantById(id: string):Observable<Restaurant>{
    return this.http.get(`${API}/restaurants/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfRestaurant(id: string):Observable<any>{
    return this.http.get(`${API}/restaurants/${id}/reviews`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get(`${API}/restaurants/${id}/menu`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }
}
