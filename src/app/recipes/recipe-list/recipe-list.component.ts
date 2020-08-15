import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('recipe name', 'recipe description', 'https://picsum.photos/200/300'),
    new Recipe('recipe name', 'recipe description', 'https://picsum.photos/200/300'),
    new Recipe('recipe name', 'recipe description', 'https://picsum.photos/200/300'),
    new Recipe('recipe name', 'recipe description', 'https://picsum.photos/200/300'),
  ]
  constructor() {
    console.log(this.recipe);
   }

  ngOnInit(): void {
  }

}
