import { NgModule } from '@angular/core';
import { GitComponent } from '../app/git/git.component';
import { BusquedaComponent } from '../app/busqueda/busqueda.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BusquedaComponent },
  { path: 'resultados/:E', component: GitComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
