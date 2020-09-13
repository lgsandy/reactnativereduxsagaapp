import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GET_ALL_USER_INFO_REQUEST} from '../model/user/actions';

const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {id, name, email} = state.user;

  const login = () => {
    console.log('in login');
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      paylod: {id: '101', name: 'sandy', email: 'sandy@kumar.com'},
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <View style={{marginLeft: 70}}>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Text>{email}</Text>
      </View>
      <View style={{margin: 50}}>
        <Button title="login" onPress={() => login()}></Button>
      </View>
    </View>
  );
};
export default Counter;
