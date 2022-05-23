import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CrudComponent } from './pages/crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerUserService } from './services/server-user.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomDatePipe,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, ServerUserService],
  bootstrap: [CrudComponent]
})
export class AppModule { }
