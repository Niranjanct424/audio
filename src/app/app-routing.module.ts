import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './components/colors/colors.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // { path:'', redirectTo:'colors' , pathMatch:'full'},
  { path:"dashboard" , component: TestComponent},
  { path:"colors" , component: ColorsComponent},
  { path:'colors/:id' , component: ColorsComponent},
  { path:"laptops" , component: LaptopsComponent},
  { path:'laptops/:id' , component: LaptopsComponent},
  // { path:"**" , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

export const routingComponents = [ColorsComponent,LaptopsComponent,NotfoundComponent];