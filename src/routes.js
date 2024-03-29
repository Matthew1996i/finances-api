const express = require('express');

const { rootRouter, userRouter, authRouter, xlsxRouter } = require('./routers');

const routes = express.Router();

routes.use(express.urlencoded({ extended: true }));
routes.use(express.json());

routes.use('/', rootRouter);
routes.use('/user', userRouter);
routes.use('/billing', xlsxRouter);

routes.use('/auth', authRouter);

module.exports = routes;
