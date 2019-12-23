import React,{Component} from 'react';
import Web3, { providers } from "web3";
// import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/layout';
import {Link, Router } from '../../routes';
import {Card, Button} from 'semantic-ui-react';

const compiledLandData=require('../../ethereum/build/LandData.json');
let web3 = new Web3();

web3.setProvider(
    new providers.WebsocketProvider(
        'ws://localhost:8546'
    )
);
const result =new web3.eth.Contract(JSON.parse(compiledLandData.interface),
"0x3431afdd36e8566deb2013c9f102f943e36f3c1c"); //land data address


class ApprovedLands extends Component{
    static async getInitialProps(){
        const landsSale = await result.methods.getAvailLands().call();
        return {landsSale};
  
    }
    state = {

    }

    render(){

        return (
              <Layout>
                <div>{ this.renderlandforsale() }</div>
              </Layout>
        );
        }
}

export default ApprovedLands;