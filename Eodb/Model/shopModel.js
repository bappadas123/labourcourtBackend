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

const getPolicestation = (request, response) => {
    const district_id = parseInt(request.params.district_id)
    console.log('ssss'+district_id);
    con.query('SELECT police_station_id, police_station FROM shop_police_station WHERE district_id = $1', [district_id], (error, results) => {
        if (error) {
            throw error
        }
        console.log("test"+results.rows);
        response.status(200).json(results.rows)
    })
}
const getPostOffice = (request, response) => {
    const district_id = parseInt(request.params.district_id)
    console.log('ssss'+district_id);
    con.query('SELECT post_office_id, post_office, pin_code FROM shop_post_office WHERE district_id = $1', [district_id], (error, results) => {
        if (error) {
            throw error
        }
        console.log("test"+results.rows);
        response.status(200).json(results.rows)
    })
}

const getBlockMunicipality = (request, response) => {
    const subdivision_id = parseInt(request.params.subdivision_id);
     const bmc_flag = parseInt(request.params.bmc_flag);
    console.log('ssss'+subdivision_id);
    con.query('SELECT block_id, block FROM shop_block WHERE subdivision_id = $1 and b_m_c_flag=$2', [subdivision_id, bmc_flag], (error, results) => {
        if (error) {
            throw error
        }
        console.log("test"+results.rows);
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getDistrict,
    getSubdivision,
    getPolicestation,
    getPostOffice

}

