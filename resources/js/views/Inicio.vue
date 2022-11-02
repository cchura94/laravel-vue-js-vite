<template>
    <h1>INICIO</h1>
    {{ datos_test }}
</template>

<script>
import { onMounted, ref } from 'vue';
import testService from "./../service/InicioService.js";
export default {
    setup(){
        const datos_test = ref(null)

        onMounted(async () => {
            const {data} = await testService.getTest()
            datos_test.value = data
        })

        return {
            datos_test
        }
    }

}
</script>

<style>

</style>