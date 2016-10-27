/**
 * Created by Bobby on 10/26/2016.
 */
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.View_Calendar_Page.onRendered(() => {
  $('#calendar').fullCalendar({
    eventClick(calEvent, jsEvent, view) {
      FlowRouter.go('View_Session_Page');
    },
    // put your options and callbacks here
  });
  $('#calendar').fullCalendar('renderEvent', {
    title: 'ICS314 WOD',
    start: new Date(),
  }, true);
});

