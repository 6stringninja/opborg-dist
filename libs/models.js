var _this = this;
var Models;
(function (Models) {
    var Security;
    (function (Security) {
        var Credential = /** @class */ (function () {
            function Credential(passkey, name, date) {
                if (passkey === void 0) { passkey = ''; }
                if (name === void 0) { name = ''; }
                if (date === void 0) { date = new Date().getTime(); }
                this.passkey = passkey;
                this.name = name;
                this.date = date;
            }
            return Credential;
        }());
        Security.Credential = Credential;
        var Authorization = /** @class */ (function () {
            function Authorization(success, token, expires) {
                if (success === void 0) { success = false; }
                if (token === void 0) { token = ''; }
                if (expires === void 0) { expires = new Date().getTime(); }
                this.success = success;
                this.token = token;
                this.expires = expires;
            }
            return Authorization;
        }());
        Security.Authorization = Authorization;
        var Client = /** @class */ (function () {
            function Client(name) {
                if (name === void 0) { name = ''; }
                this.name = name;
            }
            return Client;
        }());
        Security.Client = Client;
        var clientCredential = /** @class */ (function () {
            function clientCredential(name, clientPassKey) {
                if (name === void 0) { name = ''; }
                if (clientPassKey === void 0) { clientPassKey = ''; }
                this.client = new Client(name);
                this.credential = new Credential('', name);
                this.clientPassKey = clientPassKey;
                this.authorization = new Authorization();
            }
            clientCredential.prototype.name = function () {
                return this.client.name;
            };
            return clientCredential;
        }());
        Security.clientCredential = clientCredential;
    })(Security = Models.Security || (Models.Security = {}));
})(Models || (Models = {}));
exports.validModal = function (modal, src) {
    var srckeys = Object.keys(src);
    var rturn = true;
    Object.keys(modal).forEach(function (f) {
        var sr = srckeys.some(function (s) { return s === f; });
        if (sr === false) {
            rturn = false;
        }
    });
    return rturn;
};
exports.copy = function (modal, src) {
    Object.keys(modal).filter(function (f) {
        return Object.keys(src).some(function (s) { return s === f; });
    }).forEach(function (r) { return modal[r] = src[r]; });
    return modal;
};
exports.copyValidModel = function (modal, src, res) {
    if (_this.validModal(modal, src)) {
        res = _this.copy(modal, src);
        return true;
    }
    else {
        res = modal;
        return false;
    }
};
//# sourceMappingURL=models.js.map