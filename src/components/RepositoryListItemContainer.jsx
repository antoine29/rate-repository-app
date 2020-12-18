import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryListItem from './RepositoryListItem';

const RepositoryListItemContainer = () => {
    const { id } = useParams();
    const [repoId, setRepoId] = useState(null);
    const [getRepository, { loading, data, error }] = useRepository();
    useEffect(()=>{
        if(id!==null){
            setRepoId(id);
            console.log('setted repo:', repoId);
            getRepository({ variables: { id: repoId }});
        }
    }, [id, loading]);

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