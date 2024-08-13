import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './organisms/home/home.component';
import { LinkFormComponent } from './components/link-form/link-form.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LinkService } from './services/link.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkFormComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
