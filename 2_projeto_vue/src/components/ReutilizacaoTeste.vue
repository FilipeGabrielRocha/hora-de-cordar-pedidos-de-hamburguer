<template>
    <div>
        <button @click="ativar">Clique aqui</button>
        <span v-show="ativou">Ativado!</span>
    </div>
</template>

<script>
    export default {
        name: 'ReutilizacaoTeste',
        data() {
            return {
                ativou: false
            }
        },
        methods: {
            avitar() {
                this.ativou = !this.ativou
            }
        }
    }
</script>