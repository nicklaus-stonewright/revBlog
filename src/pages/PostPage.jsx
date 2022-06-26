import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [formData, setFormData] = useState({
    status: "active",
    timestamp: new Date().toISOString(),
    company: "",
    notification: "none",
    support: "unsupported",
  });

  const editMode = false;
  const navigate = useNavigate();
  // const [topic, setTopics] = useContext(TopicsContext);
  const topics = ["Recruitment Process", "Performance Review", "Other"];
  const companies = ["A2", "A0", "Aq"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editMode) {
      const response = await axios.post("http://localhost:8000/blogposts", {
        formData,
      });
      const success = response.status === 200;
      if (success) {
        navigate("/");
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="post">
      <h1>{editMode ? "Update your Post" : "Create a Post"}</h1>
      <div className="post-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />

            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
              className="description"
            />
            <section className="section">
              <label>Topic</label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
              >
                {topics?.map((topic, _index) => (
                  <option key={_index + 1} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>

              <label htmlFor="new-topic">New topic</label>
              <input
                id="new-topic"
                name="topic"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.topic}
              />
            </section>
            <section className="section">
              <label>Company</label>
              <select
                name="company"
                value={formData.company}
                onChange={handleChange}
              >
                {companies?.map((company, _index) => (
                  <option key={_index + 1} value={company}>
                    {company}
                  </option>
                ))}
              </select>

              <label htmlFor="new-company">New Company</label>
              <input
                id="new-company"
                name="company"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.company}
              />
            </section>
            {editMode && (
              <>
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option
                    selected={formData.status === "active"}
                    value="active"
                  >
                    Active
                  </option>
                  <option
                    selected={formData.status === "passive"}
                    value="passive"
                  >
                    Passive
                  </option>
                </select>
              </>
            )}
            <section className="section">
              <label htmlFor="owner">Owner</label>
              <input
                id="owner"
                name="owner"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.owner}
              />
              <label htmlFor="avatar">Owner avatar</label>
              <input
                id="avatar"
                name="avatar"
                type="url"
                onChange={handleChange}
                required={false}
                value={formData.avatar}
              />
              <div className="image-preview">
                {formData.avatar && <img src={formData.avatar} alt="preview" />}
              </div>
            </section>
            <input type="submit" />
          </section>
        </form>
      </div>
    </div>
  );
};

export default Posts;
