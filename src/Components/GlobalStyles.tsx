import { createGlobalStyle } from "styled-components";
import { root } from "./UI/Variables";
import { TableData } from "./Table";

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}

span, p, label, ${TableData} {
    color: ${root.textColor};
}

svg {
    cursor: pointer;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${root.primaryColor}; 
}

`;

export default GlobalStyles;