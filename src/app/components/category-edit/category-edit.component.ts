import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  rootCategories: Category[];
  headerData: any = {
    title: 'Categories',
    backBtn: true,
    edit: true
  };
  imagePath = `${environment.apiUrl}/uploads/`;
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
    this.categoryService.getRootCategories().subscribe(res => this.rootCategories = res);
  }

  saveCategory(category: Category) {
    this.categoryService.saveCategory(category).subscribe(res => {
      console.log('save', res);
      if (!res.error) {
        this.snackbar.open(`${category.category} Saved.`, '', { duration: 3000 });
        this.router.navigate(['/categories']);
      } else {
        this.snackbar.open(`Record could not be Saved !! `, '', { duration: 3000 });
      }
    });
  }

  deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${res.data} record(s) Deleted.`, '', { duration: 3000 });
        this.router.navigate(['/categories']);
      } else {
        this.snackbar.open(`Record could not be Deleted !! `, '', { duration: 3000 });
      }
    });
  }

  chooseFile() {
    document.getElementById('myFile').click();
  }

  prepareFile(event, id) {
    const file = event.target.files[0];
    const filename = file.name;
    console.log(filename);
    const reader = new FileReader();
    const that = this;
    reader.onloadend = function () {
      const imageDataURL = reader.result;
      that.categoryService.uploadImage(id, imageDataURL, filename).subscribe(res => {
        if (!res.error) {
          that.category.banner = res.data;
          that.snackbar.open(`${res.data} uploaded Successfully.`, '', { duration: 3000 });
        } else {
          that.snackbar.open(`${res.error}`, '', { duration: 3000 });
        }
      });
    };
    reader.readAsDataURL(file);

  }
}
