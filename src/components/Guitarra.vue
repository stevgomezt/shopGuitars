<template>
    <div class="col-md-6 col-lg-4 my-4 row align-items-center">
        <div class="col-4">
            <!-- Imagen del producto: Utiliza v-bind para enlazar dinámicamente los atributos 'src' y 'alt'
                 con los datos de la guitarra, asegurando que la imagen y su texto alternativo se actualicen
                 con la información correcta. -->
            <img
                class="img-fluid"
                :src="'/img/' + guitarra.imagen + '.jpg'"
                :alt="'imagen guitarra ' + guitarra.nombre"
            />
        </div>
        <div class="col-8">
            <!-- Nombre de la guitarra: Muestra el nombre usando una interpolación directa dentro de un elemento <h3>. -->
            <h3 class="text-black fs-4 fw-bold text-uppercase">
                {{ guitarra.nombre }}
            </h3>
            <!-- Visualización de un número que puede ser incrementado o manipulado dentro del componente. -->
            <p>{{ numero }}</p>
            <!-- Descripción de la guitarra: Muestra la descripción proporcionada en la propiedad de la guitarra. -->
            <p>{{ guitarra.descripcion }}</p>
            <!-- Precio de la guitarra: Formatea y muestra el precio como un valor monetario. -->
            <p class="fw-bold text-primary fs-3">${{ guitarra.precio }}</p>
            <!-- Botón para agregar al carrito: Emite un evento personalizado al hacer clic, pasando el objeto guitarra al componente padre. -->
            <button
                type="button"
                class="btn btn-dark w-100"
                @click="$emit('agregar-carrito', guitarra)"
            >
                Agregar al Carrito
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Estado reactivo local que puede ser utilizado para pruebas o como contador.
const numero = ref(0);

// Define los eventos que este componente puede emitir.
defineEmits(["agregar-carrito"]);

// Define las propiedades que el componente espera recibir.
const props = defineProps({
    guitarra: {
        type: Object, // Especifica que la propiedad 'guitarra' debe ser un objeto.
        required: true, // Indica que la propiedad 'guitarra' es obligatoria.
    },
});
</script>

<style lang="scss" scoped></style>
