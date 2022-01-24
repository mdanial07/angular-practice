import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';
import { AdduserComponent } from './user/adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdduserComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService
  ],
  entryComponents: [
    AdduserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
