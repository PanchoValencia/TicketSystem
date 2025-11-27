import * as React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../Platform/Routes';
import { Button } from '../../Components/Button/Button';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../Store/TicketSystemSlice';
import { RootState } from '../../Store/Store';


const HeaderContainer = styled.div`
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
    const dispatch = useDispatch();
    const searchQuery = useSelector((state: RootState) => state.searchQuery);
    const isHomePage = pathname === ROUTES.home;
    const isCreatePage = pathname === ROUTES.create;
    const isValidPage = Object.values(ROUTES).includes(pathname);

    return (
        <HeaderContainer>
            <h1>Ticket System</h1>
            <ActionsContainer>
                {!isHomePage ? <Button onClick={() => navigate(ROUTES.home)} variant='link'>Home</Button> : null}
                {!isCreatePage && isValidPage ? <Button onClick={() => navigate(ROUTES.create)}>Create Ticket</Button> : null}
                {isHomePage ? <SearchBox onChange={(val) => dispatch(setSearchQuery(val))} value={searchQuery} /> : null}
            </ActionsContainer>
        </HeaderContainer>
    );
}