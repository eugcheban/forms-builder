import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css'],
  template: `
    Bank Name: {{bankName}}
    Account Id: {{id}}
  `
})

export class BankAccountComponent implements OnInit {

  @Input() bankName!: string;
  // this property value is bound to a different property name
  // when this component is instantiated in a template.
  @Input('account-id') id!: string;

  // this property is not bound, and is not automatically updated by Angular
  normalizedBankName!: string;

  constructor() { }

  ngOnInit(): void {

  }

}
