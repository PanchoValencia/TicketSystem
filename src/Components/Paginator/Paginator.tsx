import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';


const PaginatorContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
`;

const CurrentPageText = styled.div`
    font-size: 1rem;
    line-height: 0;
    color: var(--secondary);
`;

interface PaginatorProps {
    readonly limit: number;
    readonly total: number;
    readonly onChange: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({ total, onChange, limit }) => {
    const pages = Math.ceil(total / limit);
    const [currentPage, setCurrentPage] = React.useState(1);

    const handleChange = (page: number) => {
        setCurrentPage(page);
        onChange(page);
    }

    return (
        <PaginatorContainer>
            {currentPage > 1 ? (
                <Button onClick={() => handleChange(currentPage - 1)} variant='link'>
                    Previous
                </Button>
            ) : null}
            {
                <CurrentPageText>
                    Page {currentPage} of {pages}
                </CurrentPageText>
            }
            {currentPage < pages ? (
                <Button onClick={() => handleChange(currentPage + 1)} variant='link'>
                    Next
                </Button>
            ) : null}
        </PaginatorContainer>
    )
}