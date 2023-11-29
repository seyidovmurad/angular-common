import { Component, Input, OnInit } from '@angular/core';

import { AlertService } from '../../services/alert.service';

export enum MessageType {
	card = 'card',
	modal = 'modal',
}

@Component({
	selector: '<sac-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

	@Input() public messageService: AlertService;
	@Input() public type: MessageType = MessageType.card;
	@Input() public classes="";

	constructor(mainMessageService: AlertService) {
		this.messageService = mainMessageService;
	}

	ngOnInit() {
	}

}
