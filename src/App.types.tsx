export type TicketPriority = 'Low' | 'Medium' | 'High';

export type TicketStatus = 'ToDo' | 'InProgress' | 'InReview' | 'Closed';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  assignee: string;
  priority: TicketPriority;
  createdAt: Date;
}