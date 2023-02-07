//uber price
class Uberprice {
    constructor(distancetraveled, waitingtime) {
    this.distancetraveled = distancetraveled;
    this.waitingtime = waitingtime;
    }
    calculateprice() {
    const timeperhrs = 2.5;
    const perkm = 10;
    const totalprice = perkm * this.distancetraveled + timeperhrs* this.waitingtime;
    return totalprice;
    }
    }
    const ride = new Uberprice(10, 2);
    console.log(`The Total cost is RS: ${ride.calculateprice()}-only`);
    
    //output: "The Total cost is RS: 105-only"

