import {Component, Input} from '@angular/core';

declare var require: any;

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.html',
	styles: [require('./toolbar.scss')]
})
export  class ToolbarComponent {
	
	@Input() title: string;
 }