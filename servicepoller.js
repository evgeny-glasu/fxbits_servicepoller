const db = require(`./db.js`)
const axios = require(`axios`);

class ServicePoller {
    async poll() {
        const servicesList = await db.query(`SELECT url FROM services`);
        setInterval(() => {
            servicesList.rows.forEach(async elem => {
                axios.get(`http://${elem.url}`)
                    .then(response => {
                        console.log(`${elem.url} - ${response.status}`)
                    })
                    .catch(reason => {
                        console.log(`${elem.url} - ${reason}`)
                    })
            })
            console.log(`\n`)
        }, process.env.REFRESH_RATE)
    }
}

module.exports = new ServicePoller