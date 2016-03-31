import Ember from 'ember';
import {test, moduleForComponent} from 'ember-qunit';


moduleForComponent('flash-message', {});

test('renders properly', function(assert) {
  var component = this.subject();
  assert.ok(true);
  component.set('message', Ember.Object.create({
    text: 'hamster'
  }));
  assert.ok(this.$('*:contains("Hamster")'));
});
