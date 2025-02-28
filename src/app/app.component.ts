import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [AsyncPipe],
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  title = 'ringoffire';
}

