import * as React from 'react';
import styled from 'styled-components';
import { TicketRow } from '../../Components/TicketRow/TicketRow';
import { Table } from '../../Components/Table/Table';
import { Paginator } from '../../Components/Paginator/Paginator';
import { useNavigateToDetails } from '../../Platform/Routes.utils';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Store/Store';

const limit = 10;

const TicketsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
`;

export const TicketsList: React.FC = () => {
    const [page, setPage] = React.useState(1);
    const navigateToDetails = useNavigateToDetails();
    const {searchQuery, tickets} = useSelector((state: RootState) => state.ticketSystem);

    const filteredTickets = React.useMemo(() => {
        if (!searchQuery) {
            return tickets;
        }
        return tickets.filter((ticket) => ticket.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, tickets]);
    
    const getPaginatedTickets = React.useMemo(() => {
        const start = (page - 1) * limit;
        const end = start + limit;
        return filteredTickets.slice(start, end);
    }, [page, filteredTickets]);


    React.useEffect(() => {
        if (searchQuery) {
            setPage(1);
        }
    }, [searchQuery]);

    return (
        <TicketsListContainer>
            <Table
                columns={['Title', 'Status']}
                data={getPaginatedTickets.map((ticket, idx) => (
                    <TicketRow
                        key={ticket.id}
                        ticketData={ticket}
                        onClick={() => navigateToDetails(ticket.id)}
                        isLast={idx === getPaginatedTickets.length -1}
                    />
                ))}
            />
            {
                filteredTickets.length === 0 ? (
                    <p>No tickets found</p>
                ) : null
            }
            {
                filteredTickets.length > limit ? (
                    <Paginator limit={limit} total={filteredTickets.length} onChange={setPage} currentPage={page} />
                ) : null
            }
        </TicketsListContainer>
    )
}