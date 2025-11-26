import * as React from 'react'
import styled from 'styled-components'

const TextFieldContainer = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-size: 1rem;
        color: var(--foreground);
        margin-bottom: .5rem;
    }

    input {
        height: 40px;
        border-radius: 5px;
        padding: 1rem;
        color: var(--foreground);
        font-size: 1rem;
        border: 1px solid var(--border);
        background-color: var(--background-secondary);
        outline: none;

        &::placeholder {
            color: var(--muted);
        }
        &:focus {
            border-color: var(--primary);
        }
    }
`;

interface TextFieldProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    label: string
}

export const TextField: React.FC<TextFieldProps> = ({ value, onChange, placeholder, label }) => {
    return (
        <TextFieldContainer>
            <label>{label}</label>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
        </TextFieldContainer>
    )
}