import { Router } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  headerData: any = {
    title: 'Categories',
    backBtn: false,
    edit: true
  };
  newCategory: Category;
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setNewCategory();
    this.categoryService.getCategories().subscribe(res => this.categories = res);
  }

  setNewCategory() {
    this.newCategory = {
      id: 0,
      category: '',
      description: '',
      banner: '',
      parent_id: 0
    };
  }

  addEdit(category: Category) {
    this.router.navigate(['/category/', JSON.stringify(category)]);
  }

}
