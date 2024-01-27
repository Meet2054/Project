// import Dashboard from "./component/Dashboard.jsx";
import { mainListItems } from './component/listItems';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import Nav from './Nav';
// import Home from './Home' 
const Admin_home = () => {
    return (
      <div>
        <Nav/>
        <div className="flex flex-row">
          <div className="flex mt-[-8px]">
            {/* <Dashboard/> */}
            <List component="nav">
            {mainListItems}
            {/* <Divider sx={{ my: 1 }} /> */}
            {/* {secondaryListItems} */}
          </List>         
           </div>
          <div className="flex">
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Admin_home;
  