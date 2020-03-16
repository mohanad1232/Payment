import { AccountDetailsComponent } from '../account-details/account-details.component';
import { Observable } from "rxjs";
import { AccountService } from "../Account.service";
import { Account } from "../account";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-payment-list",
  templateUrl: "./payment-list.component.html",
  styleUrls: ["./payment-list.component.css"]
})
export class PaymentListComponent implements OnInit {
  accounts: Observable<Account[]>;

  constructor(private accountService: AccountService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accounts = this.accountService.getPayment();
  }



  accountDetails(id: string){
    this.router.navigate(['details', id]);
  }


}
