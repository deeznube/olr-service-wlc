const config = {
    db: {
        mongo: {
            host: process.env.DB_HOST_MONGO,
            port: process.env.DB_PORT_MONGO,
            username: process.env.DB_USER_MONGO,
            password: process.env.DB_PASSWORD_MONGO,
            maxPoolSize: process.env.DB_POOL_SIZE_MONGO,
            dbBox: process.env.DB_NAME_BOX
        },
    },
    app: {
        port: process.env.PORT,
        jwtKey: process.env.JWT_KEY,
    }
}

export default config