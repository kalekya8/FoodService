import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
 

  constructor() { }
  getAll(){
    return[
      {
        id:1,
        name: 'pancakes',
        favorite: false,
        price:'10',
        cooktime:'10-15',
        ImageUrl:'assets/food1.jpeg',
        rating: '4.6',
        deliverytime:'25-30'
      },
      {
        id:2,
        name: 'sandwich',
        favorite: false,
        price:'12',
        cooktime:'10-15',
        ImageUrl:'/assets/food2.jpeg',
        rating: '4.3',
        deliverytime:'20-30'
      },
      {
        id:3,
        name: 'ice cream sandwich',
        favorite: false,
        price:'6',
        cooktime:'5-10',
        ImageUrl:'/assets/food3.jpeg',
        rating: '4.8',
        deliverytime:'10-15'
      },
      {
        id:4,
        name: 'Cheese Pizza',
        favorite: false,
        price:'15',
        cooktime:'20-30',
        ImageUrl:'/assets/food4.jpeg',
        rating: '4.5',
        deliverytime:'35-45'
      },
      {
        id:5,
        name: 'ice cream',
        favorite: false,
        price:'10',
        cooktime:'10-15',
        ImageUrl:'/assets/food5.jpeg',
        rating: '4.6',
        deliverytime:'25-30'
      },
      {
        id:6,
        name: 'Veg Pizza',
        favorite: false,
        price:'18',
        cooktime:'20-30',
        ImageUrl:'/assets/food6.jpeg',
        rating: '4.6',
        deliverytime:'30-40'
      },
      {
        id:7,
        name: 'Shakes',
        favorite: false,
        price:'10',
        cooktime:'10-15',
        ImageUrl:'/assets/food7.jpeg',
        rating: '4.2',
        deliverytime:'25-30'
      },
      {
        id:8,
        name: 'Chicken Biryani',
        favorite: false,
        price:'22',
        cooktime:'30-40',
        ImageUrl:'/assets/food8.jpeg',
        rating: '4.9',
        deliverytime:'40-50'
      },
      {
        id:9,
        name: 'Mutton Biryani',
        favorite: false,
        price:'25',
        cooktime:'35-45',
        ImageUrl:'/assets/food9.jpeg',
        rating: '5.0',
        deliverytime:'40-50'
      }
    ]
  
}
}
