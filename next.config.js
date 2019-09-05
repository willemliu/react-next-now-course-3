module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        SECRET: process.env.SECRET
    },
    env: {
        PUBLIC_SECRET: process.env.PUBLIC_SECRET
    }
};
