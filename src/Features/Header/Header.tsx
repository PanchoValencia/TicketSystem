import * as React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../Platform/Routes';
import { Button } from '../../Components/Button/Button';
import { SearchBox } from '../../Components/SearchBox/SearchBox';

const HeaderContainer = styled.div`
    // position: fixed;
    // width: 100%;
    // top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg);
    padding: 1.5rem;
    box-shadow: 0 1px 3px var(--primary);

    h1 {
        color: var(--primary);
        font-size: 1.8rem;
        margin: 0;
    }
`;

const ActionsContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Header: React.FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isHomePage = pathname === ROUTES.home;

    return (
        <HeaderContainer>
            <h1>Ticket System</h1>
            <ActionsContainer>
                {!isHomePage ? <Button onClick={() => navigate(ROUTES.home)} variant='link'>Home</Button> : null}
                {isHomePage ? <Button onClick={() => {}}>Create Ticket</Button> : null}
                {isHomePage ? <SearchBox onChange={() => {}} value={''} /> : null}
            </ActionsContainer>
        </HeaderContainer>
    );
}