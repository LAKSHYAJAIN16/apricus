import React, {useState} from 'react';
import Join from './pages/Join';
import VideoCall from './pages/VideoCall';
import Create from './pages/Create';
import Authenticate from './pages/Authenticate';
import Home from './pages/Home';
import ErrorRedirect from './pages/Error-Invalid-Code';
import {Router, Route, Switch, Redirect} from './components/Router';
import PrivateRoute from './components/PrivateRoute';
import OAuth from './components/OAuth';
import Navigation from './components/Navigation';
import StoreToken from './components/StoreToken';
import {StorageProvider} from './components/StorageContext';
import GraphQLProvider from './components/GraphQLProvider';
// import JoinPhrase from './components/JoinPhrase';
import {SessionProvider} from './components/SessionContext';
import {ImageBackground, Platform, SafeAreaView, StatusBar} from 'react-native';
import ColorConfigure from './components/ColorConfigure';
import Toast from '../react-native-toast-message';
import ToastConfig from './subComponents/toastConfig';
import shouldAuthenticate from './utils/shouldAuthenticate';
import KeyboardManager from 'react-native-keyboard-manager';


if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableAutoToolbar(false);
  KeyboardManager.setShouldShowToolbarPlaceholder(false);
  KeyboardManager.setShouldResignOnTouchOutside(true);
}

const App: React.FC = () => {
  const [phrase, onChangePhrase] = useState('');

  return (
    <ImageBackground
      source={{uri: $config.BG}}
      style={{flex: 1}}
      resizeMode={'cover'}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar hidden={true} />
        <Toast ref={(ref) => Toast.setRef(ref)} config={ToastConfig} />
        <StorageProvider>
          <GraphQLProvider>
            <Router>
              <SessionProvider>
                <ColorConfigure>
                  <Navigation />
                  <Switch>
                    <Route exact path={'/'}>
                      <Redirect to={'/home'} />
                    </Route>
                    <Route exact path={'/home'}>
                      <Home />
                    </Route>
                    <Route exact path={'/error-invalid-code'}>
                      <ErrorRedirect />
                    </Route>
                    <Route exact path={'/authenticate'}>
                      <OAuth />
                    </Route>
                    <Route path={'/auth-token/:token'}>
                      <StoreToken />
                    </Route>
                    <Route exact path={'/join'}>
                      <Join phrase={phrase} onChangePhrase={onChangePhrase} />
                    </Route>
                    {shouldAuthenticate ? (
                      <PrivateRoute
                        path={'/create'}
                        failureRedirectTo={'/authenticate'}>
                        <Create />
                      </PrivateRoute>
                    ) : (
                      <Route path={'/create'}>
                        <Create />
                      </Route>
                    )}
                    <Route path={'/:phrase'}>
                      <VideoCall />
                    </Route>
                  </Switch>
                </ColorConfigure>
              </SessionProvider>
            </Router>
          </GraphQLProvider>
        </StorageProvider>
      </SafeAreaView>
    </ImageBackground>
  );
  // return <div> hello world</div>; {/* isn't join:phrase redundant now, also can we remove joinStore */}
};
export default App;
