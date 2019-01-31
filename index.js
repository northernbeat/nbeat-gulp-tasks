const util       = require("util");
const logger     = require("fancy-log");
const chalk      = require("chalk");
const DefaultReg = require("undertaker-registry");
const requireDir = require("require-directory");
const tasks      = requireDir(module, "./lib");

function NbeatGulpTasks(config = {})
{
    DefaultReg.call(this);
    this.config = config;
    this.state  = {};
}

util.inherits(NbeatGulpTasks, DefaultReg);

NbeatGulpTasks.prototype.init = function(taker) {
    logger(`Using ${chalk.blue(`Northern Beat`)}:`);
    
    for (let t in tasks) {
        logger(chalk.green(`- ${t}`));
        taker.task(t, tasks[t].bind(this));
    }

    return this;
};

module.exports = NbeatGulpTasks;
