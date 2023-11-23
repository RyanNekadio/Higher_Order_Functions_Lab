const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.countRestaurants = function() {
    let count = 0;

    for (const element of this.restaurants){
        count += 1;
    }

    return count;
}

ScranAdvisor.prototype.findRestaurant = function(restaurantName){
    return this.restaurants.find(restaurant => restaurant.name === restaurantName);
};

ScranAdvisor.prototype.allRestaurantNames = function(){
    return this.restaurants.map(restaurant => restaurant.name);
}

ScranAdvisor.prototype.findRestaurantByCity = function(city){
    return this.restaurants.filter(restaurant => restaurant.location.town === city);
}

// EXTENSION TASK
ScranAdvisor.prototype.searchByName = function(substring){
    return this.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(substring.toLowerCase()));
}

module.exports = ScranAdvisor;