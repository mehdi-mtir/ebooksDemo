import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbooksRoutingModule } from './ebooks-routing-module';
import { EbooksList } from './ebooks-list/ebooks-list';
import { EbooksAdd } from './ebooks-add/ebooks-add';
import { EbooksEdit } from './ebooks-edit/ebooks-edit';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EbooksList,
    EbooksAdd,
    EbooksEdit
  ],
  imports: [
    CommonModule,
    EbooksRoutingModule,
    FormsModule
  ]
})
export class EbooksModule { }
