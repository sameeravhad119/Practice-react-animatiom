import React, { useState } from 'react';
import random from 'random-name';
import { produce } from "immer";//here i used produce in function compo, I can use useImmer hook also
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import Card from '../common-Component/Card';

function ReactTransitionGroup() {
    const [items, setItems] = useState(['Sameer']);

    const addItem = () => {
        const newItem = random();
        const nextState = produce(items, draft => {
            draft.unshift(newItem);
        });
        setItems(nextState);
    }

    const removeItem = (index) => {
        const nextState = produce(items, draft => {
            draft.splice(index, 1);
        });
        setItems(nextState);
    }

    return (
        <>
            <div>Start React Animation</div>
            <button onClick={addItem}>Add new item</button>
            <div className={'card-list'}>
                <TransitionGroup component="div">
                    {items.map((name, index) =>
                        <CSSTransition
                            timeout={500}
                            classNames="example"
                            key={name}
                        >
                            <Card
                                // key={index}
                                name={name}
                                index={index}
                                removeItem={removeItem}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </>
    )
}

export default ReactTransitionGroup;

