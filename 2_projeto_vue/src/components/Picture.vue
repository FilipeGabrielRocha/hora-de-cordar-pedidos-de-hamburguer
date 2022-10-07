<template>
    <div>
        <img :src="avatar" v-bind:alt="descricao">
        <MudarImagem @mudar-imagem="trocarImagem" />
    </div>
</template>
<script>
import MudarImagem from './MudarImagem.vue';
    export default {
    name: "Picture",
    data() {
        return {
            avatar: "/img/horizon_forbidden_west.jpg",
            descricao: "Foto de um jogo"
        };
    },
    components: { 
        MudarImagem 
    },
    methods: {
        trocarImagem() {
            this.avatar = "/img/thelast.jpg"
        }
    }
}
</script>
<style>
    img {
      width: 450px;
    }
</style>