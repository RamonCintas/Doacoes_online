import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MuralComponent } from './mural-doacoes/mural.component';
import { RouterModule } from '@angular/router';
import { PainelComponent1 } from './painel-doacoes1/painel1.component';
import { PainelComponent2 } from './painel-doacoes2/painel2.component';
import { MenuComponent } from './menu-doacoes/menu.component';
import { RodapeComponent } from './rodape-doacoes/rodape.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    MuralComponent,
    PainelComponent1,
    PainelComponent2,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
