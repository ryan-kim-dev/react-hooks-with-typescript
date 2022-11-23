# Clean up

클린업이란 useEffect hook의 콜백함수로 실행한 동작에 대한 정리 작업을 뜻한다. 콜백함수의 리턴문으로 함수를 실행하는 형태로 사용한다.

예를 들어 콜백함수로 구독 요청에 대한 동작을 실행하고 해당 콜백함수의 리턴문으로 구독 해지에 대한 동작을 실행하는 함수를 사용하는 식의 형태이다.

```tsx
useEffect(() => {
  // 구독 신청에 대한 동작

  return () => {
    // 구독 해지에 대한 동작
  };
}, []);
```

이러한 형태로 clean up 하여 1. 컴포넌트가 unmount 될 경우, 2. 다음 렌더링 시 useEffect hook이 실행되기 이전에 리턴문의 함수가 실행된다.

**만약 클린업 처리가 되지 않는다면 useEffect 훅을 사용한 컴포넌트가 언마운트된 상태에서도 계속 실행되는 문제가 생긴다. 아래 코드 참조!**

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('타이머 돌아가는 중...');
  }, 1000);
}, []);
```

useEffect hook 자체는 컴포넌트가 최초 렌더링되는 때 1회만 실행되지만 컴포넌트가 언마운트된 상태에서도 timer 함수가 종료되지 않고 계속해서 콘솔창에서 로그가 찍히는 것을 확인할 수 있다. 여기에 클린업을 적용해보자.

```tsx
useEffect(() => {
  /** timer: 최초 렌더링 시만 실행 */
  const timer = setInterval(() => {
    console.log('타이머 돌아가는 중...');
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log('타이머가 종료되었습니다.');
  };
}, []);
```

아래와 같이 반환값으로 클린업 함수를 넣으면 컴포넌트가 언마운트될 경우 콘솔창에서 타이머가 종료되었다는 로그를 남기고 코드 실행이 종료된다.

**전체 코드**

```tsx
import { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    /** timer: 최초 렌더링 시만 실행 */
    const timer = setInterval(() => {
      console.log('타이머 돌아가는 중...');
    }, 1000);

    // 반환문: 클린업 함수
    return () => {
      // Timer 컴포넌트가 화면에서 언마운트 될 경우에만 실행
      clearInterval(timer);
      console.log('타이머가 종료되었습니다.');
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
}

export default Timer;
```
