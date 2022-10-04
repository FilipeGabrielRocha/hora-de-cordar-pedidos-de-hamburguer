// const MyNameApp = {
//     data() {
//         return {
//             name: "Filipe",
//             idade: 21
//         }
//     }
// }

// Vue.createApp(MyNameApp).mount("#app")

// ANTIGO

const MyNameApp = {
    data() {
        return {
            name: "",
            idade: 21,
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            this.name = this. input_name
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")