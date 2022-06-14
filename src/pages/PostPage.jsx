import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });

  const editMode = false;
  const navigate = useNavigate();
  // const [categories, setCategories] = useContext(CategoriesContext);
  const categories = ["Q1 2022", "Q2 2022", "test3"];

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

  // {
  //   topic: "performance review",
  //   title: "reviewer was racist",
  //   message: "reviewer was racist",
  //   owner: "Annie",
  //   avatar: "./assets/images/blank-avatar.jpg",
  //   status: "active",
  //   timestamp: "2022-05-21T07:36:17+0000",
  //   company: "",
  //   notification: "none",
  //   support: "unsupported",
  // }

  return (
    <div className="ticket">
      <h1>{editMode ? "Update your Post" : "Create a Post"}</h1>
      <div className="ticket-container">
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

            <label htmlFor="description">description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map((category, _index) => (
                <option key={_index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor="new-category">new Category</label>
            <input
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />
            <label htmlFor="priority">Priority</label>
            <div className="multiple-input-container">
              <input
                id="priority1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="priority-5">5</label>
            </div>
            {editMode && (
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label htmlFor="progress">Progress</label>
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status === "done"} value="done">
                    Done
                  </option>
                  <option
                    selected={formData.status === "working on it"}
                    value="working on it"
                  >
                    Working on it
                  </option>
                  <option selected={formData.status === "stuck"} value="stuck">
                    Stuck
                  </option>
                  <option
                    selected={formData.status === "not started"}
                    value="not started"
                  >
                    Not started
                  </option>
                </select>
              </>
            )}
            <input type="submit" />
          </section>
          <section>
            <label htmlFor="owner">Owner</label>
            <input
              id="owner"
              name="owner"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.owner}
            />
            <label htmlFor="avatar">Avatar</label>
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
        </form>
      </div>
    </div>
  );
};

export default Posts;
