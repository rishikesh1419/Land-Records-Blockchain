import React, {Component} from 'react';
import Web3, { providers } from "web3";
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/layout';
import { Router } from '../../routes';
const assert = require('assert');

const compiledLand=require('../../ethereum/build/Land.json');
const compiledLandData=require('../../ethereum/build/LandData.json');


let web3 = new Web3();

web3.setProvider(
    new providers.WebsocketProvider(
        'ws://localhost:8546'
    )
);
const allLandData = new web3.eth.Contract(JSON.parse(compiledLandData.interface),
"0x3431afdd36e8566deb2013c9f102f943e36f3c1c");


class LandView extends Component{
  static async getInitialProps(props){
    // const result =new web3.eth.Contract(JSON.parse(compiledLand.interface),
    //               props.query.address);
    // console.log("OKAY"+props.query.address);
    return {address: props.query.address};
  }
  state={
    landprice:'',
    tokenprice:'',
    errorMsg:'',
    loading:false
  };

onSubmit= async (event) => {
  event.preventDefault();
  const tmp = await allLandData.methods.loginData().call();
      const tmp1 = await Promise.resolve(tmp);
      console.log(tmp1);
      // const tmp2 = await allLandData.methods.returnUser(tmp1[0]).call();
      // const tmp3 = await Promise.resolve(tmp2);
  this.setState({loading:true, errorMsg:''});
  const result =new web3.eth.Contract(JSON.parse(compiledLand.interface),
                this.props.address);
    console.log(result);
  try{
    await web3.eth.personal.unlockAccount(tmp1[0],tmp1[1]);
  await result.methods
  .putForSAle(this.state.landprice,this.state.tokenprice)
  .send({
    from : tmp1[0], gas : "100000"
  });
  allLandData.methods.addForSale(this.props.address).send({from : tmp1[0], gas : "100000"});
  Router.pushRoute('/');
//  Router.replaceRoute(`/owner/${this.props.address}`);
  }  catch(err){
   this.setState({errorMsg:err.message});
  }
  this.setState({loading:false});
};


  render(){
    return(
      <Layout>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
      <Form.Field>
      <Input label="Price" labelPosition="left"
      value={this.state.landprice}
      onChange={event=>
      this.setState({landprice:event.target.value})}/>
      <br/>
      <br/>
      <Input label="Token " labelPosition="left"
      value={this.state.tokenprice}
      onChange={event=>
      this.setState({tokenprice:event.target.value})}/>

      </Form.Field>
      <Message error header="Oops!" content = {this.state.errorMsg}/>
      <Button loading={this.state.loading} primary>ForSale</Button>
      </Form>
      </Layout>
    );
  }
}
export default LandView;
