import React from 'react';

type ContainerProps = {
  styles: React.CSSProperties;
};

function Container({ styles }: ContainerProps) {
  return (
    <div style={styles}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum,
    </div>
  );
}

export default Container;
