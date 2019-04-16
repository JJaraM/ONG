import LocalizedStrings from 'react-localization';

const localization = new LocalizedStrings({
 en:{
   settings: {
     title: "Settings",
     theme_title: "Themes",
     theme_title_description: "Use the following section the app's color",
     change_theme: "Change"
   },
   common: {
     contact: "Contact",
     action: "Action",
     project: "Project"
   },
   home: {
     title:"Register completly free",
   },
   dashboard: {
     pay: "Pay"
   },
   menu: {
     home: "Home",
     settings: "Settings"
   }
 },
 es: {
   settings: {
     title: "Configuraciones",
     theme_title: "Temas",
     theme_title_description: "Use la siguiente sección para cambiar los colores de la página",
     change_theme: "Cambiar"
   },
   common: {
     contact: "Contacto",
     action: "Acción",
     project: "Proyecto"
   },
   home: {
     title:"Regístrese completamente gratis",
   },
   dashboard: {
     pay: "Pagado"
   },
   menu: {
     home: "Inicio",
     settings: "Configuraciones"
   }
 }
});

export default localization;
