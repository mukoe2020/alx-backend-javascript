import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRoomX = new ClassRoom(19);
  const classRoomY = new ClassRoom(20);
  const classRoomZ = new ClassRoom(34);

  return [classRoomX, classRoomY, classRoomZ];
}
