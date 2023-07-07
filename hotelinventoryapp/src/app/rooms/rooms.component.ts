import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

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

 roomList: RoomList[] =[ ]
  
  constructor(
    private roomsService: RoomsService
  ) {}



  ngOnInit(): void {

      this.roomList = this.roomsService.getRooms()
  }



  selectedRoom(event:RoomList){
    this.roomList.push(event);
    console.log('event',event);
  }

  addRoom(){
    let room = {
      roomType:'private Room',
      amenities: 'Air conditioner',
      price: 1000,
      photos: 'https://google.com',
      checkinTime: new Date(),
      checkoutTime: new Date()
    }
    this.roomList.push(room);
    this.roomList= [...this.roomList, room]
  }
}
