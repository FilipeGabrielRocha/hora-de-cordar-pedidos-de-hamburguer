<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{ nome }} e trabalho com {{profissao}}</p>
        <MultiplosEventos />
        <ReutilizacaoTeste />
        <ReutilizacaoTeste />
        <ReutilizacaoTeste />
        <ReutilizacaoTeste />
        <ReutilizacaoTeste />
        <ReutilizacaoTeste />
        <ReutilizacaoTeste />
    </div>
</template>

<script>
    import MultiplosEventos from './MultiplosEventos.vue';
    import ReutilizacaoTeste from './ReutilizacaoTeste.vue';

    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos,
            ReutilizacaoTeste
        },
        data() {
            return {
                nome: "Filipe",
                profissao: "Programador"
            }
        },
    }
</script>