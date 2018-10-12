let today = new Date();
export class AgeCalculator {
    constructor(inputDate, inputMonth, inputYear, lifeExpectancy) {
        this.inputDate = inputDate;
        this.inputMonth = inputMonth;
        this.inputYear = inputYear;
        this.lifeExpectancy = lifeExpectancy;
    }

    isValidDate(){
        if(this.inputYear > today.getFullYear()) {
            return false;
        }
        else if(this.inputMonth < 0 || this.inputMonth > 12) {
            return false;
        }
        else if(this.inputDate < 0 || this.inputDate > 31) {
            return false;
        }
        else {
            return true;
        }
    }

    findAgeInYears() {
        if(this.isValidDate()){
            let yearDiff = 0;
            yearDiff = today.getFullYear() - this.inputYear;
            // let age = 0;
    
            if(today.getMonth() <= this.inputMonth){
                yearDiff--;
            }
            // age = yearDiff;
            let age = yearDiff;
            return age;
        }
        else{
            return 0;
        }

    }
    mercuryYears() {
        let mercuryAge = this.findAgeInYears() * 4.1;
        let fixedMercuryAge = parseFloat(mercuryAge.toFixed(1));
        return fixedMercuryAge;
    }

    venusYears() {
        let venusAge = this.findAgeInYears() * 1.61;
        let fixedVenusAge = parseFloat(venusAge.toFixed(1));
        return fixedVenusAge;
    }

    marsYears() {
        let marsAge = this.findAgeInYears() * 0.53;
        let fixedMarsAge = parseFloat(marsAge.toFixed(1));
        return fixedMarsAge;
    }

    jupitorYears() {
        let jupitorAge = this.findAgeInYears() * 0.08;
        let fixedJupitorAge = parseFloat(jupitorAge.toFixed(1));
        return fixedJupitorAge;
    }

    remainingYears(){
        return this.lifeExpectancy - parseInt(this.findAgeInYears());
    }

    earthBonusYears(){
        if(this.remainingYears() < 0 ){
            let bonus = Math.abs(this.remainingYears());
            return bonus;
        } else{
            return 0;
        }
    }
    
    mercuryLifeExpectancy() {
        let mercuryLifeExpectancy = this.remainingYears() * 4.1;
        return parseFloat(mercuryLifeExpectancy.toFixed(1));
    }

    venusLifeExpectancy() {
        let venusLifeExpectancy = this.remainingYears() * 1.61;
        return parseFloat(venusLifeExpectancy.toFixed(1));
    }

    marsLifeExpectancy() {
        let marsLifeExpectancy = this.remainingYears() * 0.53;
        return parseFloat(marsLifeExpectancy.toFixed(1));
    }

    jupitorLifeExpectancy() {
        let jupitorLifeExpectancy = this.remainingYears() * 0.08;
        return parseFloat(jupitorLifeExpectancy.toFixed(1));
    }

    mercuryBonusYears(){
        let mercuryBonusYears = this.earthBonusYears() * 4.1;
        return parseFloat(mercuryBonusYears.toFixed(1));
    }

    venusBonusYears(){
        let venusBonusYears = this.earthBonusYears() * 1.61;
        return parseFloat(venusBonusYears.toFixed(1));
    }

   marsBonusYears (){
        let marsBonusYears = this.earthBonusYears() * 0.53;
        return parseFloat(marsBonusYears.toFixed(1));
    }

    jupitorBonusYears (){
        let jupitorBonusYears = this.earthBonusYears() * 0.08;
        return parseFloat(jupitorBonusYears.toFixed(1));
    }

}