import * as React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
`;

const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    background-color: var(--primary);
    color: var(--bg);
    font-size: 1.5rem;
    font-weight: 600;

    div:last-child {
        width: 60px;
    }
`;

const TableBody = styled.div`
    overflow-y: auto;
    max-height: 600px;
`;

interface TableProps {
    readonly columns: ReadonlyArray<string>;
    readonly data: ReadonlyArray<React.ReactNode>;
}

export const Table: React.FC<TableProps> = ({ data , columns }) => {
    return (
        <TableContainer>
            <TableHeader>
                {columns.map((column) => (
                    <div key={column}>{column}</div>
                ))}
            </TableHeader>
            <TableBody>
                {data}
            </TableBody>
        </TableContainer>
    )
}