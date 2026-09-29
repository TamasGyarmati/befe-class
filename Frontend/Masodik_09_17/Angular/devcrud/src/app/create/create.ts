import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Developer } from '../_models/developer';
import { Router } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  public readonly developer = signal<Developer>(new Developer());

  constructor(private router: Router) {}

  save(): void {
    const developers = this.load();
    developers.push(this.developer());
    localStorage.setItem('developersDB', JSON.stringify(developers));
    this.router.navigate(['list']);
  }

  load(): Developer[] {
    const jsonArray: Array<any> = JSON.parse(localStorage.getItem('developersDB') ?? '[]');
    return Object.values(jsonArray).map((x) => Object.assign(new Developer(), x));
  }
}
