import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import FormField from '../../Molecules/FormField/FormField';
import { useContext } from 'react';
import { UserContext } from '../../../providers/userProvider';
import { StandardButton } from '../../Atoms/Buttons/Buttons';

const Form = styled.form`
  width: 500px;
  height: 200px;
  border: 2px solid black;
  border-radius: 10px;
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
      <FormField type="text" name={'userName'} label={'Your name'} id={'userName'} register={register} />
      <StandardButton isActive={true} type="submit">
        Submit
      </StandardButton>
    </Form>
  );
};
export default UserNameForm;
