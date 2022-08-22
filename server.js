const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');


const app = express();
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//create user session
app.use(session(sess));


//initialize handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


//turn on routes
app.use(routes);


//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});