import {Component, OnInit} from "@angular/core";
import {Restaurant} from "./restaurant/Restaurant.model";
import {RestarurantService} from "./restaurants.service";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  restaurants:Restaurant[];

  constructor(private  restarurantsService:RestarurantService) {
  }

  ngOnInit() {
    this.restarurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
