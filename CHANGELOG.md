CHANGELOG
=========

Initial commit
--------------

A brand new Angular CLI generated project without any of the extra options
(testing environment, router, CSS preprocessor)

```
npx @angular/cli new ng-starter --defaults --minimal
```

Added testing environment
-------------------------

Added the default testing environment provided by the CLI (`jasmine`, `karma`,
`istambul`) and removed the e2e part since it is designed for QAA roles (Quality
Assurance Automation) and we want to focus on the developer role and cover our
code with unit tests only

```
npx @angular/cli new ng-starter --force --skip-install --skip-git --defaults
```

Added CSS preprocessor
----------------------

Added the `sass` preprocessor provided by the CLI for `.scss` files

```
npx @angular/cli new ng-starter --force --skip-install --skip-git --defaults --minimal --style scss
```

Added Router
------------

Added the Angular Router provided by the CLI

```
npx @angular/cli new ng-starter --force --skip-install --skip-git --defaults --minimal --routing
```

Improved testing environment
----------------------------

Karma is configured to run under a Headless Chrome instance and to generate
an instambul coverage report

Added husky and a prepush git hook to ensure that all changes pushed to the
mainstream repository passed linter and unit tests

Added Storybook
---------------

Added Storybook for Component-Driven Development

```
cd ng-starter
npx -p @storybook/cli sb init
```

Updated documentation
---------------------

Updated project documentation from the contents on the wiki

Documentation is available under the `doc/` folder with the same hierarchy as
the one shown in the `README.md`
