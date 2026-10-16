import Company from "../model/companys.model.js";

export default class CompanyService {
    async getAllCompany() {
        const company = await Company.aggregate([
            {
                $match: {
                    subject: { $nin: ["test", ""] },
                    show: "1",
                    alias: {
                        $nin: [
                            "ccphseminar202501",
                            "ccphseminar202502",
                            "thaimed",
                            "irc",
                            "testolr2"
                        ]
                    }
                }
            },
            {
                $addFields: {
                    startDateObj: {
                        $dateFromString: {
                            dateString: "$dateOpen",
                            format: "%Y-%m-%d"
                        }
                    },
                    stopDateObj: {
                        $dateFromString: {
                            dateString: "$dateClose",
                            format: "%Y-%m-%d"
                        }
                    }
                }
            },
            {
                $match: {
                    $expr: {
                        $and: [
                            { $lte: ["$startDateObj", new Date()] },
                            { $gte: ["$stopDateObj", new Date()] }
                        ]
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    companyName: "$companyName",
                    companyAlias: "$companyAlias",
                    alias: "$alias",
                    dateStart: {
                        $dateToString: {
                            format: "%d-%m-%Y",
                            date: "$startDateObj"
                        }
                    },
                    dateStop: {
                        $dateToString: {
                            format: "%d-%m-%Y",
                            date: "$stopDateObj"
                        }
                    },
                    subject: "$subject"
                }
            }
        ]);

        return company
    }
}
