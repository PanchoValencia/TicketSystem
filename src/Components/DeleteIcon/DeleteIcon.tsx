import * as React from 'react'
import styled from 'styled-components'

const DeleteIconContainer = styled.div`
    position: relative;
    cursor: pointer;

    &::after {
        content: "\\2716";
        position: absolute;
        top: 50%;
        left: 50%;
        transition: 0.2s ease;
        color: var(--fg);
        font-size: 1.5rem;
        transform: translate(-50%, -50%);
    }

    &:hover::after {
        color: var(--primary);
    }
`;

interface DeleteIconProps {
    readonly onClick: () => void
}

export const DeleteIcon: React.FC<DeleteIconProps> = ({ onClick }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClick();
    }
    return (
        <DeleteIconContainer onClick={handleClick} />
    )
}