'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _semanticUiReact = require('semantic-ui-react');

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rishikesh/Desktop/land-records/land-records/components/Header.js';

var web3 = new _web2.default();
web3.setProvider(new _web.providers.WebsocketProvider('ws://localhost:8546'));

var compiledLandData = require('../ethereum/build/LandData.json');
var allLandData = new web3.eth.Contract(JSON.parse(compiledLandData.interface), "0x3431afdd36e8566deb2013c9f102f943e36f3c1c");

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMsg: '',
      loading: false
    }, _this.onClick = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true });
                _context.prev = 2;
                _context.next = 5;
                return web3.eth.personal.unlockAccount("0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", "real");

              case 5:
                _context.next = 7;
                return allLandData.methods.logout().send({ from: "0xbfd4edfe86aa3787b7bb054c10d0362254ad50f4", gas: "100000" });

              case 7:
                _routes.Router.replaceRoute('/login');
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMsg: _context.t0.message });

              case 13:
                _this.setState({ loading: false });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'land', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Land Record System'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'home', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Home'))), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'home', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_routes.Link, { route: '/lands', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Buy Land'))), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'home', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, onClick: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Logout'))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnUiLCJJY29uIiwiQnV0dG9uIiwiV2ViMyIsInByb3ZpZGVycyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIlJvdXRlciIsIndlYjMiLCJzZXRQcm92aWRlciIsIldlYnNvY2tldFByb3ZpZGVyIiwiY29tcGlsZWRMYW5kRGF0YSIsInJlcXVpcmUiLCJhbGxMYW5kRGF0YSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiSGVhZGVyIiwic3RhdGUiLCJlcnJvck1zZyIsImxvYWRpbmciLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwicGVyc29uYWwiLCJ1bmxvY2tBY2NvdW50IiwibWV0aG9kcyIsImxvZ291dCIsInNlbmQiLCJmcm9tIiwiZ2FzIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQU87Ozs7QUFDZCxBQUFRLEFBQU0sQUFBYzs7Ozs7O0FBRzVCLElBQUksT0FBSixBQUFXLEFBQUk7QUFDZixLQUFBLEFBQUssWUFDRCxJQUFJLGVBQUosQUFBYyxrQkFEbEIsQUFDSSxBQUNJOztBQUlSLElBQU0sbUJBQWlCLFFBQXZCLEFBQXVCLEFBQVE7QUFDL0IsSUFBTSxjQUFhLElBQUksS0FBQSxBQUFLLElBQVQsQUFBYSxTQUFTLEtBQUEsQUFBSyxNQUFNLGlCQUFqQyxBQUFzQixBQUE0QixZQUFyRSxBQUFtQixBQUE2RDs7SSxBQUUxRTs7Ozs7Ozs7Ozs7Ozs7OzRNQUVKLEE7Z0JBQU0sQUFDTSxBQUNWO2VBRkksQSxBQUVJO0FBRkosQUFDSixhQUdGLEE7MkZBQVMsaUJBQUEsQUFBTSxPQUFOO3NFQUFBO29CQUFBOzZDQUFBO21CQUNQO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUZSLEFBRVAsQUFBYyxBQUFTO2dDQUZoQjtnQ0FBQTt1QkFJQyxLQUFBLEFBQUssSUFBTCxBQUFTLFNBQVQsQUFBa0IsY0FBbEIsQUFBZ0MsOENBSmpDLEFBSUMsQUFBNkU7O21CQUo5RTtnQ0FBQTt1QkFPRCxZQUFBLEFBQVksUUFBWixBQUFvQixTQUFwQixBQUE2QixLQUFLLEVBQUMsTUFBRCxBQUFRLDhDQUE4QyxLQVB2RixBQU9ELEFBQWtDLEFBQTREOzttQkFDcEc7K0JBQUEsQUFBTyxhQVJBLEFBUVAsQUFBb0I7Z0NBUmI7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBVVA7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFVBQVMsWUFWakIsQUFVUCxBQUFjLEFBQWM7O21CQUU5QjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQVpOLEFBWVQsQUFBYyxBQUFTOzttQkFaZDttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQWdCRCxBQUVOOzs2QkFDQSxBQUFDLHVDQUFLLE9BQU8sRUFBQyxXQUFkLEFBQWEsQUFBVztvQkFBeEI7c0JBQUEsQUFDQTtBQURBO09BQUEsa0JBQ0MsY0FBRCxzQkFBQSxBQUFNLFFBQUssTUFBWCxBQUFnQjtvQkFBaEI7c0JBQUE7QUFBQTtTQURBLEFBQ0EsQUFHRSx1Q0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNBO0FBREE7eUJBQ0MsY0FBRCxzQkFBQSxBQUFNLFFBQUssTUFBWCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUMsOEJBQUssT0FBTjtvQkFBQTtzQkFBQSxBQUFrQjtBQUFsQjt5QkFBa0IsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRmxCLEFBQ0EsQUFDQSxBQUFrQixBQUVsQiwyQkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxNQUFYLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQyw4QkFBSyxPQUFOO29CQUFBO3NCQUFBLEFBQXVCO0FBQXZCO3lCQUF1QixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMdkIsQUFJQSxBQUNBLEFBQXVCLEFBR3ZCLCtCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLE1BQVgsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFEQSxBQUNBLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckMsTUFBMkosU0FBUyxLQUFwSyxBQUF5SztvQkFBeks7c0JBQUE7QUFBQTtTQWZGLEFBQ0EsQUFJRSxBQVFBLEFBRUEsQUFPSDs7Ozs7QSxBQTlDa0IsQUFnRHJCOztrQkFBQSxBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmlzaGlrZXNoL0Rlc2t0b3AvbGFuZC1yZWNvcmRzL2xhbmQtcmVjb3JkcyJ9