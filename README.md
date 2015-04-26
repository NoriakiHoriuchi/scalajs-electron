# scalajs-electron
This is a Electron application which shows Scala.js.

## Dependencies
node.js

grunt

sbt

## Usage

Please put Electron.app in this project root directory.

Then run Grunt task runner. Grunt will check the change of scala.js source files, and compile Scala.js, copy into Electron.app.

```
npm install

grunt
```

After this, you can run Electron.app.