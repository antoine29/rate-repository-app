import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
    const { loading, error, data } = useQuery(AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
    });

    if (loading) return { authorizedUser: undefined, loading };
    return { authorizedUser: data.authorizedUser, loading };
};

export default useAuthorizedUser;