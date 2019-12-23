import React,{Component} from 'react';
import Web3, { providers } from "web3";
import {Card, Button, Input, Message,} from 'semantic-ui-react';
import Layout from '../../components/layout';
import {Link, Router } from '../../routes';

const compiledLandData=require('../../ethereum/build/LandData.json');

const compiledLand=require('../../ethereum/build/Land.json');
const compiledOwner=require('../../ethereum/build/Owner.json');

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
    const result =new web3.eth.Contract(JSON.parse(compiledLand.interface),
                props.query.address);
    const buyerAdd=await Promise.resolve(await result.methods.getBuyers().call());
    console.log(buyerAdd);
    //console.log("www");
    const buyerNames1 = [];
    for (var i =0; i< buyerAdd[0].length; i++) {
      const tmp2 = await allLandData.methods.returnUser(buyerAdd[0][i]).call();
      const tmp3 = await Promise.resolve(tmp2);
 
      const instance = new web3.eth.Contract(JSON.parse(compiledOwner.interface),tmp3);
      buyerNames1.push(await instance.methods.ownerName().call());
    }
    const buyerNames = await Promise.all(buyerNames1);
    console.log(buyerNames);
    return {address: props.query.address, buyerAdd:buyerAdd, buyerNames: buyerNames};
  
  }
  state={
    landprice:'',
    tokenprice:'',
    errorMsg:'',
    loading:false
  };

  // onClick= async (event) => {
  //   event.preventDefault();
  //   this.setState({loading:true, errorMsg:''});
  //   const result =new web3.eth.Contract(JSON.parse(compiledLand.interface),
  //                 this.props.address);
  //   try{
  //     await result.methods.approve(this.props.address2)
  //     .send({
  //       from : "0x407883f092649d23988dd027160924bb672c6711", gas : "100000"
  //     });

  //     const landaddr = await landdata.methods.users(this.props.address).call();

  //     await owner.methods.addLand(landaddr)
  //     .send({
  //       from : "0x407883f092649d23988dd027160924bb672c6711", gas : "100000"
  //     });

  //     // AFTER THIS DELETE BUYERS
  //     Router.pushRoute('/');
  // //  Router.replaceRoute(`/owner/${this.props.adddress}`);
  //   }  catch(err){
  //    this.setState({errorMsg:err.message});
  //   }
  //   this.setState({loading:false});
  // };
// onClick= async (event) => {
//   event.preventDefault();
//   this.setState({loading:true, errorMsg:''});
//   const result =new web3.eth.Contract(JSON.parse(compiledLand.interface),
//                 this.props.address);
//   try{
//   await result.methods
//   .putForSAle(this.state.landprice,this.state.tokenprice)
//   .send({
//     from : "0x407883f092649d23988dd027160924bb672c6711", gas : "100000"
//   });
//   Router.pushRoute('/');
// //  Router.replaceRoute(`/owner/${this.props.adddress}`);
//   }  catch(err){
//    this.setState({errorMsg:err.message});
//   }
//   this.setState({loading:false});
// };

renderbuyers()
{
  // const items=this.props.buyerAdd[0].map(address => {
  //   return{
  //     header:address,
  //     description:(
  //       <Link route={`/buyer/${this.props.address}/${address}`}>
  //       <a>
  //       <Button primary >Approve</Button>
  //       </a>
  //       </Link>),
  //     fluid:true
  //   };

 // });
  const items = [];
  for (var i = 0; i<this.props.buyerAdd[0].length; i++) {
    items.push({
      header: (<h3>Name: {this.props.buyerNames[i]}</h3>),
      meta: (<div>Hash Address: {this.props.buyerAdd[0][i]}</div>),
      description:(
              <Link route={`/buyer/${this.props.address}/${this.props.buyerAdd[0][i]}`}>
              <a><br/>
              <Button primary >Approve</Button>
              </a>
              </Link>),
      fluid:true
    });
  }
  return <Card.Group items={items} />;
}
  render(){
    return(
      <Layout>
      <div>{ this.renderbuyers() }</div>
      </Layout>
    );
  }
}
export default LandView;
