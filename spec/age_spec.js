import {AgeCalculator } from '../src/age.js';

describe('AgeCalculator' , function(){
    let hello = new AgeCalculator(12,1,1993,80)
    // let today = new Date();
    let year = 25;

    it('should return false if inputYear is greater currentYear ' , function(){
        let hey = new AgeCalculator(1,12,2025,80);
        let valid = hey.isValidDate();
        expect(valid).toEqual(false);

    });

    it('should return false if inputDay is invalid' , function(){
        let hey = new AgeCalculator(-1,12,1993,80);
        let valid = hey.isValidDate();
        expect(valid).toEqual(false);
    });

    it('should return false if inputMonth is invalid' , function(){
        let hey = new AgeCalculator(1,13,1993,80);
        let valid = hey.isValidDate();
        expect(valid).toEqual(false);
    });

    it('should return false' , function(){
        let valid = hello.isValidDate();
        expect(valid).toEqual(true);
    });


    it('should return the age', function(){
        let age = hello.findAgeInYears();
        expect(age).toEqual(25);
    });

    // it('it should return the age of the user in Mercurian years',function(){
    //     let planet = hello.planetYears(year,'mercury');
    //     expect(planet).toEqual('102.5');
    // });

    // it('it should return the age of the user in Venus years',function(){
    //     let planet = hello.planetYears(year,'venus');
    //     expect(planet).toEqual('40.3');
    // });

    // it('it should return the age of the user in Mars years',function(){
    //     let planet = hello.planetYears(year,'mars');
    //     expect(planet).toEqual('13.3');
    // });

    // it('it should return the age of the user in Jupitor years',function(){
    //     let planet = hello.planetYears(year,'jupitor');
    //     expect(planet).toEqual('2.0');
    // });

    it('it should return the age of the user in Mercurian years' , function(){
        let mAge = hello.mercuryYears(year);
        expect(mAge).toEqual('102.5');
    });

    it('it should return the age of the user in Venus years' , function(){
        let vAge = hello.venusYears(year);
        expect(vAge).toEqual('40.3');
    });

    it('it should return the age of the user in Mars years' , function(){
        let marge = hello.marsYears(year);
        expect(marge).toEqual('13.3');
    });

    it('it should return the age of the user in Jupitor years' , function(){
        let jAge = hello.jupitorYears(year);
        expect(jAge).toEqual('2.0');
    });

    it('should return user remaining years on Earth', function(){
        let remaining = hello.remainingYears();
        expect(remaining).toEqual(55);
    });

    it('should return user LE years on Mercury', function(){
        let LE = hello.mercuryLifeExpectancy();
        expect(LE).toEqual('225.5');
    });

    it('should return user LE years on Venus', function(){
        let LE = hello.venusLifeExpectancy();
        expect(LE).toEqual('88.6');
    });

    it('should return user LE years on Mars', function(){
        let LE = hello.marsLifeExpectancy();
        expect(LE).toEqual('29.2');
    });

    it('should return user LE years on Jupitor', function(){
        let LE = hello.jupitorLifeExpectancy();
        expect(LE).toEqual('4.4');
    });

    it('should return user bonus years on Earth', function(){
        let boo = new AgeCalculator(1,1,1920,80)
        let bonus = boo.earthBonusYears();
        expect(bonus).toEqual(18);
    });

    it('should return user bonus years on Mercury', function(){
        let boon = new AgeCalculator(1,1,1920,80)
        let bonus = boon.mercuryBonusYears();
        expect(bonus).toEqual(73.8);
    });

    it('should return user bonus years on Mercury', function(){
        let boon = new AgeCalculator(1,1,1920,80)
        let bonus = boon.venusBonusYears();
        expect(bonus).toEqual(29);
    });

    it('should return user bonus years on Mercury', function(){
        let boon = new AgeCalculator(1,1,1920,80)
        let bonus = boon.marsBonusYears();
        expect(bonus).toEqual(9.5);
    });

    it('should return user bonus years on Mercury', function(){
        let boon = new AgeCalculator(1,1,1920,80)
        let bonus = boon.jupitorBonusYears();
        expect(bonus).toEqual(1.4);
    });

});