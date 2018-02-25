import { Component, OnInit } from '@angular/core';
import {RestarurantService} from "../restaurants/restaurants.service";
import {Restaurant} from "../restaurants/restaurant/Restaurant.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private  restaurantsService: RestarurantService,
              private  route: ActivatedRoute) { }

  restaurant: Restaurant;

  ngOnInit() {
      this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
         .subscribe(restaurant => this.restaurant = restaurant )
  }

}
