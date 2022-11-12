import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
  { path: 'cards', component: CardsContainerComponent },
  { path: 'types', component: TypesComponent },
  { path: '**', redirectTo: '/cards', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
