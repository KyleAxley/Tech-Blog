# Tech-Blog
This application is a CMS-style site for Tech people to blog with others about tech and tech related conversations! 

## Built with:
* MySql2
* Sequelize
* express-handlebars
* bcrypt
* express-session
* connect-session-sequelize

## Installation
to install: From your terminal run git clone git@github.com:KyleAxley/Tech-Blog.git

After you have cloned the repo, open the application with VScode and run "npm i" in terminal to install the required packages associated with this application.

* after packages are installed, run ".env.EXAMPLE .env" to copy the ".env" file. You will then have to input your personal user name and password associated with your mySql account inside the ".env" file you just created. 

Once the packages are installed you will then run "mysql -u root -p" in the command line and input your mysql password when prompted. after connecting to mysql you will then need to create the database. Run "source db/schema.sql" to create the database and tables. After you have connected to the database and successfully created the tables you can "quit" out of mysql. Next run "node server" or "nodemon" in the terminal to start the server.


## Demo and Screen Shots

![Tech-Blog screen shot](https://user-images.githubusercontent.com/103543572/186728179-2a967ad0-f2e0-4830-8624-cdc1a738c051.png)

![Tech-Blog SS 2](https://user-images.githubusercontent.com/103543572/186728237-e1875dcf-9993-48bf-9e88-a708e5c92beb.png)

![Tech-Blog SS 3](https://user-images.githubusercontent.com/103543572/186728287-c5ecfbc4-c939-4fd1-90f8-0785f9118cd0.png)

## Lesson Learned 
This was the most extensive challenge that we were tasked to build so far. It was definitly a true test to sharpen our skills in the full-stack tool box. Some personal lessons learned was definitly double checking small typo errors that would break the site or making sure closing If statment tags were in the correct position while using handlebars templates. At certain points the project was very daunting but as progression was made, "walk-away" moments had and errors corrected, the sense of the project wrapping up and seeing it finally coming together was truely gratifying!  


