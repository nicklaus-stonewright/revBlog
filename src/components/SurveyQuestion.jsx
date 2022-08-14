// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SurveyQuestion = ({ surveyQuestion }) => {
  const navigate = useNavigate();
  const optionsArray = surveyQuestion.options;
  const [formData, setFormData] = useState({
    id: "",
    user: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await axios.post("http://localhost:8000/surveyAnswers", {
      formData,
    });
    const success = response.status === 200;
    if (success) {
      // navigate("/");
    }
  };

  const handleChange = (e) => {
    const id = e.target.id;
    setFormData((prevState) => ({
      ...prevState,
      ["id"]: id,
    }));
  };

  return (
    <div className="container article news-article">
      <div className="container">
        <div className="row">{surveyQuestion.questionText}</div>
        <div className="row">
          <form onSubmit={handleSubmit}>
            {optionsArray.map((option, _index) => (
              <>
                <input
                  type="radio"
                  id={option.text}
                  name="questionAnswer"
                  onChange={handleChange}
                />
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
