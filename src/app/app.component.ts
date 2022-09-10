import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "./item";
import { RestService } from "./rest.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  items = [];

  constructor(private service: RestService) {}

  ngOnInit() {
    this.service.getTasks().subscribe((tasks: any) => {
      console.log(tasks);
      this.items = tasks;
    });
  }
}
