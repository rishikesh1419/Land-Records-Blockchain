import React,{Component} from 'react';
import Web3, { providers } from "web3";
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/layout';
import { Router } from '../../routes';
const compiledLand=require('../../ethereum/build/Land.json');
const compiledOwner=require('../../ethereum/build/Owner.json');

const compiledLandData=require('../../ethereum/build/LandData.json');
let web3 = new Web3();

web3.setProvider(
    new providers.WebsocketProvider(
        'ws://localhost:8546'
    )
);

const allLandData = new web3.eth.Contract(JSON.parse(compiledLandData.interface),
"0x3431afdd36e8566deb2013c9f102f943e36f3c1c");


class LandBuy extends Component{
  static async getInitialProps(props){
    const tmp = await allLandData.methods.loginData().call();
      const tmp1 = await Promise.resolve(tmp);
      // console.log(tmp1);
      // const tmp2 = await allLandData.methods.returnUser(tmp1[0]).call();
      // const tmp3 = await Promise.resolve(tmp2);
    return {address: props.query.address, user:tmp1};
  }
  state={
    errorMsg:'',
    loading:false
  };

onClick= async (event) => {
  event.preventDefault();
  this.setState({loading:true, errorMsg:''});
  const result =new web3.eth.Contract(JSON.parse(compiledLand.interface),
                this.props.address);
  try{

    const lg = await web3.eth.personal.unlockAccount(this.props.user.userLogin, this.props.user.password);
    const lg1 = Promise.resolve(lg);
  await result.methods
  .apply()
  .send({
    from : this.props.user.userLogin, gas : "100000"
  });
  Router.pushRoute('/');
  }  catch(err){
   this.setState({errorMsg:err.message});
  }
  this.setState({loading:false});
};


  render(){
    if(this.state.errorMsg == '') {
      return(
        <Layout>
          
      {/* <Message error header="oops!" content = {this.state.errorMsg}/> */}
      <Button onClick={this.onClick} loading={this.state.loading} primary>Apply for land</Button>
      </Layout>
      );
    }
    else {
    return(
      <Layout>
      <Message error header="oops!" content = {this.state.errorMsg}/>
      <Button onClick={this.onClick} loading={this.state.loading} primary>Apply for land</Button>
      </Layout>
    );
    }
  }
}
export default LandBuy;
