# rythmia-main-websites
This repo houses the working and distribution files for the Rythmia Main and Clean code repos.

### Note: You may encounter difficulties running a straight npm install on Mac OS.

Here is the smoothest path forward if so:

1. Rename package.json to package.backup.json
2. ```npm install sass```
3. Copy other dependencies from the backup file to the new package.json that gets generated, except for gulp-sass
4. ```npm install```
5. ```npm install gulp-sass```
6. update the gulpfile with the following:
```const sass = require('gulp-sass')(require('sass'));```

```npm run dev``` should work fine once this is done.

Note - there are minified css files that are included in each respective folder's /docs/ which are generated on save / build. There are no source files for these minified css files, so take good care to not remove them. Note that you will need to restore these if any process erroneously removes them.

