
'use strict'

module.exports = {
    common: {
        dev: {
            server: {
                name: 'API server',
                port: 8080
            },
            databse: {
                url: 'mongodb://localhost/realdeal'
            }
        },
        test: {
            env: "dev",
            server: {
                name: "TEST server",
                port: 8080
            },
            database: {
                url: 'mongodb://localhost/mockingbird'
            }
        }
    }
}