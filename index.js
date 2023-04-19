import { createServer } from "http";

const host = "localhost";
const port = 8000;

const cars = JSON.stringify([
    {brand: "BMW", model: "E36", year: 1996},
    {brand: "Audi", model: "RS3", year: 2019},
    {brand: "Opel", model: "Corsa", year: 2004},
    {brand: "Dacia", model: "Logan", year: 2009}
])

const drivers = JSON.stringify([
    {firstName: "Alex", lastName: "Frunza", age: 22},
    {firstName: "Andrei", lastName: "Ciobotaru", age: 27},
    {firstName: "Olimpiu", lastName: "Popa", age: 34},
])

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/cars":
            res.writeHead(200);
            res.end(cars);
            break
        case "/drivers":
            res.writeHead(200);
            res.end(drivers);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error: "Resource not found"}));
    }
};

const server = createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://${host}:${port}');
});