var con = require('../config/db');
const getDistrict = (request, response) => {
    con.query('SELECT * FROM shop_district ORDER BY district_id ASC', (error, results) => {
        if (error) {
            throw error
            
        }
          if (results.rows.length === 0) {
                return response.status(404).json({ message: 'District not found' });
            }
            else
            response.status(200).json(results.rows)
    })
}

const getSubdivision = (request, response) => {
    const district_id = parseInt(request.params.district_id)
    console.log('ssss'+district_id);
    con.query('SELECT subdivision_id, subdivision FROM shop_subdivision WHERE district_id = $1', [district_id], (error, results) => {
        if (error) {
            throw error
        }
        console.log("test"+results.rows);
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getDistrict,
    getSubdivision
}

