import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingComponent } from './pages/building/building.component';
import { HomeComponent } from './pages/home/home.component';
import { BuildComponent } from './pages/build/build.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIALS } from './app.material';
@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    HomeComponent,
    BuildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MATERIALS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
