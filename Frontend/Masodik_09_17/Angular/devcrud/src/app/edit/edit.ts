import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Developer } from '../_models/developer';
import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit {
  public readonly developerToEdit = signal<Developer>(new Developer());

  constructor(
    private router: Router,
    route: ActivatedRoute,
  ) {
    route.params.subscribe((x) => {
      const id = x['id'];
      const developers = this.load();
      this.developerToEdit.set(developers.find((d) => d.id === id) as Developer);
    });
  }

  load(): Developer[] {
    const jsonArray: Array<any> = JSON.parse(localStorage.getItem('developersDB') ?? '[]');
    return Object.values(jsonArray).map((x) => Object.assign(new Developer(), x));
  }

  save(): void {
    const developers = this.load();
    const index = developers.findIndex((x) => x.id === this.developerToEdit().id);
    developers[index] = this.developerToEdit();
    localStorage.setItem('developersDB', JSON.stringify(developers));

    this.router.navigate(['list']);
  }
}
