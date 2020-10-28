import {Component, OnInit} from '@angular/core';
import {MainService, Plant} from '../main.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-deletion-request',
  templateUrl: './deletion-request.component.html',
  styleUrls: ['./deletion-request.component.scss']
})
export class DeletionRequestComponent implements OnInit {

  id: string;
  plantToDelete: Plant;

  constructor(public service: MainService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.plantToDelete = this.service.getPlantById(this.id);
  }

}
