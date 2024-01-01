// LogoutButton.js

import React from "react";
import {
    NavItem,
} from "reactstrap";

const LogoutButton = () => {
    const onLogout = () => {
        const token = window.localStorage.getItem("token");
        fetch("http://ec2-13-124-237-120.ap-northeast-2.compute.amazonaws.com:8000/logout/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "access_token": window.localStorage.getItem('token'),
            }),
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.clear();
            window.location.replace("/");
            console.log("로그아웃 했습니다.");
        })
        .catch((error) => {
            console.error("로그아웃 중 에러 발생:", error);
        });
    };

    return (
        <NavItem>
            {/* <a className="btn btn-outline-info" href="/"> */}
            <a className="btn btn-outline-info" onClick={onLogout}>
                Logout
            </a>
        </NavItem>
    );
};

export default LogoutButton;
