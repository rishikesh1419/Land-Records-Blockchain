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

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rishikesh/Desktop/land-records/land-records/pages/index.js?entry';
//const Web3 = require("web3");

var compiledLand = require('../ethereum/build/Land.json');

var compiledLandData = require('../ethereum/build/LandData.json');
var compiledOwner = require('../ethereum/build/Owner.json');
var web3 = new _web2.default();

web3.setProvider(new _web.providers.WebsocketProvider('ws://localhost:8546'));

var allLandData = new web3.eth.Contract(JSON.parse(compiledLandData.interface), "0x3431afdd36e8566deb2013c9f102f943e36f3c1c");

var OwnerHome = function (_Component) {
    (0, _inherits3.default)(OwnerHome, _Component);

    function OwnerHome() {
        (0, _classCallCheck3.default)(this, OwnerHome);

        return (0, _possibleConstructorReturn3.default)(this, (OwnerHome.__proto__ || (0, _getPrototypeOf2.default)(OwnerHome)).apply(this, arguments));
    }

    (0, _createClass3.default)(OwnerHome, [{
        key: 'renderlandowns',

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

        value: function renderlandowns() {
            // console.log(this.props.locs);
            var items = [];
            for (var i = 0; i < this.props.lands.length; i++) {
                if (this.props.lands[i] != "0x0000000000000000000000000000000000000000") {
                    items.push({
                        header: this.props.locs1[i],
                        // header:this.props.lands[i],
                        meta: _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                            }
                        }, 'Hash Address : ', this.props.lands[i], '  ', _react2.default.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                            }
                        }), ' Area : ', this.props.areas1[i], ' sq. m. ', _react2.default.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                            }
                        })),
                        // meta: this.props.locs[i][0]+" "+this.props.locs[i][1],
                        // Price:{this.props.prices1[i]} <br/>Token Amt: {this.props.tokens1[i]}
                        description: _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 95
                            }
                        }, _react2.default.createElement(_routes.Link, { route: '/owner/' + this.props.lands[i], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 95
                            }
                        }, _react2.default.createElement(_semanticUiReact.Button, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        }, _react2.default.createElement('a', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        }, 'View History'))), _react2.default.createElement(_routes.Link, { route: '/buyer/' + this.props.lands[i], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        }, _react2.default.createElement(_semanticUiReact.Button, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        }, _react2.default.createElement('a', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        }, 'Get Details'))), ' '),

                        //content:(<Button>btn1</Button>,<Button>btn1</Button>),
                        fluid: true
                    });
                }
            }
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { celled: 'internally', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement(_semanticUiReact.Card, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, 'Name : ', this.props.own)), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, 'Adhaar No : ', this.props.ownadhr)), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, 'DOB : ', this.props.owndob)))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, 'Owned Lands'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            })), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, this.renderlandowns())))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var tmp, tmp1, tmp2, tmp3, result, lands1, lands, own, ownadhr, owndob, prices, locs, areas, forSales, tokens, i, instance, tokens1, prices1, locs1, areas1, forSales1;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return allLandData.methods.loginData().call();

                            case 2:
                                tmp = _context.sent;
                                _context.next = 5;
                                return _promise2.default.resolve(tmp);

                            case 5:
                                tmp1 = _context.sent;

                                console.log(tmp1);
                                _context.next = 9;
                                return allLandData.methods.returnUser(tmp1[0]).call();

                            case 9:
                                tmp2 = _context.sent;
                                _context.next = 12;
                                return _promise2.default.resolve(tmp2);

                            case 12:
                                tmp3 = _context.sent;
                                result = new web3.eth.Contract(JSON.parse(compiledOwner.interface), tmp3);
                                _context.next = 16;
                                return result.methods.getOwnedLands().call();

                            case 16:
                                lands1 = _context.sent;
                                _context.next = 19;
                                return _promise2.default.resolve(lands1);

                            case 19:
                                lands = _context.sent;
                                _context.next = 22;
                                return result.methods.ownerName().call();

                            case 22:
                                own = _context.sent;
                                _context.next = 25;
                                return result.methods.ownerAdhaar().call();

                            case 25:
                                ownadhr = _context.sent;
                                _context.next = 28;
                                return result.methods.dob().call();

                            case 28:
                                owndob = _context.sent;
                                prices = [];
                                locs = [];
                                areas = [];
                                forSales = [];
                                tokens = [];
                                i = 0;

                            case 35:
                                if (!(i < lands.length)) {
                                    _context.next = 66;
                                    break;
                                }

                                if (!(lands[i] != "0x0000000000000000000000000000000000000000")) {
                                    _context.next = 63;
                                    break;
                                }

                                instance = new web3.eth.Contract(JSON.parse(compiledLand.interface), lands[i]);
                                _context.t0 = prices;
                                _context.next = 41;
                                return instance.methods.landPrice().call();

                            case 41:
                                _context.t1 = _context.sent;

                                _context.t0.push.call(_context.t0, _context.t1);

                                _context.t2 = locs;
                                _context.next = 46;
                                return instance.methods.location().call();

                            case 46:
                                _context.t3 = _context.sent;

                                _context.t2.push.call(_context.t2, _context.t3);

                                _context.t4 = tokens;
                                _context.next = 51;
                                return instance.methods.tokenAmt().call();

                            case 51:
                                _context.t5 = _context.sent;

                                _context.t4.push.call(_context.t4, _context.t5);

                                _context.t6 = areas;
                                _context.next = 56;
                                return instance.methods.landArea().call();

                            case 56:
                                _context.t7 = _context.sent;

                                _context.t6.push.call(_context.t6, _context.t7);

                                _context.t8 = forSales;
                                _context.next = 61;
                                return instance.methods.forsale().call();

                            case 61:
                                _context.t9 = _context.sent;

                                _context.t8.push.call(_context.t8, _context.t9);

                            case 63:
                                i++;
                                _context.next = 35;
                                break;

                            case 66:
                                _context.next = 68;
                                return _promise2.default.all(tokens);

                            case 68:
                                tokens1 = _context.sent;
                                _context.next = 71;
                                return _promise2.default.all(prices);

                            case 71:
                                prices1 = _context.sent;
                                _context.next = 74;
                                return _promise2.default.all(locs);

                            case 74:
                                locs1 = _context.sent;
                                _context.next = 77;
                                return _promise2.default.all(areas);

                            case 77:
                                areas1 = _context.sent;
                                _context.next = 80;
                                return _promise2.default.all(forSales);

                            case 80:
                                forSales1 = _context.sent;
                                return _context.abrupt('return', { lands: lands, own: own, ownadhr: ownadhr, owndob: owndob, locs1: locs1, areas1: areas1, tokens1: tokens1, prices1: prices1 });

                            case 82:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return OwnerHome;
}(_react.Component);

exports.default = OwnerHome;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiV2ViMyIsInByb3ZpZGVycyIsIkxheW91dCIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiTGluayIsImNvbXBpbGVkTGFuZCIsInJlcXVpcmUiLCJjb21waWxlZExhbmREYXRhIiwiY29tcGlsZWRPd25lciIsIndlYjMiLCJzZXRQcm92aWRlciIsIldlYnNvY2tldFByb3ZpZGVyIiwiYWxsTGFuZERhdGEiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsIk93bmVySG9tZSIsIml0ZW1zIiwiaSIsInByb3BzIiwibGFuZHMiLCJsZW5ndGgiLCJwdXNoIiwiaGVhZGVyIiwibG9jczEiLCJtZXRhIiwiYXJlYXMxIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsIm93biIsIm93bmFkaHIiLCJvd25kb2IiLCJyZW5kZXJsYW5kb3ducyIsIm1ldGhvZHMiLCJsb2dpbkRhdGEiLCJjYWxsIiwidG1wIiwicmVzb2x2ZSIsInRtcDEiLCJjb25zb2xlIiwibG9nIiwicmV0dXJuVXNlciIsInRtcDIiLCJ0bXAzIiwicmVzdWx0IiwiZ2V0T3duZWRMYW5kcyIsImxhbmRzMSIsIm93bmVyTmFtZSIsIm93bmVyQWRoYWFyIiwiZG9iIiwicHJpY2VzIiwibG9jcyIsImFyZWFzIiwiZm9yU2FsZXMiLCJ0b2tlbnMiLCJpbnN0YW5jZSIsImxhbmRQcmljZSIsImxvY2F0aW9uIiwidG9rZW5BbXQiLCJsYW5kQXJlYSIsImZvcnNhbGUiLCJhbGwiLCJ0b2tlbnMxIiwicHJpY2VzMSIsImZvclNhbGVzMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFFZixBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFNLEFBQVE7O0FBQ3RCLEFBQVEsQUFBVzs7Ozs7QUFK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OztpQ0FQcUI7QTs7Ozs7O3VDQVdaLGtCQUFBLEFBQVEsSUFBUixBQUFZLEE7O2lDQUE1QjtBOzt1Q0FDZ0Isa0JBQUEsQUFBUSxJLEFBQVIsQUFBWTs7aUNBQTVCO0E7O3VDQUNjLGtCQUFBLEFBQVEsSUFBUixBQUFZLEE7O2lDQUExQjtBOzt1Q0FDZSxrQkFBQSxBQUFRLEksQUFBUixBQUFZOztpQ0FBM0I7QTs7dUNBQ2tCLGtCQUFBLEFBQVEsSUFBUixBQUFZLEE7O2lDQUE5QjtBO2lFQUVHLEVBQUMsT0FBRCxPQUFRLEtBQVIsS0FBYSxTQUFiLFNBQXNCLFFBQXRCLFFBQThCLE9BQTlCLE9BQXFDLFFBQXJDLFFBQTZDLFNBQTdDLFNBQXNELFNBQXRELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuQ1MsQSxBQTJIeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcmlzaGlrZXNoL0Rlc2t0b3AvbGFuZC1yZWNvcmRzL2xhbmQtcmVjb3JkcyJ9