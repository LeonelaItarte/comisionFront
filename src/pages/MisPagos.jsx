import { useTable } from "react-table"
import { useMemo } from "react";
import { useState } from "react";
import Titulos from "../components/Titulos";
import { usePagos } from "../hooks/usePagos";

export default function MisPagos() {
 
  const [pagina, setPagina] = useState(1);
  const {pagos,totalPagos} = usePagos(pagina);
  const hasNext = pagina < Math.ceil(totalPagos / 10);
 

  const hasPrev = pagina > 1
  const disabledPrev = !hasPrev || false
  const disabledNext = !hasNext || false

  const next = () => {
      setPagina(pagina + 1)
  }

  const prev = () => {
      setPagina(pagina - 1)
  }
  const columns = useMemo(
    () => [
        {
            Header: 'Titular',
            accessor: 'vecino.titular', // accessor is the "key" in the data
        },
       
        {
            Header: 'Nro Adherente',
            accessor: 'vecino.nroAdherente',
        },
        {
            Header: 'Fecha de Pago',
            accessor: 'fechaPago',
        },
        {
            Header: 'Fecha de Acreditacion',
            accessor: 'fechaAcreditacion',
        },
        {
            Header: 'Canal de Cobro',
            accessor: 'canalCobro.descripcion',
        },
        {
            Header: 'Importe Pagado',
            accessor: 'importePagado',
        },
      
    ],
    []
)
  const tableInstance = useTable({ columns,data:pagos})

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
  } = tableInstance
  return (
    <div className="flex flex-col w-full h-screen  items-center">
      <div className="flex flex-col  items-start">
        <Titulos titulo="Mis Pagos"/>
        <div className="flex w-80 justify-between">
          <input type="date" name="fecha" id="fecha" />
          <input type="date" name="fecha" id="fecha" />
        </div>

        <div className="w-full overflow-x-auto">
                <table className="w-full max-sm:w-[700px]  sm:min-w-[830px] bg-azul2 flex flex-col rounded-sm">

                    <thead className="h-20 w-full flex  items-center border-b border-gray-400">
                        {
                            tableInstance.headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()} className="w-full flex items-center justify-center">
                                    {
                                        headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()} className="flex items-center justify-center w-1/6">
                                                <p className="text-gray-300">{column.render('Header')}</p>
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody>
                        {
                            tableInstance.rows.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()} className="h-14 w-full flex  items-center border-b border-gray-400">
                                        {
                                            row.cells.map((cell) => {
                                                return (
                                                    <td {...cell.getCellProps()} className="w-1/6 flex items-center justify-center hover:cursor-pointer" >
                                                        <p className="text-gray-300 text-sm ">{cell.render('Cell')}</p>
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    <div className="h-16 w-full flex  items-center">
                        <div className="w-full flex-grow">

                        </div>
                        <button
                            className={`${disabledPrev
                                ? 'bg-orange-500 opacity-50 cursor-not-allowed'
                                : 'bg-orange-500 hover:bg-orange-400'
                                } shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
                            disabled={disabledPrev}
                            onClick={prev}
                        >

                            <span>Atras</span>
                        </button>
                        <button
                          
                            className={`${disabledNext
                                ? 'bg-orange-500 opacity-50 cursor-not-allowed'
                                : 'bg-orange-500 hover:bg-orange-400'
                                } shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
                            disabled={disabledNext}
                            onClick={next}
                        >
                            <span>Siguiente</span>

                        </button>


                    </div>
                </table>
            </div>
      </div>
    </div>
  );
}
