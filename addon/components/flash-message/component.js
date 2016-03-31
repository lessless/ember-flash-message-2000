import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  init() {
    this._super();
    if(this.get('message.dismiss')) {
      Ember.run.later(this, this._dismiss, {}, this.get('message.dismiss'));
    }
  },

  _dismiss() {
    if(typeof this.customDismiss !== 'undefined') {
      this.customDismiss();
    }else{
      this.get('flashMessage.messages').removeObject(this.get('message'));
    }
  },

  actions: {
    remove() {
      this._dismiss();
    }
  }
});
