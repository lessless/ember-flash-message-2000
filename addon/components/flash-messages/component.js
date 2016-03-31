import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  messages: Ember.computed.alias('flashMessage.messages')
});
