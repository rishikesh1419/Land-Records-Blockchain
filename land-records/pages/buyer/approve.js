import React, { Component } from 'react';
import Web3, { providers } from "web3";
import { Card, Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/layout';
import { Router } from '../../routes';
const assert = require('assert');

const compiledLand = require('../../ethereum/build/Land.json');
const compiledOwner = require('../../ethereum/build/Owner.json');
const compiledLandData = require('../../ethereum/build/LandData.json');
let web3 = new Web3();

web3.setProvider(
  new providers.WebsocketProvider(
    'ws://localhost:8546'
  )
);

const allLandData = new web3.eth.Contract(JSON.parse(compiledLandData.interface),
"0x3431afdd36e8566deb2013c9f102f943e36f3c1c");


class LandView extends Component {
  static async getInitialProps(props) {
    const result = new web3.eth.Contract(JSON.parse(compiledLand.interface),
      props.query.address1);
    const buyerAdd = await result.methods.getBuyers().call();
    return { address1: props.query.address1, address2: props.query.address2, buyerAdd: buyerAdd };
  }
  state = {
    errorMsg: '',
    loading: false
  };

  onClick = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMsg: '' });
    const result = new web3.eth.Contract(JSON.parse(compiledLand.interface),
      this.props.address1);

    // const owner = new web3.eth.Contract(JSON.parse(compiledOwner.interface),
    //   address2);
    try {
      await Promise.resolve(await web3.eth.personal.unlockAccount("0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", "real"));
      console.log("unlocked!");
      await Promise.resolve(await result.methods.approve(this.props.address2)
        .send({
          from: "0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", gas: "100000"
        }));
        console.log("true");
        const t1 = await allLandData.methods.loginData().call();
      await Promise.resolve(t1);
      console.log(t1[0]);
      const t2 = await allLandData.methods.returnUser(t1[0]).call();
      await Promise.resolve(t2);
      console.log(t2);
      const seller = new web3.eth.Contract(JSON.parse(compiledOwner.interface), t2);

      await Promise.resolve(await seller.methods.delLandAddr(this.props.address1).send({from:"0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", gas:"100000"}));
      console.log("deleted!");
      Router.replaceRoute('/');
        const ownerAdd = allLandData.methods.returnUser(this.props.address2).call();
        await Promise.resolve(ownerAdd);
        console.log("New owner");
        console.log(ownerAdd);
        const owner = new web3.eth.Contract(JSON.parse(compiledOwner.interface),ownerAdd);
        console.log("Owner created");
        const t5 = await owner.methods.addLand(this.props.address1).send({from:"0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", gas:"100000"});
        await Promise.all([t5]);
        console.log("land added");
      //const owneraddr = await landdata.methods.users(this.props.address).call();
      //ADMIN ADDS LAND
      // await owner.methods.addLand(address1)
      //   .send({
      //     from: "0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", gas: "100000"
      //   });
      //RETURN MONEY 
      // for (var i = 0; i < this.props.buyerAdd[0].length; i++) {
      //   web3.eth.sendTransaction({
      //     from: "0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4",
      //     to: this.props.buyerAdd[0][i],
      //     gas: "100000"
      //   });
      // }
      // AFTER THIS DELETE BUYERS
      const t4 = await result.methods.delBuyers()
        .send({
          from: "0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", gas: "100000"
        });

      await Promise.resolve(t4);

      Router.replaceRoute('/');
      //  Router.replaceRoute(`/owner/${this.props.adddress}`);
    } catch (err) {
      this.setState({ errorMsg: err.message });
      console.log(err.message);
    }
    this.setState({ loading: false });
  };

  renderbuyers() {
    console.log(this.props.address1);
    console.log(this.props.address2);
    console.log(this.props.buyerAdd);
    // const items = this.props.buyerAdd[0].map(address => {
    //   return {
    //     header: <p>{address}, {this.props.address1}</p>,
    //     description: (
    //       <Button onClick={this.onClick} loading={this.state.loading} primary >Approve</Button>),
    //     fluid: true
    //   };

    // });
    const items = [{
      header:<h2>Approve the buyer</h2>,
      description:(<div><p>Land Address: {this.props.address1}</p>
        <p>Buyer Address: {this.props.address2}</p>
        <p><Button onClick={this.onClick} loading={this.state.loading} primary >Approve</Button></p></div>),
      fluid: true
    }];
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>{this.renderbuyers()}</div>
      </Layout>
    );
  }
}
export default LandView;