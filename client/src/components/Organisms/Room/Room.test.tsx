import { screen } from '@testing-library/react';
import renderWithProviders from '../../../Helpers/RenderWithProviders';
import { Default, TwoUsersWithComputer } from './Room.stories';

describe('Room', () => {
  describe('when get empty users array', () => {
    it('Should render two empty slots', () => {
      renderWithProviders(<Default {...Default.args} />);
      const slots = screen.getAllByText(/Empty/i);
      expect(slots.length).toBe(2);
    });

    /*it('Should have active button', () => {
      renderWithProviders(<Default {...Default.args} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button.style.getPropertyValue('user-select')).toBe('');
    });*/
  });

  describe('when has two users already', () => {
    it('Should render two empty slots', () => {
      renderWithProviders(<TwoUsersWithComputer {...TwoUsersWithComputer.args} />);
      const slots = screen.queryAllByText(/Empty/i);
      expect(slots.length).toBe(0);
    });
    /*it('Should have not active button', async () => {
      renderWithProviders(<Default {...Default.args} />);
      const button = await screen.findByRole('button');
      expect(button).toBeInTheDocument();
      expect(button)
    });*/
  });
});
