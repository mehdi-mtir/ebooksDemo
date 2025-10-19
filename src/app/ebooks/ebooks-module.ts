import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbooksRoutingModule } from './ebooks-routing-module';
import { EbooksList } from './ebooks-list/ebooks-list';
import { EbooksAdd } from './ebooks-add/ebooks-add';
import { EbooksEdit } from './ebooks-edit/ebooks-edit';


@NgModule({
  declarations: [
    EbooksList,
    EbooksAdd,
    EbooksEdit
  ],
  imports: [
    CommonModule,
    EbooksRoutingModule
  ]
})
export class EbooksModule { }
