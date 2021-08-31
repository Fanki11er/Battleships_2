import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import FormField from '../../Molecules/FormField/FormField';
import { useContext } from 'react';
import { UserContext } from '../../../providers/userProvider';
import { StandardButton } from '../../Atoms/Buttons/Buttons';
import { StyledProps } from '../../../assets/styles/theme';

const Form = styled.form`
  width: 500px;
  height: 80px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  border-radius: 20px;
  padding: 10px;
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  justify-content: space-around;
  justify-self: center;
  position: relative;
  z-index: 1;
  ::after {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    z-index: -1;
    background: ${(props: StyledProps) => props.theme.colors.transparentDarkBlue};
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(12.5px);
    border-radius: 20px;
  }
  @media screen and (min-width: 3000px) {
    width: 700px;
    height: 100px;
    padding: 15px;
  }

  @media screen and (max-width: 860px) {
    width: 300px;
    height: 65px;
    padding: 5px;
  }
`;

const UserNameForm = () => {
  const { register, handleSubmit } = useForm();
  const { handleSetUserName } = useContext(UserContext);
  return (
    <Form
      onSubmit={handleSubmit((data) => {
        handleSetUserName(data['userName']);
      })}
    >
      <FormField type="text" name={'userName'} label={'What is your name?'} id={'userName'} register={register} />
      <StandardButton isActive={true} type="submit">
        Submit
      </StandardButton>
    </Form>
  );
};
export default UserNameForm;
/*const Form = styled.form`
  width: 500px;
  height: 260px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  border-radius: 20px;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  position: relative;
  z-index: 1;
  ::after {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    z-index: -1;
    background: ${(props: StyledProps) => props.theme.colors.transparentDarkBlue};
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(12.5px);
    border-radius: 20px;
  }
`;

const UserNameForm = () => {
  const { register, handleSubmit } = useForm();
  const { handleSetUserName } = useContext(UserContext);
  return (
    <Form
      onSubmit={handleSubmit((data) => {
        handleSetUserName(data['userName']);
      })}
    >
      <FormField type="text" name={'userName'} label={'What is your name?'} id={'userName'} register={register} />
      <StandardButton isActive={true} type="submit">
        Submit
      </StandardButton>
    </Form>
  );
};
export default UserNameForm; */
