import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {
    const [_createUser, result] = useMutation(CREATE_USER);
    return { _createUser, result };
};

export default useCreateUser;