import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function StudentCard() {

    const [image,setImage] = useState<string>('')

    const imgs=[
        "https://randomuser.me/api/portraits/men/60.jpg",
        "https://randomuser.me/api/portraits/men/30.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/12.jpg",
        "https://randomuser.me/api/portraits/women/15.jpg",
        "https://randomuser.me/api/portraits/women/10.jpg",
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/10.jpg",
        "https://randomuser.me/api/portraits/women/17.jpg",
        "https://randomuser.me/api/portraits/women/19.jpg",
    ]


    useEffect(()=>{
        let randomIndex = Math.floor(Math.random()*10);
        setImage(imgs[randomIndex]);
    })



  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src= {image}
            sx={{ width: 80, height: 80 ,mb:1}}
          />

          <Typography>Konnor Guzman</Typography>
          <Typography variant="caption">Standard: 4</Typography>
          <Box sx={{ mt:2,display: "flex", gap:2, justifyContent:'space-between' }}>
            <Button variant="contained" size="small">View Profile </Button>
            <Button variant="outlined" size="small">View Report</Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
