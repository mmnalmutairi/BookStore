import { Link } from "react-router-dom";



const ShopItem = ({ shop }) => {

    return (
        <>
            <div className="item">
                <Link to={`/shops/${shop.slug}`}>
                    <img src={shop.image} alt={shop.name} />
                </Link>
                <h3>{shop.name}</h3>
            </div>
        </>
    );
};

export default ShopItem;