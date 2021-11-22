import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MATERIALS } from './app.material';
import { BuildComponent } from './pages/build/build.component';
import { BuildingComponent } from './pages/building/building.component';
import { HomeComponent } from './pages/home/home.component';
import { BuildingCardComponent } from './components/building-card/building-card.component';
@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    HomeComponent,
    BuildComponent,
    BuildingCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MATERIALS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
