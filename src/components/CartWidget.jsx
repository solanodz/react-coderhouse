import React, { useState } from 'react'
import {Badge, Drawer, List, ListItemIcon, ListItemText} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
    <React.Fragment>
        <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor='bottom'
        >
            <List>
                    <ListItemIcon>
                        <ListItemText>Tu Carrito:</ListItemText>
                    </ListItemIcon>
            </List>
        </Drawer>
        <Badge className='pointer' badgeContent={4} sx={{marginLeft: 'auto'}} color="primary" onClick={()=> setOpenDrawer(!openDrawer)}>
            <ShoppingCartIcon className='pointer' onClick={()=> setOpenDrawer(!openDrawer)}/>
        </Badge>
    </React.Fragment>
    );
}


export default Cart