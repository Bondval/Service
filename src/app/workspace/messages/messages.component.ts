import { Component, OnInit } from '@angular/core';
import {Info} from "./info";

let Infos : Info[] = [
  {firstName:'Nadin1' , lastName:'Sidorenkova' , message:'1/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},
  {firstName:'Nadin2' , lastName:'Sidorenkova' , message:'2/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},
  {firstName:'Nadin3' , lastName:'Sidorenkova' , message:'3/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},
  {firstName:'Nadin4' , lastName:'Sidorenkova' , message:'4/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},
  {firstName:'Nadin5' , lastName:'Sidorenkova' , message:'5/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},
  {firstName:'Nadin6' , lastName:'Sidorenkova' , message:'6/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},
  {firstName:'Nadin7' , lastName:'Sidorenkova' , message:'7/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},
  {firstName:'Nadin8' , lastName:'Sidorenkova' , message:'8/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},
  {firstName:'Nadin9' , lastName:'Sidorenkova' , message:'9/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},
  {firstName:'Nadin10' , lastName:'Sidorenkova' , message:'10/Hi,thanks for conecting', img:'../../assets/image/img4-100.jpg'},

];

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  InfoList: Info[] = Infos;
  constructor() { }

  ngOnInit() {
  }

}
