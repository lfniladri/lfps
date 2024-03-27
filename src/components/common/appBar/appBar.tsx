import * as React from 'react';
import Box from '@mui/material/Box';

import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Drawer, DrawerHeader } from './drawerUtil';
import AppMenus from './appMenu';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';


export default function LFAppBar({ children }: { children: any }) {
    const [open, setOpen] = React.useState(false);
    const menuRef = React.useRef<any>();
    const router = useRouter();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        menuRef.current?.closeAndCollapseSubMenu();
    };
    const navigate = (url: string) => {
        router.push(url);
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {menuRef.current?.getActiveMenuLabel() || "Dashboard"}
                    </Typography>
                    {/* <Button sx={{ float: 'right' }} color="inherit" onClick={() => { navigate('/signin') }}>
                        <LogoutIcon />
                    </Button> */}
                </Toolbar>

            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <CloseIcon></CloseIcon>
                    </IconButton>
                </DrawerHeader>

                <AppMenus ref={menuRef} />

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mt: 6 }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}