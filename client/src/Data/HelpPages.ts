import { HelpPage } from '../Types/types';
import roomsHelp_computer from '../assets/Help-Images/H-Rooms-Computer.png';
import roomsHelp_friend from '../assets/Help-Images/H-Rooms-Friend.png';
import roomsHelp_other from '../assets/Help-Images/H-Rooms-Other.png';

export const roomsListHelpPages: HelpPage[] = [
  {
    helpText: 'To play with computer find free room with computer icon and join the game',
    imageSrc: roomsHelp_computer,
  },
  {
    helpText: 'To play with your friends  invite them to the game and join to the same empty room',
    imageSrc: roomsHelp_friend,
  },
  {
    helpText: 'To play with human player find and join the room where someone is waiting for the game',
    imageSrc: roomsHelp_other,
  },
];
