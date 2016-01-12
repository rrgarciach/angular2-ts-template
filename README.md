# angular-2-ts
### WORK IN PROGRESS
Angular2 beta with TypeScript scaffolding that includes unit tests

> This starter uses [gulp.js](http://gulpjs.com/) for a build workflow.

## Dependencies

To run this starter you have to install:

  - [node.js](https://nodejs.org/)  (has installation file)
  - [gulp](http://gulpjs.com/) (npm install -g gulp)
  - [tsd](http://definitelytyped.org/tsd/) (npm install -g tsd)
  
## Installation
* Clone this repository
* Install Node.js
* run `$ npm install -g gulp-cli gulp tsd`
* run `$ npm start`


## Production deployment
To generate the dist folder with all assets:
* run `$ gulp build`

## Testing

Note: In order to run specs all specs must export a main function and wrap all test cases inside. E.g.:

```javascript 
 export function main() {
      describe('feature', () => {
  
          it('should be truthy', () => {
              expect(true).toBe(true);
          });
      });
  }
 ```
