import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
    const [authorize, result] = useMutation(AUTHORIZE);

    const signIn = async (user, password) => {
        await authorize({ variables: { username: user, password: password } });
        return result.data;
    };

    return { signIn };
};

export default useSignIn;