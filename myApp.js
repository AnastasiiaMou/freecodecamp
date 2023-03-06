let express = require('express');
let app = express();
let bodyParser = require("body-parser")
// require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post("/name", (req, res) => {
//   const firstName = req.query.first
//   const lastName = req.query.last
//   const fullName = `${firstName} ${lastName}`

//     res.send({'name': fullName})
// })
// console.log("Hello World")

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html")
// });

// app.use("/public", express.static(__dirname + "/public"))

// app.get("/json", (req, res) => {
//   res.json({
//     message: "Hello json"
//   });
// });


// app.get("/json", (req, res) => {
//   let message = "Hello World".toUpperCase();
//   if (process.env.MESSAGE_STYLE == "uppercase") {
//     message = "Hello World".toUpperCase();
//   } else {
//     message = "Hello World";
//   }
//   res.json({"message": message})
// })

let messageObject = {"message": "Hello json"};
app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
     var u_=JSON.parse(JSON.stringify(messageObject ));
     u_.message=u_.message.toUpperCase();
     return res.json(u_);
    console.log("work")
  } else {
      return res.json(messageObject);
    console.log("didnt work")
  }
});

// let messageObject = {"message": "Hello json"}; - создается объект messageObject, содержащий свойство message со значением "Hello json".
// app.get('/json', function(req, res) { - создается маршрут, который обрабатывает GET-запросы на /json.
// if (process.env.MESSAGE_STYLE === 'uppercase') { - проверяется, равняется ли значение переменной окружения MESSAGE_STYLE строке 'uppercase'.
// var u_=JSON.parse(JSON.stringify(messageObject )); - создается копия объекта messageObject с помощью методов JSON.parse и JSON.stringify, чтобы изменения, внесенные в u_, не влияли на messageObject.
// u_.message=u_.message.toUpperCase(); - значение свойства message в объекте u_ изменяется на верхний регистр.
// return res.json(u_); - если значение переменной окружения MESSAGE_STYLE равно 'uppercase', возвращается JSON-ответ, содержащий измененный объект u_.
// console.log("work") - код после return не выполняется, поэтому этот console.log не будет вызван, если условие if будет истинным.
// } else { - если значение переменной окружения MESSAGE_STYLE не равно 'uppercase', выполнится эта ветка условия.
// return res.json(messageObject); - возвращается JSON-ответ, содержащий исходный объект messageObject.
// console.log("didnt work") - аналогично, этот console.log не будет вызван, если условие if будет ложным.
// Итого, этот код создает маршрут, который возвращает JSON-ответ в зависимости от значения переменной окружения MESSAGE_STYLE. Если значение равно 'uppercase', ответ будет содержать объект messageObject с измененным значением свойства message. Если значение не равно 'uppercase', будет возвращен исходный объект messageObject. Код после return не будет выполнен, поэтому console.log-и не будут вызваны.

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`)
//   next()
// }
// app.use(logger);


// app.get('/now', function(req, res, next) {
//   req.time = new Date().toString();  // Hypothetical synchronous operation
//   next();
// }, function(req, res) {
//   res.send({ "time": req.time });
// });

// app.get("/:word/echo", (req, res) => {
//   let { word } = req.params
//   res.json({ "echo": req.params.word })
// })


app.route('/name')
  .get((req, res) => {
    const { first, last } = req.query;
    const fullName = `${first} ${last}`;
    res.json({ name: fullName });
  })
  .post((req, res) => {
    const { first, last } = req.body;
    const fullName = `${first} ${last}`;
    res.json({ name: fullName });
  });

// app.route('/name') - создает цепной обработчик маршрута для маршрута /name. Это означает, что один и тот же путь URL может использоваться для обработки различных HTTP-версий, таких как GET и POST.

// .get() - определяет функцию-обработчик, которая будет выполняться при отправке GET-запроса на маршрут /name.

// (req, res) => { ... } - стрелочная функция, принимающая два параметра: req (объект входящего запроса) и res (объект исходящего ответа).

// const { first, last } = req.query; - извлекает первый и последний параметры из строки запроса GET, используя деструктуризацию объекта.

// const fullName = ${first} ${last}; - объединяет первый и последний параметры для формирования полного имени.

// res.json({ name: fullName }); - отправляет клиенту ответ в формате JSON со свойством name, установленным на полное имя.

// .post() - определяет функцию-обработчик, которая будет выполняться при отправке POST-запроса на маршрут /name.

// (req, res) => { ... } - стрелочная функция, принимающая два параметра: req (объект входящего запроса) и res (объект исходящего ответа).

// const { first, last } = req.body; - извлекает первый и последний параметры из полезной нагрузки JSON POST-запроса, используя деструктуризацию объекта.

// const fullName = ${first} ${last}; - объединяет первый и последний параметры для формирования полного имени.

// res.json({ name: fullName }); - отправляет JSON-ответ клиенту со свойством name, установленным на полное имя.




















module.exports = app;
