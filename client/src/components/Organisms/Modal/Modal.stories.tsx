import { Meta, Story } from '@storybook/react';
import Modal from './Modal';
import { WonStatus, LoseStatus } from '../../Atoms/EndGameStatus/EndGameStatus';

export default {
  title: '/Components/Organisms/Modal',
  component: Modal,
  subcomponents: {
    WonStatus,
    LoseStatus,
  },
} as Meta;

export const Won: Story = () => (
  <Modal>
    <WonStatus />
  </Modal>
);
export const Lose: Story = () => (
  <Modal>
    <LoseStatus />
  </Modal>
);
