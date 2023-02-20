import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  bookingsURL: string = '/api/bookings';

  getBookings(): Observable<Booking[]> {
    var response = this.httpClient.get<Booking[]>(this.bookingsURL);
    return response;
  }

  deleteBooking(booking: Booking): Observable<Booking> {
    var response = this.httpClient.delete<Booking>(
      this.bookingsURL + '/' + booking.id
    );
    return response;
  }

  getBookingById(id: number): Observable<Booking> {
    var response = this.httpClient.get<Booking>(this.bookingsURL + '/' + id);

    // das ! sagt, dass Ergebniss nicht 0 ist
    var bookingById = Bookings.find((x) => x.id === id)!;
    return response;
  }

  addBooking(booking: Booking): Observable<Booking> {
    var response = this.httpClient.post<Booking>(this.bookingsURL, booking);
    return response;
  }
}
