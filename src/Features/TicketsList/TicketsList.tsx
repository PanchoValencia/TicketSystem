import * as React from 'react';
import styled from 'styled-components';
import { TicketRow } from '../../Components/TicketRow/TicketRow';
import { Table } from '../../Components/Table/Table';
import { Paginator } from '../../Components/Paginator/Paginator';
import { useNavigateToDetails } from '../../Platform/Routes.utils';

const limit = 10;

const TicketsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
`;

const tickets = [
    {
        id: 1,
        title: 'Ticket 1',
        status: 'Open',
    },
    {
        id: 2,
        title: 'Ticket 2',
        status: 'In Progress',
    },
    {
        id: 3,
        title: 'Ticket 3',
        status: 'Closed',
    },
    {
        id: 4,
        title: 'Ticket 4',
        status: 'Open',
    },
    {
        id: 5,
        title: 'Ticket 5',
        status: 'In Progress',
    },
    {
        id: 6,
        title: 'Ticket 6',
        status: 'Closed',
    },
    {
        id: 7,
        title: 'Ticket 7',
        status: 'Open',
    },
    {
        id: 8,
        title: 'Ticket 8',
        status: 'In Progress',
    },
    {
        id: 9,
        title: 'Ticket 9',
        status: 'Closed',
    },
    {
        id: 10,
        title: 'Ticket 10',
        status: 'Open',
    },
    {
        id: 11,
        title: 'Ticket 11',
        status: 'In Progress',
    },
    {
        id: 12,
        title: 'Ticket 12',
        status: 'Closed',
    },
];

export const TicketsList: React.FC = () => {
    const [page, setPage] = React.useState(1);
    const navigateToDetails = useNavigateToDetails();
    
    const getPaginatedTickets = React.useMemo(() => {
        const start = (page - 1) * limit;
        const end = start + limit;
        return tickets.slice(start, end);
    }, [page]);

    return (
        <TicketsListContainer>
            <Table
                columns={['Title', 'Status']}
                data={getPaginatedTickets.map((ticket, idx) => (
                    <TicketRow
                        key={ticket.id}
                        title={ticket.title}
                        status={ticket.status}
                        onClick={() => navigateToDetails(ticket.id)}
                        isLast={idx === getPaginatedTickets.length -1}
                    />
                ))}
            />
            <Paginator limit={limit} total={tickets.length} onChange={setPage} />
        </TicketsListContainer>
    )
}