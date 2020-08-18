import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipe: Recipe[] = [
    new Recipe('recipe name one', 'recipe description one', 'https://picsum.photos/200/300'),
    new Recipe('recipe name two', 'recipe description two', 'https://picsum.photos/200/300'),
    new Recipe('recipe name three', 'recipe description three', 'https://picsum.photos/200/300'),
    new Recipe('recipe name four', 'recipe description four', 'https://picsum.photos/200/300'),
  ]
  constructor() {}
  selectedRecipeData(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log('selectedRecipeData', recipe);
  }


  ngOnInit(): void {}

}
