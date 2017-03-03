var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {

    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('started');

        setTimeout(() => {
            expect(timer.state.count).toBe(2);
            expect(timer.state.timerStatus).toBe('started');
            done();
        }, 2001);
    });

    it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');

        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('started');

        setTimeout(() => {
            expect(timer.state.count).toBe(2);
            expect(timer.state.timerStatus).toBe('started');
            timer.handleStatusChange('paused');
            expect(timer.state.timerStatus).toBe('paused');
        }, 2001);


        setTimeout(() => {
            expect(timer.state.count).toBe(2);
            expect(timer.state.timerStatus).toBe('paused');
            done();
        }, 4001);

    });

    it('should reset timer on stopped status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('stopped');

        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
    });

    describe('render', () => {

        it('should show pause button on started Status', () => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.handleStatusChange('started');

            var $el = $(ReactDOM.findDOMNode(timer));

            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);

        });

    });

});