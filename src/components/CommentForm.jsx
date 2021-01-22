import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {addComment} from '../store/modules/images';


const CommentForm = () => {
  const dispatch = useDispatch();
  const {getFieldProps, handleSubmit, touched, errors} = useFormik({
    initialValues: {
      name: '',
      text: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required('Enter your name')
        .min(4, 'Min length 4 charachters')
        .max(15, 'Max length 15 charachters')
        .trim(),
      text: Yup.string()
        .required('Enter comment text')
        .max(150, 'Max 150 characters')
    }),
    onSubmit(values) {
      console.log(values);
      dispatch(addComment({...values, date: Date.now()}));
    }
  });

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Control type="text" placeholder="Ваше имя" {...getFieldProps('name')}
                      isValid={touched.name && !errors.name}
                      isInvalid={touched.name && errors.name}/>
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="comment">
        <Form.Control type="text" placeholder="Ваше комментарий" {...getFieldProps('text')}
                      isValid={touched.text && !errors.text}
                      isInvalid={touched.text && errors.text}/>
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
