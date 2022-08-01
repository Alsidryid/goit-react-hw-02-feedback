import styled from "styled-components";

export const Button = styled.button`
width:60px;
height:30px;
:not(:last-child) {
    margin-right: 15px;
}
border-radius:4px;
background:rgb(109, 109, 220);
:hover{
    background:rgb(75, 75, 323);
    border:none;

}
`