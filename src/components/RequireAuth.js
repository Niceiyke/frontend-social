import {useLocation,Navigate,Outlet} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth =()=>{
    const {Auth}=useAuth()
    const location =useLocation()
   

    return (
        
        Auth ? <Outlet/> : <Navigate to='/login' state={{from:location}} replace/>
    )
}
export default RequireAuth