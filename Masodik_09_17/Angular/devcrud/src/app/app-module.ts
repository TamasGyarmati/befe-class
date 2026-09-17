import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navigation } from './navigation/navigation';
import { Footer } from './footer/footer';
import { List } from './list/list';
import { Create } from './create/create';
import { Edit } from './edit/edit';

@NgModule({
  declarations: [App, Navigation, Footer, List, Create, Edit],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
