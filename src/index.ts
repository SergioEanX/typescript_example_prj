import express, { Application, Request, Response, NextFunction } from "express";
const app = express();

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(c);

    return a + b
};
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(add(1, 3));

    res.send('Hello World: ' + new Date().toISOString());
})
app.listen(3000, () => {
    console.log('Listening on port 3000');
})