import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-plant',
  templateUrl: './new-plant.component.html',
  styleUrls: ['./new-plant.component.scss']
})
export class NewPlantComponent implements OnInit {
  newPlantRoom: string;
  newPlantName: string;
  newPlantInterval: number;
  newPlantStartDate: string;

  constructor(public service: MainService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveNewPlant(): void {
    const plant = {
      name: this.newPlantName,
      room: this.newPlantRoom,
      interval: this.newPlantInterval,
      startDate: new Date(this.newPlantStartDate),
      id: this.service.createId(),
    };
    this.service.addNewPlant(plant);
    this.router.navigate(['/start']);
  }
}
