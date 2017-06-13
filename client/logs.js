import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.logs.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.logs.helpers({
    showLogs() {
        return BffLogs.find({}).fetch();
    },
    printLog(){
        console.log(this);
        return JSON.stringify(this);
    }
});

Template.logs.events({
    'click .clear-logs '(event) {
        event.preventDefault();
        Meteor.call("deleteAllLogs");
    }
});

