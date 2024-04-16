// Importa la función createApp desde la librería 'vue'.
// Esta función es usada para crear una nueva instancia de aplicación Vue.
import { createApp } from "vue";

// Importa el archivo de estilo principal de la aplicación.
// Este archivo contiene los estilos globales que afectarán a toda la aplicación.
import "./style.css";

// Importa el componente raíz App desde su archivo Vue.
// Este componente suele ser el punto de entrada y contiene la estructura principal de la aplicación.
import App from "./App.vue";

// Crea una instancia de la aplicación Vue con el componente App como el componente raíz.
// La función createApp devuelve una instancia de aplicación que puede ser configurada antes de montarse.
const app = createApp(App);

// Monta la aplicación en el elemento DOM con el id 'app'.
// Esto indica a Vue dónde inyectar el contenido de la aplicación Vue en la página HTML.
// El elemento '#app' debe estar presente en el archivo HTML para que esto funcione.
app.mount("#app");
