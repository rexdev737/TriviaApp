import * as React from "react";
import Container from "@mui/material/Container";

const StyledComponent: React.FC<{ children: React.ReactChild }> = (props) => {
  return (
    <React.Fragment>
      <Container maxWidth="sm" sx={{ bgcolor: "#e0e0e0", height: "100vh" }}>
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default StyledComponent;
