import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 cardData!: TodoData;

 onAdd(){
  
 }

 get getContent(){
   if(this.cardData.data.length===0){
    return true;
   }
   return false;
  }
}
export class TodoData{
  id:number;
  data:string;
  constructor(){
    this.id=0;
    this.data='';
  }
}
