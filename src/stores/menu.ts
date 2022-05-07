import {defineStore} from "pinia";

export const useMenuStore = defineStore('menu', {
    state: () => {
        return {
            displayMenu: false
        }
    },
    getters: {
        isMobile: state => {
            let result =  (
                ('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0));
            return result;
        }
    }
})