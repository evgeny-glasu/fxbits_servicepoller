const db = require('./db.js')

class ServiceController {

    async create(req, res) {
        try{
            const url = req.body.url;
            if (!url.includes('.')) {
                res.send('Error! Wrong URL!')
            }else {
                const addService = await db.query(`INSERT INTO services (url) values ($1) RETURNING *`, [url]);
                res.json(`id: ${addService.rows[0].id}, url: ${addService.rows[0].url} - added to db.`);
            }
        }catch (err){
            console.log(`${err}`)
            res.send(`ERROR! ${err.detail}`)
        }
    }

    async read(req, res) {
        const services = await db.query(`SELECT * FROM services`);
        res.json(services.rows);
    }

    async update(req, res) {
        try{
            const {url, newUrl} = req.body;
            const service = await db.query(`SELECT * FROM services WHERE url = $1`, [url]);
            if (!service.rows.url) {
                res.send(`url: ${url} - not assigned to DB!`);
            }else {
                const newService = await db.query(`UPDATE services SET url = $1 WHERE url = $2`, [newUrl, url]);
                res.send(`${url} changed to ${newUrl}`);
            }
        }catch (err){
            console.log(err)
        }

    }

    async delete(req, res) {
        const url = req.body.url;
        try{
            const service = await db.query(`SELECT * FROM services WHERE url = $1`, [url]);
            const deleteService = await db.query(`DELETE FROM services WHERE url = $1`, [url]);
            res.send(`ID: ${service.rows[0].id}, URL: ${service.rows[0].url} - DELETED FROM DB! `)
        }catch (err){
            res.send('ERROR! URL not found in DB!')
        }

        // const url = req.body.url;
        // const selectedService = await db.query(`SELECT * FROM services where url = $1`, [url])
        // const deleteService = await db.query(`DELETE FROM services where url = $1`, [url]);
        // res.json(`id: ${selectedService.id}, url:${selectedService.url} - deleted from db!`)
    }
}

module.exports = new ServiceController