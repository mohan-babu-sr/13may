'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'mb',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery:function({time='11pm',mainIndex=1,starterIndex}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} deliverd at time of ${time}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza:function(maining,...othering){
    console.log(maining,othering);
  }
};

//Set-has to be unique
const ordersSet = new Set(['pasta','pasta','pizza','maggie','pizza',]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(new Set('mohan'));
console.log(new Set());

//set has or not
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('rice'));

ordersSet.add('rice');
ordersSet.add('rice');
console.log(ordersSet);

ordersSet.delete('pasta');
console.log(ordersSet);

console.log(ordersSet[2]);// set has no index

//to delete all set element
// ordersSet.clear();
// console.log(ordersSet);

for(const order of ordersSet)
  console.log(order);

//eg
const staff=['social','science','social','english','social','science'];
// set without array
// const uniqueStaff=new Set(staff);
// console.log(uniqueStaff);

// set with array
const uniqueStaff=[...new Set(staff)];
console.log(uniqueStaff);

console.log(new Set(['social','science','social','english','social','science']).size);

//to set different in string
console.log(new Set('mohanbabusr').size);