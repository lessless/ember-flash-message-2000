import flashMessage from 'ember-flash-message-2000/services/flash-message';
import flashMessageComponent from 'ember-flash-message-2000/components/flash-message/component';


export function initialize() {
  let application = arguments[0],
    overrides = arguments[1];

  var config = {};
  if(typeof overrides !== 'undefined') {
    for(var attr in overrides) {
      config[attr] = overrides[attr];
    }
  }

  /* Allow users to override the default dismiss action */
  if(config.customDismiss) {
    flashMessageComponent.reopen({
      customDismiss: config.customDismiss
    });
  }

  application.register('service:flashMessage', flashMessage, {singleton: true});
  application.inject('route', 'flashMessage', 'service:flashMessage');
  application.inject('controller', 'flashMessage', 'service:flashMessage');
  application.inject('component', 'flashMessage', 'service:flashMessage');
}

export default {
  name: 'ember-flash-message-2000',
  initialize: function(application) {
    var config = {};
    initialize(application, config);
  }
};

