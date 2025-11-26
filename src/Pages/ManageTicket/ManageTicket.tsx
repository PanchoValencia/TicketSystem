import * as React from 'react';
import {Header} from '../../Features/Header/Header';
import { ManageTicketForm } from '../../Features/ManageTicketForm/ManageTicketForm';

export const ManageTicket: React.FC = () => {
  return (
    <div>
      <Header />
      <ManageTicketForm />
    </div>
  );
};
