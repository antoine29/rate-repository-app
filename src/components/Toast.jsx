import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import AuthStorageContext from '../contexts/AuthStorageContext';

const Toast = () => {
    const [visible, setVisible] = useState(true);
    const context = useContext(AuthStorageContext);

    useEffect(() => {
        setVisible(context.toastMessage !== undefined);
    }, [context.toastMessage]);


    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => {
        setVisible(false);
        context.toastMessage = undefined;
    };

    if (context.toastMessage)
        return ( 
            <View style={styles.container}>
                {/* <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button> */}
                <Snackbar
                    visible={false}
                    onDismiss={onDismissSnackBar}
                    // action={{
                    //     label: 'Undo',
                    //     onPress: () => {
                    //         // Do something
                    //     },
                    // }}
                >
                    {context.toastMessage}
                </Snackbar>
            </View>
        );
    
    return null;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default Toast;