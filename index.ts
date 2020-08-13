class Car {
    engin: string;
    /**
     * 
     * @date 2020-08-14
     * @param {any} engin:string
     * @returns {any}
     */
    constructor(engin: string) {
        this.engin = engin;
    }
    
    /**
     * 
     * @date 2020-08-14
     * @returns {any}
     */
    start() {
        return `${this.engin} Start`
    }
    stop() {
        return `${this.engin} Stop`
    }
}

var bmw = new Car("v3");
console.log(bmw.start());
console.log(bmw.stop());

