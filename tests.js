/**
 * Created by anita on 11/05/15.
 */
test( "#timer display 00:00:00 when we first see it", function () {
    equal( $('#timer').text(), '00:00:00', 'timer is 00:00:00');
});

test("#start_watch button", function (){
   equal( $('#start_watch').text(), 'start', 'start watch button exist');
});

test('startTimer returns the current timestamps', function () {
    var start = startTimer();
    equal(start.toString().length, 13, 'started timer');
});

test('click on start button starts timer', function () {
    $('#start').trigger('click');
        equal(window.start.toString().length, 13, 'started timer');

});