import { Content } from './../../models/content.model';
import { Router } from '@angular/router';
import { ContentService } from './../../services/content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  headerData: any = {
    title: 'Contents',
    backBtn: false,
    edit: true
  };
  newContent: Content;
  contents: Content[];
  constructor(
    private router: Router,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.setNewCategory();
    this.contentService.getContents().subscribe(res => {
      this.contents = res;
    });
  }

  setNewCategory() {
    this.newContent = {
      id: 0,
      title: '',
      slug: '',
      content: ''
    };
  }

  addEdit(content: Content) {
    this.router.navigate(['/content/', JSON.stringify(content)]);
  }

}
