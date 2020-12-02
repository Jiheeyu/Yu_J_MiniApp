export default {
    name: "CarsCard",
    props: ["car"],

    // data needs to be a function inside a component
    data: function() {
        return {
            carName: this.car.Name,
        }
    },

    template: 
        `<li @click="logClicked"> 
            <img :src="'images/' + car.Img" :alt='car.name + " image"'>
        </li>
        `,

    created: function() {
        console.log(`created ${this.car.Name}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.car.Name}'s the component!`);
        },

        showCar(target) {
            // remove this prof from professors array
            console.log('click to view cars data', target, target.Name);
            // the "this" keyword inside a vue instance REFERS to the vue instance itself by default

            // toggle the property between true an false using a ternary statement
            this.showCarData = this.showCarData ? false : true;

            // make the selected profs data visible
            this.currentCarsData = target;
        }
    }
}