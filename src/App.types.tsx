export enum TicketPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export enum TicketStatus {
  ToDo = 'ToDo',
  InProgress = 'InProgress',
  InReview = 'InReview',
  Closed = 'Closed',
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  assignee: string;
  createdAt: Date;
  priority: TicketPriority;
}