import { Component } from '@angular/core';
@Component({
selector: 'app-log',
templateUrl: './log.component.html',
styleUrls: ['./log.component.css']})
export class LogComponent {
title = 'Log Form';
displayemail='';
getValue(email:string){
this.displayemail=email;}}
