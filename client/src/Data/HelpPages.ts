import { HelpPage } from '../Types/types';
import roomsHelp_computer from '../assets/Help-Images/H-Rooms-Computer.svg';
import roomsHelp_friend from '../assets/Help-Images/H-Rooms-Friend.svg';
import roomsHelp_other from '../assets/Help-Images/H-Rooms-Other.svg';
import prepareHelp_rotate from '../assets/Help-Images/H-Prepare-Rotate.svg';
import prepareHelp_place from '../assets/Help-Images/H-Prepare-Place.svg';
import prepareHelp_randomize from '../assets/Help-Images/H-Prepare-Randomize.svg';
import prepareHelp_ready from '../assets/Help-Images/H-Prepare-Ready.svg';
import prepareHelp_start from '../assets/Help-Images/H-Prepare-Start.svg';

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

export const preparePageHelpPages: HelpPage[] = [
  {
    helpText: 'Click on the ship to rotate it',
    imageSrc: prepareHelp_rotate,
  },
  {
    helpText: 'Grab the ship and place it on the game board. The orange rectangle is a start position',
    imageSrc: prepareHelp_place,
  },
  {
    helpText: 'Click the "Randomize" button if you want to  place ships randomly',
    imageSrc: prepareHelp_randomize,
  },
  {
    helpText: 'Click the "Ready" button when you are ready',
    imageSrc: prepareHelp_ready,
  },
  {
    helpText: 'The game will start when both players are ready',
    imageSrc: prepareHelp_start,
  },
];
