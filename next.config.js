if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
  
module.exports = {
    env: {
        NODE_ENV: 'production',
        DATABASE_URL: process.env.DATABASE_URL
    }
}