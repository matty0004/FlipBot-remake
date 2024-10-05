// commands/customer.js
const responses = {
    "PapaLouie": {
        "response": "Papa Louie",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Roy": {
        "response": "Roy",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "BigPauly": {
        "response": "Big Pauly",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Mindy": {
        "response": "Mindy",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Chuck": {
        "response": "Chuck",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Taylor": {
        "response": "Taylor",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Allan": {
        "response": "Allan",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Timm": {
        "response": "Timm",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Penny": {
        "response": "Penny",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Sue": {
        "response": "Sue",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Cooper": {
        "response": "Cooper",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Maggie": {
        "response": "Maggie",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Marty": {
        "response": "Marty",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Wally": {
        "response": "Wally",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Robby": {
        "response": "Robby",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Rita": {
        "response": "Rita",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Mitch": {
        "response": "Mitch",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "James": {
        "response": "James",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Greg": {
        "response": "Greg",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Mary": {
        "response": "Mary",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Prudence": {
        "response": "Prudence",
        "firstGame": "Papa Louie: When Pizzas Attack!"
    },
    "Kingsley": {
        "response": "Kingsley",
        "firstGame": "Papa's Pizzeria"
    },
    "Cecilia": {
        "response": "Cecilia",
        "firstGame": "Papa's Pizzeria"
    },
    "Mandi": {
        "response": "Mandi",
        "firstGame": "Papa's Pizzeria"
    },
    "Sasha": {
        "response": "Sasha",
        "firstGame": "Papa's Pizzeria"
    },
    "Olga": {
        "response": "Olga",
        "firstGame": "Papa's Pizzeria"
    },
    "Franco": {
        "response": "Franco",
        "firstGame": "Papa's Pizzeria"
    },
    "Tohru": {
        "response": "Tohru",
        "firstGame": "Papa's Pizzeria"
    },
    "Clair": {
        "response": "Clair",
        "firstGame": "Papa's Pizzeria"
    },
    "Clover": {
        "response": "Clover",
        "firstGame": "Papa's Pizzeria"
    },
    "Hugo": {
        "response": "Hugo",
        "firstGame": "Papa's Pizzeria"
    },
    "Peggy": {
        "response": "Peggy",
        "firstGame": "Papa's Pizzeria"
    },
    "CarloRomano": {
        "response": "Carlo Romano",
        "firstGame": "Papa's Pizzeria"
    },
    "GinoRomano": {
        "response": "Gino Romano",
        "firstGame": "Papa's Pizzeria"
    },
    "BrunaRomano": {
        "response": "Bruna Romano",
        "firstGame": "Papa's Pizzeria"
    },
    "LittleEdoardo": {
        "response": "Little Edoardo",
        "firstGame": "Papa's Pizzeria"
    },
    "SargeFan": {
        "response": "Sarge Fan",
        "firstGame": "Papa's Pizzeria"
    },
    "Akari": {
        "response": "Akari",
        "firstGame": "Papa's Burgeria"
    },
    "Alberto": {
        "response": "Alberto",
        "firstGame": "Papa's Burgeria"
    },
    "Tony": {
        "response": "Tony",
        "firstGame": "Papa's Burgeria"
    },
    "Doan": {
        "response": "Doan",
        "firstGame": "Papa's Burgeria"
    },
    "Matt": {
        "response": "Matt",
        "firstGame": "Papa's Burgeria"
    },
    "Lisa": {
        "response": "Lisa",
        "firstGame": "Papa's Burgeria"
    },
    "Cletus": {
        "response": "Cletus",
        "firstGame": "Papa's Burgeria"
    },
    "Kayla": {
        "response": "Kayla",
        "firstGame": "Papa's Burgeria"
    },
    "Connor": {
        "response": "Connor",
        "firstGame": "Papa's Burgeria"
    },
    "Edna": {
        "response": "Edna",
        "firstGame": "Papa's Burgeria"
    },
    "Vicky": {
        "response": "Vicky",
        "firstGame": "Papa's Burgeria"
    },
    "Zoe": {
        "response": "Zoe",
        "firstGame": "Papa's Taco Mia!"
    },
    "Nick": {
        "response": "Nick",
        "firstGame": "Papa's Taco Mia!"
    },
    "Georgito": {
        "response": "Georgito",
        "firstGame": "Papa's Taco Mia!"
    },
    "Quinn": {
        "response": "Quinn",
        "firstGame": "Papa's Taco Mia!"
    },
    "Rico": {
        "response": "Rico",
        "firstGame": "Papa's Taco Mia!"
    },
    "Xandra": {
        "response": "Xandra",
        "firstGame": "Papa's Taco Mia!"
    },
    "Jojo": {
        "response": "Jojo",
        "firstGame": "Papa's Taco Mia!"
    },
    "Ivy": {
        "response": "Ivy",
        "firstGame": "Papa's Freezeria"
    },
    "Utah": {
        "response": "Utah",
        "firstGame": "Papa's Freezeria"
    },
    "Ninjoy": {
        "response": "Ninjoy",
        "firstGame": "Papa's Freezeria"
    },
    "Kahuna": {
        "response": "Kahuna",
        "firstGame": "Papa's Freezeria"
    },
    "CaptainCori": {
        "response": "Captain Cori",
        "firstGame": "Papa's Freezeria"
    },
    "Gremmie": {
        "response": "Gremmie",
        "firstGame": "Papa's Freezeria"
    },
    "Wendy": {
        "response": "Wendy",
        "firstGame": "Papa's Pancakeria"
    },
    "Yippy": {
        "response": "Yippy",
        "firstGame": "Papa's Pancakeria"
    },
    "Hank": {
        "response": "Hank",
        "firstGame": "Papa's Pancakeria"
    },
    "Johnny": {
        "response": "Johnny",
        "firstGame": "Papa's Pancakeria"
    },
    "Foodini": {
        "response": "Foodini",
        "firstGame": "Papa's Pancakeria"
    },
    "Scooter": {
        "response": "Scooter",
        "firstGame": "Papa's Wingeria"
    },
    "Skyler": {
        "response": "Skyler",
        "firstGame": "Papa's Wingeria"
    },
    "Boomer": {
        "response": "Boomer",
        "firstGame": "Papa's Wingeria"
    },
    "Xolo": {
        "response": "Xolo",
        "firstGame": "Papa's Wingeria"
    },
    "ProfessorFitz": {
        "response": "Professor Fitz",
        "firstGame": "Papa's Wingeria"
    },
    "Bertha": {
        "response": "Bertha",
        "firstGame": "Papa's Hot Doggeria"
    },
    "PinchHitwell": {
        "response": "Pinch Hitwell",
        "firstGame": "Papa's Hot Doggeria"
    },
    "Kenji": {
        "response": "Kenji",
        "firstGame": "Papa's Hot Doggeria"
    },
    "Shannon": {
        "response": "Shannon",
        "firstGame": "Papa's Hot Doggeria"
    },
    "Radlynn": {
        "response": "Radlynn",
        "firstGame": "Papa's Hot Doggeria"
    },
    "Willow": {
        "response": "Willow",
        "firstGame": "Papa's Hot Doggeria"
    },
    "MayorMallow": {
        "response": "Mayor Mallow",
        "firstGame": "Papa's Cupcakeria"
    },
    "Trishna": {
        "response": "Trishna",
        "firstGame": "Papa's Cupcakeria"
    },
    "Scarlett": {
        "response": "Scarlett",
        "firstGame": "Papa's Cupcakeria"
    },
    "Nevada": {
        "response": "Nevada",
        "firstGame": "Papa's Cupcakeria"
    },
    "Santa": {
        "response": "Santa",
        "firstGame": "Papa's Cupcakeria"
    },
    "Crystal": {
        "response": "Crystal",
        "firstGame": "Papa's Pastaria"
    },
    "Hope": {
        "response": "Hope",
        "firstGame": "Papa's Pastaria"
    },
    "Deano": {
        "response": "Deano",
        "firstGame": "Papa's Pastaria"
    },
    "Olivia": {
        "response": "Olivia",
        "firstGame": "Papa's Pastaria"
    },
    "Sienna": {
        "response": "Sienna",
        "firstGame": "Papa's Pastaria"
    },
    "Rudy": {
        "response": "Rudy",
        "firstGame": "Papa's Donuteria"
    },
    "Iggy": {
        "response": "Iggy",
        "firstGame": "Papa's Donuteria"
    },
    "Ember": {
        "response": "Ember",
        "firstGame": "Papa's Donuteria"
    },
    "Julep": {
        "response": "Julep",
        "firstGame": "Papa's Donuteria"
    },
    "HackyZak": {
        "response": "Hacky Zak",
        "firstGame": "Papa's Donuteria"
    },
    "Chester": {
        "response": "Chester",
        "firstGame": "Papa's Cheeseria"
    },
    "Rhonda": {
        "response": "Rhonda",
        "firstGame": "Papa's Cheeseria"
    },
    "Brody": {
        "response": "Brody",
        "firstGame": "Papa's Cheeseria"
    },
    "Perri": {
        "response": "Perri",
        "firstGame": "Papa's Cheeseria"
    },
    "Austin": {
        "response": "Austin",
        "firstGame": "Papa's Cheeseria"
    },
    "Joy": {
        "response": "Joy",
        "firstGame": "Papa's Pizzeria To Go!"
    },
    "Yui": {
        "response": "Yui",
        "firstGame": "Papa Louie 3: When Sundaes Attack!"
    },
    "Whiff": {
        "response": "Whiff",
        "firstGame": "Papa's Bakeria"
    },
    "Janana": {
        "response": "Janana",
        "firstGame": "Papa's Bakeria"
    },
    "Cherissa": {
        "response": "Cherissa",
        "firstGame": "Papa's Bakeria"
    },
    "DukeGotcha": {
        "response": "Duke Gotcha",
        "firstGame": "Papa's Bakeria"
    },
    "Steven": {
        "response": "Steven",
        "firstGame": "Papa's Bakeria"
    },
    "Elle": {
        "response": "Elle",
        "firstGame": "Papa's Sushiria"
    },
    "Vincent": {
        "response": "Vincent",
        "firstGame": "Papa's Sushiria"
    },
    "Emmlette": {
        "response": "Emmlette",
        "firstGame": "Papa's Sushiria"
    },
    "Koilee": {
        "response": "Koilee",
        "firstGame": "Papa's Sushiria"
    },
    "WylanB": {
        "response": "Wylan B",
        "firstGame": "Papa's Sushiria"
    },
    "Ripley": {
        "response": "Ripley",
        "firstGame": "Papa's Taco Mia To Go!"
    },
    "Cameo": {
        "response": "Cameo",
        "firstGame": "Papa's Pancakeria HD"
    },
    "LePete": {
        "response": "LePete",
        "firstGame": "Papa's Pizzeria HD"
    },
    "Moe": {
        "response": "Moe",
        "firstGame": "Papa's Hot Doggeria HD"
    },
    "TheDynamoe": {
        "response": "The Dynamoe",
        "firstGame": "Papa's Hot Doggeria HD"
    },
    "Indigo": {
        "response": "Indigo",
        "firstGame": "Papa's Hot Doggeria HD"
    },
    "Amy": {
        "response": "Amy",
        "firstGame": "Papa's Scooperia"
    },
    "Skip": {
        "response": "Skip",
        "firstGame": "Papa's Scooperia"
    },
    "Mousse": {
        "response": "Mousse",
        "firstGame": "Papa's Scooperia"
    },
    "Whippa": {
        "response": "Whippa",
        "firstGame": "Papa's Scooperia"
    },
    "Fernanda": {
        "response": "Fernanda",
        "firstGame": "Papa's Scooperia"
    },
    "Liezel": {
        "response": "Liezel",
        "firstGame": "Papa's Pancakeria To Go!"
    },
    "Nye": {
        "response": "Nye",
        "firstGame": "Papa's Wingeria To Go!"
    },
    "SprinksTheClown": {
        "response": "Sprinks the Clown",
        "firstGame": "Papa's Wingeria To Go!"
    },
    "MrBombolony": {
        "response": "Mr. Bombolony",
        "firstGame": "Papa's Donuteria To Go!"
    },
    "BoopsyAndBill": {
        "response": "Boopsy & Bill",
        "firstGame": "Papa's Donuteria To Go!"
    },
    "Mesa": {
        "response": "Mesa",
        "firstGame": "Papa's Cheeseria To Go!"
    },
    "Drakson": {
        "response": "Drakson",
        "firstGame": "Papa's Cheeseria To Go!"
    },
    "KaseyO": {
        "response": "Kasey O",
        "firstGame": "Papa's Cheeseria To Go!"
    },
    "Daniela": {
        "response": "Daniela",
        "firstGame": "Papa's Bakeria To Go!"
    },
    "Kaleb": {
        "response": "Kaleb",
        "firstGame": "Papa's Bakeria To Go!"
    },
    "Rollie": {
        "response": "Rollie",
        "firstGame": "Papa's Sushiria To Go!"
    },
    "Evelyn": {
        "response": "Evelyn",
        "firstGame": "Papa's Sushiria To Go!"
    },
    "Okalani": {
        "response": "Okalani",
        "firstGame": "Papa's Pastaria To Go!"
    },
    "CJFriskins": {
        "response": "C.J. Friskins",
        "firstGame": "Papa's Pastaria To Go!"
    },
    "Kenton": {
        "response": "Kenton",
        "firstGame": "Papa's Mocharia To Go!"
    },
    "Pally": {
        "response": "Pally",
        "firstGame": "Papa's Mocharia To Go!"
    },
    "Petrona": {
        "response": "Petrona",
        "firstGame": "Papa's Mocharia To Go!"
    },
    "Didar": {
        "response": "Didar",
        "firstGame": "Papa's Mocharia To Go!"
    },
    "Simone": {
        "response": "Simone",
        "firstGame": "Papa's Mocharia To Go!"
    },
    "Yuko": {
        "response": "Yuko",
        "firstGame": "Papa's Cluckeria To Go!"
    },
    "Chase": {
        "response": "Chase",
        "firstGame": "Papa's Cluckeria To Go!"
    },
    "Budwin": {
        "response": "Budwin",
        "firstGame": "Papa's Cluckeria To Go!"
    },
    "Amiria": {
        "response": "Amiria",
        "firstGame": "Papa's Cluckeria To Go!"
    },
    "Treble": {
        "response": "Treble",
        "firstGame": "Papa's Cluckeria To Go!"
    },
    "Isadora": {
        "response": "Isadora",
        "firstGame": "Papa's Cluckeria To Go!"
    },
    "Lloyd": {
        "response": "Lloyd",
        "firstGame": "Papa's Freezeria Deluxe"
    },
    "Makaila": {
        "response": "Makaila",
        "firstGame": "Papa's Freezeria Deluxe"
    }
    }
  
    module.exports = {
        data: {
          name: 'customer',
          description: 'Ask the magic 8-ball a question!',
          options: [
            {
              name: 'first_game',
              description: 'Specify the first game (e.g., "Papa Louie: When Pizzas Attack!"). Leave blank for random.',
              type: 3,
              required: false,
            }
          ],
        },
        execute(interaction) {
            try {
              const firstGameArg = interaction.options.getString('first_game');
              const user = interaction.user.username;
          
              let filteredResponses = Object.values(responses);
          
              if (firstGameArg) {
                const lowerCaseFirstGameArg = firstGameArg.toLowerCase();
          
                // Handle "To Go" and alternative names for "Papa's Pastaria"
                const pastariaAlternatives = ["pastaria tg", "pastaria to go"];
                if (pastariaAlternatives.some(alt => lowerCaseFirstGameArg.includes(alt))) {
                  const pastariaResponses = filteredResponses.filter(customer => customer.firstGame === "Papa's Pastaria To Go!");
                  const fallbackResponse = pastariaResponses.length > 0 ? pastariaResponses[Math.floor(Math.random() * pastariaResponses.length)].response : undefined;
                  filteredResponses = pastariaResponses.concat(fallbackResponse ? [{ response: fallbackResponse }] : []);
                } else {
                  // Remove the "To Go" suffix for other games
                  filteredResponses.forEach(customer => {
                    customer.firstGame = customer.firstGame.replace(/ to go$/i, "");
                  });
                }
          
                // Handle "Papa Louie: When Pizzas Attack!" alternatives
                const papaLouieAlternatives = ["papa louie 1", "papa louie", "pl1", "plwpa"];
                if (papaLouieAlternatives.includes(lowerCaseFirstGameArg)) {
                  const papaLouieResponses = filteredResponses.filter(customer => customer.firstGame === "Papa Louie: When Pizzas Attack!");
                  const fallbackResponse = papaLouieResponses.length > 0 ? papaLouieResponses[Math.floor(Math.random() * papaLouieResponses.length)].response : undefined;
                  filteredResponses = filteredResponses.concat(fallbackResponse ? [{ response: fallbackResponse }] : []);
                }
              }
          
              const randomResponse = filteredResponses[Math.floor(Math.random() * filteredResponses.length)];
              const customerResponse = randomResponse ? randomResponse.response : 'No matching response found';
          
              // Log the username and customer response
              console.log(`User: ${user}, Received Customer: ${customerResponse}`);
          
              interaction.reply(`${customerResponse}`);
            } catch (error) {
              console.error(error.message);
            }
          }
              
      };