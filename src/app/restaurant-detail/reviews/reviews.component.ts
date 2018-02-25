import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {RestarurantService} from "../../restaurants/restaurants.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantsService:RestarurantService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
      .subscribe(res => this.reviews = res)
  }

}
