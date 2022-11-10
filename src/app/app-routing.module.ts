import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsContainerComponent } from './cards-container/cards-container.component';

const routes: Routes = [
  { path: 'cards', component: CardsContainerComponent },
  { path: '**', redirectTo: '/cards', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
