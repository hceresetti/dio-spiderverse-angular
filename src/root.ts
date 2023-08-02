import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { PageComponent } from './app/app-page/page.component';
import { LayoutComponent } from './app/app-layout/layout.component';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './index.html',
	styleUrls: ['./globals.scss'],
	imports: [CommonModule, PageComponent, LayoutComponent],
})
export class App implements OnInit {
	name: string = 'Root';

	ngOnInit() {}
}

bootstrapApplication(App);
