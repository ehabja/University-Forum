import { Component, OnInit } from '@angular/core';
import { Message } from '../../shared/models/message.model';
import { Subscription } from 'rxjs';
import { MessageService } from '../../shared/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    public message: Message[];
    private subscription: Subscription;
    
    constructor(private messageService: MessageService) { }   

    ngOnInit() {
        this.subscription = this.messageService.getMessagesAsync()
                                .subscribe(message => this.message = message);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
