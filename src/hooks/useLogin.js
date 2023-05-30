import { useState } from "react"
import { helpHttp } from "../helpers/helpHttp";
import { useNavigate } from 'react-router-dom';


export const useLogin=(initialForm,validateForm)=>{

    const[form,setForm]=useState(initialForm);
    const[errors,setErrors]=useState({});
    const[loading,setLoading]=useState(false);
    const[validation,setValidation]=useState(false);
    const navigate= useNavigate();
    

    const handleChange=(e)=>{
        
        setForm(
            {...form,[e.target.name]:e.target.value}//es necesario poner el metodo trim aca?? 
        )
    }
    /*const handleBlur=(e)=>{
        handleChange(e)
        setErrors(validateForm(form))
    }*/
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){

            setLoading(true);
            helpHttp()
             .post("http://54.89.184.151:8080/api/v1/auth/authenticate",{
                body:{
                    "email": form.numeroAdherente,
                    "password": form.numeroAdherente
                },
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                },
             })
            .then((res)=>{//esta romesa de aca tiene algo que ver con la promesa del helphttp???
                setLoading(false);
                setForm(initialForm);
                console.log(res)
                if(res.id === 0 && res.token === ""){
                    
                    setValidation(true)
                    
                }else{
                    const token = res.token;
                    const id= res.id;
                   sessionStorage.setItem("token", token);
                   sessionStorage.setItem("id", id);
                   navigate("/")
                }
                   
                    
                })
            
        }else{
            return
        }

    }

    return({form,errors,loading,validation,handleChange,handleSubmit})
}