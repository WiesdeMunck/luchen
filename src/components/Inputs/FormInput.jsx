import React from 'react';
import { Field } from 'formik';

export default function FormInput({ label, type, name, placeholder, id }) {
  return (
    <>
      <label className='general-input__label' htmlFor={name}>{label}</label>
      <Field
        as={type === 'textarea' ? 'textarea' : 'input'}
        placeholder={placeholder}
        className={`general-input__input ${type === 'textarea' && 'general-input__input--text-area' } `}
        type={type !== 'textarea' ? type : undefined}
        name={name}
        id={id}
      />
    </>
  );
}
