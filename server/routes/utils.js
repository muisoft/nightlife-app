require('dotenv').config();
const Yelp = require('yelp-fusion');
const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Food = require('mongoose').model('Food');

module.exports = {

  signup(req, res) {
    let { username, email, password } = req.body;
    User.findOne({ username: username}, (err, user) => {
      if (user) {
        console.log('Username already exists');
        res.json({
          message: 'Username already exists'
        })
      } else {
        let newUser = new User({
          username,
          email,
          password
        });
        newUser.save((err, user) => {
          res.json(user);
        });
      }
    });
  },
  searchFoods(req, res) {
    let {
      location
    } = req.body;

    const client = Yelp.client(process.env.YELP_API_KEY);
    client.search({
        term: 'food',
        location: location
      })
      .then(response => {
        
        formattedData(response.jsonBody.businesses, res);
      })
      .catch(err => console.error('Get Error: '+err));
  },
  addGoing(req, res) {
    let {
      bussid
    } = req.body;
    //Food.findOneAndUpdate({ bussid: bussid}, {})
    Food.findOne({
      bussid: bussid
    }, (err, food) => {
      if (err) console.error(err);
      if (food) {
        //food.bussid = bussid;
        food.count = food.count + 1;
        food.save();
        res.json({
          success: true
        });
      } else {
        let newfood = new Food({
          bussid: bussid,
          count: 1
        });
        newfood.save((err, nfood) => {
          if (err) console.error(err);
          res.json({
            success: true
          });
        });
      }
    })
  }
}

const getFood = (food) => {
  return {
    bussid: food.id,
    name: food.name,
    review_count: food.review_count,
    rating: food.rating,
    phone: food.phone,
    image_url: food.image_url,
    url: food.url 
  }
}
let searchBussId = (bussid) => {
  return Food.findOne({
    bussid: bussid
  }, (food) => {
    if (food) {
      return food.count
    }

  });
}
const formattedData = (data, res) => {
  
  Food.find({}, (err, foods) => {
    console.error('Food: '+ err);
    
    //console.log('Yewo1: ' + JSON.stringify(foods));
    let result = [];
    data.forEach(datum => {
      console.log('Yewo1: ' + JSON.stringify(datum));
      foods.forEach(food => {
        console.log('Yewo2: ' + JSON.stringify(food));
        // Check if already stored bussiness id is in the result data
        if (food.bussid === datum.id) {
          // if found add going field to result data with the value, number of count found in the database.
          // Otherwise, add going field with zero value. 
          result.push(Object.assign({}, getFood(datum), {
            going: food.count
          }));
        } else {
          result.push(Object.assign({}, getFood(datum), {
            going: 0
          }));
        }
      })
    });
   
   // Because we have duplicate data in our result, we first sort it by highest number of going,
    // and then  make it unique by name
     let uniqueResult = ((uniqueByName(result.sort((first, second) => {
       return second.going - first.going;
    }))));

    
     // then sort it by id. but this last step is not necessarily needed
     res.json(uniqueResult.sort((first, second) => {
       return first.id - second.id;
     }));
  })
}

const uniqueByName = (results) => {
  let isSeen = {};
  return results.filter((item) => {
    let name = item.name;
    return isSeen.hasOwnProperty(name) ? false : isSeen[name] = true;
  });
}