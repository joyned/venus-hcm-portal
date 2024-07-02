import styled from "styled-components";
import { root } from "./UI/Variables";

interface TableProps {
    align?: string;
}

const TableHeader = styled.thead`
    background-color: ${root.secondaryColor};
    color: white;
`;

const TableHeaderValue = styled.th<TableProps>`
    padding: 30px;
    text-align: ${(props) => props.align || "left"};
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
    margin-bottom: 10px;

    &:nth-child(2n) {
        background-color: ${root.backgroundColor};
    }
`;

const TableData = styled.td<TableProps>`
    padding: 30px;
    text-align: ${(props) => props.align || "left"};
`;


const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    @media screen and (max-width: 40em) {
        ${TableHeader},
        ${TableBody},
        ${TableHeader},
        ${TableData},
        ${TableRow} {
            display: block;
        }

        ${TableHeader} ${TableRow} {
            position: absolute;
            top: -9999px;
            left: -9999px;
            border-bottom: 2px solid #333;
        }

        ${TableBody} ${TableRow} {
            padding: .25em;
        }

        ${TableData} {
            padding: 10px;
        }

        ${TableData}.pivoted {
            border: none !important;
            position: relative;
            padding-left: calc(50% + 10px) !important;
            text-align: left !important;
            white-space: pre-wrap;
            overflow-wrap: break-word;
        }
    }
`;

export { Table, TableBody, TableData, TableHeader, TableHeaderValue, TableRow };
