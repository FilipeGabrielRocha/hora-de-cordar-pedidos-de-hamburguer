<template>
    <div>
        <form action="" @submit="enviarFormulario($event)">
            <h1>Meu formulário:</h1>
            <div>
                <input type="text" v-model="name" name="" id="">
            </div>
            <div>
                <input type="text" v-model="email" name="" id="">
            </div>
            <div>
                <Submit />
            </div>
        </form>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
    </div>
</template>
<script>
import InputText from './form/InputText.vue';
import Submit from './form/Submit.vue';
    export default {
    name: "Form",
    components: {
        InputText,
        Submit,
        InputText
    },
    data() {
        return {
            name: '',
            email: ''
        }
    },
    methods: {
        enviarFormulario(e) {

            e.preventDefault();

            const name = this.name;
            const email = this.email;

            console.log('Formulario enviado')
            console.log(`O nome é ${name}`)
            console.log(`O e-mail é ${email}`)

            // ajax


            //inserir no banco os dados
        },
    },
}
</script>

<style scoped>
    p {
        margin: 150px;
    }
</style>