import { test } from 'japa/build/src/SlimRunner';
import { PersefoneVersion } from '../../src';

test.group('Init', (group) => {
  group.before(async () => {
    console.log('BEFORE');
  });

  test('test version', async (assert) => {
    const version = PersefoneVersion();

    assert.equal(version, 'PersefoneJs v1.0');
  });
});
