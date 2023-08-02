import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { PageComponent } from './app-page/page.component';
import { LayoutComponent } from './app-layout/layout.component';

@NgModule({
	declarations: [],
	imports: [AppComponent, PageComponent, LayoutComponent],
	providers: [],
	bootstrap: [],
})
export class AppModule {}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err));
