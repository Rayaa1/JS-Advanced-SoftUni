function requestValidator(obj){
    const validMethod = ["GET","POST","DELETE","CONNECT"];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validUri = /^[\w.]+$/ 
    const validMsg = /([<>\\&'"])/;
    if(!obj.method || !validMethod.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method')
    }
    if(!obj.uri || obj.uri == "" ||!validUri.test(obj.uri)){
        throw new Error('Invalid request header: Invalid URI')
    }
    if(!obj.version || !validVersions.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }
    if(obj.message == undefined || validMsg.test(obj.message)){
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj

}
requestValidator({
 method: 'GET',
 uri: 'svn.public.catalog',
 version: 'HTTP/1.1',
 message: ''
}
)