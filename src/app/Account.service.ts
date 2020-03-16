import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private addaccount = 'http://localhost:8080/payments-system/account/add';
  private getaccount = 'http://localhost:8080/payments-system/account';
  private getpayment = 'http://localhost:8080/payments-system/payment';
  private addpayment = 'http://localhost:8080/payments-system/payment/add';
 
  constructor(private http: HttpClient) { }

  getAccount(id: string): Observable<any> {
    return this.http.get(`${this.getaccount}/${id}`);
  }
  getpaymentlist(id: string): Observable<any> {
    return this.http.get(`${this.getpayment}/${id}`);
  }
  createAccount(account: Object): Observable<Object> {
    return this.http.post(`${this.addaccount}`, account);
  }


  getAccountsList(): Observable<any> {
    return this.http.get(`${this.getaccount}`);
  }
  getAccountsList1(): Observable<any> {
    return this.http.get(`${this.getpayment}`);
  }

  getPayment(): Observable<any> {
    return this.http.get(`${this.getpayment}`);
  }
  createPayment(Payment: Object): Observable<Object> {
    return this.http.post(`${this.addpayment}`, Payment);
  }
}
export class PaymentService {

  private baseadd = 'http://localhost:8080/payments-system/payment/add';
 
  constructor(private http: HttpClient) { }

 
  createPayment(Payment: Object): Observable<Object> {
    return this.http.post(`${this.baseadd}`, Payment);
  }
}