import React, { useState } from "react";
import "./style.scss";

import DropDownMenu from "../DropDownMenu";

import { ReactComponent as Dashboard } from "../../assets/dashboard.svg";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Report } from "../../assets/blocks.svg";
import { ReactComponent as Import } from "../../assets/import.svg";
import { ReactComponent as Arrow } from "../../assets/arrow-down.svg";
import { Link } from "react-router-dom";

const journalLinks = [
    { link: "/journal", title: "Daily Journal" },
    { link: "/journal-trades", title: "Individual Trade Journal" },
];

const reportsLinks = [{ link: "/mytrades", title: "My Trades" }];
const importsLinks = [
    { link: "/import", title: "Manual Entry" },
    { link: "/UploadTrades", title: "Upload files" },
];

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [subMenu, setSubMenu] = useState({
        0: false,
        1: false,
        2: false
    });

    const handleSubMenu = (id) => {
        setSubMenu((prev) => ({
            ...prev,
            [id]: !subMenu[id],
        }));
    };

    return (
        <nav className="menu menu-sub bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-7 flex">
                        <div
                            className="burger"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                        <ul
                            className={
                                "links " +
                                `${isOpen ? "active " : ""}` +
                                `${subMenu[0] || subMenu[1] || subMenu[2] ? "auto " : ""}`
                            }
                        >
                            <Link to="/" className="link">
                                <Dashboard className="link_icon" /> Dashboard
                            </Link>

                            <li className="link">
                                <div
                                    className="link_header"
                                    onClick={() => handleSubMenu(0)}
                                >
                                    <Calendar className="link_icon" />
                                    Journal{" "}
                                    <Arrow className="icon-small mobile-arrow" />
                                </div>
                                <DropDownMenu
                                    list={journalLinks}
                                    isOpen={subMenu[0]}
                                />
                            </li>
                            <li className="link">
                                <div
                                    className="link_header"
                                    onClick={() => handleSubMenu(1)}
                                >
                                    <Report className="link_icon" />
                                    Reports{" "}
                                    <Arrow className="icon-small mobile-arrow" />
                                </div>
                                <DropDownMenu
                                    list={reportsLinks}
                                    isOpen={subMenu[1]}
                                />
                            </li>
                            <li className="link">
                                <div
                                    className="link_header"
                                    onClick={() => handleSubMenu(2)}
                                >
                                    <Import className="link_icon" />
                                    Import{" "}
                                    <Arrow className="icon-small mobile-arrow" />
                                </div>
                                <DropDownMenu
                                    list={importsLinks}
                                    isOpen={subMenu[2]}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
