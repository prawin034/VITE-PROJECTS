import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import { Link, useNavigate } from 'react-router-dom';
const NewTodo = () => {
  const {
    todoName,
    todoTopic,
    setTodoName,
    setTodoTopic,
    formSubmitHandler,

    state,
    setstate,
    isEditing,
    setisEditing,
  } = useGlobalContext();
  const navigate = useNavigate('');

  const timer = () => {
    // const navigate = useNavigate();
    let time = setTimeout(() => {
      if (state) {
        navigate('/');
        setstate(false);
      }
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  };

  useEffect(() => {
    timer();
    // setstate(false);
  }, [state]);

  return (
    <form onSubmit={formSubmitHandler} className="newtodo">
      <div className="newtodo_content">
        <label htmlFor="name" className="newtodo_content_label">
          TODO NAME
        </label>
        <input
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          type="text"
          className="newtodo_content_input"
        />
      </div>
      <div className="newtodo_content">
        <label htmlFor="topic" className="newtodo_content_label">
          TODO TOPIC
        </label>
        <input
          value={todoTopic}
          onChange={(e) => setTodoTopic(e.target.value)}
          type="text"
          className="newtodo_content_input"
        />
      </div>

      <button type="submit" className="newtodo_btn">
        {isEditing ? 'UPDATE' : 'ADD'}
      </button>
    </form>
  );
};

export default NewTodo;
