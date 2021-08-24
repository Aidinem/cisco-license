import React from "react";
import "./collection-priview.style.css";


const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((items, idx) => idx < 4).map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>

    </div>
)

export default CollectionPreview;