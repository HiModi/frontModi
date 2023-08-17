import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () =>{
    const movePage = useNavigate();
    function gomypage(){
        movePage('mypage');
    }

    return (
        <div className="Home">
            HomePage.
            First!!!!!!!
            <button onClick={gomypage}>마이페이지로 이동</button>
        </div>
    );

}

export default Home;
