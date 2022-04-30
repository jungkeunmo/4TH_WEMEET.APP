import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 45px);
    
    display: flex;
    flex-direction: row;
`;

const LeftWrapper = styled.div`
    width: 50%;
    height: 100%;

    position: relative;
`;

const LeftImage = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    object-fit: cover;
`;

const RightWrapper = styled.div`
    width: 50%;
    height: 100%;
`;

const H2Title = styled.h2`
    position: absolute;

    font-size: 40px;
    text-align: center;

    left: calc(50% - 25px);
    top: 200px;

    width: 240px;
`;

const ImageText = styled.div`
    position: absolute;
    left: calc(50% - 20px);
    top: ${(props => props.top)};

    font-size: 20px;

    width: 400px;
`;


// URL : "/login"
const Login = () => {
    return (
        
        <Wrapper>
            <LeftWrapper>
                <LeftImage src="https://i.pinimg.com/474x/a0/33/6a/a0336ac1016c8055ce82035da6e098b7.jpg" />

                <H2Title>WEMEET</H2Title>
                <ImageText top="320px">로그인을 간편하게 해보세요.</ImageText>
                <ImageText top="340px">편리한 기능을 써보세요</ImageText>
            </LeftWrapper >
            <RightWrapper></RightWrapper>
        </Wrapper>
    )
};

export default Login;