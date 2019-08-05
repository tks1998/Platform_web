import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component'
import { MainContentComponent } from './main-content/main-content.component'

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: '',
    component: MainContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
