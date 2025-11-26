import * as React from 'react'
import styled from 'styled-components'
import { Stack } from '../../Components/Stack/Stack'
import { addTicket, updateTicket } from '../../Store/TicketSystemSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Ticket, TicketPriority, TicketStatus } from '../../App.types'
import type { RootState } from '../../Store/Store';
import { TextField } from '../../Components/TextField/TextField'
import { Button } from '../../Components/Button/Button'
import { useParams } from 'react-router-dom';
import { Select } from '../../Components/Select/Select'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../Platform/Routes'

const FormWrapper = styled.div`
    gap: 1rem;
    width: 100%;
    max-width: 600px;
    margin: 40px auto;
    background-color: var(--background-secondary);
    color: var(--foreground);
    opacity: none;
    border-radius: 5px;
    padding: 0 1rem 1rem;
`;

const ManageTicketFormFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

const mapToStatus: Record<TicketStatus, string> = {
    [TicketStatus.ToDo]: 'To Do',
    [TicketStatus.InProgress]: 'In Progress',
    [TicketStatus.InReview]: 'In Review',
    [TicketStatus.Closed]: 'Closed',
}

const mapToPriority: Record<TicketPriority, string> = {
    [TicketPriority.Low]: 'Low',
    [TicketPriority.Medium]: 'Medium',
    [TicketPriority.High]: 'High',
}

export const ManageTicketForm: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {tickets} = useSelector((state: RootState) => state.ticketSystem)
    const isEdit = Boolean(id);
    const currentTicket = tickets.find((ticket: Ticket) => ticket.id === id)

    const [title, setTitle] = React.useState<string>(currentTicket?.title ?? '')
    const [description, setDescription] = React.useState<string>(currentTicket?.description ?? '')
    const [assignee, setAssignee] = React.useState<string>(currentTicket?.assignee ?? '')
    const [status, setStatus] = React.useState<TicketStatus>(currentTicket?.status ?? TicketStatus.ToDo)
    const [priority, setPriority] = React.useState<TicketPriority>(currentTicket?.priority ?? TicketPriority.Low)

    const isDisabled = React.useMemo(() => {
        return !title || !description || !assignee;
    }, [title, description, assignee]);

    const handleSave = () => {
        if (isEdit) {
            dispatch(updateTicket({
                ...currentTicket!,
                title,
                description,
                status,
                assignee,
                priority,
            }))
        } else {
            dispatch(addTicket({
                id: tickets.length ? String(Number(tickets[tickets.length - 1].id) + 1) : '1',
                title,
                description,
                status,
                assignee,
                createdAt: new Date(),
                priority,
            }))
        }

        navigate(ROUTES.home)
    }

    return (
        <FormWrapper>
            <Stack space="xlarge">
                <h1>{isEdit ? 'Edit Ticket' : 'Create Ticket'}</h1>
                <Stack>
                    <TextField label="Title" value={title} onChange={setTitle} placeholder="Add title" />
                    <TextField label="Description" value={description} onChange={setDescription} placeholder="Add description" />
                    <TextField label="Assignee" value={assignee} onChange={setAssignee} placeholder="Add assignee" />
                    <Select label="Status" value={status} onChange={setStatus} options={Object.values(TicketStatus).map((status) => ({ label: mapToStatus[status], value: status }))} />
                    <Select label="Priority" value={priority} onChange={setPriority} options={Object.values(TicketPriority).map((priority) => ({ label: mapToPriority[priority], value: priority }))} />
                </Stack>
                <ManageTicketFormFooter>
                    <Button onClick={handleSave} isDisabled={isDisabled}>{isEdit ? 'Update' : 'Create'}</Button>
                </ManageTicketFormFooter>
                    
            </Stack>

        </FormWrapper>
    )
}