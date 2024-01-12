import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../Assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="20px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="26px"
    >
      <img
        src={Logo}
        alt="logo"
        style={{ width: "70px", height: "70px" }}
        className="logo-footer"
      />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "20px", xs: "10px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Developed by Shubham choudhari
    </Typography>
  </Box>
);

export default Footer;
