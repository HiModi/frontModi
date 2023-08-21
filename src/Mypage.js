import { useNavigate } from "react-router-dom";
import React from "react";

const Mypage = () =>{
    const movePage = useNavigate();
    function gohomepage(){
        movePage('/');
    }

    return (
        <div className="Mypage">
            Mypage
            Second!!!!!!!
            <button onClick={gohomepage}>홈화면 이동</button>
        </div>
    );

}

export default Mypage;