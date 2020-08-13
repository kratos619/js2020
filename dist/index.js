var Car = /** @class */ (function () {
    /**
     *
     * @date 2020-08-14
     * @param {any} engin:string
     * @returns {any}
     */
    function Car(engin) {
        this.engin = engin;
    }
    /**
     *
     * @date 2020-08-14
     * @returns {any}
     */
    Car.prototype.start = function () {
        return this.engin + " Start";
    };
    Car.prototype.stop = function () {
        return this.engin + " Stop";
    };
    return Car;
}());
var bmw = new Car("v3");
console.log(bmw.start());
console.log(bmw.stop());
