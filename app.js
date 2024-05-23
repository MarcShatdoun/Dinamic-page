const express = require('express');
const app = express();
const port = 4000;

const travelJSON = require('./travels.json');
const http = require('http')

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));


app.get("/:pepe",(req, res)=>{
    const datosRuta = travelJSON.filter(travel => travel.id === req.params.pepe.toLowerCase())

    let menuValues = "";
    travelJSON.forEach(menu => {   
                 menuValues += `<a href="${menu.id}">${menu.lugar}</a>`
             })

  
    res.render(`${datosRuta[0].id}`, {
        title: datosRuta[0].lugar,
        h2: datosRuta[0].subtitulo,
        parrafo: datosRuta[0].nombre,
        precio: datosRuta[0].precio,
        img: datosRuta[0].img,
        menu: menuValues,
        descripcion: datosRuta[0].descripcion
    })

})


// app.get('/', (req, res) => {

//     const datosRuta = travelJSON
    
// });


// app.get('/maldivas', (req, res) => {
//     let subtitulo = ""
//     let descripcion = ""
//     let precio = ""
//     let img = ""
//     let menuValues = "";
//     let titulo = ""
//     travelJSON.forEach(menu => {
        
//         menuValues += `<a href="${menu.id}">${menu.lugar}</a>`
//     })

//     travelJSON.forEach(travel => {
//         if (travel.id == "maldivas") {
//             titulo = travel.lugar
//             subtitulo = travel.nombre,
//             descripcion = travel.descripcion,
//             precio = travel.precio,
//             img = travel.img
//         }
//     })
//     res.render('maldivas', {
//         title: titulo,
//         h2: subtitulo,
//         parrafo: descripcion,
//         precio: precio,
//         img: img,
//         menu: menuValues,
//         descripcion: descripcion
//     })
// });


// app.get('/egipto', (req, res) => {
//     let subtitulo = ""
//     let descripcion = ""
//     let precio = ""
//     let img = ""
//     let menuValues = "";
//     let titulo = ""
//     travelJSON.forEach(menu => {
        
//         menuValues += `<a href="${menu.id}">${menu.lugar}</a>`
//     })

//     travelJSON.forEach(travel => {
//         if (travel.id == "egipto") {
//             titulo = travel.lugar
//             subtitulo = travel.nombre,
//             descripcion = travel.descripcion,
//             precio = travel.precio,
//             img = travel.img
//         }
//     })
//     res.render('egipto', {
//         title: titulo,
//         h2: subtitulo,
//         parrafo: descripcion,
//         precio: precio,
//         img: img,
//         menu: menuValues,
//         descripcion: descripcion
//     })
// });

// app.get('/nuevayork', (req, res) => {
//     let subtitulo = ""
//     let descripcion = ""
//     let precio = ""
//     let img = ""
//     let menuValues = "";
//     let titulo = ""
//     travelJSON.forEach(menu => {
        
//         menuValues += `<a href="${menu.id}">${menu.lugar}</a>`
//     })

//     travelJSON.forEach(travel => {
//         if (travel.id == "nuevayork") {
//             titulo = travel.lugar
//             subtitulo = travel.nombre,
//             descripcion = travel.descripcion,
//             precio = travel.precio,
//             img = travel.img
//         }
//     })
//     res.render('nuevayork', {
//         title: titulo,
//         h2: subtitulo,
//         parrafo: descripcion,
//         precio: precio,
//         img: img,
//         menu: menuValues,
//         descripcion: descripcion
//     })
// });

// app.get('/venecia', (req, res) => {
//     let subtitulo = ""
//     let descripcion = ""
//     let precio = ""
//     let img = ""
//     let menuValues = "";
//     let titulo = ""
//     travelJSON.forEach(menu => {
        
//         menuValues += `<a href="${menu.id}">${menu.lugar}</a>`
//     })

//     travelJSON.forEach(travel => {
//         if (travel.id == "venecia") {
//             titulo = travel.lugar
//             subtitulo = travel.nombre,
//             descripcion = travel.descripcion,
//             precio = travel.precio,
//             img = travel.img
//         }
//     })
//     res.render('venecia', {
//         title: titulo,
//         h2: subtitulo,
//         parrafo: descripcion,
//         precio: precio,
//         img: img,
//         menu: menuValues,
//         descripcion: descripcion
//     })
// });

// app.get('/vietnam', (req, res) => {
//     let subtitulo = ""
//     let descripcion = ""
//     let precio = ""
//     let img = ""
//     let menuValues = "";
//     let titulo = ""
//     travelJSON.forEach(menu => {
        
//         menuValues += `<a href="${menu.id}">${menu.lugar}</a>`
//     })

//     travelJSON.forEach(travel => {
//         if (travel.id == "vietnam") {
//             titulo = travel.lugar
//             subtitulo = travel.nombre,
//             descripcion = travel.descripcion,
//             precio = travel.precio,
//             img = travel.img
//         }
//     })
//     res.render('vietnam', {
//         title: titulo,
//         h2: subtitulo,
//         parrafo: descripcion,
//         precio: precio,
//         img: img,
//         menu: menuValues,
//         descripcion: descripcion
//     })
// });

app.listen(port, () =>
    console.log(`Listening on port htpp://localhost:${port}`));