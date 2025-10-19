import { Injectable } from '@angular/core';
import { IEbook } from './iebook';

@Injectable({
  providedIn: 'root'
})
export class EbookService {
  private ebooks : IEbook[] = [
    {id : 1, title : "Atomic Habits", author : "James Clear", price : 30},
    {id : 2, title : "The slight edge", author : "Jeff Olsen", price : 25}
  ];

  getEbooks() : IEbook[]{
    return [...this.ebooks];
  }

  //addEbook...

}
