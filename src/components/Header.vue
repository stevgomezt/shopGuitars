<template>
    <header class="py-5 header">
        <div class="container-xl">
            <!-- Flex container que alinea los elementos internos para responsive design -->
            <div class="row justify-content-center justify-content-md-between">
                <!-- Columna que contiene el logo, visible en todas las pantallas, pero más grande en pantallas medianas -->
                <div class="col-8 col-md-3">
                    <!-- Link que redirige a la página de inicio al hacer clic en el logo -->
                    <a href="index.html">
                        <!-- Imagen del logo, adaptativa ('img-fluid' hace que la imagen sea responsiva) -->
                        <img
                            class="img-fluid"
                            src="/img/logo.svg"
                            alt="imagen logo"
                        />
                    </a>
                </div>
                <!-- Sección de navegación que incluye el carrito de compras, se ajusta para diferentes tamaños de pantalla -->
                <nav
                    class="col-md-6 mt-5 d-flex align-items-start justify-content-end"
                >
                    <!-- Contenedor del ícono y detalles del carrito de compras -->
                    <div class="carrito">
                        <!-- Imagen del ícono del carrito -->
                        <img
                            class="img-fluid"
                            src="/img/carrito.png"
                            alt="imagen carrito"
                        />

                        <!-- Contenedor que muestra el contenido del carrito -->
                        <div id="carrito" class="bg-white p-3">
                            <!-- Condicional para mostrar un mensaje si el carrito está vacío -->
                            <p
                                v-if="carrito.length === 0"
                                class="text-center m-0"
                            >
                                El carrito está vacío
                            </p>
                            <!-- Se muestra el contenido del carrito si no está vacío -->
                            <div v-else>
                                <!-- Tabla que muestra los productos en el carrito -->
                                <table class="w-100 table">
                                    <thead>
                                        <!-- Encabezados de la tabla para cada categoría de información del producto -->
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- Itera sobre cada producto en el carrito y muestra su información -->
                                        <tr v-for="producto in carrito">
                                            <td>
                                                <!-- Imagen del producto, dinámicamente enlazada -->
                                                <img
                                                    class="img-fluid"
                                                    :src="
                                                        '/img/' +
                                                        producto.imagen +
                                                        '.jpg'
                                                    "
                                                    :alt="
                                                        'imagen guitarra ' +
                                                        producto.nombre
                                                    "
                                                />
                                            </td>
                                            <td>{{ producto.nombre }}</td>
                                            <td class="fw-bold">
                                                ${{ producto.precio }}
                                            </td>
                                            <td
                                                class="flex align-items-start gap-4"
                                            >
                                                <!-- Botones para modificar la cantidad del producto -->
                                                <button
                                                    type="button"
                                                    class="btn btn-dark"
                                                    @click="
                                                        $emit(
                                                            'decrementar-cantidad',
                                                            producto.id
                                                        )
                                                    "
                                                >
                                                    -
                                                </button>
                                                {{ producto.cantidad }}
                                                <button
                                                    type="button"
                                                    class="btn btn-dark"
                                                    @click="
                                                        $emit(
                                                            'incrementar-cantidad',
                                                            producto.id
                                                        )
                                                    "
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <!-- Botón para eliminar producto del carrito -->
                                                <button
                                                    class="btn btn-danger"
                                                    type="button"
                                                    @click="
                                                        $emit(
                                                            'eliminar-producto',
                                                            producto.id
                                                        )
                                                    "
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <!-- Muestra el total a pagar, calculado dinámicamente -->
                                <p class="text-end">
                                    Total a pagar:
                                    <span class="fw-bold"
                                        >${{ totalPagar }}</span
                                    >
                                </p>
                                <!-- Botón para vaciar completamente el carrito -->
                                <button
                                    class="btn btn-dark w-100 mt-3 p-2"
                                    type="button"
                                    @click="$emit('vaciar-carrito')"
                                >
                                    Vaciar Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="row mt-5">
                <div class="col-md-6 text-center text-md-start pt-5">
                    <!-- Presentación destacada de una guitarra específica con su modelo, precio y descripción -->
                    <h1 class="display-2 fw-bold">
                        Modelo {{ guitarra.nombre }}
                    </h1>
                    <p class="mt-5 fs-5 text-white">
                        {{ guitarra.descripcion }}
                    </p>
                    <p class="text-primary fs-1 fw-bold">
                        ${{ guitarra.precio }}
                    </p>
                    <!-- Botón para agregar la guitarra destacada al carrito -->
                    <button
                        type="button"
                        class="btn fs-4 bg-primary text-white py-2 px-5"
                        @click="$emit('agregar-carrito', guitarra)"
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>

        <!-- Imagen decorativa en el header, específica de la guitarra destacada -->
        <img
            class="header-guitarra"
            src="/img/header_guitarra.png"
            alt="imagen header"
        />
    </header>
</template>

<script setup>
import { computed } from "vue";

// Define las props esperadas por el componente, asegurando que se reciben datos esenciales
const props = defineProps({
    carrito: {
        type: Array,
        required: true,
    },
    guitarra: {
        type: Object,
        required: true,
    },
});

// Define los eventos que este componente puede emitir hacia los componentes padres o raíz
defineEmits([
    "decrementar-cantidad",
    "incrementar-cantidad",
    "agregar-carrito",
    "eliminar-producto",
    "vaciar-carrito",
]);

// Calcula el total a pagar por los productos en el carrito, usando la función 'reduce'
const totalPagar = computed(() => {
    return props.carrito.reduce(
        (total, producto) => total + producto.cantidad * producto.precio,
        0
    );
});
</script>

<style lang="scss" scoped></style>
