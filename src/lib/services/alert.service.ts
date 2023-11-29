import { Injectable, inject } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	public message = "";
	public isSuccess = false;
	public isVisible = false;

	private messageObservers: Observer<void>[] = [];
	public onMessageChanged = new Observable<void>(observer => {
		this.messageObservers.push(observer);
	});

	private cancelCallback: Function | null = null;
	private delaySeconds = 10;
	
	private toastr: ToastrService = inject(ToastrService);

	constructor() { }

	// Required MessageComponent
	public setMessage(isSuccess: boolean, message: string, delaySeconds: number): Promise<void> {
		if (delaySeconds == null) {
			delaySeconds = this.delaySeconds;
		}
		if (this.cancelCallback != null) {
			this.cancelCallback();
			this.cancelCallback = null;
		}
		
		this.isVisible = true;
		this.isSuccess = isSuccess;
		this.message = message;
		return new Promise((resolve) => {
			let shouldCancel = false;
			let isCancelling = false;

			this.cancelCallback = () => {
				shouldCancel = true;
			};
			setTimeout(() => {
				if (!shouldCancel && !isCancelling) {
					isCancelling = true;
					this.isVisible = false;
					this.message = '';
					this.isSuccess = false;
					this.cancelCallback = null;
					resolve();
				}
			}, delaySeconds * 1000);
		});
	
	}

	public setToastMessage(isSuccess: boolean, message: string, delaySeconds?: number) {
		if (delaySeconds == null) {
			delaySeconds = this.delaySeconds;
		}

		const title = isSuccess ? 'Success' : 'Error'
		const delay = delaySeconds * 1000;
		
		if(isSuccess) {
			this.toastr.success(message, title, {timeOut: delay});
		}
		else {
			this.toastr.error(message, title, {timeOut: delay});
		}
	}
}
