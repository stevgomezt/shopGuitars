<template>
    <div>
        <Header />

        <main class="container-xl mt-5">
            <h2 class="text-center">Nuestra Colección</h2>
            <div class="row mt-5">
                <Guitarra
                    v-for="guitarra in guitarras"
                    v-bind:guitarra="guitarra"
                    v-on:agregar-carrito="agregarCarrito"
                />
                <!-- La directiva v-for se utiliza para renderizar múltiples instancias del componente Guitarra,
                una para cada elemento en la lista guitarras.
                El atributo v-bind:guitarra se utiliza para pasar cada guitarra iterada como una propiedad
                llamada guitarra al componente Guitarra.
                Dentro del componente Guitarra, puedes acceder a la información de cada guitarra utilizando
                la propiedad guitarra. -->
            </div>
        </main>

        <Footer />
    </div>
</template>

<script setup>
// Se importan las funciones ref, reactive y onMounted desde Vue.
import { ref, reactive, onMounted } from "vue";
// Se importan componentes
import Guitarra from "./components/Guitarra.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// Se importa la base de datos de guitarras desde un archivo externo.
import { db } from "./data/guitarras.js";

// Se declara una referencia 'guitarras' utilizando la función ref. Esta referencia almacena una lista de guitarras y es reactiva.
const guitarras = ref([]);
const carrito = ref([]);

const agregarCarrito = (guitarra) => {
    // numero.value++;
    // alert("agregando...");
    // console.log(guitarra);
    guitarra.cantidad = 1;
    carrito.value.push(guitarra);
};

// La función 'onMounted' se ejecuta cuando el componente se monta en el DOM.
// Se utiliza para realizar operaciones después de que el componente ha sido montado.
onMounted(() => {
    // Se asigna el valor de la base de datos 'db' a la referencia 'guitarras'.
    guitarras.value = db;
});

// console.log(guitarras.value);
</script>

<style lang="scss" scoped></style>
