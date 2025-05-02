const Request = require('./Request');

class GetRequest extends Request{
    constructor(url, method = 'GET'){
        super();
        this._url= url;
        super.setMethod(method);
    }
    static id = 1;

    setMethod() {
        super.setMethod('GET');
    }

    myNewMethod() {
        console.log('This is my new method');
    }

    static doSomething() {
        console.log('This is static method');
    }
}

let getRequest = new GetRequest();
getRequest.sendRequest()
getRequest.myNewMethod();
getRequest.verifyResponse();