import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms:RoomList[] = [];
 
  @Output() selectedRoom = new EventEmitter<RoomList>()
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes)
  }

  ngOnInit(): void {
  }

  selectRoom(room:RoomList){
   this.selectedRoom.emit(room);
  }
}
