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

  saveData(){
    window.localStorage.setItem("ebooks", JSON.stringify(this.ebooks))
  }

  getData(){
    const data = window.localStorage.getItem("ebooks");
    if( data != null){
      this.ebooks = JSON.parse(data);
    }
    else{
      this.ebooks = [];
    }
  }

  ebooksChanged = new Subject<IEbook[]>();

  getEbooks() : IEbook[]{
    this.getData();
    return [...this.ebooks];
  }

  getEbookById(id : number) : IEbook | undefined{
    return this.ebooks.find(ebook => ebook.id === id);
  }

  getLastId() : number{
    if(this.ebooks.length>0)
      return this.ebooks[this.ebooks.length - 1].id;
    return 0;
  }

  addEbook(ebook : IEbook){
    this.ebooks = [...this.ebooks, ebook];
    this.saveData()
  }

  editEbook(ebook : IEbook):void{
    this.ebooks = this.ebooks.map(
      e => e.id === ebook.id?ebook:e
    )
    this.saveData();
  }

  deleteEbook(id : number){
    if(confirm("Etes-vous sûre de vouloir supprimer le livre?")){
      this.ebooks = this.ebooks.filter(
        ebook => ebook.id !== id
      )
      this.saveData();
      this.ebooksChanged.next([...this.ebooks]);
    }

  }

}
