import React, { useCallback } from "react";
import { Button, Grid, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import StyledComponent from "../../components/StyledComponent/StyledComponent";
import { beginAction } from "../../redux/actions";

const Home = () => {
  const navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(beginAction());
    navigate("quiz");
  }, [dispatch, navigate]);

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
          <Typography variant="h4" component="h2" marginTop={10}>
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
        <Grid item marginBottom={10}>
          <Button
            variant="contained"
            onClick={handleClick}
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
