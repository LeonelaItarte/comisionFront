/*import { helpHttp } from "../helpers/helpHttp";

export const usePagos=()=>{

    const token = sessionStorage.getItem("token");
    let pagos;
    let totalPagos;
    
    helpHttp()
    .get(`http://54.89.184.151:8080/api/v1/pagos?pageNum=1&fechaDesde=2023-01-01&fechaHasta=2023-05-28&nroAdherente=25982`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer " + token
        }
    })
    .then((res)=>{
        console.log(res)
       pagos= res.pagos;
       totalPagos= res.totalPagos;
      
       // res es la respuesta, la respuesta tiene un objeto 'pagos' que es un array de los pagos
       // y tiene la cantiadad de pagos
       // a esas propiedades las almacenas en 2 variables distintas 
       // a los pagos tenes qeu pasarlos a la priedad data de thableInstance linea 55
       // configuras los accessors
       // y te fijas como usar la paginacion con el totalDePagos
     })

     return({pagos,totalPagos})
}*/
import { helpHttp } from "../helpers/helpHttp";
import { useState, useEffect } from "react";

export const usePagos = (pageNum) => {
  const token = sessionStorage.getItem("token");
  const apiUrl = `http://54.89.184.151:8080/api/v1/pagos?pageNum=${pageNum}&fechaDesde=2023-01-01&fechaHasta=2023-05-28&nroAdherente=25982`;
  const [pagos, setPagos] = useState([]);
  const [totalPagos, setTotalPagos] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await helpHttp().get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        console.log(response)
        setPagos(response.pagos);
        setTotalPagos(response.totalPagos);
      } catch (error) {
        console.error(error);
      }
    };

    
    fetchData();
  }, [token]);

  return { pagos, totalPagos };
};
