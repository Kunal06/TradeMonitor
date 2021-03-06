import React, { useState } from "react";
import "./style.scss";

import ReactQuill from "react-quill";
import Input from "../../components/Input";
import CalendarInput from "../Calendar";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import InputTag from "../InputTags";

const mapState = ({ posts }) => ({
  isLoading: posts.isLoading,
  errors: posts.errors,
});

const PostForm = ({ handler, post, ...otherProps }) => {
  const { children } = otherProps;
  const { isLoading, errors } = useSelector(mapState);
  const [postTitle, setPostTitle] = useState(post.postTitle);
  const [postComments, setPostComments] = useState(post.postComments);
  const [postDate, setPostDate] = useState(post.postDate);
  const [tags, setTags] = useState(post.tags ? post.tags : []);
  const [imgUrl, setImgUrl] = useState(post.imgUrl);
  const location = useLocation();

  const handleTagsChange = (tags) => {
    setTags(tags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handler(postTitle, postComments, postDate, tags, imgUrl);
    if (!isLoading && errors.length === 0) {
      if (location.pathname.includes("edit-journal")) return;
      // Clear Form
      setPostComments("");
      setPostDate(new Date());
      setPostTitle("");
      setImgUrl("");
      setTags([]);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="col-10">
        <Input
          label="Post Title"
          value={postTitle}
          name={postTitle}
          handler={(e) => setPostTitle(e.target.value)}
          required
        />
      </div>
      <label className="label">Comments</label>
      <div className="col-10 ">
        <ReactQuill
          className="quill"
          value={postComments}
          onChange={setPostComments}
        />
      </div>
      <div className="col-10">
        <Input
          label="Image Url:"
          handler={(e) => setImgUrl(e.target.value)}
          value={imgUrl}
        />
      </div>
      <div className="col-10 mt2">
        <InputTag defaultTags={tags} onChange={handleTagsChange} label="Tags" />
      </div>
      <div className="col-10 mt-2">
        <label className="label">Choose a date</label>
        <CalendarInput
          value={postDate}
          onChange={setPostDate}
          showDate={true}
        />
      </div>
      <div className=" mt-2">{children}</div>
    </form>
  );
};

PostForm.defaultProps = {
  post: {
    postTitle: "",
    postComments: "",
    postDate: new Date(),
    imgUrl:"",
    tags: [],
  },
};

export default PostForm;
