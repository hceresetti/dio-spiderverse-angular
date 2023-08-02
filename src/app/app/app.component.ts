import 'zone.js/dist/zone';
import { Component, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { environment } from '../environments/environment';
import { LayoutComponent } from './app-layout/layout.component';
import { PageComponent } from './app-page/page.component';

if (environment.production) {
	enableProdMode();
}

@Component({
	selector: 'app-main',
	standalone: true,
	providers: [AppModule],
	templateUrl: `src/app.component.html`,
	styleUrls: ['src/app.component.css'],
	imports: [CommonModule, LayoutComponent, PageComponent],
})
export class AppComponent {
	name = 'Main';
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err));
