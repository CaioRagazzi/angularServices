import { Component } from '@angular/core';
import { LogginService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogginService]
})
export class NewAccountComponent {

  constructor(private logginService: LogginService, private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe((status: string) => {
      alert('new status' + status)
    })
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.logginService.logStatusConsole(accountStatus);
  }
}
