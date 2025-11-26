
import { ROUTES } from './Routes';
import { useNavigate } from 'react-router-dom';

export const useNavigateToDetails = () => {
    const navigate = useNavigate();
    
    return (id: string) => {
        const detailsPath = ROUTES.details.replace(':id', id.toString());
        navigate(detailsPath);
    }
}

export const useNavigateToEdit = () => {
    const navigate = useNavigate();
    
    return (id: string) => {
        const editPath = ROUTES.edit.replace(':id', id.toString());
        navigate(editPath);
    }
}