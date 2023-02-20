import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookings: Booking[] = [
      {
        id: 0,
        name: 'Stefan Heinemann',
        roomNumber: 13,
        startDate: new Date(),
        endDate: new Date('2023-02-28'),
      },
      {
        id: 1,
        name: 'Alexander Platz',
        roomNumber: 15,
        startDate: new Date(),
        endDate: new Date('2023-03-09'),
      },
      {
        id: 2,
        name: 'Rainer Zufall',
        roomNumber: 17,
        startDate: new Date(),
        endDate: new Date('2023-02-19'),
      },
      {
        id: 3,
        name: 'Rosa Blume',
        roomNumber: 19,
        startDate: new Date(),
        endDate: new Date('2023-04-09'),
      },
    ];

    return { bookings };
  }
}
