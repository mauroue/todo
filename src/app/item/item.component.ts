import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Item } from "../item";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
  editable = false;
  visibility: boolean;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(title) {
    if (!title) return;
    this.editable = false;
    this.item.title = title;
    this.visibility = false;
  }

  constructor() {}

  ngOnInit() {}
}
