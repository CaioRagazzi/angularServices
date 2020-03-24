import { Component, Input } from '@angular/core';
import { LogginService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogginService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private logginService: LogginService, private accountService: AccountsService) { }

  onSetTo(status: string) {
    this.accountService.updateState(this.id.toString(), status);
    // this.logginService.logStatusConsole(status);
    this.accountService.statusUpdated.emit(status);
  }
}
