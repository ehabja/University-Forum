import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { AddMessageComponent } from './add-message/add-message.component';

const appRoutes: Routes = [
    {path: "home", component: MessagesComponent},
    {path: "addMessage", component: AddMessageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
