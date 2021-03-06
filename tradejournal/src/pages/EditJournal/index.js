import React from "react";
import "./style.scss";

import MainLayout from "../../layouts/main.js";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import PostForm from "../../components/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updatePostStart } from "../../redux/Posts/posts.actions";
import Button from "../../components/Button";

const mapState = ({ posts }) => ({
  posts: posts.posts,
});

const EditJournal = (props) => {
  const { posts } = useSelector(mapState);
  const { id } = useParams();
  const post = posts.find((el) => el.id === id);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (postTitle, postComments, postDate, tags, imgUrl) => {
    const newPost = { postTitle, postComments, postDate, tags, imgUrl };
    dispatch(updatePostStart({ post: newPost, doc: id }));
    handleReturn();
  };

  const handleReturn = () => history.push("/journal");

  return (
    <MainLayout title="Edit Your Post">
      <section className="section">
        <h4 className="section_title">
          <EditIcon className="icon-small" />
          <span>Edit Your Post - {post.postTitle}</span>
        </h4>
        <PostForm handler={handleSubmit} post={post}>
          <Button type="submit" btnStyle="btn--submit">
            Save Changes
          </Button>
          <Button btnStyle="btn--unstyled" handler={handleReturn}>
            Back to journal
          </Button>
        </PostForm>
      </section>
    </MainLayout>
  );
};

export default EditJournal;
