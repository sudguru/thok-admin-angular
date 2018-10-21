import { Message } from './../../models/message.model';
import { Router } from '@angular/router';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  headerData: any = {
    title: 'Messagees',
    backBtn: false,
    edit: false
  };
  newMessage: Message;
  messages: Message[];
  constructor(
    private router: Router,
    private pmService: MessageService
  ) { }

  ngOnInit() {
    this.setNewCategory();
    this.pmService.getMessages().subscribe(res => {
      this.messages = res;
    });
  }

  setNewCategory() {
    this.newMessage = {
      id: 0,
      title: '',
      link: '',
      display_order: 0
    };
  }

  addEdit(message: Message) {
    this.router.navigate(['/message/', JSON.stringify(message)]);
  }

}

