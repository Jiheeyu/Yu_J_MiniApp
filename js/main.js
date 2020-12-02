import { fetchData } from "./components/DataMiner.js";
import CarsCard from "./components/CarsCard.js";

(() => {

    let  vue_vm = new Vue({
    
        data: {
            message: "Hello from vue!",
            anotherMessage: "jihee",
            removeAformat: true,
            showCarData: true,

            cars : [],
            currentCarsData: {}
        },

        //this is "mounted" lifecycle hook. vue is done creating itself, and has attacted itself to the 'app'div on the page.
        mounted: function() {
            console.log("Vue is mounted, trying to fetch call");

            fetchData("./includes/index.php").then(data => this.cars = data).catch(err => console.log(err));
        },

        // run a method when we change our view (update DOM with vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a car");
            },

            clickHeader() {
                console.log("header")
            },

        },

        components: {
            "car-card": CarsCard
        }

    }).$mount("#app"); // also connect Vue to your wrapper in HTML
})();