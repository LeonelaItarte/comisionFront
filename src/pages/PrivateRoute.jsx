import { Outlet, Navigate } from "react-router-dom"
import useCheckAuth from "../hooks/useCheckAuth";

export default function PrivateRoute() {

    let { userAuth, loading } = useCheckAuth()

    if (loading) {
     
        return (
            <>
            </>
        )
    }


    if (userAuth) {
        return (
            
            <Outlet />
        )
    }

    return (
        <Navigate to={"/login"} />
    )

}

