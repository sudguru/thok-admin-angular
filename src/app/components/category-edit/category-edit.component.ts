import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  headerData: any = {
    title: 'Categories',
    backBtn: true,
    edit: true
  };
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private snackbar: MatSnackBar,
    private router: Router
    ) {
    this.category = JSON.parse(this.route.snapshot.paramMap.get('category'));
    console.log('id is ', this.category.category);
    if (this.category.id === 0) {
      this.headerData.title = `Add New Category`;
    } else {
      this.headerData.title = `Edit Category: ${this.category.category}`;
    }
  }

  ngOnInit() {
  }

  saveCategory(category: Category) {
    this.categoryService.saveCategory(category).subscribe(res => {
      console.log('save', res);
      if (!res.error) {
        this.snackbar.open(`${res.data.category} Saved.`, '', { duration: 3000 });
        this.router.navigate(['/categories']);
      } else {
        this.snackbar.open(`Record could not be Saved !! `, '', { duration: 3000 });
      }
    });
  }

}
