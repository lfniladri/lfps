import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

import LogoutIcon from "@mui/icons-material/Logout";
import Groups2Icon from "@mui/icons-material/Groups2";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SchoolIcon from "@mui/icons-material/School";
import { useRouter } from "next/navigation";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Menu, MenuDetails } from "./menu";
import "./appBar.css";

const AppMenus = ({ getHeaderTitle }: { getHeaderTitle: any }) => {
  const router = useRouter();
  const [clickedSubMenuParent, setClickedSubMenuParent] = useState(0);
  const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);

  const collapseSubMenu = (menu: Menu) => {
    setClickedSubMenuParent(menu.id);
  };

  const MenuLists: Array<Menu> = [
    {
      id: 0,
      icon: <DashboardIcon />,
      label: "Dashboard",
      url: "/admin/dashboard",
    },
    {
      id: 1,
      icon: <PersonAddAltIcon />,
      label: "Admission",
      url: "/admin/admission",
    },
    {
      id: 2,
      icon: <SettingsIcon />,
      label: "Configuration",
      subMenu: [
        {
          id: 5,
          icon: <SchoolIcon />,
          label: "Standard",
          url: "/admin/config/standard",
        },
        {
          id: 6,
          icon: <EmojiPeopleIcon />,
          label: "Faculty Report",
          url: "/admin/report/faculty",
        },
      ],
    },
    {
      id: 3,
      icon: <LeaderboardIcon />,
      label: "Report",
      subMenu: [
        {
          id: 7,
          icon: <Groups2Icon />,
          label: "Student Report",
          url: "/admin/report/student",
        },
        {
          id: 8,
          icon: <EmojiPeopleIcon />,
          label: "Faculty Report",
          url: "/admin/report/faculty",
        },
      ],
    },
    {
      id: 4,
      icon: <LogoutIcon />,
      label: "Log out",
      url: "/signin",
    },
  ];

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {MenuLists.map((menu: Menu) => (
        <React.Fragment key={menu.id}>
          {menu.subMenu ? (
            <React.Fragment key={menu.id + "__"}>
              <ListItemButton
                key={menu.id}
                onClick={() => collapseSubMenu(menu)}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.label} />
                {clickedSubMenuParent == menu.id ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItemButton>
              <Collapse
                in={clickedSubMenuParent == menu.id}
                timeout="auto"
                unmountOnExit
              >
                {menu.subMenu.map((subMenu: MenuDetails) => (
                  <List
                    key={subMenu.id}
                    component="div"
                    disablePadding
                    onClick={() => {
                      setSelectedMenuIdx(subMenu.id);
                      getHeaderTitle(subMenu.label);
                      return router.push(subMenu.url);
                    }}
                    sx={{
                      backgroundColor:
                        selectedMenuIdx == subMenu.id ? "#80808069" : "none",
                    }}
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>{subMenu.icon}</ListItemIcon>
                      <ListItemText primary={subMenu.label} />
                    </ListItemButton>
                  </List>
                ))}
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItemButton
              sx={{
                backgroundColor:
                  selectedMenuIdx == menu.id ? "#80808069" : "none",
              }}
              key={menu.id}
              onClick={() => {
                setSelectedMenuIdx(menu.id);
                getHeaderTitle(menu.label);
                return router.push(menu.url || "");
              }}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItemButton>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default AppMenus;
