import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

//Edit this file according to your env variables
const config = {
    ENV: process.env.NODE_ENV!,
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET!,
    MONGODB_URI: process.env.MONGODB_URI!
}

// Check if all required variables are defined
;(function () {
    Object.entries(config).forEach(([key, value]) => {
        if (!value) {
            throw new Error(`Missing environment variable: ${key}`)
        }
    })
})()

export default config
