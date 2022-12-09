import Header from './Header';
import Homepage from '../pages/Homepage';
import Sidebar from './Sidebar';
import Widget from './Widget';


const Layout = () => {
  return (
    <div className="grid md:grid-cols-12 grid-rows-12 gap-10">
      <div className="hidden row-start-1 lg:block lg:col-start-1 lg:col-end-3 row-end-[-1] mt-4 border-r-2">
        <Sidebar />
      </div>
      <div className="  col-start-1 col-end-12 md:col-start-3 md:col-end-12 lg:col-start-3 lg:col-end-10 row-start-1 row-end-auto border-r-2">
        <Homepage />
      </div>
      <div className="hidden lg:block  col-start-10 col-end-12 row-start-1 row-end-auto mt-4 border-r-2">
        <Widget />
      </div>
    </div>
  );
}

export default Layout