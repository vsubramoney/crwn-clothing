import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth,createUserProfileDocument } from 'firebase';

class App extends React.Component {
   
  constructor() {
    super();

    this.state ={
      currentuser:null
    }
  }

  unsubscribeFromAuth=null
  conponentDidMount(){
    this.unscubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
  
      console.log({currentUser:userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
    
}

export default App;
