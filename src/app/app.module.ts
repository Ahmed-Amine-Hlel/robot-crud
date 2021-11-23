import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RobotsComponent } from './robots/robots.component';
import { AddRobotComponent } from './add-robot/add-robot.component';
import { FormsModule } from '@angular/forms';
import { UpdateRobotComponent } from './update-robot/update-robot.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotsComponent,
    AddRobotComponent,
    UpdateRobotComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
