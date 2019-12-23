import React, {Component} from 'react';
//const Web3 = require("web3");
import Web3, { providers } from "web3";
import Layout from '../components/layout';
import {Card, Button, Grid} from 'semantic-ui-react';
import {Link} from '../routes';
const compiledLand=require('../ethereum/build/Land.json');

const compiledLandData=require('../ethereum/build/LandData.json');
const compiledOwner=require('../ethereum/build/Owner.json');
let web3 = new Web3();


web3.setProvider(
    new providers.WebsocketProvider(
        'ws://localhost:8546'
    )
);

const allLandData = new web3.eth.Contract(JSON.parse(compiledLandData.interface),
"0x3431afdd36e8566deb2013c9f102f943e36f3c1c");

class OwnerHome extends Component{
    static async getInitialProps(){
      const tmp = await allLandData.methods.loginData().call();
      const tmp1 = await Promise.resolve(tmp);
      console.log(tmp1);
      const tmp2 = await allLandData.methods.returnUser(tmp1[0]).call();
      const tmp3 = await Promise.resolve(tmp2);
  const result =new web3.eth.Contract(JSON.parse(compiledOwner.interface),tmp3);
        const lands1 = await result.methods.getOwnedLands().call();
        const lands = await Promise.resolve(lands1);
        const own= await result.methods.ownerName().call();
        const ownadhr= await result.methods.ownerAdhaar().call();
        const owndob = await result.methods.dob().call();
        const prices = [];
        const locs = [];
        const areas = [];
        const forSales = [];
        const tokens = [];
        for (var i = 0; i<lands.length; i++) {
            if (lands[i] != "0x0000000000000000000000000000000000000000") {
          const instance=new web3.eth.Contract(JSON.parse(compiledLand.interface),lands[i]);
          prices.push(await instance.methods.landPrice().call());
          locs.push(await instance.methods.location().call());
          tokens.push(await instance.methods.tokenAmt().call());
          areas.push(await instance.methods.landArea().call());
          forSales.push(await instance.methods.forsale().call());
        }
      }

      const tokens1 = await Promise.all(tokens);
      const prices1 = await Promise.all(prices);
      const locs1 = await Promise.all(locs);
      const areas1 = await Promise.all(areas);
      const forSales1 = await Promise.all(forSales);

        return {lands, own, ownadhr, owndob, locs1, areas1, tokens1, prices1};

    }


    // renderlandowns()
    // {
    //   const items=this.props.lands.map(address => {
    //     return{
    //       header:address,
    //       description:(<p><Link route={`/owner/${address}`}>
    //       <a>For Sale</a>
    //   </Link>,<Link route={`/buyer/${address}`}>
    //   <a>Get Buyers</a>
    //   </Link></p>),
    //       fluid:true
    //     };

    //   });
    //   return <Card.Group items={items} />;

    // }

    renderlandowns()
    {
        // console.log(this.props.locs);
        const items = [];
        for(var i =0;i<this.props.lands.length;i++) {
            if (this.props.lands[i] != "0x0000000000000000000000000000000000000000") {
            items.push({
                header: this.props.locs1[i],
                // header:this.props.lands[i],
                meta: (<p>Hash Address : {this.props.lands[i]}  <br/> Area : {this.props.areas1[i]} sq. m. <br/>
                
                    </p>),
                // meta: this.props.locs[i][0]+" "+this.props.locs[i][1],
                // Price:{this.props.prices1[i]} <br/>Token Amt: {this.props.tokens1[i]}
                description:(<p><Link route={`/owner/${this.props.lands[i]}`}>
                <Button><a>View History</a></Button></Link>
                <Link route={`/buyer/${this.props.lands[i]}`}><Button><a>Get Details</a></Button></Link> </p>),
                
                //content:(<Button>btn1</Button>,<Button>btn1</Button>),
              fluid:true 
            });
        }
        }
        return <Card.Group items={items} />;
      }









render(){

    return (
      <Layout>
      <Grid celled='internally'>
 <Grid.Row>
 <Grid.Column width={5}>
 <Card.Group>
 <Card>
 <Card.Content>
 <Card.Header><h4>Name : {this.props.own}</h4></Card.Header>
 <Card.Description><h4>Adhaar No : {this.props.ownadhr}</h4></Card.Description>
 <Card.Description><h4>DOB : {this.props.owndob}</h4></Card.Description>
 </Card.Content>
 </Card>
 </Card.Group>
 </Grid.Column>
 
 <Grid.Column width={11}> 
 <div><h2>Owned Lands</h2><br/></div>
 <div>{ this.renderlandowns() }</div>
 </Grid.Column>
 </Grid.Row>
</Grid>
</Layout>

    );
    }
}


export default OwnerHome;
