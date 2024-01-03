import React from "react";
import axios from "axios";
export default function Create() {
  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const author = event.target.author.value;
    const data = {
      title,
      body,
      author,
    };
    axios
      .post("posts",data)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p>Create a post...</p>
            <form name="sentMesage " id="contectForm" onSubmit={submitHandler}>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    id="title"
                    required
                    name="title"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group floating-label-form-group controls">
                  <label>body</label>
                  <textarea
                    className="form-control"
                    placeholder="Body"
                    id="body"
                    required
                    name="body"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group floating-label-form-group controls">
                  <label>Author</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Author"
                    id="author"
                    required
                    name="Author"
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <button
                type="submit"
                className="btn btn-primary"
                id="sendMessgeButton"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
