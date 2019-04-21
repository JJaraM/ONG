import LocalizedStrings from 'react-localization';

const localization = new LocalizedStrings({
 en:{
   languages: {
     es: "Spanish",
     en: "English"
   },
   settings: {
     title: "Settings",
     theme_title: "Themes",
     theme_title_description: "Use the following section the app's color",
     change_theme: "Change",
     languages: "Languages",
     languages_description: "Use the following section to chage the app's language"
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
     settings: "Settings",
     uiElements: "UI Elements",
     users: "Users"
   },
   pending_payment: {
     title: "Pending Payments",
     description: "View that displays the payments that needs to be approved",
     view: "View",
     approve: "Approve"
   }
 },
 es: {
   languages: {
     es: "Español",
     en: "Ingles"
   },
   settings: {
     title: "Configuraciones",
     theme_title: "Temas",
     theme_title_description: "Use la siguiente sección para cambiar los colores de la página",
     change_theme: "Cambiar",
     languages: "Lenguajes",
     languages_description: "Use la siguiente sección para cambiar el lenguaje de la aplicación"
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
     settings: "Configuraciones",
     uiElements: "UI Elementos",
     users: "Usuarios"
   },
   pending_payment: {
     title: "Pagos Pendientes",
     description: "Vista que muestra los pagos que necesitan ser aprobados",
     view: "Ver",
     approve: "Aprobar"
   }
 }
});

export default localization;
