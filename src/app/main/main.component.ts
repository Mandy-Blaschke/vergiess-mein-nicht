import { Component, OnInit } from '@angular/core';
import {MainService, Plant} from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  plants: Plant[] = [];

  constructor(public service: MainService) { }

  ngOnInit(): void {
    this.plants = this.service.getAllPlants();
  }

}
