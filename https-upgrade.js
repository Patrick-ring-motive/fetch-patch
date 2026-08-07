(() => {
  const isString = x => typeof x === 'string' || x instanceof String;
  (() => {
    const _fetch = globalThis.fetch;
    const globalThis.fetch = Object.setPrototypeOf(function fetch(...args) {
      if(isString(args[0])){
        args[0] = args[0].replace(/^http:/i,"https:");
      }
      return _fetch.apply(this,args);
    }, _fetch);
  })();
})();
