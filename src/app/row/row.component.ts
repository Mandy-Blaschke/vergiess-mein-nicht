import {Component, OnInit} from '@angular/core';
import {MainService, Plant} from '../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  plants: Plant[] = [];

  constructor(public service: MainService, private router: Router) {
  }

  ngOnInit(): void {
    this.plants = this.service.getAllPlants();
  }

  editPlant(plant: Plant): void {
    this.router.navigate(['pflanze-bearbeiten', plant.id]);
  }


  dateIsOverdue(plant: Plant): boolean {
    return new Date() > new Date(plant.startDate);
  }
}
