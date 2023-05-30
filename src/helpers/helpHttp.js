export  const helpHttp =()=>{
    
    const customFech =(endpoint,options)=>{
        const defaultHeader={
            accept:"application/json",
        };

        const controller= new AbortController();
        options.signal= controller.signal;

        options.method= options.method || "GET";

        options.headers= options.headers ? {...defaultHeader,...options.headers} : defaultHeader;

        options.body =JSON.stringify(options.body) || false;

        if(!options.body) delete options.body;

        setTimeout(()=>controller.abort(),3000) //si no responde a la peticion se aborta la peticion

        return fetch(endpoint,options)
        .then((res)=>
        res.ok
        ? res.json()
        :Promise.reject({
            err:true,
            status:res.status || "00",
            statusText:res.statusText || "Ocurrio un error",
        })
        )
        .catch((err)=>err);
    };

    const get =(url,options={})=>customFech(url,options);

    const post =(url,options={})=>{
        options.method="POST";
        return customFech(url,options)
    };

    const put =(url,options={})=>{
        options.method="PUT";
        return customFech(url,options)
    };

    const del=(url,options={})=>{
        options.method="DELETE";
        return customFech(url,options)
    };

    return(
        {get,
        post,
        put,
        del}
    )

}