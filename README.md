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
completar con login

### Módulos de aplicación
• En el archivo **app.module.ts** se importan los módulos `AppComponent`, `AppRoutingModule`, `HttpClientModule`. Estos servirán para usar los componentes, el enrutamiento y el cliente http.

![image](https://user-images.githubusercontent.com/58191417/147574442-01bd2c1a-abef-48fd-a981-7a7ccb128c60.png)

• El enrutamiento de la raíz de la aplicación está definido en **app-routing.module.ts**.

![image](https://user-images.githubusercontent.com/58191417/147574655-a6f0399a-9f9d-46ce-b3d9-cd5b4a3d0d2b.png)

*Aquí se establece las rutas para la página de perfil, la de lista de usuarios y la página de inicio de sesión de la aplicación*

## Funcionamiento de la aplicación

a) Para probar la aplicación, ejecutamos el comando `ionic serve`, este lanzará la aplicación en un servidor local y se presentará en el navegador la siguiente pantalla:

adjuntar imagen de login

b) Una vez iniciada la sesión, se presentará la pantalla de lista de usuarios:

![image](https://user-images.githubusercontent.com/58191417/147575792-392bbe0e-d8de-4eb8-be5c-27ee374c916a.png)

c) Al dar click en cualquier nombre, se redirigirá a la pantalla de perfil con los detalles del usuario elegido.

![image](https://user-images.githubusercontent.com/58191417/147576571-b3782195-aa22-4265-bc5f-b8cf99326a9e.png)
![image](https://user-images.githubusercontent.com/58191417/147576664-d6c55001-2e86-47f1-9055-49b109ed015c.png)

d) Para volver a la página de lista de usuarios, basta con dar click en el botón hacia atrás ubicado alado del título.

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

Una vez generado el APK, podemos instalar la aplicación en un dispositivo Android y obtendremos el mismo resultado

![image](https://user-images.githubusercontent.com/58191417/147583008-e9b60779-259b-4bcd-b57d-9e7e5a910567.png)
![image](https://user-images.githubusercontent.com/58191417/147583051-3218eef2-0939-4cad-9a69-47a7496d6995.png)


