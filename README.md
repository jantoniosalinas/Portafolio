# Portafolio
UCAMP Proyecto 6

Portafolio CV

# Intro
Generar un portafolio de trabajo CV

# Demo
Para revisar el funcionamiento del Portafolio debes ingresar al siguinete link:

      https://jantoniosalinas.github.io/Portafolio

# Detail
Para generar el portafolio se utilizó un template que esta diseñado con HTML5 y CSS, mismo que se transformo a React
## Componentes
- Header
- Hero
- AboutMe
- Resume
- Portfolio
- ContactUs
- Footer

### Main
<img src="/portafolio/public/images/homePortfolio.png" alt="Main" style="height: 300px; width:500px;"/>

### About
<img src="/portafolio/public/images/aboutPortfolio.png" alt="About Me" style="height: 300px; width:500px;"/>

### Resume
<img src="/portafolio/public/images/resumePortfolio.png" alt="Resume" style="height: 300px; width:500px;"/>

### Works
<img src="/portafolio/public/images/worksPortfolio.png" alt="Works" style="height: 300px; width:500px;"/>

### Contact
<img src="/portafolio/public/images/contactPortfolio.png" alt="Contact" style="height: 300px; width:500px;"/>

# Deploy
Para realiza el deploy a través de Github Pages se realizó lo siguiente:
1. Instalar librería gh-pages

    `npm install --save gh-pages`

2. Agregar las siguientes propiedades al archivo `package.json`
    
    - Agregar la propiedad "homepage" al inicio
    
    `{
       "homepage": "https://<your-github-username>.github.io/<repository-name>/" 
       ...
      }`
      
    - En la sección scripts agregar las siguientes propiedades

    ` "scripts":
     {
                 "predeploy": "npm run build",
                 "deploy": "gh-pages -d build",
                 ...
     } `
      
    - Después desde una terminal debes ejecutar el siguiente comando:

    `npm run deploy`
    
    - Ahora en github debes ingresar a tu repositorio y verificar que ya ha sido publicada la url

    `https://<your-github-username>.github.io/<repository-name>`

    - Actualizar publicación
      Siempre que necesites actualizar el deploy basta con ejecutar desde la terminal el siguiente comando:
      
      `npm run deploy`
      
      
#### Comentarios
    El Portafolio sigue en mejora continua, siempre buscando aplicar las mejores practicas de lo
    aprendido en el UCAMP.
    
#### UCAMP - UTEL 
    UCAMP @2021
    José Antonio Salinas Ochoa
    https://www.instagram.com/jasosalinas/
    https://www.linkedin.com/in/josé-antonio-salinas-ochoa-95567855
