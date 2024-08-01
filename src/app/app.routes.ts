import { Routes } from '@angular/router';
import { AddPharmacyComponent } from './components/add-pharmacy/add-pharmacy.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnitComponent } from './components/unit/unit.component';
import { UnitAddComponent } from './components/unit-add/unit-add.component';
import { UnitConversionComponent } from './components/unit-conversion/unit-conversion.component';
import { AddUnitConversionComponent } from './components/add-unit-conversion/add-unit-conversion.component';
// rifat
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ListOfSalesTargetsComponent } from './components/list-of-sales-targets/list-of-sales-targets.component';
import { AddSalesTargetsComponent } from './components/add-sales-targets/add-sales-targets.component';
import { ListSalesAchievementComponent } from './components/list-sales-achievement/list-sales-achievement.component';
import { AddSalesAchievementComponent } from './components/add-sales-achievement/add-sales-achievement.component';
// end rifat

import { OrderComponent } from './components/order/order.component';
import { OrderAddComponent } from './components/order-add/order-add.component';
import { ListOfEmployeeComponent } from './components/list-of-employee/list-of-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListOfCategoryComponent } from './components/list-of-category/list-of-category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { OrderPendingComponent } from './components/order-pending/order-pending.component';
import { OrderDeliveryComponent } from './components/order-delivery/order-delivery.component';
import { OrderCompleteComponent } from './components/order-complete/order-complete.component';
import { BadRequestComponent } from './components/bad-request/bad-request.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  // lazy loading standalone component
  {
    path: 'pharmacy',
    loadComponent: () =>
      import('./components/pharmacy/pharmacy.component').then(
        (c) => c.PharmacyComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./components/add-pharmacy/add-pharmacy.component').then(
        (c) => c.AddPharmacyComponent
      ),
  },
  {
    path: 'add/:id',
    loadComponent: () =>
      import('./components/add-pharmacy/add-pharmacy.component').then(
        (c) => c.AddPharmacyComponent
      ),
  },

  { path: 'unit', component: UnitComponent },
  { path: 'addUnit', component: UnitAddComponent },
  { path: 'addUnit/:id', component: UnitAddComponent },

  { path: 'unitConversion', component: UnitConversionComponent },
  { path: 'addUnitConversion', component: AddUnitConversionComponent },
  { path: 'addUnitConversion/:id', component: AddUnitConversionComponent },
  {
    path: 'order',
    children: [
      { path: '', component: OrderComponent },
      { path: 'add', component: OrderAddComponent },
      { path: 'add/:id', component: OrderAddComponent },
      { path: 'pending-order', component: OrderPendingComponent },
      { path: 'pending-delivery', component: OrderDeliveryComponent },
      { path: 'order-completed', component: OrderCompleteComponent },
    ],
    canActivate: [authGuard],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'badrequest',
    loadComponent: () =>
      import('./components/bad-request/bad-request.component').then(
        (c) => c.BadRequestComponent
      ),
  },
  // rifat
  { path: 'List', component: ListOfProductsComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'products/:id', component: AddProductsComponent },

  { path: 'List-of-SalesTarget', component: ListOfSalesTargetsComponent },
  { path: 'add-salestarget', component: AddSalesTargetsComponent },
  { path: 'salestargets/:id', component: AddSalesTargetsComponent },

  {
    path: 'List-of-SalesAchievement',
    component: ListSalesAchievementComponent,
  },
  { path: 'add-SalesAchievement', component: AddSalesAchievementComponent },
  { path: 'SalesAchievement/:id', component: AddSalesAchievementComponent },
  // end rifat

  { path: 'employee', component: ListOfEmployeeComponent },
  { path: 'employee/add', component: AddEmployeeComponent },
  { path: 'employee/add/:id', component: AddEmployeeComponent },

  { path: 'category', component: ListOfCategoryComponent },
  { path: 'category/add', component: AddCategoryComponent },
  { path: 'category/add/:id', component: AddCategoryComponent },

  { path: '**', component: NotFoundComponent },
];