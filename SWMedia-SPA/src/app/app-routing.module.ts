import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { ShopComponent } from './shop/shop.component';
import { ChatComponent } from './chat/chat.component';
import { FilmsComponent } from './films/films.component';
import { HeaderComponent } from './header/header.component';
import { ShopCategoriesComponent } from './shop/shop-categories/shop-categories.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { ShopProductComponent } from './shop/shop-product/shop-product.component';


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
          { path: 'categories', component: ShopCategoriesComponent},
          { path: 'categories/:category', component: ShopCategoryComponent},
          { path: 'categories/:category/:productId', component: ShopProductComponent },
          { path: '', redirectTo: 'categories', pathMatch: 'full'}
        ]
      },
      { path: 'chat', component: ChatComponent},
      { path: 'films', component: FilmsComponent}
    ]
  },
  //{ path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
