import Heading from './components/Heading';
import Ryan from './components/Ryan';
import Greet from './components/Greet';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import PersonList from './components/PersonList';
import React from 'react';

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('버튼 클릭됨', e, id);
  };

  const nameList = [
    {
      first: 'Ryan',
      last: 'Kim',
    },
    {
      first: 'Bruce',
      last: 'Lee',
    },
  ];

  return (
    <div>
      <Heading>글제목이다</Heading>
      <Ryan>
        <Heading>안녕하세요 라이언이에요</Heading>
        <div>JSX 엘리먼트가 여러개여도 props.children으로 다 받음</div>
      </Ryan>
      <Greet username="Ryan" isLoggedIn={false} />
      <Button handleClick={handleClick} />
      <Input />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
