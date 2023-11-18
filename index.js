import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;


//data
let meals = [
    {
        id:1,
        mealName : "Apple & Blackberry Crumble",
        mealType : "Dessert",
        mealArea : "British",
        mealIngredient : "Plain Flour , Caster Sugar, Butter , Braeburn Apples , Butter , Demerara Sugar , Blackberrys , Cinnamon , Ice Cream",
        mealInstructions : "Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.\r\nMeanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.\r\nTo serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.",
        mealImage : "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"
    },
    {
        id:2,
        mealName : "Ayam Percik",
        mealType : "Chicken",
        mealArea : "Malaysian",
        mealIngredient : "Chicken Thighs , Challots, Ginger , Garlic Clove, Cayenne Pepper , Turmeric , Cumin , Coriander , Fennel , Tamarind Paste, Coconut Milk ,Sugar , Water",
        mealInstructions : "In a blender, add the ingredients for the spice paste and blend until smooth.Over medium heat, pour the spice paste in a skillet or pan and fry for 10 minutes until fragrant. Add water or oil 1 tablespoon at a time if the paste becomes too dry. Don't burn the paste. Lower the fire slightly if needed.\r\nAdd the cloves, cardamom, tamarind pulp, coconut milk, water, sugar and salt. Turn the heat up and bring the mixture to boil. Turn the heat to medium low and simmer for 10 minutes. Stir occasionally. It will reduce slightly. This is the marinade/sauce, so taste and adjust seasoning if necessary. Don't worry if it's slightly bitter. It will go away when roasting.\r\nWhen the marinade/sauce has cooled, pour everything over the chicken and marinate overnight to two days.\r\nPreheat the oven to 425 F.\r\nRemove the chicken from the marinade. Spoon the marinade onto a greased (or aluminum lined) baking sheet. Lay the chicken on top of the sauce (make sure the chicken covers the sauce and the sauce isn't exposed or it'll burn) and spread the remaining marinade on the chicken. Roast for 35-45 minutes or until internal temp of the thickest part of chicken is at least 175 F.\r\nLet chicken rest for 5 minutes. Brush the chicken with some of the oil. Serve chicken with the sauce over steamed rice (or coconut rice).",
        mealImage : "https://www.themealdb.com/images/media/meals/020z181619788503.jpg"
    },
    {
        id:3,
        mealName : "Beef Wellington",
        mealType : "Beef",
        mealArea : "British",
        mealIngredient : "mushrooms , English Mustard, Olive Oil , Beef Fillet , Parma ham , Puff Pastry ,Flour , Egg Yolks",
        mealInstructions : "Put the mushrooms into a food processor with some seasoning and pulse to a rough paste. Scrape the paste into a pan and cook over a high heat for about 10 mins, tossing frequently, to cook out the moisture from the mushrooms. Spread out on a plate to cool.\r\nHeat in a frying pan and add a little olive oil. Season the beef and sear in the hot pan for 30 secs only on each side. (You don't want to cook it at this stage, just colour it). Remove the beef from the pan and leave to cool, then brush all over with the mustard.\r\nLay a sheet of cling film on a work surface and arrange the Parma ham slices on it, in slightly overlapping rows. With a palette knife, spread the mushroom paste over the ham, then place the seared beef fillet in the middle. Keeping a tight hold of the cling film from the edge, neatly roll the Parma ham and mushrooms around the beef to form a tight barrel shape. Twist the ends of the cling film to secure. Chill for 15-20 mins to allow the beef to set and keep its shape.\r\nRoll out the puff pastry on a floured surface to a large rectangle, the thickness of a £1 coin. Remove the cling film from the beef, then lay in the centre. Brush the surrounding pastry with egg yolk. Fold the ends over, the wrap the pastry around the beef, cutting off any excess. Turn over, so the seam is underneath, and place on a baking sheet. Brush over all the pastry with egg and chill for about 15 mins to let the pastry rest.\r\nHeat the oven to 200C, 400F, gas 6.\r\nLightly score the pastry at 1cm intervals and glaze again with beaten egg yolk. Bake for 20 minutes, then lower the oven setting to 180C, 350F, gas 4 and cook for another 15 mins. Allow to rest for 10-15 mins before slicing and serving with the side dishes of your choice. The beef should still be pink in the centre when you serve it.",
        mealImage : "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg"
    },
    {
        id:4,
        mealName : "Beef stroganoff",
        mealType : "Beef",
        mealArea : "Russian",
        mealIngredient : "Olive Oil, Onions , Garlic , Butter , MushroomsBeef Fillet , Plain Flour , Creme Fraiche , English Mustard ,Beef Stock , Parsley",
        mealInstructions : "Heat the olive oil in a non-stick frying pan then add the sliced onion and cook on a medium heat until completely softened, so around 15 mins, adding a little splash of water if they start to stick at all. Crush in the garlic and cook for a 2-3 mins further, then add the butter. Once the butter is foaming a little, add the mushrooms and cook for around 5 mins until completely softened. Season everything well, then tip onto a plate.\r\nTip the flour into a bowl with a big pinch of salt and pepper, then toss the steak in the seasoned flour. Add the steak pieces to the pan, splashing in a little oil if the pan looks particularly dry, and fry for 3-4 mins, until well coloured. Tip the onions and mushrooms back into the pan. Whisk the crème fraîche, mustard and beef stock together, then pour into the pan. Cook over a medium heat for around 5 mins. Scatter with parsley, then serve with pappardelle or rice.",
        mealImage : "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg"
    },
    {
        id:5,
        mealName : "Chocolate Gateau",
        mealType : "Dessert",
        mealArea : "French",
        mealIngredient :"Plain chocolate , Butter , Milk , Eggs , Granulated Sugar , Flour" ,
        mealInstructions : "Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.",
        mealImage : "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg"
    },
    {
        id:6,
        mealName : "Christmas Pudding Flapjack",
        mealType : "Dessert",
        mealArea : "British",
        mealIngredient : "salted butter, dark soft brown sugar , golden syrup , orange ,rolled oats ,Christmas pudding",
        mealInstructions : "Preheat the oven to 180°C/fan 160°C/gas mark 4 and grease and line a 25cm x 20cm tin. Melt the butter, sugar, syrup and orange zest in a large saucepan over a medium heat. The aim is to dissolve all the ingredients so that they are smooth, but to not lose any volume through boiling so be careful not to overheat.\r\n\r\nAdd the oats and stir well until evenly coated. Stir through the leftover Christmas pudding and tip into the prepared tin. Use a spoon to flatten the top and bake for 40 minutes until the edges start to brown. Whilst still warm in the tin, score into 12 squares. Allow to cool completely before cutting along the scores.\r\n\r\nKeeps for 5 days in an air tight tin or freeze for up to 1 month.",
        mealImage : "https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg"
    },
    {
        id:7,
        mealName : "Duck Confit",
        mealType : "Miscellaneous",
        mealArea : "French",
        mealIngredient : "Sea Salt , Bay Leaf , Garlic ,Thyme ,Duck Legs , White Wine",
        mealInstructions : "The day before you want to make the dish, scatter half the salt, half the garlic and half of the herbs over the base of a small shallow dish. Lay the duck legs, skin-side up, on top, then scatter over the remaining salt, garlic and herbs. Cover the duck and refrigerate overnight. This can be done up to 2 days ahead.\r\nPour the wine into a saucepan that will snugly fit the duck legs in a single layer. Brush the salt off the duck legs and place them, skin-side down, in the wine. Cover the pan with a lid and place over a medium heat. As soon as the wine starts to bubble, turn the heat down to the lowest setting and cook for 2 hours, checking occasionally that the liquid is just barely simmering. (If you own a heat diffuser, it would be good to use it here.) After 2 hours, the duck legs should be submerged in their own fat and the meat should feel incredibly tender when prodded. Leave to cool.\r\nThe duck legs are now cooked and can be eaten immediately – or you can follow the next step if you like them crisp. If you are preparing ahead, pack the duck legs tightly into a plastic container or jar and pour over the fat, but not the liquid at the bottom of the pan. Cover and leave in the fridge for up to a month, or freeze for up to 3 months. The liquid you are left with makes a tasty gravy, which can be chilled or frozen until needed.\r\nTo reheat and crisp up the duck legs, heat oven to 220C/fan 200C/gas 7. Remove the legs from the fat and place them, skin-side down, in an ovenproof frying pan. Roast for 30-40 mins, turning halfway through, until brown and crisp. Serve with the reheated gravy, a crisp salad and some crisp golden ptoatoes.",
        mealImage : "https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg"
    },
    {
        id:8,
        mealName : "Egg Drop Soup",
        mealType : "Vegetarian",
        mealArea : "Chinese",
        mealIngredient : "Salt ,Sugar , Pepper ,Sesame Seed Oil , Peas , Mushrooms,Cornstarch , Water ,Spring Onions",
        mealInstructions : "In a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, white pepper, sesame seed oil.\r\nWhen the chicken broth is boiling add the vegetables to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup slowly and stir for 8 seconds\r\nServe the soup in a bowl and add the green onions on top.",
        mealImage : "https://www.themealdb.com/images/media/meals/1529446137.jpg"
    },
    {
        id:9,
        mealName : "Fettucine alfredo",
        mealType : "Pasta",
        mealArea : "Italian",
        mealIngredient : "Clotted Cream , Butter , Corn Flour , Parmesan Cheese , Nutmeg ,Fettuccine , Parsley",
        mealInstructions : "In a medium saucepan, stir the clotted cream, butter and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.\r\nMeanwhile, put the cheese and nutmeg in a small bowl and add a good grinding of black pepper, then stir everything together (don’t add any salt at this stage).\r\nPut the pasta in another pan with 2 tsp salt, pour over some boiling water and cook following pack instructions (usually 3-4 mins). When cooked, scoop some of the cooking water into a heatproof jug or mug and drain the pasta, but not too thoroughly.\r\nAdd the pasta to the pan with the clotted cream mixture, then sprinkle over the cheese and gently fold everything together over a low heat using a rubber spatula. When combined, splash in 3 tbsp of the cooking water. At first, the pasta will look wet and sloppy: keep stirring until the water is absorbed and the sauce is glossy. Check the seasoning before transferring to heated bowls. Sprinkle over some chives or parsley, then serve immediately.",
        mealImage : "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg"
    },
    {
        id:10,
        mealName : "Garides Saganaki",
        mealType : "Seafood",
        mealArea : "Greek",
        mealIngredient : "Raw king prawns, Olive oil, Chopped onion ,Freshly chopped parsley , White wine ,Chopped tomatoes ,Minced garlic  , Cubed Feta cheese",
        mealInstructions : "Place the prawns in a pot and add enough water to cover. Boil for 5 minutes. Drain, reserving the liquid, and set aside.\r\nHeat 2 tablespoons of oil in a saucepan. Add the onion; cook and stir until soft. Mix in the parsley, wine, tomatoes, garlic and remaining olive oil. Simmer, stirring occasionally, for about 30 minutes, or until the sauce is thickened.\r\nWhile the sauce is simmering, the prawns should become cool enough to handle. First remove the legs by pinching them, and then pull off the shells, leaving the head and tail on.\r\nWhen the sauce has thickened, stir in the prawns. Bring to a simmer again if the sauce has cooled with the prawns, and cook for about 5 minutes. Add the feta and remove from the heat. Let stand until the cheese starts to melt. Serve warm with slices of crusty bread.\r\nThough completely untraditional, you can add a few tablespoons of stock or passata to this recipe to make a delicious pasta sauce. Toss with pasta after adding the feta, and serve.",
        mealImage : "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg"
    },
    {
        id:11,
        mealName : "Honey Teriyaki Salmon",
        mealType : "Seafood",
        mealArea : "Japanese",
        mealIngredient : "Salmon,Olive oil, Soy Sauce, Sake , Sesame Seed",
        mealInstructions : "Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together.\r\n\r\nHeat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it’s completely cooked inside and the glaze thickens.\r\n\r\nGarnish with sesame and serve immediately.",
        mealImage : "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
        id:12,
        mealName : "Kapsalon",
        mealType : "Lamb",
        mealArea : "Dutch",
        mealIngredient : "Fries , Doner Meat , Garlic sauce , Hotsauce, Lettuce , Tomato , Cucumber , Gouda cheese",
        mealIngredient : "Cut the meat into strips. Heat oil in a pan and fry the strips for 6 minutes until it's ready.\r\nBake the fries until golden brown in a deep fryrer. When ready transfer to a backing dish. Make sure the fries are spread over the whole dish.\r\nCover the fries with a new layer of meat and spread evenly.\r\nAdd a layer of cheese over the meat. You can also use grated cheese. When done put in the oven for a few minutes until the cheese is melted.\r\nChop the lettuce, tomato and cucumber in small pieces and mix together. for a basic salad. As extra you can add olives jalapenos and a red union.\r\nDived the salad over the dish and Serve with garlicsauce and hot sauce",
        mealImage : "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg"

    },
    {
        id:13,
        mealName : "Leblebi Soup",
        mealType : "Vegetarian",
        mealArea : "Tunisian",
        mealIngredient : "Olive Oil, Onion , Chickpeas , Vegetable Stock , Cumin , Garlic , Salt , Harissa Spice , Pepper , Lime",
        mealInstructions : "Heat the oil in a large pot. Add the onion and cook until translucent.\r\nDrain the soaked chickpeas and add them to the pot together with the vegetable stock. Bring to the boil, then reduce the heat and cover. Simmer for 30 minutes.\r\nIn the meantime toast the cumin in a small ungreased frying pan, then grind them in a mortar. Add the garlic and salt and pound to a fine paste.\r\nAdd the paste and the harissa to the soup and simmer until the chickpeas are tender, about 30 minutes.\r\nSeason to taste with salt, pepper and lemon juice and serve hot.",
        mealImage : "https://www.themealdb.com/images/media/meals/x2fw9e1560460636.jpg"
    },
    {
        id:14,
        mealName : "Mince Pies",
        mealType : "Dessert",
        mealArea : "British",
        mealIngredient : "Butter, Plain Flour , Caster Sugar , Mincemeat, Egg , Icing Sugar",
        mealInstructions : "To make the pastry, rub 225g cold, diced butter into 350g plain flour, then mix in 100g golden caster sugar and a pinch of salt.\r\n\r\nCombine the pastry into a ball – don’t add liquid – and knead it briefly. The dough will be fairly firm, like shortbread dough. You can use the dough immediately, or chill for later.\r\n\r\nPreheat the oven to 200C/gas 6/fan 180C. Line 18 holes of two 12-hole patty tins, by pressing small walnut-sized balls of pastry into each hole.\r\n\r\nSpoon 280g mincemeat into the pies.\r\n\r\nTake slightly smaller balls of pastry than before and pat them out between your hands to make round lids, big enough to cover the pies. \r\n\r\nTop the pies with their lids, pressing the edges gently together to seal – you don’t need to seal them with milk or egg as they will stick on their own. (The pies may now be frozen for up to 1 month).\r\n\r\nBeat 1 small egg and brush the tops of the pies. Bake for 20 mins until golden. Leave to cool in the tin for 5 mins, then remove to a wire rack.\r\n\r\nTo serve, lightly dust with icing sugar.",
        mealImage : "https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg"
    },
    {
        id:15,
        mealName : "Nutty Chicken Curry",
        mealType : "Chicken",
        mealArea : "Indian",
        mealIngredient : "Red Chilli , Ginger , Garlic ,Coriander , Sunflower Oil , Chicken Breasts , Peanut Butter , Chicken Stock ,Greek Yogurt",
        mealInstructions : "Finely slice a quarter of the chilli, then put the rest in a food processor with the ginger, garlic, coriander stalks and one-third of the leaves. Whizz to a rough paste with a splash of water if needed.\r\nHeat the oil in a frying pan, then quickly brown the chicken chunks for 1 min. Stir in the paste for another min, then add the peanut butter, stock and yogurt. When the sauce is gently bubbling, cook for 10 mins until the chicken is just cooked through and sauce thickened. Stir in most of the remaining coriander, then scatter the rest on top with the chilli, if using. Eat with rice or mashed sweet potato.",
        mealImage : "https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg"
    }
] 
let lastId = 15;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//methods

//get all methods
app.get("/meals" , (req,res)=>{
    console.log(meals);
    res.json(meals);
});

//get random meal
app.get("/random" , (req,res)=>{
    const randomIndex = Math.floor(Math.random() * meals.length);
    res.json(meals[randomIndex]);
});

//specific id 
app.get("/meals/:id" , (req,res)=>{
    const meal = meals.find((p) => p.id === parseInt(req.params.id));
    if(!meal) return res.status(404).json({ message: "Post not found" });
    res.json(meal);
});

//new meal post
app.post("/meals" , (req,res)=>{
    const newId = lastId +=1 ;
    const meal = {
        id : newId ,
        mealName : req.body.mealName,
        mealType : req.body.mealType,
        mealArea : req.body.mealArea,
        mealIngredient : req.body.mealIngredient ,
        mealInstructions : req.body.mealInstructions,
        mealImage : req.body.mealImage
    };
    lastId = newId;
    meals.push(meal);
    res.status(200).json(meal);
});

//patch methods
app.patch("/meals/:id" , (req,res)=>{
    const meal = meals.find((p) => p.id === parseInt(req.params.id));
    if (!meal) return res.status(404).json({message:"Meal not found"});
    if(req.body.mealName) meal.mealName = req.body.mealName;
    if(req.body.mealType) meal.mealType = req.body.mealType;
    if(req.body.mealArea) meal.mealArea = req.body.mealArea;
    if(req.body.mealIngredient) meal.mealIngredient = req.body.mealIngredient;
    if(req.body.mealInstructions) meal.mealInstructions = req.body.mealInstructions;
    if(req.body.mealImage) meal.mealImage = req.body.mealImage;
    res.json(meal);
});

//delete methods
app.delete("/meals/:id" , (req,res)=>{
    const index = meals.findIndex((p) => p.id === parseInt(req.params.id));
    if (index === -1 ) return res.status(404).json({message:"Meal not found"});
    meals.splice(index,1);
    res.json({message :"Meal deleted!"});
});

app.listen(port , ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});

  

