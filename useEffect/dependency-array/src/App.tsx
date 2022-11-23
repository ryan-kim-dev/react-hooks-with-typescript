import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState<number>(1);
  const [name, setName] = useState<string>('');

  const handleCountUpdate = () => {
    setCount(prev => prev + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  useEffect(() => {
    console.log('모든 렌더링 시 동작');
  });

  useEffect(() => {
    console.log('count state 변경시만 동작');
  }, [count]);

  useEffect(() => {
    console.log('name state 변경시만 동작');
  }, [name]);

  useEffect(() => {
    console.log('최초 렌더링 시에만 동작');
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>👍</button>
      <span>좋아요: {count}</span>
      <form>
        <input type="text" value={name} onChange={handleInputChange} />
        <span>{name}</span>
      </form>
    </div>
  );
}

export default App;

/*
  1. 기존 state 값에 증감연산자 사용시
 setCount(count + 1) -> 동작
 setCount(++count), setCount(count++) -> 동작 안함
 (const로 선언해서 상수에 재할당 불가 에러 발생. let으로 선언하면 동작하나 나쁜코드)
  2. 함수형 업데이트 사용 시
 setCount(prev => ++prev) -> 동작
 setCount(prev => prev++) -> 동작 안함
 * 
 */
