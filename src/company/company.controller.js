
import { text } from 'express';
import CompanyService from './company.service.js'

export const getCompany = async (req, res, next) => {
    try {
        const company = await new CompanyService().getAllCompany()

        const groupedData = Object.values(
            company.reduce((acc, item) => {
                if (!acc[item.companyName]) {
                    acc[item.companyName] = {
                        companyName: item.companyName,
                        alias: item.alias,
                        logo: `https://${item.alias}.thaijobjob.com/component_temp/images/logo_up.png`,
                        round: []
                    };
                }
        
                acc[item.companyName].round.push({
                    name: item.idTest,
                    dateStart: item.dateStart,
                    dateStop: item.dateStop,
                    url: `https://${item.alias}.thaijobjob.com/${item.companyAlias.replace(item.alias, '')}/`,
                });
        
                return acc;
            }, {})
        );


        if (groupedData) {
            return res.status(200).send({
                status: "success",
                code: 1,
                message: "ค้นหาสำเร็จ",
                result: groupedData
            })
        }

        res.status(200).send({
            status: "success",
            code: 0,
            message: "ไม่พบข้อมูล",
            result: []
        })
    } catch (error) {
        res.status(500).send({
            status: "fail",
            code: 0,
            message: error.message,
            result: ""
        })
    }
}
