import React from 'react';

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button({ handleClick }: ButtonProps) {
  return (
    <button type="button" onClick={e => handleClick(e, 1)}>
      클릭
    </button>
  );
}

export default Button;
