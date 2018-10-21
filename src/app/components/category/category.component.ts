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
    edit: false
  };
  newCategory: Category;
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setNewCategory();
    this.categoryService.getCategories().subscribe(res => {
      this.categories = this.list_to_tree(res);
    });
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

  list_to_tree(list) {
    console.log(list);
    const map = {}, roots = [];
    let node, i;
    for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parent_id !== 0) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parent_id]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    console.log(roots);
    return roots;
  }

}
