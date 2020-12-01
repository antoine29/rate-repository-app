import ApolloClient from 'apollo-boost';
import { APOLLO_URI } from '@env';

const createApolloClient = (authStorage) => {
    console.log('APOLLO_URI', APOLLO_URI);
    return new ApolloClient({
        request: async (operation) => {
            try {
                const accessToken = await authStorage.getAccessToken();
                operation.setContext({
                    headers: {
                        authorization: accessToken ? `Bearer ${accessToken}` : '',
                    },
                });
            } catch (e) {
                console.log(e);
            }
        },
        // Replace the IP address part with your own IP address!
        // uri: 'http://192.168.0.22:5000/graphql',
        uri: APOLLO_URI
    });
};

export default createApolloClient;