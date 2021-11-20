import { BuildingComponent } from './pages/building/building.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './pages/build/build.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'build',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'building/:buildingId',
    component: BuildingComponent
  },
  {
    path: 'build',
    component: BuildComponent
  },
  {
    path: 'build/:buildingId',
    component: BuildComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
