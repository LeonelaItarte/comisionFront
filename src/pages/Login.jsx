import { useLogin } from "../hooks/useLogin";

export default function Login() {

  const initialForm ={
    numeroAdherente:"",
   
}
const validateForm = (form) => {
  let errors = {};

  /*if (!form.numeroAdherente.trim()) {
    errors.numeroAdherente = "El numero de adherente es requerido";
  }*/
  
  return errors;
};

const{form,errors,validation,handleChange,handleSubmit}=useLogin(initialForm,validateForm);

const handleInputChange = (e) => {
  const { value } = e.target;
  const numericValue = value.replace(/\D/g, ""); // Remover caracteres no numéricos
  e.target.value = numericValue; // Actualizar el valor del campo de entrada

  handleChange(e); // Llamar a la función handleChange original
};
  return (
    <div className="flex justify-center items-center h-screen bg-azulOscuro">
      <div className="flex z-2 sm:flex-row flex-col w-4/6 h-auto max-h-600 sm:bg-white items-center rounded-md shadow-md">
        <div className=" w-3/5 h-full pt-4 pb-4 items-center text-center hidden sm:block">
          <img
            src={require("../images/img2.png")}
            alt="React Logo"
            className="w-full h-full"
          />
        </div>
        <div className=" sm:w-2/5  h-full w-full p-2  items-center text-center  ">
          <h1 className="text-gray-300 sm:text-azulOscuro text-4xl font-bold mb-4 ">
            ¡Hola vecino!
          </h1>
          {/* <h2 className='text-azulOscuro text-2xl font-semibold mb-2'>Ingresar</h2>*/}

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="numeroAdherente"></label>
              <input
                     className={`w-full pl-2 sm:w-10/12 md:w-10/12 lg:w-10/12 h-12 border-white border-2 my-4 rounded-md text-white bg-azulOscuro opacity-80 ${validation ? 'border-red-500 bg-red-100 mt-4 mb-0 ' : ''}`}
                     type='text'
                     id="numeroAdherente"
                     name="numeroAdherente"
                     placeholder="Numero de adherente"
                     /*onBlur={handleBlur}*/
                     onChange={handleInputChange}
                     value={form.numeroAdherente}
                     inputMode="numeric" 
                     required
                   
              />
               {errors.numeroAdherente && <p>{errors.numeroAdherente}</p>} 
               {validation && <p className="text-red-500 mb-4">Numero de adherente incorrecto</p>}
            </div>

            <button className="w-full sm:w-10/12 md:w-10/12 lg:w-10/12 h-12 border-white border-2 my-4 rounded-md text-white bg-azulOscuro"type="submit">Ingresar</button>

          </form>
        </div>
      
      </div>
      <div>
        <img
          src={require("../images/img-movil.png")}
          alt="Imagen Movil"
          className="sm:hidden absolute right-0 bottom-0 z-1"
        />
      </div>
    
    </div>
  );
}
