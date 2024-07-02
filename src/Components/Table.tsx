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
    margin-bottom: 10px;

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

export const TableLoading = styled.div`
    background-color: #ededed;
    height: 22px;
    border-radius: 7px;
    width: 100%;
    margin-bottom: 10px;
    background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
    background-size: 200% 100%;
    background-position-x: 100%;
    animation: 1s loading ease-in-out infinite;

    @keyframes loading {
        to{
            background-position-x: -30%
        }
    }
`

export default function DataTable(props: { headers?: string[], data?: any[], dataKeys?: string[], dataTemaplte?: any[] | any, loading?: boolean }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {props.headers?.map((header, index) => (
                        <TableHeaderValue key={index}>{header}</TableHeaderValue>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    {props.loading && props.headers && (
                        props.headers.map((_, index) => {
                            return (
                                <TableData key={index}>
                                    <TableLoading></TableLoading>
                                    <TableLoading></TableLoading>
                                    <TableLoading></TableLoading>
                                </TableData>
                            )
                        })
                    )}
                </TableRow>
                {props.dataTemaplte && props.dataTemaplte}
                {props.data?.map((data, index) => (
                    <TableRow key={index}>
                        {props.dataKeys?.map((key, index) => (
                            <TableData key={index}>{data[key]}</TableData>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export { Table, TableBody, TableData, TableHeader, TableHeaderValue, TableRow };
