export function getDBConnectionString() {
    if (process.env.ENV == 'local') {
        return 'mongodb://' + process.env.LOCAL_HOST + ':' + process.env.LOCAL_MONGODB_PORT + '/' + process.env.LOCAL_MONGODB_DBNAME;
    } else if (process.env.ENV == 'docker') {
    	return 'mongodb://mongo-service/thematicum';
    } else if (process.env.ENV == 'production') {
        return 'mongodb://' + process.env.MLAB_USER + ':' + process.env.MLAB_PASSWORD + '@' + process.env.MLAB_DOMAIN + ':' + process.env.MLAB_PORT + '/' + process.env.MLAB_DBANME;
    }
}