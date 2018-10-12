import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from './age';

$(document).ready(function() {

    $('#input').submit(function(event){
        event.preventDefault();
        let inputStr = new Date($('#inputDate').val());
        let inputDate = inputStr.getUTCDate();
        let inputMonth = inputStr.getMonth()+1;
        let inputYear = inputStr.getFullYear();
        let lifeEpectancy = parseInt($('le').val());
        let age = new AgeCalculator(inputDate, inputMonth,inputYear, lifeEpectancy);
        let result = age.findAgeInYears();
        let mercuryAge = age.mercuryYears();
        let venusAge = age.venusYears();
        let marsAge = age.marsYears();
        let jupitorAge = age.jupitorYears();
        $('#output ul').text('Your age is ' +result+  "~~~" + 'Mercury Years:' + mercuryAge+ "~~~" +'Venus Years:' + venusAge+ "~~~" +'Mars Years:' + marsAge+ "~~~" +'Jupitor Years:' + jupitorAge);

      });

});
