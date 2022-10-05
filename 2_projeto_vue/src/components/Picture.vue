<template>
    <img :src="avatar" v-bind:alt="descricao">
</template>
<script>
    export default {
        name: 'Picture',
        data() {
            return {
                avatar: '/img/horizon_forbidden_west.jpg',
                descricao: 'Foto de um jogo'
            }
        }
    }
</script>
<style>
    img {
      width: 450px;
    }
</style>