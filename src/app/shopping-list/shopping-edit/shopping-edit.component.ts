import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() IngredientsAdded = new EventEmitter<Ingredients>();
  constructor() { }

  onAddItem(){
      let name = this.nameInputRef.nativeElement.value;
    let amount = this.amountInputRef.nativeElement.value;
    let newIng = new Ingredients(name,amount);
    this.IngredientsAdded.emit(newIng)
  }
  ngOnInit(): void {
  }

}
