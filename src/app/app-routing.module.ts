import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

const routes: Routes = [
  { path: '', component: HeroCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
