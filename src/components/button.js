import styled from 'styled-components'

export const ButtonContainer = styled.button `
background: transparent;
border-radius: 4px;
border: 0.05rem solid black;
border-color:${props => props.cart?"var--mainOrange" : "var(--mainDark)"};
color:${prop => prop.cart ? "var(--mainYellow)": "var(--mainDark)"};
// color: black;
cursor:pointer;
transition:all 0.3s ease-in-out;
margin-left:7px;
&:hover{
    transform: scale(1.1);
    background:${props => props.cart?"var(--mainDark)" : "var--mainOrange"};
}
&:focus{
    outline:none;
}
`
