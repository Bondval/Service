import {Component, OnInit} from '@angular/core';
import {Info} from "./info";
import {Msg} from "./messages";

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

let Msgs : Msg[] = [
  {member:true, text:"Valentyn, hello.I'm currently expanding my network of contacts and I'll be very glad if you add me to your contact list.I might be useful to you in the future.Regards, Olga Kozar" },
  {member:false, text:"Valentyn, hello.I'm currently expanding my network of contacts and I'll be very glad if you add me to your contact list.I might be useful to you in the future.Regards, Olga Kozar" },
  {member:false, text:"Valentyn, hello.I'm currently expanding my network of contacts and I'll be very glad if you add me to your contact list.I might be useful to you in the future.Regards, Olga Kozar" },
  {member:true, text:"Valentyn, hello.I'm currently expanding my network of contacts and I'll be very glad if you add me to your contact list.I might be useful to you in the future.Regards, Olga Kozar" },
  {member:false, text:"Valentyn, hello.I'm currently expanding my network of contacts and I'll be very glad if you add me to your contact list.I might be useful to you in the future.Regards, Olga Kozar" },
  {member:false, text:"Valentyn, hello.I'm currently expanding my network of contacts and I'll be very glad if you add me to your contact list.I might be useful to you in the future.Regards, Olga Kozar" },
  {member:true, text:"Valentyn, hello.I'm currently expanding my network of contacts and I'll be very glad if you add me to your contact list.I might be useful to you in the future.Regards, Olga Kozar" },
  {member:true, text:"Valentyn, hello.I'm currently expanding my network of contacts and I'll be very glad if you add me to your contact list.I might be useful to you in the future.Regards, Olga Kozar" }
];

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {
  InfoList: Info[] = Infos;
  MsgList:Msg[] = Msgs;
  public maintext : string;

  // public containermsg = document.getElementById('msgContainer');
  // public containerWidth: number = 300;
  // public pixel: string = this.containerWidth+"px";
  // @HostListener('window:scroll', ['$event'])
  // onResize($event){
  //  let xcords = $event.clientX;
  //  this.containerWidth = this.containerWidth + xcords;
  //  alert(this.pixel)
  // }

  onNewmsg(){
    let msg = this.maintext;
    this.MsgList.push({'member':true, 'text':msg});
    this.maintext ='';
  }
  constructor() { }

  ngOnInit() {
  }

}
