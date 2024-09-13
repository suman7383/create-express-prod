import mongoose from 'mongoose'
import config from '../config/config'
import logger from '../utils/logger'

//Basic db connection(Can remove this if you don't need it)
export default async function connectDB() {
    let db = ''

    db = config.MONGODB_URI || ''

    if (db === '' || db === null) {
        throw new Error('No DB URI found')
    }

    const conn = await mongoose.connect(db)

    logger.info(`Database connected`, {
        meta: {
            name: conn.connection.name,
            host: conn.connection.host
        }
    })
}
