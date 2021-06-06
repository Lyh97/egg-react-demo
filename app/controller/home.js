'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async server() {
    const { ctx } = this;
    await ctx.render('home/index.js', { message: "egg react server side render" });
  }

  async client() {
    const { ctx } = this;
    await ctx.renderClient('home/index.js', { message: 'egg react client side render' })
  }

  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
