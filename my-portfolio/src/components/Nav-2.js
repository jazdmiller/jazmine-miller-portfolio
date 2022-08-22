import React from 'react'
import { Drawer,
         List,
         ListItem,
         ListItemButton,
         ListItemText,
          } from '@mui/material'
import { makeStyles } from '@mui/material/styles'
import '../assets/nav.css'



function Navbar2() {
  return (
    <div>
    <div className='drawer-container'>
    <Drawer 
        open 
        variant="persistent"
        anchor="left"
        >
        <List>
            {['Home', 'Work', 'About', 'Contact'].map((text, index) => (
               <ListItem key={text} disablePadding style={{transform: [{ rotate: '180deg' }]}}>
                <ListItemButton>
                    <ListItemText primary={text} />
                </ListItemButton>
               </ListItem>
            ))}
        </List>
    </Drawer>
    </div>
    </div>
  )
}

export default Navbar2