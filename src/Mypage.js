import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
const Mypage = () =>{
    const movePage = useNavigate();
    function gohomepage(){
        movePage('/');
    }

    function getValue1(){
        axios.get("http://mo-di.kro.kr:90/value2")
            .then((Response)=>{console.log(Response.data)})
            .catch((Error)=>{console.log(Error)})
        }
    return (
        <div className="Mypage">
            Mypage
            Second!!!!!!!

            <button onClick={getValue1}>값 가져와</button>
            <button onClick={gohomepage}>홈화면 이동</button>
        </div>
    );

}

export default Mypage;