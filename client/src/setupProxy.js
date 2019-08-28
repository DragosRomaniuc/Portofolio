const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/example',{target:'http://www.example.org'}));
}