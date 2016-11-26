
'use strict';

class Registrar{
    constructor(server){
        this.server = server;
    }

    mount(resources){
        resources.forEach(resource => {
             resource.router.applyRoutes(this.server, 'api/');
        });
    }
}


module.exports = Registrar;