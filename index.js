random = {
    randInt: function randInt(begin, end) {
        return Math.ceil(Math.random() * (++end - begin))
    },

    randFloat: function randFloat(begin, end, dec_places) {
        if (dec_places < 0) throw new RangeError("Decimal places has to be greater or queal than zero")
        let res = Math.random() * (++end - begin)
        return Number(res.toFixed(dec_places))
    },
}

module.exports = random