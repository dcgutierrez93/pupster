import axios from "axios";

// Export object containing methods we'll use from accessing the Dog.Ceo Api

export default {
    getRandomDog: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getDogsOfBreed: function() {
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    },
    getBaseBreedsList: function() {
        return axios.get("https://dog.ceo/api/breeds/list");
    }
};
