import * as React from 'react';
import styled from 'styled-components';

const TicketRowContainer = styled.div<{ isLast?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid var(--border)')};
    background-color: var(--card);
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        background-color: var(--accent);
    }
`;

const TicketRowTitle = styled.div`
    font-size: 1rem;
    margin: 0;
`;

const TicketRowStatus = styled.div`
    font-size: 1rem;
    color: var(--secondary);
`;

interface TicketRowProps {
    title: string;
    status: string;
    onClick: () => void;
    isLast?: boolean;
}

export const TicketRow: React.FC<TicketRowProps> = ({ title, status, onClick , isLast = false }) => {
    return (
        <TicketRowContainer onClick={onClick} isLast={isLast}>
            <TicketRowTitle>{title}</TicketRowTitle>
            <TicketRowStatus>{status}</TicketRowStatus>
        </TicketRowContainer>
    )
}