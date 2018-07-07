import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SubscriptionService } from './subscription.service';

@Injectable()
export class RestrictService implements CanActivate {

  constructor(private subscriptionService:SubscriptionService) { }
  canActivate() {
    if (this.subscriptionService.getSubscriptionStatus()) {
      return true;
    } else {
      alert("Hey I am restricting you to get access to contacts, please subscribe first");
      return false;
}
  }

}
