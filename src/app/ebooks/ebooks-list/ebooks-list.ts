import { Component, inject, OnInit } from '@angular/core';
import { IEbook } from '../iebook';
import { EbookService } from '../ebook-service';

@Component({
  selector: 'app-ebooks-list',
  standalone: false,
  templateUrl: './ebooks-list.html',
  styleUrl: './ebooks-list.css'
})
export class EbooksList implements OnInit {
  ebooks : IEbook[] = [];
  //private ebookSrvc = inject(EbookService);

  constructor(private ebookSrvc : EbookService){}

  ngOnInit(): void {
    this.ebooks = this.ebookSrvc.getEbooks();
  }

}
