import { makeAutoObservable } from 'mobx';
import instance from "./instance";



// The file name starts with lowercase 
class ShopStore {

    // proprty in lowercase

    shops = [];
    isLoading = true;

    constructor() {
        makeAutoObservable(this);
    }

    fetchShops = async () => {
        try {
            const response = await instance.get("/shops");
            this.isLoading = false;
            console.log("STILL LOADING !!!!!");
            this.shops = response.data;
        } catch (error) {
            console.error("fetchShops:", error)
        }

    }

    createShop = async (newShop) => {

        try {
            const formData = new FormData();
            for (const key in newShop) formData.append(key, newShop[key]);

            const response = await instance.post("/shops", formData);
            response.data.books = [];
            this.shops.push(response.data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;