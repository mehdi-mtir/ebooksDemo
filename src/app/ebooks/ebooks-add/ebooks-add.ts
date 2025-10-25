import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EbookService } from '../ebook-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ebooks-add',
  standalone: false,
  templateUrl: './ebooks-add.html',
  styleUrl: './ebooks-add.css'
})
export class EbooksAdd {

  constructor(private ebookSrvc : EbookService, private router : Router){}

  addEbook(f : NgForm){
    //console.log(f);
    const newEbook = {
      id : this.ebookSrvc.getLastId() + 1,
      title : f.value.title,
      author : f.value.author,
      price : +f.value.price
    }

    this.ebookSrvc.addEbook(newEbook);

    this.router.navigate(['/ebooks']);
  }

}
