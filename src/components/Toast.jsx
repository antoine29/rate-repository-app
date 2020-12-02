import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
// import AuthStorageContext from '../contexts/AuthStorageContext';

const Toast = ({message}) => {
    const [visible, setVisible] = useState(true);
    // const context = useContext(AuthStorageContext);

    // useEffect(() => {
    //     setVisible(context.toastMessage !== undefined);
    // }, [context.toastMessage]);


    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => {
        setVisible(false);
        // context.toastMessage = undefined;
    };

    if (message && message !== null){
        return ( 
            <View style={styles.container}>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            // Do something
                        },
                    }}
                >
                    {message}
                </Snackbar>
            </View>
            //     {/* <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button> */}
        );
    }
    
    return null;
};

const styles = StyleSheet.create({
    container: {
        // flex: 2,
        // justifyContent: 'space-between',
    },
});

export default Toast;