import React, { useState } from 'react';
import { Students } from '../api/students';
import { Form, Button } from 'react-bootstrap';

const Student = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    Students.insert({ name, grade });

    setName('');
    setGrade('');
  };

  return (
    <div className="container">
      <h1>Add Students</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group controlId="grade">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="text"
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
            placeholder="Enter grade"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Student;
