import * as React from 'react';
import {Header} from '../../Features/Header/Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Store/Store';
import { Ticket } from '../../App.types';
import styled from 'styled-components';
import { useNavigateToEdit } from '../../Platform/Routes.utils';
import { EditIcon } from '../../Components/EditIcon/EditIcon';

const DetailsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    max-width: 600px;
    margin: 40px auto;
    background-color: var(--card);
    color: var(--foreground);
    border-radius: 5px;

    h1 {
        font-size: 2rem;
        line-height: 2rem;
        margin: 0;
    }
`;

const ReadOnlyField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: 1rem;
        color: var(--secondary);
    }

    p {
        font-size: 1rem;
        color: var(--foreground);
    }
`;

const EditIconContainer = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
`;

export const Details: React.FC = () => {
  const { id } = useParams();
  const navigateToEdit = useNavigateToEdit();
  const { tickets } = useSelector((state: RootState) => state);
  const ticket = tickets.find((ticket: Ticket) => ticket.id === id);

  return (
    <div>
      <Header />
      <DetailsContainer>
        <EditIconContainer>
            <EditIcon onClick={() => navigateToEdit(id ?? '')} />
        </EditIconContainer>
        <h1>Details</h1>
        <ReadOnlyField>
            <label>Title</label>
            <p>{ticket?.title}</p>
        </ReadOnlyField>
        <ReadOnlyField>
            <label>Description</label>
            <p>{ticket?.description}</p>
        </ReadOnlyField>
        <ReadOnlyField>
            <label>Assignee</label>
            <p>{ticket?.assignee}</p>
        </ReadOnlyField>
        <ReadOnlyField>
            <label>Status</label>
            <p>{ticket?.status}</p>
        </ReadOnlyField>
        <ReadOnlyField>
            <label>Priority</label>
            <p>{ticket?.priority}</p>
        </ReadOnlyField>
        <ReadOnlyField>
            <label>Created At</label>
            <p>{ticket?.createdAt.toLocaleString()}</p>
        </ReadOnlyField>
      </DetailsContainer>
    </div>
  );
};
