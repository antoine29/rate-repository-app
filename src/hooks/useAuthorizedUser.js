import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (includeReviews=false) => {
    const { loading, error, data } = useQuery(AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
        variables: {includeReviews}
    });

    if (loading) return { authorizedUser: undefined, loading };
    return { authorizedUser: data.authorizedUser, loading };
};

export default useAuthorizedUser;