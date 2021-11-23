import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from '../model/robot.model';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-add-robot',
  templateUrl: './add-robot.component.html',
  styleUrls: ['./add-robot.component.css'],
})
export class AddRobotComponent implements OnInit {
  newRobot = new Robot();

  constructor(private robotService: RobotService, private router: Router) {}

  ngOnInit(): void {}

  addProduit() {
    //console.log(this.newProduit);
    this.robotService.ajouterRobot(this.newRobot);
    this.router.navigate(['/robots']);
  }
}
