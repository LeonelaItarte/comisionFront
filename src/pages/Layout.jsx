import "../css/nav.css"
import { Outlet,Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="bg-azulOscuro h-16 mb-12 pt-10 ">
        <Link className="MyLink font-poppins relative float-left block text-gray-300 text-center mr-8 ml-8 pr-4 pl-4 no-underline text-lg" to="/">Inicio</Link>
        <Link className="MyLink font-poppins relative float-left block text-gray-300 text-center mr-8 pr-4 pl-4  no-underline text-lg" to="/misPagos"> Mis pagos</Link>
        <Link className="MyLink font-poppins relative float-left block text-gray-300 text-center mr-8 pr-4 pl-4  no-underline text-lg" to="/miDeuda"> Mi deuda</Link>
        <Link className="MyLink font-poppins relative float-left block text-gray-300 text-center mr-8 pr-4 pl-4  no-underline text-lg" to="/misDatos"> Mis datos</Link>
    
      </nav>
      <main>
        <Outlet className="w-full h-screen flex justify-center items-cente"/>
      </main>
    </>
  );
}
