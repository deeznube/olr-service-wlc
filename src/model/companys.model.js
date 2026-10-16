import mongoose from "mongoose";
import moment from "moment-timezone";
import { dbBox } from "../dbMongo.js";

const { Schema, model } = mongoose

const companylatSchema = new Schema({
    compCode: {
        type: String,
        require: true,
    },
    companyAlias: {
        type: String,
        require: true,
    },
    companyName: {
        type: String,
        require: true,
    },
    dateOpen: {
        type: String,
        required: true
    },
    timeOpen: {
        type: String,
        required: true
    },
    dateClose: {
        type: String,
        required: true
    },
    timeClose: {
        type: String,
        required: true
    },
    datePayStart: {
        type: String,
        required: true
    },
    timePayStart: {
        type: String,
        required: true
    },
    datePayStop: {
        type: String,
        required: true
    },
    timePayStop: {
        type: String,
        required: true
    },
    datePrintExam: {
        type: String,
        required: true
    },
    estimate: {
        type: String,
        default: "1"
    },
    subject: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    show: {
        type: String,
        default: "0"

    },
    priority: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "1"
    },
    wording: {
        certnameTitle: {
            type: String,
            require: true,
            trim: true
        },
        certName: {
            type: String,
            require: true,
            trim: true
        },
        type: {
            type: String,
            require: true,
        },
        regCert: {
            type: String,
            require: true,
        },
        chkCert: {
            type: String,
            require: true,
        },
    },
    slide: {
        type: String,
        default: "0"
    },
    printConfirm: [{
        name: {
            type: String,

        },
        status: {
            type: String,

        },
        pathName: {
            type: String,

        },
        updateBy: {
            id: {
                type: Schema.Types.ObjectId,
            },
            name: {
                type: String,
            },
            username: {
                type: String,
            },
            createdAt: {
                type: String,
                default: () => moment().tz('Asia/Bangkok').format(),
            },
            updatedAt: {
                type: String,
                default: () => moment().tz('Asia/Bangkok').format(),
            },
        },
    }],
    payment: {
        type: [String],
        required: true
    },
    createdAt: {
        type: String,
        default: () => moment().tz('Asia/Bangkok').format(),
    },
    updatedAt: {
        type: String,
        default: () => moment().tz('Asia/Bangkok').format(),
    },
},)

const Company = dbBox.model('Company', companylatSchema, 'companys')

export default Company
