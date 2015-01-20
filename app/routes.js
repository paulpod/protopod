module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index',
                {'assetPath' : assetPath});


      var http = require('http');
      var https = require('https');



    });

    


    /* - - - - - - - */
    /* Example pages */

    app.get('/examples/hello-world', function (req, res) {
      res.render('examples/hello-world', {'message' : 'Hello world'});
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });    
    });




    /* - - - - - - - - - - - - - - - - */
    /* Pages for Dart Charge prototype */

    app.get('/local-type', function (req, res) {
      var o = req.query.Option;
      
      //res.render('local-type-' + o, {'assetPath' : assetPath });
      res.redirect('https://test.dart-charge.co.uk/Registration/RegisterLocalResident?option=' + o);

    });


    app.get('/account-type', function (req, res) {
      var o = req.query.Option;

      if (o == 'personal') {
        res.redirect('https://test.dart-charge.co.uk/Registration/Register');
      } else if (o == 'local') {
        res.render('dart-account-1-' + o, {'assetPath' : assetPath });
      } else if (o == 'company') {
        res.redirect('https://test.dart-charge.co.uk/Registration/RegisterBusiness');
      }
      
    });




    /* - - - - - - - - - - - - - - */
    /* Pages for Change of address */

    app.get('/also-change-keeper', function (req, res) {

    var x = req.query.keepertoo;

    if (x == 'yes') {
      res.render('v5c-reg-lookup', {'assetPath' : assetPath});
    } else if (x == 'no') {
      res.render('finish', {'assetPath' : assetPath});
    }

    });



    /* - - - - - - - - - - - - - -  */
    /* Pages for Vehicle Management */

    app.get('/vm/postcode', function (req, res) {

    var y = req.query.postcode;

    res.render('vm/transfer-2', {'assetPath' : assetPath, 'playback-postcode' : y})

    });



    /* - - - - - - - - - - - - - - - */
    /* Using idealpostcode on NodeJs */

    app.get('/vm-full/newkeeper-postcode', function (req, res) {

      var Handlebars = require('Handlebars');

      var postcode = req.query.postcode;

      var idealPostcodes = require("ideal-postcodes")("ak_i0ze7k03RQwMtjncypybi4nQOE97T")

      idealPostcodes.lookupPostcode(postcode, function (error, results) {
        if (error) {
        // Implement some error handling
        }

        res.render('vm-full/new-keeper-address.html', {'assetPath' : assetPath, 'postcode' : postcode, 'result' : results})

      });

    });





  }
};
