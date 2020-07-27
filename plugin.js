// Imports
const url2pdf = require('./aspdf');
var moment = require('moment');


module.exports = async function (fastify, options) {
  
    fastify.get('/', async function (request, reply) {
        let url = request.query.url
        const filename = request.query.filename

        if (url == null) {
            request.log.info('Provided url is undefined or null. Nothing do to.')
            return { 'msg': 'Provided url is undefined or null', 'url': url, 'filename': filename }
        }

        if (filename == null) {
            request.log.info('Provided filename is undefined or null. Nothing do to.')
            return { 'msg': 'Provided filename is undefined or null',  'url': url, 'filename': filename }
        }

        // Add query string parameter to url
        Object.keys(request.query).forEach(function(key,index) {

            // Log  key, value pairs of the query string
            console.log(`key ${key}, value ${request.query[key]}`)

            // url and filename are reserved
            if ((key === 'url') || (key === 'filename')) {
                return
            } else {
                // Add query parameters to query string of url to print
                url = url + `&${key}=${request.query[key]}`
                request.log.info(`Adding new query paramter ${key}=${request.query[key]}`)
            }
        });

        // Log request
        request.log.info(`Recieved request for rendering url ${url}  and save as pdf to ${filename}`)
        url2pdf(url, `/pdf/${filename}`)

        const now = moment();
        return { 'recieved_at': now, 'url': url, 'filename': filename }
        })
  }


