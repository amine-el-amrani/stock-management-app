import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDialogComponent  // Déclare le ProductDialogComponent ici
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  // Assure-toi d'inclure HttpClientModule pour les requêtes HTTP
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
