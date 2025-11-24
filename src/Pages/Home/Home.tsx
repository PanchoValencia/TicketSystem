import * as React from 'react';
import {Header} from '../../Features/Header/Header';
import {TicketsList} from '../../Features/TicketsList/TicketsList';

export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <TicketsList />
    </div>
  );
};
