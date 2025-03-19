import { Component } from '@angular/core';
import { categories } from './category';
import { products } from './product';
import { ProductListComponent } from "./product-list/product-list.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ProductListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
  title = 'online-store';
  categories;
  show = false;
  categoryName = "";
  products = products;
  isCategoryContainerVisible = true;
  constructor() {
    this.categories = categories;
  }
  categoryClick(name:string){
    if(this.categoryName == name){
      this.show = false;
      this.categoryName = "";
    }
    else{
      this.show = true;
      this.categoryName = name;
    }
  }
}
