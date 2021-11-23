import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobotsComponent } from './robots/robots.component';
import { AddRobotComponent } from './add-robot/add-robot.component';
import { UpdateRobotComponent } from './update-robot/update-robot.component';

const routes: Routes = [
  { path: 'robots', component: RobotsComponent },

  { path: 'add-robot', component: AddRobotComponent },

  { path: 'updateRobot/:id', component: UpdateRobotComponent },

  { path: '', redirectTo: 'robots', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
