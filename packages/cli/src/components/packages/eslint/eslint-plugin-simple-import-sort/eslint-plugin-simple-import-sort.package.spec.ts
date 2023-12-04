import { eslint } from '../eslint.package';
import { EslintPluginSimpleImportSortPackage } from './eslint-plugin-simple-import-sort.package';

describe('EslintPluginSimpleImportSortPackage', () => {
  const fixture = new EslintPluginSimpleImportSortPackage();

  test('instance is created', () => {
    expect(fixture).toBeDefined();
  });

  test('should be included in parent package', () => {
    expect(eslint.extensions).toContainEqual(fixture);
  });
});
