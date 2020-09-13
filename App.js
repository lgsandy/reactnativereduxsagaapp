import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import Counter from './screens/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
