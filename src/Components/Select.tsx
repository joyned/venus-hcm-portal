import { CSSProperties, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { input, root } from "./UI/Variables";

const SelectComponent = styled.select`
    margin: 9px 0;
    padding: 10px;
    border: 1px solid ${input.borderColor};
    border-radius: 5px;
    width: 100%;
    font-size: ${root.textSize};
    color: ${root.textColor};
    background-color: transparent;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s, border 0.3s;
    &:focus {
        outline: none;
        border: 1px solid #0077cc;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
    }

    &::placeholder {
        font-size: ${root.textSize};
    }

    &:after {
        border: none;
    }
`;

const SelectOption = styled.option`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    font-size: ${root.textSize};
    color: #333;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s, border 0.3s;
    &:focus {
        outline: none;
        border: 1px solid #0077cc;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
    }
`

export default function Select(props: {
    options?: any[],
    optionLabel?: string,
    value?: any,
    onChange?: (e: any) => void,
    style?: CSSProperties,
    required?: boolean,
    disabled?: boolean
}) {
    const { t } = useTranslation();
    const [selectedValue, setSelectedValue] = useState<string | undefined>("");

    useEffect(() => {
        if (props.value) {
            const selectedIndex = props.options && props.options.findIndex(option => {
                return JSON.stringify(option) === JSON.stringify(props.value);
            });

            if (selectedIndex !== undefined && selectedIndex !== -1) {
                setSelectedValue(selectedIndex.toString());
            }
        } else {
            setSelectedValue(undefined);
        }
    }, [props.value, props.options]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = parseInt(e.target.value);
        const selectedOption = props.options && props.options[selectedIndex];

        if (selectedOption && props.onChange) {
            props.onChange(selectedOption);
        }
    };

    return (
        <>
            <SelectComponent
                style={props.style}
                value={selectedValue}
                onChange={handleChange}
                disabled={props.disabled}>
                <SelectOption value="">{t('selectAnOption')}</SelectOption>
                {props.options && props.options.map((option, index) =>
                    <SelectOption key={index} value={index}>{option[`${props.optionLabel ? props.optionLabel : 'name'}`]}</SelectOption>
                )}
            </SelectComponent>
        </>
    );
}