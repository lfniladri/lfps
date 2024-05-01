
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

import LogoutIcon from '@mui/icons-material/Logout';
import Groups2Icon from '@mui/icons-material/Groups2';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useRouter } from 'next/navigation'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Menu, MenuDetails } from './menu';
const AppMenus = forwardRef(({ }, ref) => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [activeMenuLabel, setActiveMenuLabel] = useState("");

    useImperativeHandle(ref, () => {
        return {
            closeAndCollapseSubMenu,
            getActiveMenuLabel
        }
    });

    const collapseSubMenu = () => {
        setOpen(!open);
    };
    const closeAndCollapseSubMenu = () => {
        setOpen(false);
    }
    const getActiveMenuLabel = () => {
        console.log("Value", activeMenuLabel);
        return activeMenuLabel;
    }

    const MenuLists: Array<Menu> = [
        {
            id: 1,
            icon: <DashboardIcon />,
            label: "Dashboard",
            url: "/admin/dashboard"
        },
        {
            id: 2,
            icon: <PersonAddAltIcon />,
            label: "Admission",
            url: "/admin/admission"
        },
        {
            id: 3,
            icon: <SettingsIcon />,
            label: "Configuration",
            subMenu: [
                {
                    id: 5,
                    icon: <Groups2Icon />,
                    label: "Standard",
                    url: "/admin/config/standard"
                },
                {
                    id: 6,
                    icon: <EmojiPeopleIcon />,
                    label: "Faculty Report",
                    url: "/admin/report/faculty"
                }]
        },
        {
            id: 4,
            icon: <LeaderboardIcon />,
            label: "Report",
            subMenu: [
                {
                    id: 5,
                    icon: <Groups2Icon />,
                    label: "Student Report",
                    url: "/admin/report/student"
                },
                {
                    id: 6,
                    icon: <EmojiPeopleIcon />,
                    label: "Faculty Report",
                    url: "/admin/report/faculty"
                }]
        },
        {
            id: 7,
            icon: <LogoutIcon />,
            label: "Log out",
            url: "/signin"
        },
    ]


    return (<List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader">

        {
            MenuLists.map((menu: Menu) =>
                <React.Fragment key={menu.id}>
                    {
                        menu.subMenu ? (
                            <React.Fragment key={menu.id+"__"}>
                                <ListItemButton key={menu.id} onClick={collapseSubMenu}>
                                    <ListItemIcon>
                                        {menu.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={menu.label} />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    {
                                        menu.subMenu.map((subMenu: MenuDetails) =>
                                            <List key={subMenu.id} component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }} onClick={() => {
                                                    setActiveMenuLabel(subMenu.label);
                                                    return router.push(subMenu.url)
                                                }}>
                                                    <ListItemIcon>
                                                        {subMenu.icon}
                                                    </ListItemIcon>
                                                    <ListItemText primary={subMenu.label} />
                                                </ListItemButton>
                                            </List>)
                                    }

                                </Collapse>
                            </React.Fragment>


                        ) : (
                            <ListItemButton key={menu.id} onClick={() => {
                                setActiveMenuLabel(menu.label)
                                return router.push(menu.url || "")
                            }}>
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.label} />
                            </ListItemButton>
                        )
                    }
                </React.Fragment>)
        }

    </List>);
})

export default AppMenus;

