import { GreetProps } from '../types/Greet.types';

function Greet({ username, msgCount, isLoggedIn }: GreetProps) {
  return (
    <h2>
      {isLoggedIn
        ? `환영합니다 ${username}씨! ${msgCount}개의 안 읽은 메세지가
          있군요.`
        : `로그인 해주세요`}
    </h2>
  );
}

export default Greet;
