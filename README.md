# Aplicación móvil creada con Ionic, Angular y Firebase  

-> Para comenzar con la construcción de la aplicación móvil, es necesario crear las páginas que tendrá esta:

`ionic generate page profile`

*El comando anterior generará automaticamente los componentes **.html**, **.scss** y **.ts** para el funcionamiento de la página de perfil.*

-> Ejecutamos el siguiente comando para generar la página para la lista de usuarios, obtendremos el resultado ya mencionado.

`ionic generate page userlist`

## Código fuente

### Página de perfil
1) La funcionalidad de la página de perfiles se establecerá en el archivo **profile.page.ts**.

![image](https://user-images.githubusercontent.com/58191417/147526694-60eae69f-edb4-44c2-bdf8-844f4b2c4734.png)

*Como se observa en la imagen, aquí es donde se hace el llamado al API que provee de los datos que se visualizarán posteriormente dentro de la aplicación.*

2) El enrutamiento para el componente página de perfiles se lo define en el archivo **profile.module.ts**.

![image](https://user-images.githubusercontent.com/58191417/147527103-f7eb00b5-0d7e-4550-af94-0ee7721591eb.png)

*En este apartado se importan los módulos a utilizar, esto nos facilitará su utilización en otros módulos de la misma aplicación.*

3) La interfaz gráfica de esta página, se codifica en **profile.page.html**.

![image](https://user-images.githubusercontent.com/58191417/147527342-28b7e8fd-5848-4e7d-ae3e-c0a166064478.png)
![image](https://user-images.githubusercontent.com/58191417/147527409-6558c993-275d-4438-b016-837191901fd7.png)
![image](https://user-images.githubusercontent.com/58191417/147527434-097fad70-f751-489f-aec5-1c6dccbc6bd9.png)

*Como se observa en el código, aquí se definen los componentes útiles para la presentación de la información y se invoca a las variables contenedoras de los datos provistos por el API*.

### Lista de usuarios
La lógica para la página de usuarios es la misma:
1) Funcionalidad

![image](https://user-images.githubusercontent.com/58191417/147571522-49ccd530-1e88-4958-b958-39a237e081a3.png)

2) Enrutamiento

![image](https://user-images.githubusercontent.com/58191417/147571585-05d3c533-6236-44a0-9638-c56b9342a7ea.png)

3) Interfaz gráfica

![image](https://user-images.githubusercontent.com/58191417/147571706-33492473-434f-453c-a124-78f4bc082869.png)

### Login
a) **login.page.html**

![image](https://user-images.githubusercontent.com/58191417/147594714-3c013b65-b59c-4f48-82c6-b88a4352b41c.png)
![image](https://user-images.githubusercontent.com/58191417/147594749-d6951319-dcf3-457e-a30e-45c537ee7ae7.png)

b) **login.page.ts**

![image](https://user-images.githubusercontent.com/58191417/147594834-2700f003-13bb-4c54-90ec-06a8bc005136.png)

### Registro de usuario

1) **registration.page.html**

![image](https://user-images.githubusercontent.com/58191417/147595002-5453c27a-d279-4911-9cbc-43173a0e40b1.png)

2) **registration.page.ts**

![image](https://user-images.githubusercontent.com/58191417/147595070-2d9ccd4d-3d6a-426f-9e98-47c200738853.png)

### Autenticación con Firebase

Existen funciones predefinidas por el servicio de firebase, estas se definen y editan (si es necesario) en el archivo **authentication-service.ts**.

![image](https://user-images.githubusercontent.com/58191417/147598664-80935ee6-a285-4444-b0ea-8315dc19cf19.png)

*Se observa en la imagen que entre las funciones se tiene una respectiva para el **inicio de sesión**, **registro de usuario**, **verificación de email** y **recuperación de contraseña**.*

### Módulos de aplicación
• En el archivo **app.module.ts** se importan los módulos `AppComponent`, `AppRoutingModule`, `HttpClientModule`. Estos servirán para usar los componentes, el enrutamiento y el cliente http.

![image](https://user-images.githubusercontent.com/58191417/147574442-01bd2c1a-abef-48fd-a981-7a7ccb128c60.png)

• El enrutamiento de la raíz de la aplicación está definido en **app-routing.module.ts**.

![image](https://user-images.githubusercontent.com/58191417/147574655-a6f0399a-9f9d-46ce-b3d9-cd5b4a3d0d2b.png)

*Aquí se establece las rutas para la página de perfil, la de lista de usuarios y la página de inicio de sesión de la aplicación*

## Funcionamiento de la aplicación

a) Para probar la aplicación, ejecutamos el comando `ionic serve`, este lanzará la aplicación en un servidor local y se presentará en el navegador la siguiente pantalla:

![image](https://user-images.githubusercontent.com/58191417/147599268-067a6ab0-8c7a-4629-a6ff-9c88534813ba.png)

*En la pantalla se presentará el formulario de inicio de sesión, el botón para acceder al registro (con email o directamente con google) y el acceso a recuperación de contraseña*

b) Si el usuario no tiene una cuenta, deberá acceder a la pantalla de registro y completar los campos con un correo electrónico y una contraseña:

![image](https://user-images.githubusercontent.com/58191417/147600033-5cc1f63c-456a-4e96-8c8d-484f735cc2cc.png)

c) Al enviar los datos en el formulario, se presentará la siguiente pantalla indicando que se ha enviado un link para verificar el correo electrónico ingresado.

![image](https://user-images.githubusercontent.com/58191417/147600123-cc2d18db-52e8-4a3c-bcfe-80171ecaccbf.png)

d) Al acceder a la bandeja de entrada del correo ingresado, se presentará el correo automático con el link al cual se deberá acceder para verificar la cuenta.

![image](https://user-images.githubusercontent.com/58191417/147600182-7bd73b25-27d9-4354-9f71-cba840d06e3f.png)

e) El link nos redigirá a la siguiente pantalla dentro de la aplicación, indicando que el correo ha sido verificado con exito

![image](https://user-images.githubusercontent.com/58191417/147601270-a9afb816-7a41-49b7-b39a-c1a04cd12185.png)

f) De esta manera, al volver a la pantalla de inicio, basta con ingresar las nuevas credenciales para iniciar sesión dentro de la aplicación

![image](https://user-images.githubusercontent.com/58191417/147600486-e9d85432-9297-4ad3-b27f-ead6a730e96b.png)

g) Una vez iniciada la sesión, se presentará la pantalla de lista de usuarios:

![image](https://user-images.githubusercontent.com/58191417/147600537-26f2ab18-e8f0-4527-8539-0cb1b1a88d61.png)

* Para cerrar la sesión de usuario, se debe presionar el botón ubicado en la esquina superior derecha de la pantalla. Esta acción cerrará la sesión y nos redigirá a la pantalla con el formulario anterior.

h) Al dar click en cualquier nombre, se redirigirá a la pantalla de perfil con los detalles del usuario elegido.

![image](https://user-images.githubusercontent.com/58191417/147576571-b3782195-aa22-4265-bc5f-b8cf99326a9e.png)
![image](https://user-images.githubusercontent.com/58191417/147576664-d6c55001-2e86-47f1-9055-49b109ed015c.png)

i) Para volver a la página de lista de usuarios, basta con dar click en el botón hacia atrás ubicado alado del título.

## APK y Bundle

#### Construcción de la aplicación

I) Ejecutamos el comando `ionic build` en la raíz del proyecto para generar el directorio **www**, esta carpeta será la base para "compilar" el proyecto para cada plataforma deseada.

![image](https://user-images.githubusercontent.com/58191417/147577891-d9fdadbd-a1bc-4522-96f5-c6342cc345b6.png)

II) Una vez generado el directorio **www**, ejecutamos el comando `ionic cap add android`. Este comando creará el directorio **android** que será la aplicación como tal para la plataforma Android (si se requiere para plataforma IOS bastaría la ejecución del comando `ionic cap add ios`).

![image](https://user-images.githubusercontent.com/58191417/147581705-8ed3578c-9eab-447a-9c99-969084b2e895.png)

III) Realizado esto, es posible abrir el proyecto de android directamente en el IDE Android Studio con el comando `ionic cap open android`.

#### Creación del APK 

• Dentro de Android Studio, nos dirigimos a la ruta **Build > Build Bundle(s)/APK(s) > Build APK(s)**

![image](https://user-images.githubusercontent.com/58191417/147582296-02da0720-01f9-4ce8-9aec-206aa0eb6b17.png)

• Comenzará un proceso de Gradle y el resultado final será el archivo **apk** de la aplicación, al cual podremos acceder desde el explorador de archivos del sistema:

![image](https://user-images.githubusercontent.com/58191417/147428986-93b7a32f-7fbf-46f7-a151-aa9cc95c1dfb.png)

#### Creación del Bundle

• Dentro de Android Studio, nos dirigimos a la ruta **Build > Build Bundle(s)/APK(s) > Build Bundle(s)**

![image](https://user-images.githubusercontent.com/58191417/147582328-451e70e0-6f0d-457e-a4f1-d4f9f1160ddf.png)

• Comenzará un proceso de Gradle y el resultado final será el archivo **aab** de la aplicación, al cual podremos acceder desde el explorador de archivos del sistema:

![image](https://user-images.githubusercontent.com/58191417/147429034-1c991a1b-9071-4c00-9fdd-e314e7952507.png)

### Instalación en dispositivo

Una vez generado el APK, podemos instalar la aplicación en un dispositivo Android y obtendremos el mismo resultado presentado en el navegador

![image](https://user-images.githubusercontent.com/58191417/147600792-2e7efcc8-a2e2-4736-8b52-98b08289266f.png)
![image](https://user-images.githubusercontent.com/58191417/147583008-e9b60779-259b-4bcd-b57d-9e7e5a910567.png)
![image](https://user-images.githubusercontent.com/58191417/147583051-3218eef2-0939-4cad-9a69-47a7496d6995.png)


