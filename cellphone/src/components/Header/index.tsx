import React, { useContext } from "react";
import styled from 'styled-components'
import { ThemeContext } from "../../App";
import LogoImage from '../../assets/images/logo.png'
import AutoComplete from "../Input/AutoComplete";
import {Button} from 'antd'
const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    console.log(theme, "Header")
    return (
        <Wrapper>
            <Container theme={theme}>
                <Logo src={LogoImage} />
                <AutoComplete/>
                <ThemeButton theme={theme} onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
                    {theme === "light"
                        ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    }
                </ThemeButton>
            </Container>
        </Wrapper>
    )
}

export default Header

const Logo = styled.img`
    width: 65px;
    height: auto;
    margin-right: 40px;
`

const Wrapper = styled.div`
    background-color: #D70018;
    margin-bottom: 10px;
`

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ThemeButton = styled.div`
    display: flex;
    width: 30px;
    color: ${props => props.theme === "dark" ? "#001529" : "white"};
    cursor: pointer;
`