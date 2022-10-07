<template>
  <div>
    <Header :esta_logado="true" />
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue';
  import LifeCycle from './components/LifeCycle.vue';
  import Pessoa from './components/Pessoa.vue';
  import Header from './components/Header.vue'

  export default {
    name: "App",
    components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Header
}
}
</script>
<style>
  body {
    background: #333;
    color: #fff;
  }

  a {
    color: red;
  }
</style>