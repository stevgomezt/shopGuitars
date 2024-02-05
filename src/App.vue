<template>
    <div>
        <header class="py-5 header">
            <div class="container-xl">
                <div
                    class="row justify-content-center justify-content-md-between"
                >
                    <div class="col-8 col-md-3">
                        <a href="index.html">
                            <img
                                class="img-fluid"
                                src="/img/logo.svg"
                                alt="imagen logo"
                            />
                        </a>
                    </div>
                    <nav
                        class="col-md-6 a mt-5 d-flex align-items-start justify-content-end"
                    >
                        <div class="carrito">
                            <img
                                class="img-fluid"
                                src="/img/carrito.png"
                                alt="imagen carrito"
                            />

                            <div id="carrito" class="bg-white p-3">
                                <p class="text-center">El carrito esta vacio</p>
                                <table class="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img
                                                    class="img-fluid"
                                                    src="/img/guitarra_02.jpg"
                                                    alt="imagen guitarra"
                                                />
                                            </td>
                                            <td>SRV</td>
                                            <td class="fw-bold">$299</td>
                                            <td
                                                class="flex align-items-start gap-4"
                                            >
                                                <button
                                                    type="button"
                                                    class="btn btn-dark"
                                                >
                                                    -
                                                </button>
                                                1
                                                <button
                                                    type="button"
                                                    class="btn btn-dark"
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    class="btn btn-danger"
                                                    type="button"
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p class="text-end">
                                    Total pagar:
                                    <span class="fw-bold">$899</span>
                                </p>
                                <button class="btn btn-dark w-100 mt-3 p-2">
                                    Vaciar Carrito
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
                <!--.row-->

                <div class="row mt-5">
                    <div class="col-md-6 text-center text-md-start pt-5">
                        <h1 class="display-2 fw-bold">Modelo VAI</h1>
                        <p class="mt-5 fs-5 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Temporibus, possimus quibusdam dolor nemo
                            velit quo, fuga omnis, iure molestias optio tempore
                            sint at ipsa dolorum odio exercitationem eos
                            inventore odit.
                        </p>
                        <p class="text-primary fs-1 fw-black">$399</p>
                        <button
                            type="button"
                            class="btn fs-4 bg-primary text-white py-2 px-5"
                        >
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>

            <img
                class="header-guitarra"
                src="/img/header_guitarra.png"
                alt="imagen header"
            />
        </header>

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

        <footer class="bg-dark mt-5 py-5">
            <div class="container-xl">
                <p class="text-white text-center fs-4 mt-4 m-md-0">
                    GuitarLA - Todos los derechos Reservados
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
// Se importan las funciones ref, reactive y onMounted desde Vue.
import { ref, reactive, onMounted } from "vue";
// Se importan componentes
import Guitarra from "./components/Guitarra.vue";
// Se importa la base de datos de guitarras desde un archivo externo.
import { db } from "./data/guitarras.js";

// Se declara una referencia 'guitarras' utilizando la función ref. Esta referencia almacena una lista de guitarras y es reactiva.
const guitarras = ref([]);

const agregarCarrito = () => {
    numero.value++;
    // alert("agregando...");
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
