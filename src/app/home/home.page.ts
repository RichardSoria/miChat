import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChatService, Message } from '../services/chat.service';
import { NgIf, NgFor, CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule, FormsModule, NgFor
  ],
})
export class HomePage implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  sender: string = 'User';
  userName: string = 'Richard Mauricio Soria Asanza';
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe(
      res => {
        this.messages = res;
      }
    )
  }
  sendMessages() {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessages(this.newMessage, this.userName).then(() => {
        this.newMessage = '';
      });
    }
  }
}


