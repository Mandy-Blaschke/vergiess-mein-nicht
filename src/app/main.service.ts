import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router: Router) {
    this.loadData();
  }

  plants: Plant[] = [];

  // Hilfen

  createId(): string {
    return Math.round(Math.random() * 10000) + '-' + Math.round(Math.random() * 10000) + '-' + Math.round(Math.random() * 10000);
  }

  formatDate(date: string): string {
    const newFormat = date.split('-');
    return `${newFormat[2]}.${newFormat[1]}.${newFormat[0]}`;
    // return this.addLeadingZero(date.getDate()) + '.' + (this.addLeadingZero(date.getMonth() + 1)) + '.' + date.getFullYear();
  }

  addLeadingZero(num): string {
    return num < 10 ? '0' + num : num;
  }

  getWeekday(date: string): string {
    const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    return weekdays[date[0]];
  }

  dateToInputDateValue(date: Date): string {
    return `${date.getFullYear()}-${this.addLeadingZero(date.getMonth() + 1)}-${this.addLeadingZero(date.getDate())}`;
  }

  sortPlantsByDate(): void {
    this.plants.sort((prev, curr) => prev.startDate < curr.startDate ? -1 : 1);
  }

  getPlantById(id: string): Plant {
    return this.plants.find((plant) => plant.id === id);
  }

  // Funktionen

  setNewInterval(plant: Plant): void {
    const date = new Date();
    date.setDate(date.getDate() + plant.interval);
    plant.startDate = this.dateToInputDateValue(date);
    this.sortPlantsByDate();
    this.saveData();
  }

  addNewPlant(plant: Plant): void {
    this.plants.push(plant);
    this.sortPlantsByDate();
    this.saveData();
  }

  editExistingPlant(editId: string, plant: Plant): void {
    this.deletePlant(editId);
    this.addNewPlant(plant);
    this.sortPlantsByDate();
    this.saveData();
  }

  deletePlant(id: string): void {
    this.plants.splice(this.plants.findIndex(p => p.id === id), 1);
    this.sortPlantsByDate();
    this.saveData();
  }

  cancelNewPlant(): void {
    this.router.navigate(['/start']);
  }

  cancelEditPlant(): void {
    this.router.navigate(['/start']);
  }


// Speichern und Laden Locale Storage

  saveData(): void {
    const plantsStingified: string = JSON.stringify(this.plants);
    localStorage.setItem('plants', plantsStingified);
  }

  loadData(): void {
    const plantsStingified: string = localStorage.getItem('plants');
    if (plantsStingified !== null) {
      this.plants = JSON.parse(plantsStingified);
    }
  }

}


export interface Plant {
  name: string;
  room: string;
  interval: number;
  startDate: string;
  id: string;
}
