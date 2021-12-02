import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/components/recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes:Recipe[] = [
    new Recipe("Kotlet schabowy","Pyszyny kotlecik","https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg"),
    new Recipe("Kotlet Mielony","Pyszyny mielony","https://kuron.com.pl/wp-content/uploads/2018/03/P3152961.jpg"),
  ];

  public get Recipes(){
    return this.recipes;
  }


  constructor() { }
}
