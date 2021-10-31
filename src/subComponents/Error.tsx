import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useHistory } from '../components/Router';

const Error = (props: { error: { name: string; message: string }, showBack?: boolean }) => {

  const history = useHistory();
  setTimeout(() => {
    history.replace('./error-invalid-code');
  }, 100);
  return (
    <View
      style={{
        flex : 100,
        position: 'absolute',
        backgroundColor: '#F7E5EC',
        paddingHorizontal: 10,
        paddingVertical: 4,
        maxWidth: 250,
        width: '65%',
        left: 0,
        right: 0,
        top: '30%',
        marginHorizontal: 'auto',
        zIndex: 55,
        borderRadius: 10,
      }}>
      <Text
        style={{
          flex : 100,
          fontWeight: '500',
          color: '#FD0845',
          textAlign: 'center',
          fontSize: 30,
        }}>
        {props.error.name}
      </Text>
      <Text style={{ textAlign: 'center', padding:4 }}>{props.error.message}</Text>
      {props.showBack ? <TouchableOpacity
        style={{ alignSelf: 'center' }}
        onPress={() => history.replace('./')}>
        <Text
          style={{
            flex : 100,
            fontWeight: '500',
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}>
          Redirecting to homepage
                </Text>
      </TouchableOpacity> : null}
    </View>
  )
}
export default Error;