import { DependencyTypeEnum } from '../../../type/enums/dependency-type.enum.js';
import { BasePackage } from '../../base.package.js';

class EslintPluginPrettierPackage extends BasePackage {
  readonly title = 'eslint-plugin-prettier 🖌️';
  readonly package = 'eslint-plugin-prettier';
  readonly dependencyType = DependencyTypeEnum.devDependency;
  readonly description =
    'Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.';
}

export const eslintPluginPrettier = new EslintPluginPrettierPackage();
