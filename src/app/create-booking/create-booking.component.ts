import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
// import { Bookings } from '../mock-bookings';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  id = Bookings.length;
  roomNumber = Math.round(Math.random() * 100);
  booking: Booking = {
    id: this.id,
    name: 'John Doe',
    roomNumber: this.roomNumber,
    startDate: new Date(),
    endDate: new Date(),
  };

  ngOnInit(): void {
    if (this.router.url !== '/create') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      var bookingById = Bookings.find((x) => x.id === id)!; // das ! sagt, dass Ergebniss nicht 0 ist
      this.booking = bookingById;
    }
  }

  save(): void {
    var bookingById = Bookings.find((x) => x.id === this.booking.id);
    if (bookingById == null || bookingById === undefined) {
      Bookings.push(this.booking);
    } else {
      bookingById = this.booking;
    }

    this.router.navigate(['/bookings']);
  }

  dateChanged(event: Event, isStart: boolean) {
    var val = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(val);
    } else {
    }
    this.booking.endDate = new Date(val);
  }
}
