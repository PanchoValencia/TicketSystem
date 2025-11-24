import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ variant?: 'link' }>`
  background: transparent;
  border-radius: 7px;
  border: ${props => props.variant === 'link' ? 'none' : '1px solid var(--primary)'};
  padding: ${props => props.variant === 'link' ? '0' : '0.5rem 1rem'};
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: ${props => props.variant === 'link' ? 'none' : 'var(--primary)'};
    color: ${props => props.variant === 'link' ? 'var(--primary)' : 'var(--bg)'};
  }
`;

interface ButtonProps {
    children: React.ReactNode | string;
    onClick: () => void;
    variant?: 'link';
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant }) => {
    return (
        <StyledButton onClick={onClick} variant={variant}>
            {children}
        </StyledButton>
    )
}
