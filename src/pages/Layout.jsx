import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav class="bg-azulOscuro ">
        <ul class="list-none m-0 p-0 overflow-hidden">
          <li class="float-left">
            <a
              href="#"
              class="block text-white text-center py-4 px-6 no-underline"
            >
              Inicio
            </a>
          </li>
          <li class="float-left">
            <a
              href="#"
              class="block text-white text-center py-4 px-6 no-underline"
            >
              Mis pagos
            </a>
          </li>
          <li class="float-left">
            <a
              href="#"
              class="block text-white text-center py-4 px-6 no-underline"
            >
              Mi deuda
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
