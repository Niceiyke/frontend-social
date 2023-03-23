import {useLocation,Navigate,Outlet} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth =()=>{
    const {User} =useAuth()
    const location =useLocation()
   

    return (
        
        User ? <Outlet/> : <Navigate to='/login' state={{from:location}} replace/>
    )
}
export default RequireAuth