import React from "react";
import Interview from "./Interview";
import { INTERVIEW_QUESTIONS } from "../../consts/interview/interview-questions.const";

const InterviewPage: React.FC = () => {

  return (
    <Interview questions={INTERVIEW_QUESTIONS} />
  );
};

export default InterviewPage;
