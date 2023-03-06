import { ThemeOptions } from "@mui/material";

export const componentsSettings: ThemeOptions["components"] = {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiPaper: { defaultProps: { variant: "outlined" } },
    MuiCard: { defaultProps: { variant: "outlined" } },
};
