import { Message } from "../models/message.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class MessageService{

    constructor(private httpClient: HttpClient){}

    public getMessagesAsync(): Observable<Message[]> {
        return this.httpClient.get("http://localhost:3000/messages")
            .do(messages => console.log(messages))
            .map((messages: Object) => <Message[]>messages);
    }

    public addMessageAsync(message): Observable<Message[]>{

        return this.httpClient.post("http://localhost:3000/messages",message).map((messages:Message[])=>messages);

    }
}