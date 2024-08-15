import React from 'react';

type ButtonProps = {
    title: string,
    callBack: () => void
}

export const Button = ({title, callBack}: ButtonProps) => {
    const onClickButtonHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{title}</button>
    );
};