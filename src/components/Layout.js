import Header from './Header';
import Homepage from '../pages/Homepage';
import Sidebar from './Sidebar';
import Widget from './Widget';


const Layout = () => {
  return (
    <div className='grid md:grid-cols-12 grid-rows-12'>

      <div className='col-span-12 row-start-1 row-end-1'><Header /></div>  
      <div className='hidden  md:block row-start-2 row-end-auto col-start-1 col-end-3'><Sidebar /></div>
      <div className=' col-start-3 col-end-8 row-start-2 row-end-auto'><Homepage /></div>
      <div className='hidden md:block  col-start-8 col-end-12 row-start-2 row-end-auto'><Widget /></div>
            
            
            

    </div>
  )
}

export default Layout