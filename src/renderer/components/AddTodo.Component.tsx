import React, { useState } from 'react';
import { TodoType } from '../utils/interfaces/inde';
import toast from 'react-hot-toast';

const AddTodo = ({ addTodo }: { addTodo: (data: TodoType) => void }) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.remove();

    if (input.trim() === '') {
      return toast.error('Todo field can not be empty.');
    }

    const data: TodoType = {
      id: Date.now(),
      name: input,
      isCompleted: false,
    };

    addTodo(data);
    setInput('');
    toast.success('Todo Added Successfully.');
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="enter todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
