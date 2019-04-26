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
     project: "Project",
     save: "Save",
     saved: "Saved",
     saving: "Saving",
     back: "Back"
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
     users: "Users",
     themes: "Themes"
   },
   user: {
     title: "Users",
     description: "View to show the user of the application",
     username: "Username",
     role: "Role(s)",
     permission: "Permission(s)",
     addUserTitle: "Add user",
     addUserDescription: "Use the following section to create an user",
     addRoleTitle: "Add Role",
     addRoleDescription: "Use the following section to create a role",
     addPermissionTitle: "Add Permission",
     addPermissionDescription: "Use the following section to create a permission",
     currentUsers: "Current Users",
     userOperations: "If you did not found the correct user, and you need to create a new one please go to",
     roleOperations: "If you did not found the correct role, and you need to create a new one please go to",
     permissionOperations: "If you did not found the correct permission, and you need to create a new one please go to"
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
     project: "Proyecto",
     save: "Guardar",
     saved: "Guardado",
     saving: "Guardando",
     back: "Atrás"
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
     users: "Usuarios",
     themes: "Temas"
   },
   user: {
     title: "Usuarios",
     description: "Vista para mostrar los usuarios de la aplicación",
     username: "Nombre de Usuario",
     role: "Role(s)",
     permission: "Permiso(s)",
     addUserTitle: "Agregar usuario",
     addUserDescription: "Use el siguiente formulario para agrear un usuario",
     addRoleTitle: "Agregar Role",
     addRoleDescription: "Use el siguiente formulario para agrear un role",
     addPermissionTitle: "Agregar Permiso",
     addPermissionDescription: "Use el siguiente formulario para agrear un permiso",
     currentUsers: "Usuarios Actuales",
     userOperations: "Si no encuentra el usuario necesario, y ocupa crear uno vaya al siguiente",
     roleOperations: "Si no encuentra el rol necesario, y ocupa crear uno vaya al siguiente",
     permissionOperations: "Si no encuentra el permiso necesario, y ocupa crear uno vaya al siguiente",
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
