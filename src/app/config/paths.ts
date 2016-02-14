// Path object - angular does not support relative paths for templates.
// In order to find templates in the build directory you need to put
// the build paths in this object.
const APP_PATH = 'app';
export const PATHS = {
  appPath: APP_PATH,
  taskifyPath: APP_PATH + '/taskify',
};
