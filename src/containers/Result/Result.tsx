import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import StyledComponent from "../../components/StyledComponent";
import { IQuiz, QuizState } from "../../types";

const Result = () => {
  const initialData: IQuiz[] = useSelector((state: QuizState) => state.results);
  let score: number = 0;
  initialData.forEach((data: IQuiz) => {
    score += data.answer === data.correct_answer ? 1 : 0;
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quiz");
  };

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
            You scored {score} / {initialData.length}
          </Typography>
        </Grid>
        {initialData.map((data: IQuiz, index: number) => (
          <Grid container key={index} alignItems="flex-start">
            <Typography variant="h6" component="h2">
              {data.correct_answer === data.answer ? "+\t" : "-\t"}
              {data.question}
            </Typography>
          </Grid>
        ))}
        <Grid item marginBottom={10}>
          <Button variant="contained" onClick={handleClick}>
            PLAY AGAIN?
          </Button>
        </Grid>
      </Grid>
    </StyledComponent>
  );
};

export default Result;
