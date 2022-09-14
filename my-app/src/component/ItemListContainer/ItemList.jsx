import React from 'react';
import Item from './Item';
const ItemList = ({items}) => {
    return (
        <>
            {
                items.map((items) => <Item key= {Item.id}/>)
            }

        </>
    );
}

export default ItemList;
