export const ethelMenu = {
  specialtyBurgers: {
    heading: "Specialty Burgers",
    description: [
      "Make any burger a basket with a small side of fries and small soda for $3.75",
      "*onions on request*",
    ],
    items: [
      {
        name: "A1 Steak",
        description:
          "Half pound beef patty, bacon, swiss and american cheese, goop, grilled onions, A1 sauce and tomato",
        price: 15.49,
      },
      {
        name: "Trucker",
        description:
          'Served on a 5" bun, 3 beef patties, goop, pickles, lettuce and tomato',
        price: 11.09,
      },
      {
        name: "Trailer",
        description:
          "2 beef patties, bacon, swiss and american cheese, onion rings, BBQ sauce, goop, lettuce and tomato",
        price: 14.7,
      },
      {
        name: "Spicy Cowboy",
        description:
          "1 beef patty, bacon, pepperjack cheese, goop, sriracha, lettuce and tomato",
        price: 10.39,
      },
      {
        name: "Chili Burger",
        description:
          "2 beef patties served open faced, smothered in chili and cheese with option no onions",
        price: 10.49,
      },
      {
        name: "Burger Dip",
        description:
          "1/4 pound meat patty, ssiss cheese, served on a hamburger bun, pub roll, or your choice of bread with a sid of Aus Jus",
        price: 8.39,
      },
    ],
  },
  classicBurgers: {
    heading: "Eagans Classic Burgers",
    items: [
      {
        name: "Big T",
        description:
          "2 beef patties, cheese, goop, pickle, lettuce, and tomato",
        price: 9.65,
      },
      {
        name: "Little T",
        description: "2 beef patties, cheese, goop, and pickle",
        price: 8.79,
      },
      {
        name: "Bacon Cheese",
        description:
          "1 beef patty, bacon, cheese, goop, pickle, lettuce, and tomato",
        price: 10.19,
      },
      {
        name: "Mushroom Swiss",
        description:
          "1 beef patty, swiss cheese, grilled mushrooms, goop, lettuce, and tomato",
        price: 9.45,
      },
      {
        name: "Deluxe Cheese",
        description: "1 beef patty, goop, pickle, lettuce, and tomato",
        price: 7.65,
      },
      {
        name: "Regular Cheese",
        description: "1 beef patty, goop, and pickle",
        price: 7.19,
      },
      {
        name: "Veggie Burger",
        description: "Garden patty, goop, pickle, lettuce, and tomato",
        price: 9.29,
      },
      {
        name: "Chicken Burger",
        description: "All white meat chicken patty, mayo, lettuce, and tomato",
        price: 8.39,
      },
      {
        name: "Fish Burger",
        description: "1 beer battered halibut, goop, and lettuce",
        price: 9.29,
      },
    ],
  },
  sandwiches: {
    heading: "Sandwiches",
    items: [
      {
        name: "BLT",
        description:
          " A classic with 4 strips of bacon, Mayo, lettuce, and tomato served on toasted bread of your choice",
        price: 10.49,
      },
      {
        name: "Downtown",
        description:
          "Grilled turkey, bacon, swiss cheese, avocodo, and tomatoes served on grilled sourdough or pub roll",
        price: 11.19,
      },
      {
        name: "Tuna",
        description: "Tuna, lettuce, tomatoes, pickle",
        price: 9.79,
      },
      {
        name: "Grilled Cheese",
        description: "add bacon or ham for $3.50 on your choice of bread",
        price: 9.79,
      },
    ],
  },
  sides: {
    heading: "Sides",
    items: [
      {
        name: "Fries",
        sizes: [
          { size: "Small", price: 3.39 },
          { size: "Large", price: 4.59 },
        ],
      },
      {
        name: "Tots",
        sizes: [
          { size: "Small", price: 4.29 },
          { size: "Large", price: 7.29 },
        ],
      },
      {
        name: "Orings",
        sizes: [
          { size: "Small", price: 5.09 },
          { size: "Large", price: 7.99 },
        ],
      },
    ],
  },
  dogs: {
    heading: "Hot Dogs",
    items: [
      {
        name: "Regular Dog",
        description:
          "A hot dog sliced in thirds served on a hamburger bun with goop, and pickles",
        price: 4.29,
      },
      {
        name: "Footlong Dog",
        description: "Pickles and Goop served with a deep fried footlong dog",
        price: 5.29,
      },
      {
        name: "Chili Dog",
        description:
          "Deep fried footlong dog served open face smothered in chili and Cheese with the option of onions",
        price: 8.29,
      },
      {
        name: "Corn Dog",
        description: "Deep fried goodness",
        price: 2.89,
      },
    ],
  },
  chicken: {
    heading: "Chicken Stuff",
    items: [
      {
        name: "Nuggets",
        description: "add fries for $1.59",
        // price: 0,
        sizes: [
          { size: "5pc", price: 5.49 },
          { size: "10pc", price: 7.49 },
          { size: "15pc", price: 9.49 },
          { size: "20pc", price: 11.49 },
        ],
      },
      {
        name: "Chicken Strips",
        description: "Served with 4 breaded tenders and a small order of fries",
        price: 10.75,
      },
    ],
  },
  drinks: {
    heading: "Drinks",
    items: [
      {
        name: "Soft Drinks",
        description: "Pepsi, orange crush, mug, Dr. pepper, Squirt, diet pepsi",
        // price: 0,
        // sizes: [
        //   { size: "Small", price: 0 },
        //   { size: "Large", price: 0 },
        // ],
      },
      {
        name: "Bottled Drinks",
        description:
          "H20, Mountain Dew, Starbucks Pink Drink, grape soda, applejuice, orange juice, blue and red Gatorade",
        // price: 0,
        // sizes: [
        //   { size: "Small", price: 0 },
        //   { size: "Large", price: 0 },
        // ],
      },
      {
        name: "Milkshakes",
        description:
          "chocolate, strawberry, vanilla, blackberry, blueberry, raspberry, caramel apple sucker, oreo, green apple, fresh banana, coffee, caramel, butterscotch, pineapple, peanut butter, white chocolate, havstack (white chocolate, vanilla, and marshmallow), blue raspberry, marshmellow, coconut, mint, bubblegum, rootbeer, cherry, orange, hot fudge, orange jullus, huckleberry",
        // price: 0,
        // sizes: [
        //   { size: "Small", price: 0 },
        //   { size: "Large", price: 0 },
        // ],
      },
    ],
  },
};

// item template
// {
//   name: "item_name",
//   description: "item_description",
//   price: 0,
//   sizes: [
//     { size: "Small", price: 0 },
//     { size: "Large", price: 0 },
//   ],
// },
