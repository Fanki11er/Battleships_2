import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 10px;
  display: flex;
  flex-flow: wrap row;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media screen and (max-width: 1280px) {
    align-content: flex-start;
    padding-top: 10%;
  }

  @media screen and (max-width: 560px) {
    width: 95%;
    padding: 10px;
    margin-top: 50px;
  }
`;
