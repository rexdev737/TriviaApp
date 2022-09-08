import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { QuizState } from "../../types";

const GuardComponent = (props: any) => {
  const isAuthenticated: boolean = useSelector(
    (state: QuizState) => state.isAuthenticated
  );

  return isAuthenticated ? <>{props.children}</> : <Navigate replace to="/" />;
};

export default GuardComponent;
