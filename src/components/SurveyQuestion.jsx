import { Link } from "react-router-dom";

const SurveyQuestion = ({ surveyQuestion }) => {
  const optionsArray = surveyQuestion.options;
  return (
    <div className="container article news-article">
      <div className="container">
        <div className="row">{surveyQuestion.questionText}</div>
        <div className="row">
          <form>
            {optionsArray.map((option, _index) => (
              <>
                <input type="radio" id={option.text} name={option.text} />
                <label for={option.text}>{option.text}</label>
                <br />
              </>
            ))}
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyQuestion;
