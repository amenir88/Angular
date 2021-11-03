import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {
  myForm : FormGroup;
  @Input() invoiceToEdit : Invoice;
  @Input() prop2 : Invoice;
  @Output() edited = new EventEmitter<Invoice>();
  constructor() { }

  ngOnInit(): void {
    console.log("nouvelle instance");
    this.myForm=new FormGroup({
      idInvoice:new FormControl({"value":this.invoiceToEdit.idInvoice, "disabled":true}),
      dateBill:new FormControl(this.invoiceToEdit.dateBill, Validators.required),
      discountAmount: new FormControl(this.invoiceToEdit.discountAmount),
      Status:new FormControl(this.invoiceToEdit.Status),
      billAmount:new FormControl(this.invoiceToEdit.billAmount)
    })
  }

  ngOnChanges(changes:SimpleChanges){
   /* this.myForm=new FormGroup({
      idInvoice:new FormControl(this.invoiceToEdit.idInvoice),
      dateBill:new FormControl(this.invoiceToEdit.dateBill),
      discountAmount: new FormControl(this.invoiceToEdit.discountAmount),
      Status:new FormControl(this.invoiceToEdit.Status),
      billAmount:new FormControl(this.invoiceToEdit.billAmount)
    })*/
    console.log(changes);
    if(!changes.invoiceToEdit.firstChange){
    this.myForm.setControl('idInvoice',new FormControl(this.invoiceToEdit.idInvoice));
    this.myForm.setControl('dateBill',new FormControl(this.invoiceToEdit.dateBill));
    this.myForm.setControl('billAmount',new FormControl(this.invoiceToEdit.billAmount));
    this.myForm.setControl('discountAmount',new FormControl(this.invoiceToEdit.discountAmount));
    this.myForm.setControl('Status',new FormControl(this.invoiceToEdit.Status));
  }
  }
  edit(){
    console.log(this.myForm.getRawValue());
    this.edited.emit(this.myForm.getRawValue());
    this.myForm.reset();
  }
}
