export default {
    name: "CarsCard",
    props: ["car"],

    // data needs to be a function inside a component
    data: function() {
        return {
    
            carsInfo: "cars-info",
            toggle: {
                on: false,
            },

            err: this.car.err,
            message: this.car.message,
        }
    },

    template: 
        `<li @click="logClicked">
            <span v-if="car.err" style="background-color:red">{{car.message}}</span>
            <template v-else>
                <img :src="'images/' + car.IMG" :alt='car.NAME + " image"'>
                <ul :class="[carsInfo, toggle]">
                    <li> 
                        <span>{{car.NAME}}</span>
                    </li>
                    <li> 
                        <span>{{car.PRICE}}</span>
                    </li>
                    <li> 
                        <span>{{car.ENGINE_ARCHITECTURE}}</span>
                    </li>
                    <li> 
                        <span>{{car.OUTPUT}}</span>
                    </li>
                </ul>            
            </template> 
        </li>
        `,

    created: function() {
        console.log(`created ${this.car.NAME}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.car.ENGINE_ARCHITECTURE}'s the component!`);
            this.toggle.on = !this.toggle.on;
        }
    }
}