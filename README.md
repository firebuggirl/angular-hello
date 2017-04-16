# AngularHello

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` -0 (to open in browser) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


To create added components via the terminal, open 2nd terminal window
in directory and run:

ng g c customer -d   ...generates customer component with initial dry run to test...then run without -d alias/tag

ng g c orders --view-encapsulation Emulated ????

run this instead ng g c orders -ve Emulated -cd onPush (cd= change detection strategy onPush?)
....in other words...adds ViewEncapsulation, ChangeDetectionStrategy to import @
top of orders.component.ts file


run ng g d search-box -d ...generates dry run of search-box directive,
then run ng g d search-box without -d   ...if tag on --flat false .....will create a folder instead of being in root of app
