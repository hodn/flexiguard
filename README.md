This manual instructs on how to run the application in the development environment and how to build an installation package. At the moment, the target platform installation packages can be built only from selected origin platforms:

•	Windows  – buildable from macOS, GNU/Linux, Windows
•	macOS – buildable only from macOS
•	GNU/Linux – buildable from macOS, GNU/Linux

Follow these steps to run the application in the development environment:
1.	Run **npm install** command to install all dependencies.
2.	Run **npm run start** command to start a development Node.js server.
3.	Run **npm run electron** command in a new command line to start the application (in the application directory).

Continue with these steps, if you would like to build an installation package:
4.	Run **npm run build** command to build the React app.
5.	Run **npm run dist -wml** command to build a packaged installation file, according to targeted platforms (Windows: -w, Linux: -l, macOS: -m, all: -wml).
6.	Run the packaged installation file in the **dist** directory within the app folder.

Contact the author: hoang.doan@rocketmail.com
