import React,{Component} from 'react';
import Web3, { providers } from "web3";
// import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/layout';
import {Link, Router } from '../../routes';
import {Card, Button} from 'semantic-ui-react';

const compiledLandData=require('../../ethereum/build/LandData.json');

const compiledLand=require('../../ethereum/build/Land.json');

let web3 = new Web3();

web3.setProvider(
    new providers.WebsocketProvider(
        'ws://localhost:8546'
    )
);

const result =new web3.eth.Contract(JSON.parse(compiledLandData.interface),
"0x3431afdd36e8566deb2013c9f102f943e36f3c1c"); //land data address

class LandsForSale extends Component{
  static async getInitialProps(){
      const landsSale = await Promise.resolve(await result.methods.getAvailLands().call());
      const prices1 = [];
      const locs1 = [];
      const tokens1 = [];
      const areas1 = [];
      for (var i = 0; i<landsSale.length; i++) {
        const instance=new web3.eth.Contract(JSON.parse(compiledLand.interface),landsSale[i]);
          prices1.push(await Promise.resolve(await instance.methods.landPrice().call()));
          locs1.push(await Promise.resolve(await instance.methods.location().call()));
          tokens1.push(await Promise.resolve(await instance.methods.tokenAmt().call()));
          areas1.push(await Promise.resolve(await instance.methods.landArea().call()));
      }

      return {landsSale, areas1, prices1, locs1, tokens1};

  }

  renderlandforsale()
  {
  

    //   //const instance=new web3.eth.Contract(JSON.parse(compiledLand.interface),address);
    //       //const price = await Promise.resolve(await instance.methods.landPrice().call());
    //       //const loc = await Promise.resolve(await instance.methods.location().call());
    //       //const token = await Promise.resolve(await instance.methods.tokenAmt().call());
    //       //const area = await Promise.resolve(await instance.methods.landArea().call());
    //       //for = Promise.re solve(await instance.methods.forsale().call());

    const items = [];



    for (var i = 0; i< this.props.landsSale.length; i++) {   

      items.push({
        header:this.props.locs1[i],
        meta:(<div><p>Hash Address: {this.props.landsSale[i]}</p>
        <p>Area: {this.props.areas1[i]}</p>
          <p>Price: {this.props.prices1[i]}</p>
          <p>Token: {this.props.tokens1[i]}</p>
          </div>),
        description:(
          <Link route={`/lands/${this.props.landsSale[i]}`}>
          <a>Buy Land</a>
          </Link>),
        fluid:true
      });
    }
    return <Card.Group items={items} />;

  }

render(){

  return (
        <Layout>
          <div><h2>Lands For Sale</h2><br/></div>
          <div>{ this.renderlandforsale() }</div>
        </Layout>
  );
  }
}

export default LandsForSale;
