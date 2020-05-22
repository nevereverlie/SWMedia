import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { ShopComponent } from './shop/shop.component';
import { ChatComponent } from './chat/chat.component';
import { FilmsComponent } from './films/films.component';
import { HeaderComponent } from './header/header.component';
import { ShopCategoriesComponent } from './shop/shop-categories/shop-categories.component';


export const routes: Routes = [
  { path: '', component: HeaderComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'main', component: HeaderComponent},
      { path: 'shop', component: ShopComponent,
        children: [
          { path: '', component: ShopCategoriesComponent },
          { path: 'categories', component: ShopCategoriesComponent }
        ]
      },
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
