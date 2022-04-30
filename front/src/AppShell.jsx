import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";

const Whole = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const AppHeader = styled.header`
    width: 100%;
`;

const AppMain = styled.main`
    width: 1350px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AppFooter = styled.footer`
    width: 100%;
`;

const AppShell = () => {
    return (
        <Whole>
            <AppHeader>
                <Header />
            </AppHeader>

            <AppMain>
                {/* 계속 바껴야 함 */}
                <Routes>
                    <Route path="/" element={<Main />}></Route>  
                    <Route path="/login" element={<Login />}></Route>      
                </Routes>
            </AppMain>

            <AppFooter></AppFooter>
        </Whole>
    )
};

export default AppShell;