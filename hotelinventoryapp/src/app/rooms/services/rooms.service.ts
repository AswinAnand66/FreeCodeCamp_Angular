import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList:RoomList[] =[

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

  constructor() { }

  getRooms(){
   return this.roomList
  }
}
