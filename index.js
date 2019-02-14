random = {
    randInt: function randInt(begin, end) {
        return Math.ceil(Math.random() * (++end - begin))
    }
}

module.exports = random