import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addComment } from '../../redux/ducks/images';
import Selectors from '../../redux/selectors';

interface FormValues {
  name: string;
  text: string;
}

const CommentForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(Selectors.loading);
  const { getFieldProps, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      name: '',
      text: ''
    } as FormValues,
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required('Enter your name')
        .min(4, 'Min length 4 characters')
        .max(15, 'Max length 15 characters')
        .trim(),
      text: Yup.string()
        .required('Enter comment text')
        .max(150, 'Max 150 characters')
    }),
    onSubmit(values: FormValues) {
      dispatch(addComment({ ...values, date: Date.now() }));
    }
  });

  return (
    <Form noValidate className='comment-form' onSubmit={handleSubmit}>
      <Form.Group controlId='name'>
        <Form.Control
          type='text'
          placeholder='Ваше имя'
          isValid={touched.name && !errors.name}
          isInvalid={!!touched.name && !!errors.name}
          {...getFieldProps('name')}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='comment'>
        <Form.Control
          type='text'
          placeholder='Ваш комментарий'
          isValid={touched.text && !errors.text}
          isInvalid={!!touched.text && !!errors.text}
          {...getFieldProps('text')}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.text}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant='primary' type='submit' disabled={isLoading} block>
        Оставить комментарий
      </Button>
    </Form>
  );
};

export default CommentForm;
