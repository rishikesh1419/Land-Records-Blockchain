'use strict';

var routes = require('next-routes')();

routes.add('/owner/:address', '/owner/land') //for sale
.add('/buyer/:address', 'buyer/index').add('/buyer/:address1/:address2', '/buyer/approve').add('/govt/', '/govt/index').add('/govt/:address', '/govt/approve').add('/lands', 'lands/index').add('/lands/:address', '/lands/apply');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVEsQUFBZDs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLG1CQUE4QixBQUE5QixlQUE4QyxBQUE5QztDQUNDLEFBREQsSUFDSyxBQURMLG1CQUN1QixBQUR2QixlQUVDLEFBRkQsSUFFSyxBQUZMLDhCQUVtQyxBQUZuQyxrQkFHQyxBQUhELElBR0ssQUFITCxVQUdjLEFBSGQsZUFJQyxBQUpELElBSUssQUFKTCxrQkFJc0IsQUFKdEIsaUJBS0MsQUFMRCxJQUtLLEFBTEwsVUFLYyxBQUxkLGVBTUMsQUFORCxJQU1LLEFBTkwsbUJBTXVCLEFBTnZCOztBQVFBLE9BQU8sQUFBUCxVQUFlLEFBQWYiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Jpc2hpa2VzaC9EZXNrdG9wL2xhbmQtcmVjb3Jkcy9sYW5kLXJlY29yZHMifQ==