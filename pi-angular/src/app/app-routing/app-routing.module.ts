import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MuralComponent } from '../mural-doacoes/mural.component';
import { PainelComponent1 } from '../painel-doacoes1/painel1.component';
import { PainelComponent2 } from '../painel-doacoes2/painel2.component';

const rotas: Routes = [
  {path: 'mural', component: MuralComponent},
  {path: 'painel1', component: PainelComponent1},
  {path: 'painel2', component: PainelComponent2},
  {path: '', redirectTo: '/mural', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
