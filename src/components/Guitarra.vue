<template>
    <div class="col-md-6 col-lg-4 my-4 row align-items-center">
        <div class="col-4">
            <!-- Se define una etiqueta 'img' que mostrará la imagen de la guitarra. -->
            <img
                class="img-fluid"
                v-bind:src="'/img/' + guitarra.imagen + '.jpg'"
                v-bind:alt="'imagen guitarra' + guitarra.nombre"
            />
            <!--Utiliza v-bind para enlazar dinámicamente el atributo src a la imagen de la guitarra.
            Utiliza v-bind para enlazar dinámicamente el atributo alt al nombre de la guitarra.-->
        </div>
        <div class="col-8">
            <h3 class="text-black fs-4 fw-bold text-uppercase">
                {{ guitarra.nombre }}
            </h3>
            <p>{{ guitarra.descripcion }}</p>
            <p class="fw-black text-primary fs-3">${{ guitarra.precio }}</p>
            <button type="button" class="btn btn-dark w-100">
                Agregar al Carrito
            </button>
        </div>
    </div>
</template>

<script setup>
// Se utiliza la función defineProps() para definir las propiedades que se esperan recibir en el componente.
const props = defineProps({
    // Se define la propiedad 'guitarra'.
    guitarra: {
        // Se especifica el tipo de la propiedad como 'Object'.
        type: Object,
        // Se indica que la propiedad es requerida y debe ser proporcionada al componente.
        required: true,
    },
});
</script>

<style lang="scss" scoped></style>
