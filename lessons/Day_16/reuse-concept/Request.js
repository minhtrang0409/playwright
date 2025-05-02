class Request {

    constructor(url, headers = {}){
        this.url = url;
        this.headers = headers;
        this.method = '...';
    }

    setMethod(method) {
        this.headers = {...this.headers, method};
    }
}