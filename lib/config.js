module.exports = function(done)
{
    let json = this.config;

    console.log(JSON.stringify(json, null, 4));

    done();
};
