var http_1 = require("./http");
var handler = {
    scheme: "https",
    domainHost: http_1.default.domainHost,
    parse: http_1.default.parse,
    serialize: http_1.default.serialize
};
exports.default = handler;
