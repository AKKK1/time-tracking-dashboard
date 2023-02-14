import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* *{
    outline: 1px solid red !important;
} */
:root{

    --Blue: hsl(246, 80%, 60%);

--Light-red: hsl(15, 100%, 70%);
--Soft-blue: hsl(195, 74%, 62%);
--Light-red: hsl(348, 100%, 68%);
--Lime-green: hsl(145, 58%, 55%);
--Violet: hsl(264, 64%, 52%);
--Soft-orange: hsl(43, 84%, 65%);

--Very-dark-blue: hsl(226, 43%, 10%);
--Dark-blue: hsl(235, 46%, 20%);
--Desaturated-blue: hsl(235, 45%, 61%);
--Pale-Blue: hsl(236, 100%, 87%);
}
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    overflow-x: hidden;
    background-color: var(--Very-dark-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    line-height: 1.25;
    color: white;
    gap: 20px;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color:inherit;
    text-decoration: none;
}
input, button, textarea, select {
  font: inherit;
}
button{
    outline: none;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}
`;

export default GlobalStyles;
