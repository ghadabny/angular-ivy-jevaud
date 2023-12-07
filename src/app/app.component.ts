import { Component, VERSION } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  observable$ = new Observable((o) => {
    o.next(Math.trunc(Math.random() * 10));
    o.next(Math.trunc(Math.random() * 10));
    o.next(Math.trunc(Math.random() * 10));
    //o.error('error');
    o.complete();
  });

  ngOnInit() {
    this.observable$.pipe(map((v) => '1 : ' + v)).subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error(err.toString()),
      complete: () => console.log('terminé 1'),
    });

    this.observable$.pipe(map((v) => '2 : ' + v)).subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error(err.toString()),
      complete: () => console.log('terminé 2'),
    });

    this.observable$.pipe(map((v) => '3 : ' + v)).subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error(err.toString()),
      complete: () => console.log('terminé 3'),
    });
  }
}
