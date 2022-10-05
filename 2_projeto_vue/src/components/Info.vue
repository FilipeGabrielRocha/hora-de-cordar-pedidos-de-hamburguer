<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>Python</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
        </ul>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
        <Picture />
    </div>
</template>
<script>
import Picture from './Picture.vue';
    export default {
    name: "Info",
    data() {
        return {
            esta_trabalhando: true,
            mostrar_email: false,
            email: "filiperochaprogramador@gmail.com",
            meu_link: "https://filipegabrielrocha.github.io/portfolio/",
            textoBotao: 'Mostrar e-mail'
        };
    },
    components: { 
        Picture
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if (!this.mostrar_email) {
                this.textoBotao = 'Mostrar e-mail'
            } else {
                this.textoBotao = 'Esconder e-mail'
            }
        }
    }
}
</script>
<style scoped>
    a {
        background: black;
        border-radius: 20px;
        padding: 10px;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>