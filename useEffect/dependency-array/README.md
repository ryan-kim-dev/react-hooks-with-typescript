# useEffect

useEffect hook은 어떠한 컴포넌트가 화면에 처음으로 렌더링 될 때 (Mount), 이후 재렌더링 될 때(Update), 화면에서 사라질 때(Unmount) 작업할 내용을 콜백함수를 통해 실행시키는 기능을 하는 hook이다.

## dependency array 유무에 따른 실행시점

### 의존성 배열이 없는 경우

의존성 배열이 없는 경우 모든 렌더링 때 마다 실행된다.

### 의존성 배열이 있는 경우

빈 배열 - 컴포넌트가 화면에 최초로 렌더링 되는 경우에만 1회 실행.

요소(value) 존재 - 해당 요소의 값이 바뀔때(최초 렌더링, 재렌더링) 시 실행.
