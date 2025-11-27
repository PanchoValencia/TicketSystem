import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

const CommonTextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const PaginatorContainer = styled(CommonTextContainer)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    gap: 1rem;
`;

const CurrentPageText = styled.div`
    font-size: 1rem;
    color: var(--secondary);
`;

interface PaginatorProps {
    readonly limit: number;
    readonly total: number;
    readonly onChange: (page: number) => void;
    readonly currentPage: number;
}

export const Paginator: React.FC<PaginatorProps> = ({ total, onChange, limit, currentPage }) => {
    const pages = Math.ceil(total / limit);

    const handleChange = (page: number) => {
        onChange(page);
    }

    const startShowingItem = (currentPage * limit - limit + 1);
    const endShowingItem = Math.min(currentPage * limit, total);

    return (
        <PaginatorContainer>
            <CommonTextContainer>{startShowingItem + ' to ' + endShowingItem + ' of ' + total }</CommonTextContainer>
            <CommonTextContainer>
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
            </CommonTextContainer>
        </PaginatorContainer>
    )
}