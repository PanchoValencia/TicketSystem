import * as React from 'react'
import styled from 'styled-components'

const EditIconContainer = styled.div`
    position: relative;
    cursor: pointer;
    transform: rotate(135deg);

    &::after {
        content: "\\270F";
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

interface EditIconProps {
    readonly onClick: () => void
}

export const EditIcon: React.FC<EditIconProps> = ({ onClick }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClick();
    }
    return (
        <EditIconContainer onClick={handleClick} />
    )
}