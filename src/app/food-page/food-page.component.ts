import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService){
  activatedRoute.params.subscribe((params)=>{
    if(params['id']) this.food = foodService.getFoodById(params['id'])
  })
}
  food!:Food;
}
