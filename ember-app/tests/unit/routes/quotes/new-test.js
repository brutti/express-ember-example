import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | quotes/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:quotes/new');
    assert.ok(route);
  });
});
