import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  
  recipes:Recipe[] = [
    new Recipe("Kotlet schabowy","Pyszyny kotlecik","https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
