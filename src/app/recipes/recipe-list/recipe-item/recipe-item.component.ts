import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() item : Recipe;
  @Output() selectedRecipeData = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {}

  onRecipeSelect(item: Recipe ){
    console.log(item);
    this.selectedRecipeData.emit(item)
  }

}
