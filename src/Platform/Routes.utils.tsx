
import { ROUTES } from './Routes';
import { useNavigate } from 'react-router-dom';

export const useNavigateToDetails = () => {
    const navigate = useNavigate();
    
    return (id: number) => {
        const detailsPath = ROUTES.details.replace(':id', id.toString());
        navigate(detailsPath);
    }
}