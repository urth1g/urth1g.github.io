var uri_1 = require("../uri");
var punycode_1 = require("punycode");
var util_1 = require("../util");
var O = {};
var isIRI = true;
//RFC 3986
var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
var PCT_ENCODED$ = util_1.subexp(util_1.subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + util_1.subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + util_1.subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
//RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
//const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
//const WSP$$ = "[\\x20\\x09]";
//const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
//const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
//const VCHAR$$ = "[\\x21-\\x7E]";
//const WSP$$ = "[\\x20\\x09]";
//const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
//const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
//const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
//const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
var VCHAR$$ = util_1.merge(QTEXT$$, "[\\\"\\\\]");
var DOT_ATOM_TEXT$ = util_1.subexp(ATEXT$$ + "+" + util_1.subexp("\\." + ATEXT$$ + "+") + "*");
var QUOTED_PAIR$ = util_1.subexp("\\\\" + VCHAR$$);
var QCONTENT$ = util_1.subexp(QTEXT$$ + "|" + QUOTED_PAIR$);
var QUOTED_STRING$ = util_1.subexp('\\"' + QCONTENT$ + "*" + '\\"');
//RFC 6068
var DTEXT_NO_OBS$$ = "[\\x21-\\x5A\\x5E-\\x7E]"; //%d33-90 / %d94-126
var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
var QCHAR$ = util_1.subexp(UNRESERVED$$ + "|" + PCT_ENCODED$ + "|" + SOME_DELIMS$$);
var DOMAIN$ = util_1.subexp(DOT_ATOM_TEXT$ + "|" + "\\[" + DTEXT_NO_OBS$$ + "*" + "\\]");
var LOCAL_PART$ = util_1.subexp(DOT_ATOM_TEXT$ + "|" + QUOTED_STRING$);
var ADDR_SPEC$ = util_1.subexp(LOCAL_PART$ + "\\@" + DOMAIN$);
var TO$ = util_1.subexp(ADDR_SPEC$ + util_1.subexp("\\," + ADDR_SPEC$) + "*");
var HFNAME$ = util_1.subexp(QCHAR$ + "*");
var HFVALUE$ = HFNAME$;
var HFIELD$ = util_1.subexp(HFNAME$ + "\\=" + HFVALUE$);
var HFIELDS2$ = util_1.subexp(HFIELD$ + util_1.subexp("\\&" + HFIELD$) + "*");
var HFIELDS$ = util_1.subexp("\\?" + HFIELDS2$);
var MAILTO_URI = new RegExp("^mailto\\:" + TO$ + "?" + HFIELDS$ + "?$");
var UNRESERVED = new RegExp(UNRESERVED$$, "g");
var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
var NOT_LOCAL_PART = new RegExp(util_1.merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
var NOT_DOMAIN = new RegExp(util_1.merge("[^]", ATEXT$$, "[\\.]", "[\\[]", DTEXT_NO_OBS$$, "[\\]]"), "g");
var NOT_HFNAME = new RegExp(util_1.merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
var NOT_HFVALUE = NOT_HFNAME;
var TO = new RegExp("^" + TO$ + "$");
var HFIELDS = new RegExp("^" + HFIELDS2$ + "$");
function decodeUnreserved(str) {
    var decStr = uri_1.pctDecChars(str);
    return (!decStr.match(UNRESERVED) ? str : decStr);
}
var handler = {
    scheme: "mailto",
    parse: function (components, options) {
        var mailtoComponents = components, as = MailtoComponents;
        var to = mailtoComponents.to = (mailtoComponents.path ? mailtoComponents.path.split(",") : []);
        mailtoComponents.path = undefined;
        if (mailtoComponents.query) {
            var unknownHeaders = false;
            var headers = {};
            var hfields = mailtoComponents.query.split("&");
            for (var x = 0, xl = hfields.length; x < xl; ++x) {
                var hfield = hfields[x].split("=");
                switch (hfield[0]) {
                    case "to":
                        var toAddrs = hfield[1].split(",");
                        for (var x_1 = 0, xl_1 = toAddrs.length; x_1 < xl_1; ++x_1) {
                            to.push(toAddrs[x_1]);
                        }
                        break;
                    case "subject":
                        mailtoComponents.subject = uri_1.unescapeComponent(hfield[1], options);
                        break;
                    case "body":
                        mailtoComponents.body = uri_1.unescapeComponent(hfield[1], options);
                        break;
                    default:
                        unknownHeaders = true;
                        headers[uri_1.unescapeComponent(hfield[0], options)] = uri_1.unescapeComponent(hfield[1], options);
                        break;
                }
            }
            if (unknownHeaders)
                mailtoComponents.headers = headers;
        }
        mailtoComponents.query = undefined;
        for (var x = 0, xl = to.length; x < xl; ++x) {
            var addr = to[x].split("@");
            addr[0] = uri_1.unescapeComponent(addr[0]);
            if (!options.unicodeSupport) {
                //convert Unicode IDN -> ASCII IDN
                try {
                    addr[1] = punycode_1.default.toASCII(uri_1.unescapeComponent(addr[1], options).toLowerCase());
                }
                catch (e) {
                    mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                }
            }
            else {
                addr[1] = uri_1.unescapeComponent(addr[1], options).toLowerCase();
            }
            to[x] = addr.join("@");
        }
        return mailtoComponents;
    },
    serialize: function (mailtoComponents, options) {
        var components = mailtoComponents, as = URIComponents;
        var to = util_1.toArray(mailtoComponents.to);
        if (to) {
            for (var x = 0, xl = to.length; x < xl; ++x) {
                var toAddr = String(to[x]);
                var atIdx = toAddr.lastIndexOf("@");
                var localPart = (toAddr.slice(0, atIdx)).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, util_1.toUpperCase).replace(NOT_LOCAL_PART, uri_1.pctEncChar);
                var domain = toAddr.slice(atIdx + 1);
                //convert IDN via punycode
                try {
                    domain = (!options.iri ? punycode_1.default.toASCII(uri_1.unescapeComponent(domain, options).toLowerCase()) : punycode_1.default.toUnicode(domain));
                }
                catch (e) {
                    components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                }
                to[x] = localPart + "@" + domain;
            }
            components.path = to.join(",");
        }
        var headers = mailtoComponents.headers = mailtoComponents.headers || {};
        if (mailtoComponents.subject)
            headers["subject"] = mailtoComponents.subject;
        if (mailtoComponents.body)
            headers["body"] = mailtoComponents.body;
        var fields = [];
        for (var name_1 in headers) {
            if (headers[name_1] !== O[name_1]) {
                fields.push(name_1.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, util_1.toUpperCase).replace(NOT_HFNAME, uri_1.pctEncChar) +
                    "=" +
                    headers[name_1].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, util_1.toUpperCase).replace(NOT_HFVALUE, uri_1.pctEncChar));
            }
        }
        if (fields.length) {
            components.query = fields.join("&");
        }
        return components;
    }
};
exports.default = handler;
