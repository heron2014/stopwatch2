/**
 * Created by anita on 11/05/15.
 */

/*
* startTimer starts our stopwatch*/


function startTimer () {
    var start = new Date().getTime();
    console.log(start);
    window.start =  start;
    return start;


}