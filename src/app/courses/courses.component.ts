import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../google-analytics.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  SendAddToCartEvent() {
    this
      .googleAnalyticsService
      .eventEmitter("add_to_cart", "shop", "cart", "click", 10);
  }

}
