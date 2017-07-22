import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent {
  private stats = [["Odigranih tipova", 15],
    ["Pogođenih tipova", 12],
    ["Procenat uspešnosti", "75%"],
    ["Profit", 20]
  ]
}
