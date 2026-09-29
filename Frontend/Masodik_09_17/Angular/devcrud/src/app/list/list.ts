import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Developer } from '../_models/developer';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  public developers = signal<Developer[]>([]);

  ngOnInit(): void {
    const jsonArray: Array<any> = JSON.parse(localStorage.getItem('developersDB') ?? '[]');
    this.developers.set(Object.values(jsonArray).map((x) => Object.assign(new Developer(), x)));
    console.log(this.developers());
  }

  save(): void {
    localStorage.setItem('developersDB', JSON.stringify(this.developers()));
  }

  deleteDeveloper(dev: Developer): void {
    const index = this.developers().findIndex((x: Developer) => x.id === dev.id);
    this.developers().splice(index, 1);
    console.log('Successfully deleted!', dev);
    // this.save();
  }
}
