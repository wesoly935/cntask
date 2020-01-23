import axios from 'axios';
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response) {
        return Promise.resolve(error.response);
    }
});
export var Endpoints;
(function (Endpoints) {
    Endpoints["MailingGroup"] = "api/MailingGroup";
})(Endpoints || (Endpoints = {}));
//# sourceMappingURL=enpoints.js.map