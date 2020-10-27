import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RowComponent } from './row/row.component';
import { ButtonComponent } from './button/button.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NewPlantComponent } from './new-plant/new-plant.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RowComponent,
    ButtonComponent,
    MainComponent,
    FooterComponent,
    NewPlantComponent,
    EditPlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
