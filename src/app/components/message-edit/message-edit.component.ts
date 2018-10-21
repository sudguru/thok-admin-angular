import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {



  message: Message;
  headerData: any = {
    title: 'Messages',
    backBtn: true,
    edit: true,
  };

  constructor(
    private route: ActivatedRoute,
    private pmService: MessageService,
    private snackbar: MatSnackBar,
    private router: Router
    ) {
    this.message = JSON.parse(this.route.snapshot.paramMap.get('message'));
    if (this.message.id === 0) {
      this.headerData.title = `Add New Message`;
      this.headerData.edit = false;
    } else {
      this.headerData.title = `Edit Message: ${this.message.title}`;
    }
  }

  ngOnInit() {
  }

  saveMessage(message: Message) {
    this.pmService.saveMessage(message).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${message.title} Saved.`, '', { duration: 3000 });
        this.router.navigate(['/message']);
      } else {
        this.snackbar.open(`Record could not be Saved !! `, '', { duration: 3000 });
      }
    });
  }

  deleteMessage(message: Message) {
    this.pmService.deleteMessage(message).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${res.data} record(s) Deleted.`, '', { duration: 3000 });
        this.router.navigate(['/message']);
      } else {
        this.snackbar.open(`Record could not be Deleted !! `, '', { duration: 3000 });
      }
    });
  }

  checkAndDelete(event) {
    if (event) {
      this.deleteMessage(this.message);
    }
  }


}
