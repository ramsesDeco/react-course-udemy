var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountDownForm', () => {

    it('should exist', () => {
        expect(CountdownForm).toExist();
    });



    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();

        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));


        countdownForm.refs.seconds.value = '109';

        // error on udemy
        // TestUtils.Simulate.submit($el.find('form')[0]);

        // Fix
        const form = countdownForm.refs.form;
        TestUtils.Simulate.submit(form);

        expect(spy).toHaveBeenCalledWith(109);

    });

    it('should not call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();

        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);

        countdownForm.refs.seconds.value = '109f';

        const form = countdownForm.refs.form;
        TestUtils.Simulate.submit(form);

        expect(spy).toNotHaveBeenCalled();
    });


});