import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ROUTES} from "./app.routes";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import {RestarurantService} from "./restaurants/restaurants.service";
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {MenuComponent} from "./restaurant-detail/menu/menu.component";
import {MenuItemComponent} from "./restaurant-detail/menu-item/menu-item.component";
import {ShoppingCardComponent} from "./restaurant-detail/shopping-card/shopping-card.component";
import {ReviewsComponent} from "./restaurant-detail/reviews/reviews.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCardComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestarurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
