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
  selectedValue: any;
  filteredValues: any[] = [];
  term: string = ''; 

  constructor(private ass: FoodService){ }

  ngOnInit():void{
    this.foods= this.ass.getAll();
  
}

search(): void {
  // Use the filter method to filter food items based on the term
  if (this.term) {
    this.filteredValues = this.foods.filter(food => food.name.toLowerCase().includes(this.term.toLowerCase()));
  } else {
    this.filteredValues = []; // Clear the filtered list if the search term is empty
  }
}
}
