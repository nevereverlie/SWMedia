import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ChatComponent } from './chat/chat.component';
import { FilmsComponent } from './films/films.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
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

