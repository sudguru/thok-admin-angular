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

  custom_icons = [
    { for: 'Blog', icon: 'chat_bubble' },
    { for: 'Info', icon : 'info' },
  ];

  headerData: any = {
    title: 'Contents',
    backBtn: false,
    edit: false
  };
  newContent: Content;
  contents: Content[];
  constructor(
    private router: Router,
    private contentService: ContentService
  ) { }

  async ngOnInit() {
    this.setNewContent();
    await this.contentService.getContents().subscribe(res => {
      this.contents = res;
      this.contents.forEach(c => {
        c.icon = this.custom_icons.find(s => s.for === c.content_type).icon;
      });
    });
  }

  setNewContent() {
    this.newContent = {
      id: 0,
      title: '',
      slug: '',
      content: '',
      content_type: 'Blog'
    };
  }

  addEdit(content: Content) {
    this.router.navigate(['/content/', JSON.stringify(content)]);
  }

}
