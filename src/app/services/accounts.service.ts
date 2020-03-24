import { LogginService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];
    statusUpdated = new EventEmitter<string>();

    constructor(private logginService: LogginService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.logginService.logStatusConsole(status);
    }

    updateState(id: string, status: string) {
        this.accounts[id].status = status;
        this.logginService.logStatusConsole(status);
    }
}