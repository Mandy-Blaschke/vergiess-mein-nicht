import {Component, OnInit} from '@angular/core';
import {MainService, Plant} from '../main.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.scss']
})
export class EditPlantComponent implements OnInit {
  editRoom: string;
  editName: string;
  editInterval: number;
  editStartDate: string;
  editId: string;

  constructor(public service: MainService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.editId = this.activatedRoute.snapshot.paramMap.get('id');
    const plantToEdit = this.service.getPlantById(this.editId);
    if (plantToEdit !== undefined) {
      this.editRoom = plantToEdit.room;
      this.editName = plantToEdit.name;
      this.editInterval = plantToEdit.interval;
      this.editStartDate = plantToEdit.startDate;
    } else {
      this.router.navigate(['start']);
    }
  }


  saveEditedPlant(): void {
    const plant: Plant = {
      name: this.editName,
      room: this.editRoom,
      interval: this.editInterval,
      startDate: this.editStartDate,
      id: this.editId,
    };
    this.service.editExistingPlant(this.editId, plant);
    this.router.navigate(['/start']);
  }
}
