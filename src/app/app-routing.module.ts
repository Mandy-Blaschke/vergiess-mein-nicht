import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NewPlantComponent} from './new-plant/new-plant.component';
import {EditPlantComponent} from './edit-plant/edit-plant.component';
import {DeletionRequestComponent} from './deletion-request/deletion-request.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'start'},
  {path: 'start', component: MainComponent},
  {path: 'neue-pflanze', component: NewPlantComponent},
  {path: 'pflanze-bearbeiten/:id', component: EditPlantComponent},
  {path: 'pflanze-loeschen/:id', component: DeletionRequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
