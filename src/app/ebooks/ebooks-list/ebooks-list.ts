import { Component, inject, OnInit } from '@angular/core';
import { IEbook } from '../iebook';
import { EbookService } from '../ebook-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ebooks-list',
  standalone: false,
  templateUrl: './ebooks-list.html',
  styleUrl: './ebooks-list.css'
})
export class EbooksList implements OnInit {
  ebooks : IEbook[] = [];
  //private ebookSrvc = inject(EbookService);

  constructor(
    private ebookSrvc : EbookService,
    private router : Router){}

  deleteEbook(id : number){
    this.ebookSrvc.deleteEbook(id);
    this.router.navigate(['/ebooks'])
  }

  ngOnInit(): void {
    this.ebooks = this.ebookSrvc.getEbooks();
    this.ebookSrvc.ebooksChanged.subscribe(
      (ebooks)=>this.ebooks = ebooks
    )
  }

}
