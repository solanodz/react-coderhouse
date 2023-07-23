import React, {useState} from 'react'
import { AppBar, IconButton, Tab, Tabs, Toolbar} from '@mui/material';
import Cart from './CartWidget'
export const Navbar = () => {
    const [value, setValue] = useState(0);

    return (
        <React.Fragment>
            <AppBar sx={{background: '#1e1e1e'}}>
                <Toolbar>
                    <IconButton sx={{fontFamily: 'Modak', color: '#fff', fontSize: 40}}>Nice.</IconButton>
                    
                    <Tabs  
                        value={value} 
                        onChange={(e,value) => setValue(value)} 
                        indicatorColor='primary'
                        textColor='inherit'
                        >
                        <Tab sx={{fontFamily: 'Poppins'}} label="Remeras"/>
                        <Tab sx={{fontFamily: 'Poppins'}} label="Pantalones"/>
                        <Tab sx={{fontFamily: 'Poppins'}} label="Abrigos"/>
                        <Tab sx={{fontFamily: 'Poppins'}} label="Zapatillas"/>
                        
                    </Tabs>
                        <Cart/>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}