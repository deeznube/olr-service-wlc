import { pool } from '../database.js'

export default class CompanyService {
    async getAllCompany() {
        const sql = `SELECT
                        CompanyName AS companyName,
                        CompanyAlias AS companyAlias,
                        alias AS alias,
                        DATE_FORMAT( dateStart, '%d-%m-%Y' ) AS dateStart,
                        DATE_FORMAT( dateStop, '%d-%m-%Y' ) AS dateStop,
                        IdTest AS idTest
                    FROM
                        tb_company 
                    WHERE
					    CURDATE() BETWEEN dateStart AND dateStop
					    AND idTest NOT IN  ('test', '')
						AND \`show\` = 1
						AND alias NOT IN ('ccphseminar202501','ccphseminar202502', 'thaimed', 'irc');`
        const [result] = await pool.query(sql)
        return result
    }
}
