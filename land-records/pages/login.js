// import React, {Component} from 'react';
// import Web3, { providers } from "web3";
// import { Form , Container,Button} from 'semantic-ui-react';
// import Head from 'next/head';
// import Layout from '../components/layout';
// import { Router } from '../routes';

// let web3 = new Web3();

// const compiledLandData=require('../ethereum/build/LandData.json');
// const allLandData =new web3.eth.Contract(JSON.parse(compiledLandData.interface),"0x3431afdd36e8566deb2013c9f102f943e36f3c1c");


// web3.setProvider(
//     new providers.WebsocketProvider(
//         'ws://localhost:8546'
//     )
// );

// class LoginPage extends Component{
//   state={
//     user:'',
//     password:'',
//     errorMsg:'',
//     loading:false
//   };


//   onSubmit= async (event) => {
//     event.preventDefault();
//     this.setState({loading:true, errorMsg:''});
//     await web3.eth.personal.unlockAccount("0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4","real");
//     try {
//       const lg = await web3.eth.personal.unlockAccount(this.state.user, this.state.password);
//       const lg1 = Promise.resolve(lg);
//       if (lg1) {
//         const lg2 = await Promise.resolve(await allLandData.methods.newLogin(this.state.user, this.state.password).send({from:"0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4",gas:"100000"}));
//         const tmp = await allLandData.methods.loginData().call();
//       const tmp1 = await Promise.resolve(tmp);
//       console.log(tmp1);
//         Router.replaceRoute('/');
//       }
//     }
//     catch(err) {
//       this.setState({errorMsg:err.message});
//     }
//     this.setState({loading:false});
//   }

//   render(){

//     return (
//         <Container >
//         <Head>
//         <link
//             rel="stylesheet"
//             href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
//           />
//           </Head>
            
//             <h1>Login</h1>
//             <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
//             {/* <Form.Group widths={2}> */}
//             <Form.Field>
//               <label>User Address</label>
//               <input value={this.state.user}
//               onChange={event=>
//               this.setState({user:event.target.value})}/>
//               <br></br>
//             </Form.Field>
            
//             <Form.Field>
//               <label>Password</label>
//               <input type='password' value={this.state.password}
//               onChange={event=>
//               this.setState({password:event.target.value})} />
//             </Form.Field>
//             {/* </Form.Group> */}
//             <Button loading={this.state.loading} primary>Submit</Button>
//           </Form>
          
            
          

//          </Container>
//         );
//     }
// }

// export default LoginPage;


import React, {Component} from 'react';
import Web3, { providers } from "web3";
import { Form , Container,Button, Grid , Image,Segment,Header} from 'semantic-ui-react';
import Head from 'next/head';
import Layout from '../components/layout';
import { Router } from '../routes';


let web3 = new Web3();

const compiledLandData=require('../ethereum/build/LandData.json');
const allLandData =new web3.eth.Contract(JSON.parse(compiledLandData.interface),"0x3431afdd36e8566deb2013c9f102f943e36f3c1c");


web3.setProvider(
    new providers.WebsocketProvider(
        'ws://localhost:8546'
    )
);

class LoginPage extends Component{
  state={
    user:'',
    password:'',
    errorMsg:'',
    loading:false
    // color:"blue"
  };


  onSubmit= async (event) => {
    event.preventDefault();
    this.setState({loading:true, errorMsg:''});
    await web3.eth.personal.unlockAccount("0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4","real");
    try {
      const lg = await web3.eth.personal.unlockAccount(this.state.user, this.state.password);
      const lg1 = Promise.resolve(lg);
      if (lg1) {
        const lg2 = await Promise.resolve(await allLandData.methods.newLogin(this.state.user, this.state.password).send({from:"0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4",gas:"100000"}));
        const tmp = await allLandData.methods.loginData().call();
      const tmp1 = await Promise.resolve(tmp);
      console.log(tmp1);
        Router.replaceRoute('/');
      }
    }
    catch(err) {
      this.setState({errorMsg:err.message});
    }
    this.setState({loading:false});
  }

  render(){

    return (
        <Container >
        
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

        
        <Head>
        <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          </Head>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}><br/><br/><br/><br/><br/><br/><br/><br/>
      {/* <div><img src="/mh3.png" class="ui small image"/></div> */}
        <Header as='h1' color='blue' textAlign='center'>
           Log-in to your account
        </Header>
            {/* <h1>Login</h1> */}
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
            <Segment stacked>
            {/* <Form.Group widths={2}> */}
            <Form.Field>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='User address' value={this.state.user}
              onChange={event=>
              this.setState({user:event.target.value})} />
              {/* <label >User Address</label> */}
              {/* <input  value={this.state.user}
              onChange={event=>
              this.setState({user:event.target.value})}/> */}
            </Form.Field>
            
            <Form.Field>
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={event=>
                this.setState({password:event.target.value})}
            />
                <Button color='blue' fluid size='large' loading={this.state.loading} primary>Submit</Button>
              {/* <label>Password</label> */}
              {/* // <input type='password' value={this.state.password}
              // onChange={event=>
              // this.setState({password:event.target.value})} /> */}
            </Form.Field>
            {/* </Form.Group> */}
            
            </Segment>
          </Form>
          
            </Grid.Column>
            </Grid>
          
              
         </Container>
        );
    }
}

export default LoginPage;