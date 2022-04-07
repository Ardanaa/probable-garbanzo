const http = require("http");
const path = require("path");
const fs = require("fs");

const HOST = "localhost";
const PORT = 8082;

const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

const onRequest = (req, res) => {
    const url = req.url;

    if (url === "/") {
        fs.readFile("./public/index.html", "UTF-8", function(err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    } else if (url === "/searchCar.html") {
        fs.readFile("./public/searchCar.html", "UTF-8", function(err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    } else if (url === "/get-cars") {
        var dataPath = path.join(__dirname, '../data', '/cars.json');
        var fileStream = fs.createReadStream(dataPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "application/json" });
        fileStream.pipe(res);
    } else if (url.match("\.css$")) {
        var cssPath = path.join(PUBLIC_DIRECTORY, url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
    } else if (url.match("\.svg$")) {
        var imagePath = path.join(PUBLIC_DIRECTORY, url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/svg+xml" });
        fileStream.pipe(res);
    } else if (url.match("\.jpg$")) {
        var imagePath = path.join(PUBLIC_DIRECTORY, url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        fileStream.pipe(res);
    } else if (url.match("\.png$")) {
        var imagePath = path.join(PUBLIC_DIRECTORY, url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
    } else if (url.match("\.js$")) {
        var imagePath = path.join(PUBLIC_DIRECTORY, url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "application/javascript" });
        fileStream.pipe(res);
    } else if (url === "/api/cars") {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(cars));
        return
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No Page Found");
    }

};

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server already listening on http://${HOST}:${PORT}`);
});