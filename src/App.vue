<template>
    <div>
        <!-- Vinculación de props con ':' y manejo de eventos con '@' en el componente Header -->
        <Header
            :carrito="carrito"
            :guitarra="guitarra"
            @decrementar-cantidad="decrementarCantidad"
            @incrementar-cantidad="incrementarCantidad"
            @agregar-carrito="agregarCarrito"
            @eliminar-producto="eliminarProducto"
            @vaciar-carrito="vaciarCarrito"
        />

        <main class="container-xl mt-5">
            <h2 class="text-center">Nuestra Colección</h2>
            <!-- Creación de una lista de guitarras utilizando v-for y v-bind -->
            <div class="row mt-5">
                <Guitarra
                    v-for="guitarra in guitarras"
                    :guitarra="guitarra"
                    @agregar-carrito="agregarCarrito"
                />
                <!-- v-for crea una instancia del componente Guitarra para cada elemento en 'guitarras'.
                     v-bind pasa cada objeto 'guitarra' al componente.
                     v-on permite que el componente Guitarra comunique eventos al componente padre. -->
            </div>
        </main>

        <Footer />
    </div>
</template>

<script setup>
// Importación de funciones reactivas y de ciclo de vida de Vue.
import { ref, reactive, watch, onMounted } from "vue";
// Importación de componentes personalizados.
import Guitarra from "./components/Guitarra.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// Importación de datos desde un módulo externo.
import { db } from "./data/guitarras.js";

// Declaración de estados reactivos con 'ref'.
const guitarras = ref([]);
const guitarra = ref({});
const carrito = ref([]);

// Vigilancia de cambios en 'carrito' para persistir en localStorage.
watch(
    carrito,
    () => {
        guardarLocalStorage(); // Guarda el carrito en localStorage cada vez que cambia.
    },
    {
        deep: true, // Observa cambios profundos dentro de los objetos en el carrito.
    }
);

// Función ejecutada al montar el componente, carga inicial de datos.
onMounted(() => {
    guitarras.value = db; // Carga todas las guitarras disponibles desde la base de datos al montar.
    guitarra.value = db[3]; // Establece una guitarra predeterminada al cargar el componente.

    const carritoStorage = localStorage.getItem("carrito");
    if (carritoStorage) {
        carrito.value = JSON.parse(carritoStorage); // Recupera el carrito guardado de localStorage al cargar.
    }
});

// Guarda el estado actual del carrito en el almacenamiento local para mantenerlo entre sesiones.
const guardarLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito.value));
};

// Agrega una guitarra al carrito o incrementa su cantidad si ya está presente.
const agregarCarrito = (guitarra) => {
    const existeCarrito = carrito.value.findIndex(
        (producto) => producto.id === guitarra.id
    );

    if (existeCarrito >= 0) {
        carrito.value[existeCarrito].cantidad++; // Incrementa cantidad si la guitarra ya está en el carrito.
    } else {
        guitarra.cantidad = 1;
        carrito.value.push(guitarra); // Agrega la guitarra al carrito si no está presente.
    }
};

// Decrementa la cantidad de un producto en el carrito, pero no permite que caiga por debajo de 1.
const decrementarCantidad = (id) => {
    const index = carrito.value.findIndex((producto) => producto.id === id);
    if (carrito.value[index].cantidad > 1) {
        carrito.value[index].cantidad--; // Solo decrementa si la cantidad es mayor que 1.
    }
};

// Incrementa la cantidad de un producto en el carrito, pero no permite que exceda de 5.
const incrementarCantidad = (id) => {
    const index = carrito.value.findIndex((producto) => producto.id === id);
    if (carrito.value[index].cantidad < 5) {
        carrito.value[index].cantidad++; // Solo incrementa si la cantidad es menor que 5.
    }
};

// Elimina un producto del carrito completamente.
const eliminarProducto = (id) => {
    carrito.value = carrito.value.filter((producto) => producto.id !== id); // Filtra y elimina el producto del carrito.
};

// Vacía el carrito eliminando todos los productos.
const vaciarCarrito = () => {
    carrito.value = []; // Limpia completamente el carrito.
};
</script>

<style lang="scss" scoped></style>
