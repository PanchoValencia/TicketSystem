import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ variant?: 'link', $isDisabled?: boolean }>`
  background: transparent;
  border-radius: 7px;
  border: ${props => props.$isDisabled && props.variant !== 'link' ? '1px solid var(--border)' : props.variant === 'link' ? 'none' : '1px solid var(--primary)'};
  padding: ${props => props.variant === 'link' ? '0' : '0.5rem 1rem'};
  font-size: 1rem;
  cursor: ${props => props.$isDisabled ? 'not-allowed' : 'pointer'};
  ${
    props => props.$isDisabled ? '' :
    `&:hover {
        background: ${props.variant === 'link' ? 'none' : 'var(--primary)'};
        color: ${props.variant === 'link' ? 'var(--primary)' : 'var(--bg)'};
    }`
  }
`;

interface ButtonProps {
    children: React.ReactNode | string;
    onClick: () => void;
    variant?: 'link';
    isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant, isDisabled }) => {
    return (
        <StyledButton onClick={isDisabled ? undefined : onClick} variant={variant} $isDisabled={isDisabled}>
            {children}
        </StyledButton>
    )
}
