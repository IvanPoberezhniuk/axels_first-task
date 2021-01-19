import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'react-bootstrap';

const CommentForm = ({onAddComment}) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleChange = (e, cb) => {
    cb(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (name.length <= 0 || text.length <= 0) {
      return;
    }

    onAddComment({name, text});
  };

  return (
    <Form noValidate onSubmit={(event) => onSubmit(event)}>
      <Form.Group controlId="name">
        <Form.Control type="text" placeholder="Ваше имя" value={name} onChange={(e) => handleChange(e, setName)}/>
      </Form.Group>
      <Form.Group controlId="comment">
        <Form.Control type="text" placeholder="Ваше комментарий" value={text}
                      onChange={(event) => handleChange(event, setText)}/>
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Оставить комментарий
      </Button>
    </Form>
  );
};

CommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired
};

export default CommentForm;
