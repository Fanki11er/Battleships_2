import styled from 'styled-components';
import UserGameBoard from '../../components/Organisms/UserGameBoard/UserGameBoard';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40% 1fr 40%;
  grid-template-rows: 1fr;
`;

const Game = () => {
  return (
    <Wrapper>
      <UserGameBoard />
    </Wrapper>
  );
};

export default Game;
