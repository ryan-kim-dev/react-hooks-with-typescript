import React, { useState } from 'react';

function Input() {
  const [todo, setTodo] = useState({
    text: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(prev => ({
      ...prev,
      text: value,
    }));
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    return alert(todo.text);
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>새 할일 추가</h3>
      <input type="text" onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default Input;
