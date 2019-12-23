const routes= require('next-routes')();

routes.add('/owner/:address', '/owner/land')  //for sale
.add('/buyer/:address','buyer/index')
.add('/buyer/:address1/:address2', '/buyer/approve')
.add('/govt/','/govt/index')
.add('/govt/:address','/govt/approve')
.add('/lands','lands/index')
.add('/lands/:address','/lands/apply');

module.exports=routes;
