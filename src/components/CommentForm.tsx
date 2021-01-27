import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addComment } from '../redux/ducks/images';

interface FormValues {
  name: string;
  text: string;
}

const CommentForm = () => {
  const dispatch = useDispatch();
  const { getFieldProps, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      name: '',
      text: '',
    } as FormValues,
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required('Enter your name')
        .min(4, 'Min length 4 charachters')
        .max(15, 'Max length 15 charachters')
        .trim(),
      text: Yup.string()
        .required('Enter comment text')
        .max(150, 'Max 150 characters'),
    }),
    onSubmit(values: FormValues) {
      dispatch(addComment({ ...values, date: Date.now() }));
    },
  });

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Control
          type="text"
          placeholder="Ваше имя"
          isValid={touched.name && !errors.name}
          isInvalid={!!touched.name && !!errors.name}
          {...getFieldProps('name')}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="comment">
        <Form.Control
          type="text"
          placeholder="Ваше комментарий"
          isValid={touched.text && !errors.text}
          isInvalid={!!touched.text && !!errors.text}
          {...getFieldProps('text')}
        />
        <Form.Control.Feedback type="invalid">
          {errors.text}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Оставить комментарий
      </Button>
    </Form>
  );
};

CommentForm.propTypes = {};

export default CommentForm;
