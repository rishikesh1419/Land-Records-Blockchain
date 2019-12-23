'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rishikesh/Desktop/land-records/land-records/pages/login.js?entry';
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


var web3 = new _web2.default();

var compiledLandData = require('../ethereum/build/LandData.json');
var allLandData = new web3.eth.Contract(JSON.parse(compiledLandData.interface), "0x3431afdd36e8566deb2013c9f102f943e36f3c1c");

web3.setProvider(new _web.providers.WebsocketProvider('ws://localhost:8546'));

var LoginPage = function (_Component) {
  (0, _inherits3.default)(LoginPage, _Component);

  function LoginPage() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LoginPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LoginPage.__proto__ || (0, _getPrototypeOf2.default)(LoginPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      user: '',
      password: '',
      errorMsg: '',
      loading: false
      // color:"blue"
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var lg, lg1, lg2, tmp, tmp1;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMsg: '' });
                _context.next = 4;
                return web3.eth.personal.unlockAccount("0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", "real");

              case 4:
                _context.prev = 4;
                _context.next = 7;
                return web3.eth.personal.unlockAccount(_this.state.user, _this.state.password);

              case 7:
                lg = _context.sent;
                lg1 = _promise2.default.resolve(lg);

                if (!lg1) {
                  _context.next = 25;
                  break;
                }

                _context.t0 = _promise2.default;
                _context.next = 13;
                return allLandData.methods.newLogin(_this.state.user, _this.state.password).send({ from: "0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", gas: "100000" });

              case 13:
                _context.t1 = _context.sent;
                _context.next = 16;
                return _context.t0.resolve.call(_context.t0, _context.t1);

              case 16:
                lg2 = _context.sent;
                _context.next = 19;
                return allLandData.methods.loginData().call();

              case 19:
                tmp = _context.sent;
                _context.next = 22;
                return _promise2.default.resolve(tmp);

              case 22:
                tmp1 = _context.sent;

                console.log(tmp1);
                _routes.Router.replaceRoute('/');

              case 25:
                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t2 = _context['catch'](4);

                _this.setState({ errorMsg: _context.t2.message });

              case 30:
                _this.setState({ loading: false });

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 27]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LoginPage, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, '\n      body > div,\n      body > div > div,\n      body > div > div > div.login-form {\n        height: 100%;\n      }\n    '), _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '100%' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', color: 'blue', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, icon: 'user', iconPosition: 'left', placeholder: 'User address', value: this.state.user,
        onChange: function onChange(event) {
          return _this3.setState({ user: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        icon: 'lock',
        iconPosition: 'left',
        placeholder: 'Password',
        type: 'password',
        value: this.state.password,
        onChange: function onChange(event) {
          return _this3.setState({ password: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, 'Submit')))))));
    }
  }]);

  return LoginPage;
}(_react.Component);

exports.default = LoginPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiV2ViMyIsInByb3ZpZGVycyIsIkZvcm0iLCJDb250YWluZXIiLCJCdXR0b24iLCJHcmlkIiwiSW1hZ2UiLCJTZWdtZW50IiwiSGVhZGVyIiwiSGVhZCIsIkxheW91dCIsIlJvdXRlciIsIndlYjMiLCJjb21waWxlZExhbmREYXRhIiwicmVxdWlyZSIsImFsbExhbmREYXRhIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJzZXRQcm92aWRlciIsIldlYnNvY2tldFByb3ZpZGVyIiwiTG9naW5QYWdlIiwic3RhdGUiLCJ1c2VyIiwicGFzc3dvcmQiLCJlcnJvck1zZyIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInBlcnNvbmFsIiwidW5sb2NrQWNjb3VudCIsImxnIiwibGcxIiwicmVzb2x2ZSIsIm1ldGhvZHMiLCJuZXdMb2dpbiIsInNlbmQiLCJmcm9tIiwiZ2FzIiwibGcyIiwibG9naW5EYXRhIiwiY2FsbCIsInRtcCIsInRtcDEiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEZBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTyxBQUFVLEFBQVEsQUFBTyxBQUFNLEFBQVE7O0FBQ3ZELEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFjOzs7OztBQWpHdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEFBQUssU0FBUyxFQUFDLE1BQUssTUFBQSxBQUFNLE9BRGhCLEFBQ1YsQUFBYyxBQUFtQjtBQUZuQztvQkFBQTtzQkFIQSxBQUVBLEFBQ0EsQUFTQTtBQVRBOzJCQVNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEsdUNBQ0EsQUFBQyxzQkFBRCxBQUFNO2VBQU4sQUFFRTtjQUZGLEFBRU8sQUFDTDtzQkFIRixBQUdlLEFBQ2I7cUJBSkYsQUFJYyxBQUNaO2NBTEYsQUFLTyxBQUNMO2VBQU8sS0FBQSxBQUFLLE1BTmQsQUFNb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFTLE1BQUEsQUFBTSxPQUR0QixBQUNSLEFBQWMsQUFBdUI7QUFSekM7O29CQUFBO3NCQURBLEFBQ0EsQUFVSTtBQVZKO0FBQ0UsMEJBU0UsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixNQUEzQixBQUFnQyxTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQXRELEFBQTRELFNBQVMsU0FBckU7b0JBQUE7c0JBQUE7QUFBQTtTQWpEWixBQUNJLEFBaUJFLEFBQ0osQUFNTSxBQUNBLEFBWUEsQUFXSSxBQWlCWDs7Ozs7QUFuR21CLEEsQUFzR3hCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImxvZ2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3Jpc2hpa2VzaC9EZXNrdG9wL2xhbmQtcmVjb3Jkcy9sYW5kLXJlY29yZHMifQ==