import { Component, OnInit } from '@angular/core';
import {MainService, Plant} from '../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  constructor(public service: MainService, private router: Router) { }

  ngOnInit(): void {
  }

  editPlant(plant: Plant): void {
    this.router.navigate(['pflanze-bearbeiten', plant.id]);
  }
}
