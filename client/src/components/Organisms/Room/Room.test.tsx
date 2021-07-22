import { screen } from '@testing-library/react';
import renderWithProviders from '../../../Helpers/renderWithProviders';
import { Default, TwoUsersWithComputer, WithOneUser } from './Room.stories';

describe('Room', () => {
  describe('when get empty users array', () => {
    it('Should render two empty slots', () => {
      renderWithProviders(<Default {...Default.args} />);
      const slots = screen.getAllByText(/Empty/i);
      expect(slots.length).toBe(2);
    });

    it('Should have active button', () => {
      renderWithProviders(<Default {...Default.args} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveStyle('user-select: initial');
    });
  });

  describe('when has two users already', () => {
    it('Should render zero empty slots', () => {
      renderWithProviders(<TwoUsersWithComputer {...TwoUsersWithComputer.args} />);
      const slots = screen.queryAllByText(/Empty/i);
      expect(slots.length).toBe(0);
    });
    it('Should have not active button', () => {
      renderWithProviders(<TwoUsersWithComputer {...TwoUsersWithComputer.args} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveStyle('user-select: none');
    });

    it('Should have two user names', () => {
      renderWithProviders(<TwoUsersWithComputer {...TwoUsersWithComputer.args} />);
      const firstElement = screen.getByText(/AI/i);
      const secondElement = screen.getByText(/Krzysztof/i);
      expect(firstElement).toBeInTheDocument();
      expect(secondElement).toBeInTheDocument();
    });
    it('Should have one computer user and one real user', () => {
      renderWithProviders(<TwoUsersWithComputer {...TwoUsersWithComputer.args} />);
      const user = screen.getByText(/person/i);
      const computer = screen.getByText(/computer/i);
      expect(user).toBeInTheDocument();
      expect(computer).toBeInTheDocument();
    });
  });

  describe('When it has one user', () => {
    it('Should have active button', () => {
      renderWithProviders(<WithOneUser {...WithOneUser.args} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveStyle('user-select: initial');
    });

    it('Should have one  user name and one empty slot', () => {
      renderWithProviders(<WithOneUser {...WithOneUser.args} />);
      const user = screen.getByText(/Krzysztof/i);
      const emptySlot = screen.getByText(/EMPTY/i);
      expect(user).toBeInTheDocument();
      expect(emptySlot).toBeInTheDocument();
    });
  });
});
