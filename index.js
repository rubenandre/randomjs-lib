let random = {
    randInt: function randInt(begin, end) {
        if (end < begin) { let t = end; end = begin; begin = t}
        return Math.ceil(Math.random() * (end - begin)) + begin
    },

    randFloat: function randFloat(begin, end, dec_places) {
        if (dec_places < 0) throw new RangeError("Decimal places has to be greater or queal than zero")
        if (end < begin) { let t = end; end = begin; begin = t}
        let res = Math.random() * (end - begin) + begin
        return Number(res.toFixed(dec_places))
    },

    randBoolean: function randBoolean() {
        return !!this.randInt(0, 1);
    }, 

    randEven: function randEven (begin, end) {
        if (end < begin) { let t = end; end = begin; begin = t}
        let res = this.randInt(begin, end);
        while (res % 2 === 1) res = this.randInt(begin, end);
        return res
    },

    randOdd: function randOdd (begin, end) {
        if (end < begin) { let t = end; end = begin; begin = t}
        let res = this.randInt(begin, end);
        while (res % 2 === 0) res = this.randInt(begin, end);
        return res
    },

    randElement: function randElement (array) {
        if(!Array.isArray(array)) throw new Error("Please introduce an array")
        let index = this.randInt(0, array.length - 1);
        return array[index]
    }
}

module.exports = random