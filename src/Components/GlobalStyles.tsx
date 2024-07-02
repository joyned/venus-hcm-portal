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
`;

export default GlobalStyles;