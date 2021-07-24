import renderWithProviders from '../../../Helpers/renderWithProviders';
import { WithOneUser, WithTwoUsersOpponentReady, WithTwoUsersOpponentReadyDifferentOrder } from './PreparingPageStatusInfo.stories';
import { screen } from '@testing-library/react';

describe('PreparingPageStatusInfo', () => {
  it('should display one user with status preparing in slot one and one user with status no opponent in slot two', () => {
    renderWithProviders(<WithOneUser {...WithOneUser.args} />);

    const myInfo = screen.getByText(/Preparing/i);
    const opponentInfo = screen.getByText(/No opponent/i);
    expect(myInfo).toBeInTheDocument();
    expect(opponentInfo).toBeInTheDocument();
  });

  it('should display one user with status preparing in slot one and one user with status ready in slot two', () => {
    renderWithProviders(<WithTwoUsersOpponentReady {...WithTwoUsersOpponentReady.args} />);

    const infos = screen.getAllByTestId('user-status');
    expect(infos.length).toBe(2);
    expect(infos[0].innerHTML).toBe('Your status: PREPARING');
    expect(infos[1].innerHTML).toBe('Opponent status: READY');
  });

  it('should display one user with status ready in slot one and one user with status preparing in slot two', () => {
    renderWithProviders(<WithTwoUsersOpponentReadyDifferentOrder {...WithTwoUsersOpponentReadyDifferentOrder.args} />);

    const infos = screen.getAllByTestId('user-status');
    expect(infos.length).toBe(2);
    expect(infos[1].innerHTML).toBe('Opponent status: PREPARING');
    expect(infos[0].innerHTML).toBe('Your status: READY');
  });
});
