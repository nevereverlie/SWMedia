import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { ShopComponent } from './shop/shop.component';
import { ChatComponent } from './chat/chat.component';
import { FilmsComponent } from './films/films.component';


export const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'shop', component: ShopComponent},
      { path: 'chat', component: ChatComponent},
      { path: 'films', component: FilmsComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
