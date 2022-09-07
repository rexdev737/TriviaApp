import React, { useState, useEffect, useCallback } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { IQuiz, QuizState } from "../../types";
import StyledComponent from "../../components/StyledComponent";

import { setResult } from "../../redux/actions";
import { fetchQuestions } from "../../redux/reducers";

const Quiz = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const initialData: IQuiz[] = useSelector((state: QuizState) => state.results);
  const loading: boolean = useSelector((state: QuizState) => state.loading);

  // alert(loading);

  const handleClick = useCallback(
    (answer: string) => {
      dispatch(setResult(count, answer));
      if (count === initialData.length - 1) {
        navigate("/result");
      } else {
        setCount(count + 1);
      }
    },
    [count, dispatch, navigate, initialData]
  );

  return loading ? (
    <StyledComponent>
      <h1>Loading</h1>
    </StyledComponent>
  ) : (
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
            {initialData[count].category}
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              p: 2,
              border: "1px solid black",
              "& > :not(style)": {
                m: 1,
                width: 400,
                height: 200,
              },
            }}
          >
            <Paper
              variant="outlined"
              square
              style={{ backgroundColor: "#e0e0e0", border: "0" }}
            >
              {initialData[count].question}
            </Paper>
          </Box>
        </Grid>
        <Grid item>
          <Stack direction="row">
            <Button
              variant="contained"
              color="success"
              onClick={() => handleClick("True")}
            >
              True
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleClick("False")}
            >
              False
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </StyledComponent>
  );
};

export default Quiz;
