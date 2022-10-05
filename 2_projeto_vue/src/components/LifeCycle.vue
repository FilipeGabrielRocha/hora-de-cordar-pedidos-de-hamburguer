<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>
<script>
    export default {
        name: 'LyfeCycle',
        data() {
            return {
                nome: 'Ainda não sei'
            }
        },
        created() {
            setTimeout(() => {
                this.nome = 'Filipe'
            }, 1000)

            this.lifecycle()
        },
        mounted() {
            setTimeout(() => {
            this.nome = 'Rocha'
            }, 2000)

            this.lifecycle()
        },
        methods: {
            lifecycle() {
                console.log('Executou')
            }
        }
    }
</script>