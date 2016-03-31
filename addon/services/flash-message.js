import Ember from 'ember';

const { addObserver, getOwner } = Ember;

export default Ember.Service.extend({
  router: Ember.inject.service('-routing'),
  isObserving: false,


  init: function() {
    this.set('queuedMessages', Ember.A([]));
    this.set('messages', Ember.A([]));
    this._super();
  },

  addMessage: function(message) {
    this._observeRoute();
    this.get('queuedMessages').pushObject(Ember.Object.create(message));
    return this;
  },

  now: function() {
    this.get('messages').pushObject(this.get('queuedMessages').shiftObject());
  },

  clearMessages: function() {
    this.get('messages').clear();
  },

  _displayQueuedMessages: function() {
    var _this = this;
    if(this.get('queuedMessages.length') > 0) {
      Ember.run.later(function() {
        _this.get('messages').pushObjects(_this.get('queuedMessages'));
        _this.get('queuedMessages').clear();
      });
    }
  },

  _observeRoute: Ember.observer('router.currentRouteName', function(){
    this._displayQueuedMessages();
    this.clearMessages();
  })
});
