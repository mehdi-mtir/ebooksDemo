import { enableProfiling, Injectable } from '@angular/core';
import { IEbook } from './iebook';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EbookService {
  private ebooks : IEbook[] = [
    {id : 1, title : "Atomic Habits", author : "James Clear", price : 30},
    {id : 2, title : "The slight edge", author : "Jeff Olsen", price : 25}
  ];

  ebooksChanged = new Subject<IEbook[]>();

  getEbooks() : IEbook[]{
    return [...this.ebooks];
  }

  getEbookById(id : number) : IEbook | undefined{
    return this.ebooks.find(ebook => ebook.id === id);
  }

  getLastId() : number{
    return this.ebooks[this.ebooks.length - 1].id
  }

  addEbook(ebook : IEbook){
    this.ebooks = [...this.ebooks, ebook]
  }

  editEbook(ebook : IEbook):void{
    this.ebooks = this.ebooks.map(
      e => e.id === ebook.id?ebook:e
    )
  }

  deleteEbook(id : number){
    if(confirm("Etes-vous sûre de vouloir supprimer le livre?")){
      this.ebooks = this.ebooks.filter(
        ebook => ebook.id !== id
      )
      console.log(this.ebooks);
      this.ebooksChanged.next([...this.ebooks]);
    }
  }

}
