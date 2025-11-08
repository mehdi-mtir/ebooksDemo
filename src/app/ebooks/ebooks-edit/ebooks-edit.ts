import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEbook } from '../iebook';
import { EbookService } from '../ebook-service';

@Component({
  selector: 'app-ebooks-edit',
  standalone: false,
  templateUrl: './ebooks-edit.html',
  styleUrl: './ebooks-edit.css'
})
export class EbooksEdit implements OnInit {
  ebook : IEbook = {
    id : 0,
    title : "",
    author : "",
    price : 0
  };

  constructor(
    private activatedRoute : ActivatedRoute, 
    private service : EbookService,
    private router : Router){}

  editEbook(){
    this.service.editEbook(this.ebook);
    this.router.navigate(['/ebooks']);
  }
  
  
  ngOnInit(): void {
    const id  = this.activatedRoute
                .snapshot.paramMap.get('id');
    const currentBook = this.service.getEbookById(+id!)
    if( currentBook != undefined)
      this.ebook = currentBook;
  }
}
