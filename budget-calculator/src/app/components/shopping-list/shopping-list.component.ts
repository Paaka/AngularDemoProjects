import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Imbir",10),
    new Ingredient("Czosnek", 5),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddingIngredient(ingredient: Ingredient):void{
    this.ingredients.push(ingredient);
  }

}
