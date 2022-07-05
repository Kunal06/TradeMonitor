import React from "react";
import "./style.scss";

import parse from "html-react-parser";

import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import defaultImg from "../../assets/image-not-found.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

const Post = ({ data, removePost, ...otherProps }) => {
  return (
    <motion.section
      className="section"
      {...otherProps}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <ReactTooltip />
      <p className="section_title">
        <span>
          {data.postDate.toLocaleDateString() + " - " + data.postTitle}
        </span>
      </p>
      <div
          className={
              "trade_img " +
              (data.imgUrl ? "" : "flex-center")
          }
      >
          {data.imgUrl ? (
              <a
                  target="_blank"
                  href={data.imgUrl}
                  rel="noreferrer"
              >
                  <img
                      src={data.imgUrl}
                      alt={data.id}
                      className={
                        data.imgUrl
                              ? ""
                              : "img-default"
                      }
                  />
              </a>
          ) : (
              <img
                  src={defaultImg}
                  alt={data.id}
                  className={"img-default"}
              />
          )}
      </div>
      <div className="message">{parse(data.postComments)}</div>

      <div className="col-10 mt-3 controls">
        <Link
          to={{ pathname: `/edit-journal/${data.id}` }}
          className="icon-small"
          data-tip="Edit Post"
        >
          <EditIcon className="icon-small icon-btn" />
        </Link>
        <DeleteIcon
          className="icon-small icon-btn"
          onClick={() => removePost(data.id)}
          data-tip="Delete Post"
        />
        <ul className="post_tags list-unstyled tags">
          {data.tags.map((el, id) => (
            <li className="tag" key={id}>
              <span className="tag_value">{el}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Post;
