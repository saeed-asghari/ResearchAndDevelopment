import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import{ jqxDockingComponent } from 'jqwidgets-ng/jqxdocking';           

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css'],
})
export class WindowsComponent {
  @ViewChild('window', { static: false }) window:
    | jqxWindowComponent
    | undefined;

    width: number = 800;
  constructor() {}
  ngAfterViewInit(): void {
    this.window?.focus();
  }
  showWindowButtonClick(): void {
    this.window?.open();
  }
  getWidth() : any {
		if (document.body.offsetWidth < 700) {
			return '90%';
		}
		
		return 700;
	}
  ngOnDestroy() {
   this.window?.destroy();
  }
}
