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
import { ProductResolver } from './shop/_resolvers/product.resolver';
import { CategoriesResolver } from './shop/_resolvers/categories.resolver';
import { CategoryResolver } from './shop/_resolvers/category.resolver';
import { ShopCartComponent } from './shop/shop-cart/shop-cart.component';
import { OrderResolver } from './shop/_resolvers/order.resolver';
import { ShopCheckoutComponent } from './shop/shop-checkout/shop-checkout.component';


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
          { path: 'categories', component: ShopCategoriesComponent, resolve: {categories: CategoriesResolver} },
          { path: 'categories/:category', component: ShopCategoryComponent, resolve: {category: CategoryResolver} },
          { path: 'categories/:category/:productId', component: ShopProductComponent, resolve: {product: ProductResolver} },
          { path: 'cart', component: ShopCartComponent, resolve: {order: OrderResolver} },
          { path: 'checkout', component: ShopCheckoutComponent },
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
