const config = {
    db: {
        main: {
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE,
            port: process.env.DATABASE_PORT,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            dateStrings: false
        }
    },
    app: {
        port: process.env.PORT,
        jwtKey: process.env.JWT_KEY,
    }
}

export default config