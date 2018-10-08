
import { ContentService } from './../../services/content.service';
import { Content } from './../../models/content.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


import Quill from 'quill';


@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.css']
})
export class ContentEditComponent implements OnInit {

  modules = {};
  content: Content;
  headerData: any = {
    title: 'Content',
    backBtn: true,
    edit: true
  };

  constructor(
    private route: ActivatedRoute,
    private pmService: ContentService,
    private snackbar: MatSnackBar,
    private router: Router
    ) {
    this.content = JSON.parse(this.route.snapshot.paramMap.get('content'));
    this.content.content = this.rhtmlspecialchars(this.content.content );
    if (this.content.id === 0) {
      this.headerData.title = `Add New Content`;
    } else {
      this.headerData.title = `Edit: ${this.content.title}`;
    }
    this.modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],        // toggled buttons
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          ['link', 'image', 'video']                         // link and image, video
        ]
    };
  }


  ngOnInit() {
  }

  saveContent(content: Content) {
    content.slug = this.slugify(content.title);
    this.pmService.saveContent(content).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${content.title} Saved.`, '', { duration: 3000 });
        this.router.navigate(['/contents']);
      } else {
        console.log(res.error);
        this.snackbar.open(`Record could not be Saved !! `, '', { duration: 3000 });
      }
    });
  }

  deleteContent(content: Content) {
    this.pmService.deleteContent(content).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${res.data} record(s) Deleted.`, '', { duration: 3000 });
        this.router.navigate(['/contents']);
      } else {
        this.snackbar.open(`Record could not be Deleted !! `, '', { duration: 3000 });
      }
    });
  }

  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  rhtmlspecialchars(str) {
    if (typeof(str) === 'string') {
     str = str.replace(/&gt;/ig, '>');
     str = str.replace(/&lt;/ig, '<');
     str = str.replace(/&#039;/g, '\'');
     str = str.replace(/&quot;/ig, '"');
     str = str.replace(/&amp;/ig, '&'); /* must do &amp; last */
     }
    return str;
    }
}
