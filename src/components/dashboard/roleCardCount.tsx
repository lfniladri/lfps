import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import AttributionIcon from "@mui/icons-material/Attribution";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
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
          borderRadius: 1,
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Avatar sx={{ bgcolor: `${avatarBgClr}` }}>
          <AssignmentIndIcon sx={{ color: `${clr}` }} />
        </Avatar>
        <Typography variant="h5" sx={{ mt: 1, fontWeight: 500,}}>
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
