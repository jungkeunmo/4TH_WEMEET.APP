import React, {useState} from "react";
import styled from "styled-components";
import {MenuOutlined} from "@ant-design/icons";
import {Drawer} from "antd";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    height: 55px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 15px;

    box-shadow: 2px 1px 6px #d7d7d7;
`;

const MyMenuIcon = styled(MenuOutlined)`
    font-size: 18px;
    cursor: pointer;
    padding: 4px;

    transition: 0.3s;

    &:hover {
        color: #999;
    };
`;

const Header = () => {

    const [visible, setVisble] = useState(false);

    const menuToggle = () => {
        setVisble((prev) => !prev);
    };

    return  <Wrapper>
        <div>로고 들어갈자리</div>
        <div>
            <MyMenuIcon onClick={() => menuToggle()}/>
        </div>

        <Drawer title="MENU" placement="right" onClose={menuToggle} visible={visible}>
            <ul>
                <li>
                    <Link to="/">MAIN PAGE</Link>       
                </li>
                <li>
                    <Link to="/login">LOGIN PAGE</Link>       
                </li>
            </ul>
        </Drawer>
    </Wrapper>;
};

export default Header;