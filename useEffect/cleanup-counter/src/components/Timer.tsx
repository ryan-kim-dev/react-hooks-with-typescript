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
