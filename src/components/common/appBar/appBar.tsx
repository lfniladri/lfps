
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import PieChartIcon from '@mui/icons-material/PieChart';
import LogoutIcon from '@mui/icons-material/Logout';
import { usePathname, useRouter } from 'next/navigation';

export default function ButtonAppBar() {

    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const toggleDrawer = (newOpen: boolean) => () => {
        console.log("Method getss called!!");
        setOpen(newOpen);
    };

    const menus: Array<{ id: number, title: string, icon: any, url: string }> = [
        {
            id: 1,
            title: "Dashboard",
            icon: <HomeIcon></HomeIcon>,
            url: "/admin/dashboard"
        },
        {
            id: 2,
            title: "Report",
            icon: <PieChartIcon></PieChartIcon>,
            url: "/admin/report"
        },
        {
            id: 3,
            title: "Set up",
            icon: <SettingsIcon></SettingsIcon>,
            url: "/admin/setup"
        }
    ]
    const navigate = (url: string) => {
        router.push(url);
    }



    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)()}>

            <List>
                {menus.map((menu, index) => (
                    <ListItem key={menu.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {menu.icon}
                            </ListItemIcon>
                            <ListItemText primary={menu.title} onClick={()=>navigate(menu.url)} />
                           
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => toggleDrawer(true)()}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <Button color="inherit" onClick={()=>{navigate('/signin')}}>
                            <LogoutIcon/>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={open} onClose={() => toggleDrawer(false)()}>
                {DrawerList}
            </Drawer>
        </div>

    );
}



