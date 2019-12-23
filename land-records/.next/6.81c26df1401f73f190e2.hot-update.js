webpackHotUpdate(6,{

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _web = __webpack_require__(545);

var _web2 = _interopRequireDefault(_web);

var _layout = __webpack_require__(1194);

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = __webpack_require__(460);

var _routes = __webpack_require__(748);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rishikesh/Desktop/land-records/land-records/pages/index.js?entry';
//const Web3 = require("web3");

var compiledLand = __webpack_require__(1211);

var compiledLandData = __webpack_require__(751);
var compiledOwner = __webpack_require__(1212);
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/rishikesh/Desktop/land-records/land-records/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/rishikesh/Desktop/land-records/land-records/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi44MWMyNmRmMTQwMWY3M2YxOTBlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTQwMGM2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0Jztcbi8vY29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpO1xuaW1wb3J0IFdlYjMsIHsgcHJvdmlkZXJzIH0gZnJvbSBcIndlYjNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IHtDYXJkLCBCdXR0b24sIEdyaWR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJztcbmNvbnN0IGNvbXBpbGVkTGFuZD1yZXF1aXJlKCcuLi9ldGhlcmV1bS9idWlsZC9MYW5kLmpzb24nKTtcblxuY29uc3QgY29tcGlsZWRMYW5kRGF0YT1yZXF1aXJlKCcuLi9ldGhlcmV1bS9idWlsZC9MYW5kRGF0YS5qc29uJyk7XG5jb25zdCBjb21waWxlZE93bmVyPXJlcXVpcmUoJy4uL2V0aGVyZXVtL2J1aWxkL093bmVyLmpzb24nKTtcbmxldCB3ZWIzID0gbmV3IFdlYjMoKTtcblxuXG53ZWIzLnNldFByb3ZpZGVyKFxuICAgIG5ldyBwcm92aWRlcnMuV2Vic29ja2V0UHJvdmlkZXIoXG4gICAgICAgICd3czovL2xvY2FsaG9zdDo4NTQ2J1xuICAgIClcbik7XG5cbmNvbnN0IGFsbExhbmREYXRhID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEpTT04ucGFyc2UoY29tcGlsZWRMYW5kRGF0YS5pbnRlcmZhY2UpLFxuXCIweDM0MzFhZmRkMzZlODU2NmRlYjIwMTNjOWYxMDJmOTQzZTM2ZjNjMWNcIik7XG5cbmNsYXNzIE93bmVySG9tZSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgICBjb25zdCB0bXAgPSBhd2FpdCBhbGxMYW5kRGF0YS5tZXRob2RzLmxvZ2luRGF0YSgpLmNhbGwoKTtcbiAgICAgIGNvbnN0IHRtcDEgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUodG1wKTtcbiAgICAgIGNvbnNvbGUubG9nKHRtcDEpO1xuICAgICAgY29uc3QgdG1wMiA9IGF3YWl0IGFsbExhbmREYXRhLm1ldGhvZHMucmV0dXJuVXNlcih0bXAxWzBdKS5jYWxsKCk7XG4gICAgICBjb25zdCB0bXAzID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHRtcDIpO1xuICBjb25zdCByZXN1bHQgPW5ldyB3ZWIzLmV0aC5Db250cmFjdChKU09OLnBhcnNlKGNvbXBpbGVkT3duZXIuaW50ZXJmYWNlKSx0bXAzKTtcbiAgICAgICAgY29uc3QgbGFuZHMxID0gYXdhaXQgcmVzdWx0Lm1ldGhvZHMuZ2V0T3duZWRMYW5kcygpLmNhbGwoKTtcbiAgICAgICAgY29uc3QgbGFuZHMgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUobGFuZHMxKTtcbiAgICAgICAgY29uc3Qgb3duPSBhd2FpdCByZXN1bHQubWV0aG9kcy5vd25lck5hbWUoKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IG93bmFkaHI9IGF3YWl0IHJlc3VsdC5tZXRob2RzLm93bmVyQWRoYWFyKCkuY2FsbCgpO1xuICAgICAgICBjb25zdCBvd25kb2IgPSBhd2FpdCByZXN1bHQubWV0aG9kcy5kb2IoKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IHByaWNlcyA9IFtdO1xuICAgICAgICBjb25zdCBsb2NzID0gW107XG4gICAgICAgIGNvbnN0IGFyZWFzID0gW107XG4gICAgICAgIGNvbnN0IGZvclNhbGVzID0gW107XG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaTxsYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxhbmRzW2ldICE9IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIpIHtcbiAgICAgICAgICBjb25zdCBpbnN0YW5jZT1uZXcgd2ViMy5ldGguQ29udHJhY3QoSlNPTi5wYXJzZShjb21waWxlZExhbmQuaW50ZXJmYWNlKSxsYW5kc1tpXSk7XG4gICAgICAgICAgcHJpY2VzLnB1c2goYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5sYW5kUHJpY2UoKS5jYWxsKCkpO1xuICAgICAgICAgIGxvY3MucHVzaChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmxvY2F0aW9uKCkuY2FsbCgpKTtcbiAgICAgICAgICB0b2tlbnMucHVzaChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLnRva2VuQW10KCkuY2FsbCgpKTtcbiAgICAgICAgICBhcmVhcy5wdXNoKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMubGFuZEFyZWEoKS5jYWxsKCkpO1xuICAgICAgICAgIGZvclNhbGVzLnB1c2goYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5mb3JzYWxlKCkuY2FsbCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0b2tlbnMxID0gYXdhaXQgUHJvbWlzZS5hbGwodG9rZW5zKTtcbiAgICAgIGNvbnN0IHByaWNlczEgPSBhd2FpdCBQcm9taXNlLmFsbChwcmljZXMpO1xuICAgICAgY29uc3QgbG9jczEgPSBhd2FpdCBQcm9taXNlLmFsbChsb2NzKTtcbiAgICAgIGNvbnN0IGFyZWFzMSA9IGF3YWl0IFByb21pc2UuYWxsKGFyZWFzKTtcbiAgICAgIGNvbnN0IGZvclNhbGVzMSA9IGF3YWl0IFByb21pc2UuYWxsKGZvclNhbGVzKTtcblxuICAgICAgICByZXR1cm4ge2xhbmRzLCBvd24sIG93bmFkaHIsIG93bmRvYiwgbG9jczEsIGFyZWFzMSwgdG9rZW5zMSwgcHJpY2VzMX07XG5cbiAgICB9XG5cblxuICAgIC8vIHJlbmRlcmxhbmRvd25zKClcbiAgICAvLyB7XG4gICAgLy8gICBjb25zdCBpdGVtcz10aGlzLnByb3BzLmxhbmRzLm1hcChhZGRyZXNzID0+IHtcbiAgICAvLyAgICAgcmV0dXJue1xuICAgIC8vICAgICAgIGhlYWRlcjphZGRyZXNzLFxuICAgIC8vICAgICAgIGRlc2NyaXB0aW9uOig8cD48TGluayByb3V0ZT17YC9vd25lci8ke2FkZHJlc3N9YH0+XG4gICAgLy8gICAgICAgPGE+Rm9yIFNhbGU8L2E+XG4gICAgLy8gICA8L0xpbms+LDxMaW5rIHJvdXRlPXtgL2J1eWVyLyR7YWRkcmVzc31gfT5cbiAgICAvLyAgIDxhPkdldCBCdXllcnM8L2E+XG4gICAgLy8gICA8L0xpbms+PC9wPiksXG4gICAgLy8gICAgICAgZmx1aWQ6dHJ1ZVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuXG4gICAgLy8gfVxuXG4gICAgcmVuZGVybGFuZG93bnMoKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5sb2NzKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yKHZhciBpID0wO2k8dGhpcy5wcm9wcy5sYW5kcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sYW5kc1tpXSAhPSBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHRoaXMucHJvcHMubG9jczFbaV0sXG4gICAgICAgICAgICAgICAgLy8gaGVhZGVyOnRoaXMucHJvcHMubGFuZHNbaV0sXG4gICAgICAgICAgICAgICAgbWV0YTogKDxwPkhhc2ggQWRkcmVzcyA6IHt0aGlzLnByb3BzLmxhbmRzW2ldfSAgPGJyLz4gQXJlYSA6IHt0aGlzLnByb3BzLmFyZWFzMVtpXX0gc3EuIG0uIDxici8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvcD4pLFxuICAgICAgICAgICAgICAgIC8vIG1ldGE6IHRoaXMucHJvcHMubG9jc1tpXVswXStcIiBcIit0aGlzLnByb3BzLmxvY3NbaV1bMV0sXG4gICAgICAgICAgICAgICAgLy8gUHJpY2U6e3RoaXMucHJvcHMucHJpY2VzMVtpXX0gPGJyLz5Ub2tlbiBBbXQ6IHt0aGlzLnByb3BzLnRva2VuczFbaV19XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246KDxwPjxMaW5rIHJvdXRlPXtgL293bmVyLyR7dGhpcy5wcm9wcy5sYW5kc1tpXX1gfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPjxhPlZpZXcgSGlzdG9yeTwvYT48L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvYnV5ZXIvJHt0aGlzLnByb3BzLmxhbmRzW2ldfWB9PjxCdXR0b24+PGE+R2V0IERldGFpbHM8L2E+PC9CdXR0b24+PC9MaW5rPiA8L3A+KSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2NvbnRlbnQ6KDxCdXR0b24+YnRuMTwvQnV0dG9uPiw8QnV0dG9uPmJ0bjE8L0J1dHRvbj4pLFxuICAgICAgICAgICAgICBmbHVpZDp0cnVlIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgICAgIH1cblxuXG5cblxuXG5cblxuXG5cbnJlbmRlcigpe1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICA8R3JpZCBjZWxsZWQ9J2ludGVybmFsbHknPlxuIDxHcmlkLlJvdz5cbiA8R3JpZC5Db2x1bW4gd2lkdGg9ezV9PlxuIDxDYXJkLkdyb3VwPlxuIDxDYXJkPlxuIDxDYXJkLkNvbnRlbnQ+XG4gPENhcmQuSGVhZGVyPjxoND5OYW1lIDoge3RoaXMucHJvcHMub3dufTwvaDQ+PC9DYXJkLkhlYWRlcj5cbiA8Q2FyZC5EZXNjcmlwdGlvbj48aDQ+QWRoYWFyIE5vIDoge3RoaXMucHJvcHMub3duYWRocn08L2g0PjwvQ2FyZC5EZXNjcmlwdGlvbj5cbiA8Q2FyZC5EZXNjcmlwdGlvbj48aDQ+RE9CIDoge3RoaXMucHJvcHMub3duZG9ifTwvaDQ+PC9DYXJkLkRlc2NyaXB0aW9uPlxuIDwvQ2FyZC5Db250ZW50PlxuIDwvQ2FyZD5cbiA8L0NhcmQuR3JvdXA+XG4gPC9HcmlkLkNvbHVtbj5cbiBcbiA8R3JpZC5Db2x1bW4gd2lkdGg9ezExfT4gXG4gPGRpdj48aDI+T3duZWQgTGFuZHM8L2gyPjxici8+PC9kaXY+XG4gPGRpdj57IHRoaXMucmVuZGVybGFuZG93bnMoKSB9PC9kaXY+XG4gPC9HcmlkLkNvbHVtbj5cbiA8L0dyaWQuUm93PlxuPC9HcmlkPlxuPC9MYXlvdXQ+XG5cbiAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBPd25lckhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7OztBQUxBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7QUEwQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFJQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBZEE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQWFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FBOUdBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7QUFLQTs7Ozs7QUFDQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7OztBQVJBOzs7Ozs7O0FBV0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==