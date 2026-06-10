(()=>{
  (()=>{
    const _fetch = globalThis.fetch;
    const globalThis.fetch = Object.setPrototypeOf(function fetch(...args){
      try{
        const $this = this;
        args = args.map(x=>(x?.clone?.() ?? x));
        return (async()=>{
          try{
            args = (await Promise.all(args)).map(x=>(x?.clone?.() ?? x));
            return await $this.apply(_fetch,args);
          }catch(e){
            const msg = String(e);
            return new Response(msg,{status:500,statusText:msg});
          }
        })();
      }catch(e){
        const msg = String(e);
        return new Response(msg,{status:500,statusText:msg});
      }
    },_fetch);
  })();
})();
