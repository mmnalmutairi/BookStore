import React, { useState } from "react";
import { Title } from "./styles";
import ShopItem from "./ShopItem";
import shopStore from "./stores/shopStore";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import { Description } from "./styles";
import { BiBookAddStyled } from "./styles";
import ShopModal from "./modals/ShopModal";
import authStore from "./stores/authStore";

const ShopList = () => {

    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const shoplist = shopStore.shops.filter((shop) =>
        shop.name.toLowerCase().includes(query.toLowerCase())).map((shop) =>
            <ShopItem shop={shop} />);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="container">
            <Title> Shops </Title>
            <Description>Search the book by Shop</Description>
            <SearchBar setQuery={setQuery} />
            {authStore.user && <BiBookAddStyled size="2em" onClick={openModal} />}
            <ShopModal closeModal={closeModal} isOpen={isOpen} />
            {shoplist}
        </div>
    )
}

export default observer(ShopList);