import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: "#00000026 0% 0% no-repeat padding-box",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background:
      "transparent linear-gradient(45deg, #501ABF 50%, #29007D 100%) 0% 0% no-repeat padding-box",
  },
}));
