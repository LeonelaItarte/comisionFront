
export default function Login() {
return(
       <div class="flex justify-center items-center h-screen bg-azulOscuro">
          <div class="flex  sm:flex-row flex-col w-4/6 h-auto max-h-600 bg-white items-center rounded-md shadow-md">
              <div className='w-3/5 h-full pt-4 pb-4 items-center text-center hidden sm:block'>
                  
                  <img src={require('../images/img1.png')} alt="React Logo" class="w-full h-full   " />

              </div>
                <div className='sm:w-2/5 h-full w-full p-2  items-center text-center'>
                <h1 className='text-azulOscuro text-4xl font-bold mb-4 '>¡Hola vecino!</h1>
                   {/* <h2 className='text-azulOscuro text-2xl font-semibold mb-2'>Ingresar</h2>*/}
                    
                    <form>
                        <div>
                            <label htmlFor="username"></label>
                            <input type="text" id="username" placeholder="Numero de adherente" className='w-full sm:w-10/12 md:w-10/12 lg:w-10/12 h-12 border-white border-2 my-4 rounded-md text-white azulInput p-3'/>
                        </div>
                        
                        <button class="w-full sm:w-10/12 md:w-10/12 lg:w-10/12 h-12 border-white border-2 my-4 rounded-md text-white bg-azulOscuro" type="submit">Ingresar</button>
                    </form>
              </div>
           </div>
      </div>
   
)
}
