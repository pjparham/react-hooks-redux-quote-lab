import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";


function QuoteForm() {
  const [formData, setFormData] = useState({
    author: "",
    content: ""
  });

  const dispatch = useDispatch()

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state
    const quote = { ...formData, id: uuid(), votes: 0}
    dispatch(addQuote(quote))
    setFormData({content: "", author: ""})
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form onSubmit={handleSubmit} className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      onChange={handleChange}
                      className="form-control"
                      id="content"
                      value={formData.content}
                      name="content"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      id="author"
                      value={formData.author}
                      name="author"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
