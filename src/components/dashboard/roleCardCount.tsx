import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import AttributionIcon from "@mui/icons-material/Attribution";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
type CardCountTypes = {
  legend: string;
  count: number;
  avatarBgClr: string;
  clr: string;
};

export default function RoleCountCard({
  legend,
  count,
  avatarBgClr,
  clr,
}: CardCountTypes) {
  return (
    <Box sx={{ flexGrow: 1, borderRadius: 1 }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <Avatar sx={{ bgcolor: `${avatarBgClr}` }}>
          <CurrencyRupeeIcon sx={{ color: `${clr}` }} />
        </Avatar>
        <Typography variant="h5" sx={{ mt: 1, fontWeight: 500, fontSize:'16px' }}>
          {count}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "#a5aba0",
          }}
        >
          {legend}
        </Typography>
      </Card>
    </Box>
  );
}
