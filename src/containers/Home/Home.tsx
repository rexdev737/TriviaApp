import { Button, Grid, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import { useNavigate } from "react-router";
import StyledComponent from "../../components/StyledComponent/StyledComponent";

const Home = () => {
  const navigate = useNavigate();
  return (
    <StyledComponent>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100vh"
      >
        <Grid item>
          <Typography variant="h4" component="h2">
            Welcome to the Trivia Challenge!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h2">
            You will be presented with 10 True or False questions.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h2">
            Can you score 100%?
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("quiz");
            }}
            endIcon={<PlayArrowIcon />}
          >
            BEGIN
          </Button>
        </Grid>
      </Grid>
    </StyledComponent>
  );
};

export default Home;
