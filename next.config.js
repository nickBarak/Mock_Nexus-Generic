if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
  
module.exports = {
    env: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL
    }
}