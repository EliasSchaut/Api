// Sequelize-Types: https://sequelize.org/v5/manual/data-types.html
// Examples: https://discordjs.guide/sequelize/

// ---------------------------------------------
// Model
// ---------------------------------------------
const _TABLE = (sequelize, Sequelize) => {
    return sequelize.define('Bday_Members', {
        "forename": {
            type: Sequelize.STRING,
            allowNull: false
        },
        "surname": {
            type: Sequelize.STRING,
            allowNull: false
        },
        "need_bed": {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        "nerd": {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        "anonym": {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
    }, {
        timestamp: false
    })
}
// ---------------------------------------------


// ---------------------------------------------
// Helper
// ---------------------------------------------
// GET all names
async function get_all_names(DB) {
    const tag = await DB["Bday_Members"].TABLE.findAll({attributes: ["forename", "surname"] })
    return (tag) ? tag.map(function (e) {
        return e.dataValues.user_id
    }) : []
}

// add stuff to database
async function add(DB, forename, surname, need_bed, nerd, anonym) {
    try {
        await DB["Bday_Members"].TABLE.create({
            "forename": forename,
            "surname": surname,
            "need_bed": need_bed,
            "nerd": nerd,
            "anonym": anonym
        })
        return true

    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') {
            console.log("Duplicate entry")
        } else {
            console.log(e)
        }

        return false
    }
}

// GET stuff from database
async function get(DB, forename, surname) {
    const tag = await DB["Bday_Members"].TABLE.findOne({ where: { "forename": forename, "surname": surname } })
    return (tag) ? tag.dataValues : null
}


// set stuff in database
async function set(DB, forename, surname, need_bed, nerd, anonym) {
    const new_tag = await DB["Bday_Members"].TABLE.update({ "need_bed": need_bed, "nerd": nerd, "anonym": anonym },
        { where: { "forename": forename, "surname": surname } })

    if (new_tag[0]) {
        return true

    } else {
        console.log("No entry found")
        return false
    }
}

// remove tag in database
async function remove(DB, forename, surname) {
    const rowCount = await DB["Bday_Members"].TABLE.destroy({ where: { "forename": forename, "surname": surname } })

    if (rowCount) {
        return true

    } else {
        console.log("No entry found")
        return false
    }
}
// ---------------------------------------------


module.exports = { _TABLE, get_all_names, add, get, set, remove }
