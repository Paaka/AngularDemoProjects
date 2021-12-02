import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() selectElement = new EventEmitter<Recipe>();
  
  recipes:Recipe[] = [
    new Recipe("Kotlet schabowy","Pyszyny kotlecik","https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg"),
    new Recipe("Kotlet Mielony","Pyszyny mielony","https://kuron.com.pl/wp-content/uploads/2018/03/P3152961.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler(currentRecipe){
    this.selectElement.emit(currentRecipe);
  }


}
