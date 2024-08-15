import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

type FullInputProps = {
    addMessage: (message: string) => void
}

export const FullInput = ({addMessage}: FullInputProps) => {

    let [title, setTitle] = useState('')

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button callBack={callBackButtonHandler} title={'+'}/>
        </div>
    );
};
