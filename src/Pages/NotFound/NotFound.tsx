import * as React from 'react';
import {Header} from '../../Features/Header/Header';
import styled from 'styled-components';

const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: var(--primary);
    font-size: 1.5rem;
    margin: 40px auto;
`;


export const NotFound: React.FC = () => {
  return (
    <div>
      <Header />
      <Title>Not Found</Title>
    </div>
  );
};
