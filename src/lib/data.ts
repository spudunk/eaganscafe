import type { Data } from "./types";

// place files you want to import through the `$lib` alias in this folder.
export const data: Data = {
  updated: 1707601497780,
  description:
    "Eagans are family owned diners serving burgers, fries, shakes, and more. Locations in Ethel and Tenino, WA. Call in an order today!",
  title: "Eagans Diner",
  url: "https://eagansdiner.com",
  ethelInfo: {
    route: "/ethel",
    url: "https://eagansdiner.com/ethel",
    heading: "Ethel Eagans Diner",
    banner: "Now Hiring!!! Inquire Within",
    address: "1411 US-12, Ethel, WA",
    navLink: "https://goo.gl/maps/VNbK7vR7Se9qGrWD6",
    telLink: "tel:+13609785410",
    tel: "(360) 978-5410",
    details: ["Open Every Day 8am - 4pm"],
    facebookLink: "https://facebook.com/profile.php?id=61553748759189",
    facebookName: "Ethel Eagans",
    showPrices: true,
  },
  teninoInfo: {
    route: "/tenino",
    url: "https://eagansdiner.com/tenino",
    heading: "Eagans T9O Diner",
    banner: "Updated T9O menu coming soon. Please call for prices and orders.",
    address: "472 Sussex Ave, Tenino, WA",
    navLink: "https://goo.gl/maps/3Cc7i32nLEW3wANN8",
    telLink: "tel:+13602648791",
    tel: "(360) 264-8791",
    details: ["Mon-Thu 11am - 7pm", "Fri-Sat 11am - 8pm", "Sun 12pm - 6pm"],
    facebookLink: "https://facebook.com/profile.php?id=100063745321120",
    facebookName: "Loretta Eagan's T9O",
    showPrices: false,
  },
  ethelLunchMenu: {
    id: "ethelLunchMenu",
    title: "Ethel Lunch Menu",
    sections: [
      {
        id: "classicBurgers",
        heading: "Classic Burgers",
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
            description:
              "All white meat chicken patty, mayo, lettuce, and tomato",
            price: 8.39,
          },
          {
            name: "Fish Burger",
            description: "1 beer battered halibut, goop, and lettuce",
            price: 9.29,
          },
          {
            name: "French Fries",
            description: "",
            sizes: [
              { size: "", price: 3.39 },
              { size: "", price: 4.59 },
            ],
          },
          {
            name: "Tater Tots",
            description: "",
            sizes: [
              { size: "", price: 4.29 },
              { size: "", price: 7.29 },
            ],
          },
          {
            name: "Onion Rings",
            description: "",
            sizes: [
              { size: "", price: 4.29 },
              { size: "", price: 7.29 },
            ],
          },
        ],
      },
      {
        id: "specialtyBurgers",
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
            price: 16.99,
          },
          {
            name: "Trucker",
            description:
              'Served on a 5" bun, 3 beef patties, goop, pickles, lettuce and tomato',
            price: 12.99,
          },
          {
            name: "Trailer",
            description:
              "2 beef patties, bacon, swiss and american cheese, onion rings, BBQ sauce, goop, lettuce and tomato",
            price: 14.99,
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
            price: 11.99,
          },
          {
            name: "Burger Dip",
            description:
              "1/4 pound meat patty, ssiss cheese, served on a hamburger bun, pub roll, or your choice of bread with a sid of Aus Jus",
            price: 8.79,
          },
          {
            name: "Hawaiian Burger",
            description: "1 beef patty, Swiss, Ham, pineapple and goop",
            price: 10.39,
          },
        ],
      },
      {
        id: "dogs",
        heading: "Hot Dogs",
        items: [
          {
            name: "Regular Dog",
            description:
              "sliced in thirds served on a hamburger bun with goop, and pickles",
            price: 4.29,
          },
          {
            name: "Footlong Dog",
            description: "Pickles and Goop",
            price: 6.29,
          },
          {
            name: "Chili Dog",
            description:
              "Footlong dog served open faced smothered in chili and Cheese",
            price: 8.99,
          },
          { name: "Corn Dog", description: "Deep fried goodness", price: 2.99 },
        ],
      },
      {
        id: "chicken",
        heading: "Chicken Stuff",
        items: [
          {
            name: "Chicken Strips",
            description:
              "4 breaded Chicken tenders served with a side of French fries",
            price: 10.75,
          },
          {
            name: "Nuggets",
            description: "add fries for $1.59",
            sizes: [
              { size: "5pc", price: 5.49 },
              { size: "10pc", price: 7.49 },
              { size: "15pc", price: 9.49 },
              { size: "20pc", price: 11.49 },
            ],
          },
        ],
      },
      {
        id: "sandwiches",
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
          {
            name: "Patty Melt",
            description:
              "Half a point meat patty, Swiss cheese, grilled onions served on marble rye",
            price: 11.49,
          },
          {
            name: "Rheuben",
            description:
              "Grilled rye, corned beef, Swiss, sauerkraut and Thousand Island",
            price: 10.49,
          },
          {
            name: "Club",
            description:
              "Toasted Triple decker, turkey, ham, bacon, lettuce, tomato, swiss, american add mayo",
            price: 13.99,
          },
        ],
      },
      {
        id: "seafood",
        heading: "Seafood",
        description: [""],
        items: [
          {
            name: "Fish and Fries",
            description:
              "2 or 3 piece Beer battered Halibut served with fries and House made Coleslaw",
            sizes: [
              { size: "2 piece", price: 10.99 },
              { size: "3 piece", price: 11.99 },
            ],
          },
          {
            name: "Prawns",
            description:
              "6 Breaded butterfly prawns served with fries and House made Coleslaw",
            price: 11.99,
          },
          {
            name: "Clam Strips",
            description: "served with fries and House made coleslaw",
            price: 9.99,
          },
          {
            name: "Captains Platter",
            description:
              "2 pieces halibut, 3 prawns, clam strips served with fries and House made Coleslaw",
            price: 16.99,
          },
        ],
      },
      {
        id: "sides",
        heading: "Sides",
        items: [
          {
            name: "Fries",
            sizes: [
              { size: "Small", price: 3.99 },
              { size: "Large", price: 6.99 },
            ],
          },
          {
            name: "Curly Fries",
            description: "",
            sizes: [
              { size: "Small", price: 5.29 },
              { size: "Large", price: 8.29 },
            ],
          },
          {
            name: "Tater Tots",
            sizes: [
              { size: "Small", price: 4.29 },
              { size: "Large", price: 7.29 },
            ],
          },
          {
            name: "Onion Rings",
            sizes: [
              { size: "Small", price: 5.29 },
              { size: "Large", price: 8.29 },
            ],
          },
          {
            name: "Coleslaw",
            description: "better get it before its gone",
            price: 4.59,
          },
          {
            name: "Daily Soup",
            description: "",
            sizes: [
              { size: "Small", price: 3.99 },
              { size: "Large", price: 4.99 },
            ],
          },
          {
            name: "Clam Chowder",
            description: "",
            sizes: [
              { size: "Small", price: 4.99 },
              { size: "Large", price: 5.99 },
            ],
          },
          { name: "Side Salad", description: "", price: 4.59 },
          { name: "Homemade Pie", description: "", price: 4.99 },
        ],
      },
      {
        id: "drinks",
        heading: "Drinks",
        items: [
          {
            name: "Soft Drinks",
            description:
              "Pepsi, orange crush, mug, Dr. pepper, Squirt, diet pepsi",
          },
          {
            name: "Bottled Drinks",
            description:
              "H20, Mountain Dew, Starbucks Pink Drink, grape soda, applejuice, orange juice, blue and red Gatorade",
          },
          {
            name: "Milkshakes",
            description:
              "chocolate, strawberry, vanilla, blackberry, blueberry, raspberry, caramel apple sucker, oreo, green apple, fresh banana, coffee, caramel, butterscotch, pineapple, peanut butter, white chocolate, havstack (white chocolate, vanilla, and marshmallow), blue raspberry, marshmellow, coconut, mint, bubblegum, rootbeer, cherry, orange, hot fudge, orange jullus, huckleberry",
          },
        ],
      },
    ],
  },
  ethelBreakfastMenu: {
    id: "ethelBreakfastMenu",
    title: "Ethel Breakfast Menu",
    sections: [
      {
        id: "classic",
        heading: "Classic Breakfast",
        description: ["served with 2 eggs, hashbrowns, and a biscuit."],
        items: [
          {
            name: "Bacon and Eggs",
            price: 13.49,
            description: "4 slices bacon, 2 eggs, hashbrowns and a biscuit",
          },
          {
            name: "Sausage and Eggs",
            description:
              "choice of 2 patty's or 4 links, 2 *, hashbrown and a biscuit",
            price: 13.49,
          },
          {
            name: "Ham and Eggs",
            description: "Ham Steak, 2 eggs, hashbrowns and a biscuit",
            price: 14.49,
          },
          {
            name: "Hamburger Steak and Eggs",
            price: 14.49,
            description:
              "hand pressed burger patty, 2 eggs, hashbrowns, and a biscuit",
          },
          {
            name: "Country Fried Steak",
            price: 15.49,
            description:
              "battered beef fritter topped with our house made country gravy, 2 eggs, hashbrowns and a biscuit",
          },
          {
            name: "Hashbrowns and Eggs",
            description: "hashbrowns, 2 eggs and a biscuit",
            price: 10.49,
          },
        ],
      },
      {
        id: "omeletts",
        heading: "Omeletts",
        description: [],
        items: [
          {
            name: "Ham and Cheese",
            price: 12.49,
            description: "3 eggs, hame and cheese, hashbrowns and a biscuit",
          },
          {
            name: "Sausage or Bacon and Cheese",
            price: 12.49,
            description: "3 eggs, sausage and cheese, hashbrowns and a biscuit",
          },
          {
            name: "Denver",
            description:
              "3 eggs, cheese, ham, bell pepper and onions, Hashbrowns and a biscuit",
            price: 14.49,
          },
          {
            name: "Veggie",
            description:
              "3 eggs, cheese, bell pepper, onion,  olives, mushrooms and tomato, hashbrowns and a biscuit",
            price: 14.49,
          },
          {
            name: "All Meat and Cheese",
            description:
              "3 eggs, Ham, Bacon and Sausage, hashbrowns and a biscuit",
            price: 16.49,
          },
        ],
      },
      {
        id: "griddle",
        heading: "Hot Off the Griddle",
        description: [],
        items: [
          { name: "Single Cake", price: 3.99 },
          { name: "Short Stack", price: 7.49 },
          {
            name: "222",
            description: "2 cakes, with 2 eggs and 2 links, 2 bacon OR 1 patty",
            price: 11.49,
          },
          { name: "French Toast", description: "2 slices", price: 6.49 },
        ],
      },
      {
        id: "bAndG",
        heading: "Stuff with Gravy",
        description: [],
        items: [
          {
            name: "Half Biscuit and Gravy",
            description:
              "One and a half buttermilk biscuits covered in our homemade country gravy",
            price: 6.39,
          },
          {
            name: "Full Biscuit and Gravy",
            description:
              "Two and a half biscuits smothered in our homemade country gravy",
            price: 8.89,
          },
          {
            name: "Hashbrows Biscuit and Gravy",
            price: 10.89,
            description:
              "Hashbrowns cooked golden with a buttermilk biscuit topped with gravy",
          },
          {
            name: "All the Fixins",
            description:
              "a single biscuit with gravy, 2 eggs, 2 links, 2 strips of bacon or 1 sausage patty",
            price: 13.99,
          },
          { name: "Hashbrowns and Gravy", description: "", price: 7.89 },
        ],
      },
    ],
  },
  teninoMenu: {
    id: "teninoMenu",
    title: "T9O Menu",
    sections: [
      {
        id: "burgers",
        heading: "Burgers",
        description: [
          "Make any burger into a basket!! choose your favorite burger and your side",
          "served with a small (16 oz) soda or coffee",
          "All of our burgers are made with fresh 100% beef and fresh vegetables",
        ],
        items: [
          {
            name: "Spicy Cowboy",
            description:
              "1 beef patty, bacon, Jalepeños, Pepper-jack cheese, lettuce, tomato, sriracha and goop",
            price: 0,
          },
          {
            name: "Trailer",
            description:
              "2 beef patties, bacon, Swiss and American cheese, lettuce, tomato, Onion Rings, BBQ sauce and goop",
            price: 0,
          },
          {
            name: "A1 Steak Sandwich",
            description:
              "1/2 pound beef patty, 3 slices bacon, Swiss and American cheese, tomatoes, grilled onions, A-1 and goop served on a grilled Pub Roll",
            price: 0,
          },
          {
            name: "Trucker",
            description:
              '3 beef patties, 3 slices American cheese, pickles, lettuce, tomatoes and goop served on a 5" bun',
            price: 0,
          },
          {
            name: "Big T",
            description:
              "2 beef patties, 2 slices American cheese, pickles, lettuce, tomatoes and goop",
            price: 0,
          },
          {
            name: "Little T",
            description:
              "2 beef patties, 2 slices American cheese, pickles and goop",
            price: 0,
          },
          {
            name: "Bacon Cheese",
            description:
              "1 beef patty, 1 slice American cheese, 2 slices thick cut bacon, pickles, lettuce, tomatoes and goop",
            price: 0,
          },
          {
            name: "Deluxe Cheese",
            description:
              "1 beef patty, 1 slice American cheese, pickles, lettuce, tomatoes and goop",
            price: 0,
          },
          {
            name: "Regular Cheese",
            description:
              "1 beef patty, 1 slice American cheese, pickles and goop",
            price: 0,
          },
          {
            name: "Mushroom Swiss",
            description:
              "1 beef patty, 1 slice Swiss cheese, sauteed mushrooms with special spices, lettuce, tomatoes and goop",
            price: 0,
          },
          {
            name: "Chicken Burger",
            description: "Chicken, lettuce, tomato and mayo",
            price: 0,
          },
          {
            name: "Fish Burger",
            description: "A cod fillet, lettuce and goop",
            price: 0,
          },
        ],
      },
      {
        id: "sandwiches",
        heading: "Sandwiches",
        description: ["All Sandwiches come with choice of side"],
        items: [
          {
            name: "Tuna Fish",
            description:
              "Pick your style, Tuna, pickles, lettuce, tomato and mayo on your choice of bread OR melt it up with cheese",
            price: 0,
          },
          {
            name: "BLT",
            description:
              "4 slices thick cut bacon, lettuce, tomato and mayo on choice of bread",
            price: 0,
          },
          {
            name: "Downtown",
            description:
              "Grilled deli style turkey breast, 2 strips thick cut bacon, Swiss cheese, tomatoes and avocodo spread grilled on sourdough or a pub roll",
            price: 0,
          },
          {
            name: "Grilled Cheese",
            description: "American cheese grilled on your choice of bread",
            price: 0,
          },
        ],
      },
      {
        id: "sides",
        heading: "Sides and Sauces",
        description: [],
        items: [
          {
            name: "French Fries",
            sizes: [
              { size: "Small", price: 0 },
              { size: "Large", price: 0 },
            ],
          },
          {
            name: "Tater Tots",
            sizes: [
              { size: "Small", price: 0 },
              { size: "Large", price: 0 },
            ],
          },
          {
            name: "Onion Rings",
            sizes: [
              { size: "Small", price: 0 },
              { size: "Large", price: 0 },
            ],
          },
          { name: "Puppy Patty", description: "extra beef patty", price: 0 },
          {
            name: "Sauces",
            description:
              "Goop, Tarter Sauce, Pink Sauce, BBQ, Ranch, Honey Mustard and Spicy Pink Sauce",
            price: 0,
          },
        ],
      },
    ],
  },
};

// menu template
// let menu = {
//   sectionTitle: {
//     heading: "Section_Heading",
//     description: ["description_line_1", "description_line_2"],
//     items: [
//       {
//         name: "item_name",
//         description: "item_description",
//         price: 0,
//         sizes: [
//           { size: "Small", price: 0 },
//           { size: "Large", price: 0 },
//         ],
//       },
//     ],
//   },
// };
