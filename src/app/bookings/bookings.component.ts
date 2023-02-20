import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  // initiert den Zugriff auf den SERVICE BookingService
  constructor(private bookingService: BookingService) {}

  // erzeugt neues Array bookings vom Typ Booking[], ohne Werte
  bookings: Booking[] = [];

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((res) => {
      this.bookings = res;
    });
  }

  deleteBooking(booking: Booking): void {
    this.bookingService.deleteBooking(booking).subscribe();
    this.bookings = this.bookings.filter((b) => b !== booking);
  }
}
