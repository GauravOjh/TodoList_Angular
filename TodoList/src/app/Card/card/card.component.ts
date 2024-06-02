import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { todoData } from '../../models/todoData';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from '../../services/card.service';
import { response } from 'express';
import { Subscription } from 'rxjs';

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
export class CardComponent implements OnInit,OnDestroy {
  cardData!:todoData;
 isDataVisible:boolean=false;
 dataSubscription?:Subscription;
 cardDataList!:todoData[];

 constructor(private todoService : CardService){
  this.cardData={
    data:''
  }
 }
  ngOnInit(): void {
    this.todoService.getTododata().subscribe(response=>{
      this.cardDataList=response;
    })
  }
 onAdd(taskform:NgForm){
  if (this.cardDataList.length >= 5) {
    alert('Maximum limit of 5 tasks reached.');
    return;
  }
   this.dataSubscription=this.todoService.addTododata(this.cardData).subscribe(response=>{
    this.cardDataList?.push({
      data:taskform.controls['task'].value,
    });
    this.cardData.data=''  
   })

   
   
 }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
}
