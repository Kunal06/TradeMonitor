import React from "react";
import "./style.scss";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ResultIcon from "../Loaders/ResultIcon";

const mapState = ({ posts }) => ({
    showPopup: posts.showPopup,
    popupMessage: posts.popupMessage,
    errors: posts.errors,
});

const Popup = () => {
    const { showPopup, errors, popupMessage } = useSelector(mapState);
    return (
        <>
            {showPopup ? (
                <motion.div
                    className="popup"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="popup_content">
                        <ResultIcon result={errors.length > 0 ? true : false} />
                        <span
                            className={
                                errors.length > 0
                                    ? "popup_message-red popup_message"
                                    : "popup_message"
                            }
                        >
                            {errors.length > 0
                                ? "Something went wrong"
                                : popupMessage}
                        </span>
                    </div>
                </motion.div>
            ) : null}
        </>
    );
};

export default Popup;
