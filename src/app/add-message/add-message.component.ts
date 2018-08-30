import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from '../../shared/services/messages.service';
import { Router } from '@angular/router';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

    public titleControl: FormControl;
    public messageControl: FormControl;
    private sub: Subscription;
    public messagesForm: FormGroup;
    
    constructor(private messageService: MessageService, private router: Router) { }   

    ngOnInit() {
        this.titleControl = new FormControl("", Validators.required);
        this.messageControl = new FormControl("", Validators.required);

        this.messagesForm = new FormGroup({
            titleControl: this.titleControl,
            messageControl: this.messageControl,
        });
    }

    public addMessage() {
        var msg = new Message(null, this.titleControl.value, this.messageControl.value);
        if(msg.title.trim() != "" || msg.message.trim() != ""){
            this.sub =  this.messageService.addMessageAsync(msg).subscribe();
            window.location.href = "/home";
        }
    }

}
