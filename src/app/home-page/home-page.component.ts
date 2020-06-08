import { Component, OnDestroy, OnInit } from "@angular/core";
import { IGreeting } from "@common/app.interface";
import { FetchDataService } from "../fetch-data.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit, OnDestroy {
  greeting: IGreeting;

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit() {
    this.fetchDataService.getData().subscribe((greeting: any) => {
      this.greeting = greeting;
    });
  }

  ngOnDestroy() {}
}
