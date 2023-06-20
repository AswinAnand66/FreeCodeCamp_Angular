import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelname = 'Ananthya';

  rooms: Room = {
    totalRooms:20,
    availableRooms:10,
    bookedRooms:20
  };

 roomList: RoomList[] =[

  {
    roomType:'Deluxe Room',
    amenities: 'Air conditioner',
    price: 500,
    photos: 'https://google.com',
    checkinTime: new Date(),
    checkoutTime: new Date()
  },
  {
    roomType:'small Room',
    amenities: 'Air conditioner',
    price: 300,
    photos: 'https://google.com',
    checkinTime: new Date(),
    checkoutTime: new Date()
  },
  {
    roomType:'private Room',
    amenities: 'Air conditioner',
    price: 1000,
    photos: 'https://google.com',
    checkinTime: new Date(),
    checkoutTime: new Date()
  },
 ]
  
  constructor() {}

  ngOnInit(): void {}
}
