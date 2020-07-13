var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
var UUID_PARSE = /^[0-9A-Fa-f\-]{36}/;
//RFC 4122
var handler = {
    scheme: "urn:uuid",
    parse: function (urnComponents, options) {
        var uuidComponents = urnComponents, as = UUIDComponents;
        uuidComponents.uuid = uuidComponents.nss;
        uuidComponents.nss = undefined;
        if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
        }
        return uuidComponents;
    },
    serialize: function (uuidComponents, options) {
        var urnComponents = uuidComponents, as = URNComponents;
        //normalize UUID
        urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
        return urnComponents;
    },
};
exports.default = handler;
