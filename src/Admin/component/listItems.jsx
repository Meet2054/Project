import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Avatar from '@mui/material/Avatar';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import { Home } from '../Home';

const go_to_home = () => {
  // window.location.href = "/home";
  <Home/>
}



export const mainListItems = (
    
  <div className='bg-blue-500'>
  <React.Fragment >
    
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"  onClick={()=>{go_to_home()}}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon  className='pl-[1px]'/>
      </ListItemIcon>
      <ListItemText primary="Employee" />
    </ListItemButton>
    <ListItemButton>
    <ListItemAvatar >
          <Avatar  >
            <WorkIcon  className='w-[20px] h-[20px]'/>
          </Avatar>
        </ListItemAvatar>
      <ListItemText primary="List of work" />
    </ListItemButton>
      <Divider sx={{ my: 1 }} />
        <h2>
        <div className='bg-blue-600 pl-4'>
          Saved reports
        </div>
        </h2>
        <Divider sx={{ my: 1 }} />
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Submitted Work" />
        </ListItemButton>

    
  </React.Fragment>
  </div>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <div className='bg-blue-500'>

//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Submitted Work" />
//     </ListItemButton>
   
//     </div>
//   </React.Fragment>
// );