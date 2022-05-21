import React from "react";

const ItemListContainer = function({ title }){
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;