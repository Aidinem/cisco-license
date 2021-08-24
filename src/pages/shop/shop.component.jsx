import React, {Component} from "react";
import "./shop.style.css";
import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/collection-priview.component";


class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collection : SHOP_DATA
        }
    }

    render() {
        const {collection} = this.state
        return(
            <div className="shop">
                {collection.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage;