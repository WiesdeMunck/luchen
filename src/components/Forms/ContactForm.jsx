import React from 'react';
import { Formik, Form } from 'formik';
import FormInput from '../Inputs/FormInput';
import SubmitButton from '../buttons/SubmitButton';

export default function ContactForm() {
	const formFields = [
		{ label: 'Naam', type: 'text', placeholder: 'Je volledige naam', name: 'name' },
		{ label: 'Email', type: 'email', placeholder: 'example@example.com', name: 'email' },
		{
			label: 'Bericht',
			type: 'textarea',
			placeholder: 'je vraag, bericht of opmerking',
			name: 'message',
		},
	];

	return (
		<Formik>
			<Form action="" className="general-form">
				{formFields.map((field, index) => (
					<FormInput
						key={index}
						id={field.name}
						name={field.name}
						type={field.type}
						placeholder={field.placeholder}
						label={field.label}
					/>
				))}
				<SubmitButton classNames={'general-form__form-btn'}  content="Verstuur"  />
			</Form>

		</Formik>
	);
}
