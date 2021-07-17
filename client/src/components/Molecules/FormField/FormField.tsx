import React from 'react';
import { Wrapper } from './FormField.styles';
import { Label } from '../../Atoms/Label/Label';
import { Input } from '../../Atoms/Input/Input';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  label: string;
  name: string;
  id: string;
  type: string;
  register: UseFormRegister<any>;
};
const FormField = (props: Props) => {
  const { label, name, id, type = 'text', register } = props;

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} data-testid={label} {...register(name, { required: true, minLength: 3 })} />
    </Wrapper>
  );
};

export default FormField;
