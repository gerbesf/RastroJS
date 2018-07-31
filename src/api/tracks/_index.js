// Joi Validate
import readValidate from './_validates/read.validate';

// Middleware
import readObject from './read';

export default (route) => {


    route.get('/', function (req, res) {
        res.json({
            message: 'welcome to api-tracking, for use /track/:_trackId/:_outputType',
            credits: 'talesluna/RastroJS'
        });
    })

    route.get('/track/:_trackId/:_outputType', readValidate, readObject);
    
};