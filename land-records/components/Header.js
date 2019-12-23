
import { Menu, Icon, Button } from 'semantic-ui-react';
import Web3, { providers } from "web3";
import React,{Component} from 'react';
import {Link, Router } from '../routes';


let web3 = new Web3();
web3.setProvider(
    new providers.WebsocketProvider(
        'ws://localhost:8546'
    )
);

const compiledLandData=require('../ethereum/build/LandData.json');
const allLandData =new web3.eth.Contract(JSON.parse(compiledLandData.interface),"0x3431afdd36e8566deb2013c9f102f943e36f3c1c");

class Header extends Component{

  state={
    errorMsg: '',
    loading:false
  };
  onClick= async(event) => {
    event.preventDefault();
    this.setState({loading:true});
    try {
      await web3.eth.personal.unlockAccount("0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4","real");
    //const bl = await web3.eth.getAccounts();
    //console.log(bl);
    await allLandData.methods.logout().send({from : "0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", gas : "100000"});
    Router.replaceRoute('/login');
  } catch (err) {
    this.setState({errorMsg:err.message});
  }
  this.setState({loading:false});
  }
  

  render(){

    return(
    <Menu style={{marginTop:'10px'}}>
    <Menu.Item name="land">
    Land Record System
    </Menu.Item>
      <Menu.Menu position="right">
      <Menu.Item name="home">
      <Link route={`/`}><a>Home</a></Link>
      </Menu.Item>
      <Menu.Item name="home">
      <Link route={`/lands`}><a>Buy Land</a></Link>
      </Menu.Item>
  
      <Menu.Item name="home">
      <Icon name='user'/>
      <Button loading={this.state.loading} primary                                                                                                               onClick={this.onClick}>Logout</Button>
      </Menu.Item>
      
      </Menu.Menu>
  
    </Menu>  
    );
  }
  }
export default Header;
// onClick= async(event) => {
//   event.preventDefault();
//   const bl = await web3.eth.getAccounts();
//   console.log(bl);
// }

// export default() => {
  

//   return(
//   <Menu style={{marginTop:'10px'}}>
//   <Menu.Item name="land">
//   Land Record System
//   </Menu.Item>
//     <Menu.Menu position="right">
//     <Menu.Item name="home">
//     Home
//     </Menu.Item>
//     <Menu.Item name="home">
//     Buy
//     </Menu.Item>

//     <Menu.Item name="home">
//     <Icon name='user'/>
//     <Button onClick={this.onClick}>Send</Button>
//     </Menu.Item>
    
//     </Menu.Menu>

//   </Menu>  
//   );
// };

