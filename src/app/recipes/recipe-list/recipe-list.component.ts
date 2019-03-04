import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test', 'this is simply a test', 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/4/9/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1428590277050.jpeg'),
    new Recipe('test2', 'this is another test', 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-2-650x975.jpg')
  ];

  constructor() {}

  ngOnInit() {}
}
