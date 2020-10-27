import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router: Router) {
  }

  plants: Plant[] = [
    {
      room: 'Wohnzimmer',
      name: 'Palme',
      interval: 2,
      startDate: new Date(),
      id: this.createId(),
    },
    {
      room: 'Schlafzimmer',
      name: 'Efeu',
      interval: 7,
      startDate: new Date(2020, 1, 23),
      id: this.createId(),
    },
  ];

  // Hilfen

  createId(): string {
    return Math.round(Math.random() * 10000) + '-' + Math.round(Math.random() * 10000) + '-' + Math.round(Math.random() * 10000);
  }

  formatDate(date: Date): string {
    return this.addLeadingZero(date.getDate()) + '.' + (this.addLeadingZero(date.getMonth() + 1)) + '.' + date.getFullYear();
  }

  addLeadingZero(num): string {
    return num < 10 ? '0' + num : num;
  }

  getWeekday(date: Date): string {
    const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    return weekdays[date.getDay()];
  }

  dateToInputDateValue(date: Date): string {
    return `${date.getFullYear()}-${this.addLeadingZero(date.getMonth() + 1)}-${this.addLeadingZero(date.getDate())}`;
  }

  sortPlantsByDate(): void {
    this.plants.sort((prev, curr) => prev.startDate < curr.startDate ? -1 : 1);
  }

  // Funktionen

  setNewInterval(plant: Plant): void {
    const date = new Date();
    date.setDate(date.getDate() + plant.interval);
    plant.startDate = date;
    this.sortPlantsByDate();
  }

  deletePlant(id: string): void {
    this.plants.splice(this.plants.findIndex(p => p.id === id), 1);
    this.sortPlantsByDate();
  }

  addNewPlant(plant: Plant): void {
    this.plants.push(plant);
    this.sortPlantsByDate();
  }

  cancelNewPlant(): void {
    this.router.navigate(['/start']);
  }

  cancelEditPlant(): void {
    this.router.navigate(['/start']);
  }

  getPlantById(id: string): Plant {
    return this.plants.find((plant) => plant.id === id);
  }

  editExistingPlant(editId: string, plant: Plant): void {
    this.deletePlant(editId);
    this.addNewPlant(plant);
    this.sortPlantsByDate();
  }
}


export interface Plant {
  name: string;
  room: string;
  interval: number;
  startDate: Date;
  id: string;
}
