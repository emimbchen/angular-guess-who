var myApp = angular.module('myApp', []);

var people = [{ 
    name: 'Chris', 
    github: 'christopher-black' },
    {
    name: 'Elvis',
    github: 'elvishang'},
    {
    name: 'Emi',
    github: 'emimbchen'
    }];

myApp.controller('guessWhoController', function(){
    var guess = this;
    guess.person = '';
    guess.getnames = function(){
        console.log(guess.name, guess.github);
        people.push({name: guess.name, github: guess.github});
    }
    guess.people = people; 
    guess.appendname = function(person){
        guess.person = person.name;
    }
    
})

