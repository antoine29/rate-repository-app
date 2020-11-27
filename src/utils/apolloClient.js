import ApolloClient from 'apollo-boost';
import { APOLLO_URI } from '@env';

const createApolloClient = () => {
    console.log('APOLLO_URI', APOLLO_URI);
    return new ApolloClient({
        // Replace the IP address part with your own IP address!
        // uri: 'http://192.168.0.22:5000/graphql',
        uri: APOLLO_URI
    });
};

export default createApolloClient;