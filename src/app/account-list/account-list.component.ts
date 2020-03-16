import { AccountDetailsComponent } from '../account-details/account-details.component';
import { Observable } from "rxjs";
import { AccountService } from "../Account.service";
import { Account } from "../account";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.css"]
})
export class AccountListComponent implements OnInit {
  accounts: Observable<Account []>;

  constructor(private accountService: AccountService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accounts = this.accountService.getAccountsList();
  }


  accountDetails(id: string){
    this.router.navigate(['details', id]);
  }

}
