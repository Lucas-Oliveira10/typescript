"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EMailService = /** @class */ (function () {
    function EMailService() {
    }
    EMailService.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email enviado para " + to.name + ": " + message.subject);
    };
    return EMailService;
}());
exports.default = EMailService;