var uri_1 = require("../uri");
var NID$ = "(?:[0-9A-Za-z][0-9A-Za-z\\-]{1,31})";
var PCT_ENCODED$ = "(?:\\%[0-9A-Fa-f]{2})";
var TRANS$$ = "[0-9A-Za-z\\(\\)\\+\\,\\-\\.\\:\\=\\@\\;\\$\\_\\!\\*\\'\\/\\?\\#]";
var NSS$ = "(?:(?:" + PCT_ENCODED$ + "|" + TRANS$$ + ")+)";
var URN_SCHEME = new RegExp("^urn\\:(" + NID$ + ")$");
var URN_PATH = new RegExp("^(" + NID$ + ")\\:(" + NSS$ + ")$");
var URN_PARSE = /^([^\:]+)\:(.*)/;
var URN_EXCLUDED = /[\x00-\x20\\\"\&\<\>\[\]\^\`\{\|\}\~\x7F-\xFF]/g;
//RFC 2141
var handler = {
    scheme: "urn",
    parse: function (components, options) {
        var matches = components.path && components.path.match(URN_PARSE);
        var urnComponents = components, as = URNComponents;
        if (matches) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = matches[1].toLowerCase();
            var nss = matches[2];
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = uri_1.SCHEMES[urnScheme];
            urnComponents.nid = nid;
            urnComponents.nss = nss;
            urnComponents.path = undefined;
            if (schemeHandler) {
                urnComponents = schemeHandler.parse(urnComponents, options);
                as;
                URNComponents;
            }
        }
        else {
            urnComponents.error = urnComponents.error || "URN can not be parsed.";
        }
        return urnComponents;
    },
    serialize: function (urnComponents, options) {
        var scheme = options.scheme || urnComponents.scheme || "urn";
        var nid = urnComponents.nid;
        var urnScheme = scheme + ":" + (options.nid || nid);
        var schemeHandler = uri_1.SCHEMES[urnScheme];
        if (schemeHandler) {
            urnComponents = schemeHandler.serialize(urnComponents, options);
            as;
            URNComponents;
        }
        var uriComponents = urnComponents, as = URIComponents;
        var nss = urnComponents.nss;
        uriComponents.path = (nid || options.nid) + ":" + nss;
        return uriComponents;
    },
};
exports.default = handler;
