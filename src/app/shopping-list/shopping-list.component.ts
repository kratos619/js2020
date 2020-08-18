import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[] = [
    new Ingredients('ing name',20),
    new Ingredients('ing name 1',30),
    new Ingredients('ing name 2',40)
  ]
  constructor() { }
  ingredientsAdded(ingredients: Ingredients){
    this.ingredients.push(ingredients)
  }
  ngOnInit(): void {
  }

}
