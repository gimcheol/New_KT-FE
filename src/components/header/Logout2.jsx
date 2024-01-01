import React from "react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
    const onLogout = () => {
        const token = window.localStorage.getItem("token");
        fetch(
            "http://ec2-13-124-237-120.ap-northeast-2.compute.amazonaws.com:8000/logout/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "access_token": window.localStorage.getItem("token"),
                }),
            }
        )
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
        <div className="act-buttons">
            <Link
                // to={"/"}
                className="btn btn-success-gradiant font-14"
                onClick={onLogout}
            >
                Logout
            </Link>
        </div>
    );
};

export default LogoutButton;
