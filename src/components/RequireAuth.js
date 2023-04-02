import {useLocation,Navigate,Outlet} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth =()=>{
    const {User,AuthToken} =useAuth()
    const location =useLocation()

    const tokens = JSON.parse(localStorage.getItem("accessToken"));
  


    return (
        
       AuthToken && User?.id?<Outlet/> : <Navigate to='/login' state={{from:location}} replace/>
    )
}
export default RequireAuth