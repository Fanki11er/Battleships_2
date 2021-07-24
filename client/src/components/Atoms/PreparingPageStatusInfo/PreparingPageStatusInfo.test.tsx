import renderWithProviders from '../../../Helpers/renderWithProviders';
import { WithOneUser } from './PreparingPageStatusInfo.stories';
import { screen } from '@testing-library/react';

describe('PreparingPageStatusInfo', () => {
  it('should display one user with status preparing in slot one and one user with status no opponent in slot two', () => {
    renderWithProviders(<WithOneUser {...WithOneUser.args} />);

    const myInfo = screen.getByText(/Preparing/i);
    const opponentInfo = screen.getByText(/No opponent/i);
    expect(myInfo).toBeInTheDocument();
    expect(opponentInfo).toBeInTheDocument();
  });
});
