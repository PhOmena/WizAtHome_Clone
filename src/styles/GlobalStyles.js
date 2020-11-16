import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

:root {
    --white: #ffffff;
    --ice: #f6f7f8;
    --black: #000;
    --blue: #003057;
    --light-blue: #1874c5;
    --purple: #383773;
    --gray: #494c4e;
    --light-gray: #a0a4aa;
    --red: #ff0000;
}

body { 
    background-color: var(--ice);
}

body, input, button, textarea, label, select, option, h1 {
    font-family: 'Montserrat', sans-serif;
}

button, label, h1 {
    cursor: pointer;
}
`;