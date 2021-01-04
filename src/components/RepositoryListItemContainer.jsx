import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryListItem from './RepositoryListItem';

const RepositoryListItemContainer = () => {
    const { id } = useParams();
    const [getRepository, { loading, data, error }] = useRepository();
    useEffect(()=>{
        console.log(`setting repoView ${id}`);
        if(id!==null){
            getRepository({ variables: { id: id }});
        }
    }, [id]);

    if(loading) return(<Text>loading!</Text>);
    if(error) return(<Text>Error!</Text>);
    if(data !== undefined){
        if(data.repository !== undefined){
            return (
                <FlatList
                    data={[data.repository]}
                    renderItem={({ item, index }) => <RepositoryListItem key={index} repository={item} showGoToRepoBttn/>}
                ></FlatList>            
            );
        }
    }

    return null;
};

export default RepositoryListItemContainer;