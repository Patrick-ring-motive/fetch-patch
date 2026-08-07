(() => {
  const isString = x => typeof x === 'string' || x instanceof String;
  (() => {
    const _fetch = globalThis.fetch;
    globalThis.fetch = Object.setPrototypeOf(function fetch(...args) {
      if(isString(args[0])){
        args[0] = args[0].replace(/^http:/i,"https:");
      }
      return _fetch.apply(this,args);
    }, _fetch);
  })();
  (()=>{
    const _Request = globalThis.Request;
    const $Request = class Request extends _Request{
      constructor(...args){
        if(isString(args[0])){
          args[0] = args[0].replace(/^http:/i,"https:");
        }
        super(...args);
      }
    };
    globalThis.Request = $Request;
  })();
})();
