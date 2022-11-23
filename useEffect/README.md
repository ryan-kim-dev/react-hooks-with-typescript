# useEffect

- 참고자료
  별코딩님의 [유튜브 강의 영상](https://www.youtube.com/watch?v=kyodvzc5GHU&t=722s)과 [공식문서](https://ko.reactjs.org/docs/hooks-effect.html)를 통해 학습하고 정리합니다.

## 역할

useEffect hook은 어떠한 컴포넌트가 화면에 처음으로 렌더링 될 때 (Mount), 이후 재렌더링 될 때(Update), 화면에서 사라질 때(Unmount) 작업할 내용을 콜백함수(effect, side effect)를 통해 실행시키는 기능을 하는 hook이다.
즉 컴포넌트가 렌더링 이후에 어떤 일을 수행해야 하는지를 정의한다.

### useEffect가 컴포넌트 내에 위치하는 이유

컴포넌트 내부에 위치해야 effect(useEffect의 콜백함수)가 해당 컴포넌트가 내려받는 props 값이나 가지고 있는 state 변수에 접근할 수 있기 때문이다.
(함수 컴포넌트의 코드블럭이 스코프이기 때문)

## dependency array 유무에 따른 실행시점

### 의존성 배열이 없는 경우

의존성 배열이 없는 경우 모든 렌더링 때 마다 실행된다.

### 의존성 배열이 있는 경우

빈 배열 - 컴포넌트가 화면에 최초로 렌더링 되는 경우에만 1회 실행.

요소(value) 존재 - 해당 요소의 값이 바뀔때(최초 렌더링, 재렌더링) 시 실행.

## Clean-up

```tsx
useEffect(() => {
  // 구독 신청에 대한 동작

  return () => {
    // 구독 해지에 대한 동작
  };
}, []);
```

클린업이란 useEffect hook의 콜백함수로 실행한 동작에 대한 정리 작업을 뜻한다. 콜백함수의 리턴문으로 함수를 실행하는 형태로 사용한다.

예를 들어 콜백함수로 구독 요청에 대한 동작을 실행하고 해당 콜백함수의 리턴문으로 구독 해지에 대한 동작을 실행하는 함수를 사용하는 식의 형태이다.

클린업 함수는 기명함수를 사용하는지 익명함수를 사용하는지는 상관없음.

이러한 형태로 clean up 하여 1. 컴포넌트가 unmount 될 경우, 2. 다음 렌더링 시 useEffect hook이 실행되기 이전에 리턴문의 함수가 실행된다.

**만약 클린업 처리가 되지 않는다면 useEffect 훅을 사용한 컴포넌트가 언마운트된 상태에서도 계속 실행되는 문제가 생긴다. 아래 코드 참조!**

## Clean-up을 사용하는 Effect

**클린업하여 effect 실행을 종료하지 않으면 메모리 누수가 발생하는 경우에 사용한다.**

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

## Clean-up을 이용하지 않는 Effects

- 네트워크 요청
- DOM 수동 조작
- 로깅

위와 같이 실행 이후 신경 쓸 일이 없는 경우엔 클린업을 사용하지 않는다.
