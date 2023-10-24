import { Component } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../shared/model/food';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  foods:Foods[]=[];
  term:any;
  selectedValue: any;
  filteredValues: any[] = [];


  search(event: any) {
    // Simulate fetching suggestions from a server or local data
    this.filteredValues = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  }
  constructor(private ass: FoodService){ }

  ngOnInit():void{
    this.foods= this.ass.getAll();
  
}
}
