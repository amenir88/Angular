import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {
   show=false;
  @Input() invoiceToEdit:Invoice;
  constructor() { }
  myForm:FormGroup;
  ngOnInit(): void {
    this.myForm=new FormGroup({
      idInvoice:new FormControl(this.invoiceToEdit.idInvoice),
      discountAmount: new FormControl(),
      billAmount: new FormControl(),
      dateBill: new FormControl(),
      status: new FormControl(),
    })
  }
  add(){

  }
}
