import { Wrapper } from './FormField.styles';
import { Input } from '../../Atoms/Input/Input';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StyledFormError } from '../../Atoms/FormError/FormError';

type Props = {
  label: string;
  name: string;
  id: string;
  type: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};
const FormField = (props: Props) => {
  const { label, name, id, type = 'text', register, errors } = props;

  return (
    <Wrapper>
      <Input id={id} type={type} data-testid={label} placeholder={label} {...register(name, { required: true, minLength: 3 })} />
      {errors[name] && <StyledFormError>Minimum length is 3 characters</StyledFormError>}
    </Wrapper>
  );
};

export default FormField;
