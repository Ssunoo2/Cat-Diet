/* let i = 0;
function pluckMenu(arraylist,catitems){
	return _.each(arraylist, catitems){
		return _.filter(arraylist, function(foods){
  		arraylist.includes(catitems);
  	}
  };
}
}*/


function whatCatWillEat(menu, catPreferences) {

  for (let i = 0; i < menu.length; i++){
    if (_.find(catPreferences, (num) => (menu[i].includes(catPreferences)))){
      console.log(`Array ${i}`);
    }
  }
}




console.log(whatCatWillEat([['flour', 'water'],
    ['potato', 'water', 'cream', 'flour', 'butter', 'salt', 'pepper'],
    ['chicken', 'oil', 'parsley', 'lemon', 'distilled vinegar', 'bay leaf',
      'salt', 'black pepper', 'clove', 'green onion', 'flour', 'white wine', 'egg yolk'],
    ['beef', 'salt', 'pepper', 'flour', 'lard', 'oil', 'butter', 'cream'],
    ['buttermilk', 'egg', 'flour', 'baking soda', 'butter'],
    ['pork grease', 'beef', 'flour', 'vinegar', 'salt', 'pepper'],
    ['cornmeal', 'salt', 'water'],
    ['pork', 'rice', 'sugar', 'flour', 'pepper'],
    ['flour', 'salt', 'pepper', 'water',
      'beef', 'egg', 'onion', 'potato', 'pork', 'dehydrated vegetable'],
    ['beef', 'salt', 'pepper'],
    ['egg', 'salt', 'nutmeg', 'butter', 'cream', 'bread'],
    ['breadcrumb', 'cheese', 'water'],
    ['fish', 'cayenne pepper', 'black pepper', 'salt', 'rosemary', 'thyme'],
    ['fish', 'cornmeal', 'salt', 'black pepper', 'cayenne pepper', 'bacon'],
    ['flour', 'salt', 'pepper', 'fish', 'oil', 'parsley', 'onion']],
  ['fish', 'beef', 'pork', 'chicken']));