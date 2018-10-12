Take user's age in DOB to make use of the date object
Calculate the age of the user by ::
    years = current date - DOB;

Calcuate Merucry years:
    years * 4.1  =>(1/.24 = 4.1)
Calculate Venus years:
    years * 1.61
Calculate Marrs years:
    years * .53
Calculate Juputor years:
    years * 0.08

Get Life expectancy from user 
    LE = 80;
    LE on earth = 80 - years;


| Test | input | output | TestResult |
| --- | --- | -- | -- |
| inputYear <= currentYear  | 2017 | - | Pass |
| inputYear <= currentYear  | 2025 | - | Fail |
| inputMonth <= currentMonth  | 2 | - | Pass |
| inputMonth <= currentMonth  | 24 | - | Fail |
| inputDay <= currentDay  | 21 | - | Pass |
| inputDay <= currentDay  | 34 | - | Fail |
| Mercury Years  | 1993/1/12 | 102.5 | Pass |
| Venus Years  | 1993/1/12 | 40.25 | Pass |
| Mars Years  | 1993/1/12 | 13.25 | Pass |
| Jupitor Years  | 1993/1/12 | 2 | Pass |
| Life Expectancy  | -1 | - | Fail |
| Life Expectancy  | 80 | - | Pass |
| LE on Earth  | 80 | 55 | Pass |
| LE on Mercury  | - | 225.5 = 4.1 * 55 | Pass |
| LE on Earth  | - | 88.55 | Pass |
| LE on Earth  | - | 29.15 | Pass |
| LE on Earth  | - | 4.4 | Pass |




