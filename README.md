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


run ng g s sale-data -d (s = alias for 'service'),

..then ng g s sale-data + import SaleDataService via app.module.ts via @ngModule + auto-import to top of file via VS Code ..

OR.......

..to auto generate sales-data service and auto add updates to app.module run...ng g s sales-
data2 -m app.module


ng g cl models/customer -d  ...create customer class within models directory (dry run)...

then run ng g cl models/customer


ng g i models/person //create person interface within models directory

create an enumeration:
ng g e models/gender

blueprint for creating a pipe:

ng g p init-caps -d (dry run)

ng g p shared/init-caps 

Create login module:

ng g m login -d
ng g m login

reminder: modules by default get their own folder, though they do not get spec file by default... '--spec true' to add

Add component login into login module:
 
ng g c login -m login/login.module -d
ng g c login -m login/login.module 