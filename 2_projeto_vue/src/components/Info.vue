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
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    </div>
</template>
<script>
    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: true,
                mostrar_email: true,
                email: 'filiperochaprogramador@gmail.com'
            }
        }
    }
</script>