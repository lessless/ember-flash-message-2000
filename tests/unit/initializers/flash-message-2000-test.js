import Ember from 'ember';
import FlashMessage2000Initializer from 'dummy/initializers/flash-message-2000';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | flash message 2000', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  FlashMessage2000Initializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
