// ================Full Data Structure===========================================================
const data = {
	'safety': [
		[
			'Cleaning & Sanitizing', //Subheading
			'Safety', //Heading
			'https://www.youtube.com/embed/LYYkEmgTj6A?rel=0&modestbranding=1', //Video Link
			//Question 1 with answers
			'You should frequently clean and sanitize ________.',
			'Any surfaces',
			'Dishes and Utensils',
			'Food contact surfaces',
			'Surfaces that you touch',
			//Question 2 with answers
			'If you are done preparing one food and are ready for another you should _____.',
			'Put away all unused foods',
			'Clean and sanitize the area',
			'Tell your manager you are done',
			'Continue working',
			//Question 3 with answers
			'You should clean & sanitize your work area _____.',
			'Whenever you feel like it',
			'When switching tasks',
			'After a break',
			'When switching tasks and after a break',
			//Correct Answers
			'3',
			'2',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Cross-Contamination', //Subheading
			'Safety', //Heading
			'https://www.youtube.com/embed/neyZb-2eBmU?rel=0&modestbranding=1', //Video Link
			//Question 1 with answers
			'What are ready-to-eat foods?',
			'Food that needs to be cooked before served',
			'Food that is ready to eat without further preperation',
			'Food that is ready to be stocked',
			'Both A and C',
			//Question 2 with answers
			'Why is it more important not to contaminate ready-to-eat foods?',
			'Because it makes it taste funny to customers',
			'Because the contaminants can not be killed before consumption',
			'Because the owner will loose his buisness',
			'Because the food people do not like contamination',
			//Question 3 with answers
			'It is best to _____.',
			'Keep ready-to-eat foods in same area as raw foods',
			'Keep raw foods in the fridge',
			'Throw any ready-to-eat food away before it expires',
			'Keep ready-to-eat foods away from all other foods',
			//Correct Answers
			'2',
			'2',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Date Marking & FIFO', //Subheading
			'Safety', //Heading
			'https://www.youtube.com/embed/0JqdGfK5k5E?rel=0&modestbranding=1', //Video Link
			//Question 1 with answers
			'Keeping food in the refrigerator stops bacteria growth.',
			'True',
			'False',
			'Does not matter either way',
			'Sometimes depending on the food',
			//Question 2 with answers
			'When should you put a use by date on refrigerated food?',
			'Anytime you get new food in',
			'Never. Just use the manufacturer use by date already on the food',
			'If the food will be kept longer than 24 hours',
			'If you plan on keeping it passed 3 days',
			//Question 3 with answers
			'What date should be on the use by date?',
			'7 days after the food was opened or thawed out.',
			'The date the manufacturer put minus 7 days',
			'The date your event is happening',
			'The date you plan to use it',
			//Correct Answers
			'2',
			'3',
			'1',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Waste Management', //Subheading
			'Safety', //Heading
			'https://www.youtube.com/embed/Yc7rrIBxe_E?rel=0&modestbranding=1', //Video Link
			//Question 1 with answers
			'Insects and rodents can carry diseases but cannot contaminate food',
			'True',
			'False',
			'Depends on which insects or rodents',
			'Depends on which region you are in',
			//Question 2 with answers
			'When should you take the trask out?',
			'Whenever your manager asks you to',
			'Whenever it starts overflowing',
			'As often as possible before it starts overflowing',
			'When it starts to smell like food for the rats',
			//Question 3 with answers
			'How can insects and rodents get into your restaurant?',
			'Through open doors and windows',
			'Through cracks and holes in walls and floors',
			'Through gaps around pipes',
			'All of the above',
			//Correct Answers
			'2',
			'3',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Hand Washing', //Subheading
			'Safety', //Heading
			'https://www.youtube.com/embed/_cBgpsZlUP8?rel=0&modestbranding=1', //Video Link
			//Question 1 with answers
			'What is the number 1 way to stop the spread of food born illnes?',
			'Taking baths preoperly',
			'Wearing gloves',
			'Proper venhilation in your restaurant',
			'Washing your hands correctly',
			//Question 2 with answers
			'How long can bacteria live on surfaces?',
			'A month',
			'A few weeks',
			'3 months',
			'A couple days',
			//Question 3 with answers
			'How can you contaminate things with your hands?',
			'Using the bathroom',
			'Preparing raw meat',
			'Touching any surfaces',
			'All of the above',
			//Correct Answers
			'4',
			'2',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Employee Illness 1', //Subheading
			'Safety', //Heading
			'https://www.youtube.com/embed/Oxgu1Ttcvl0?rel=0&modestbranding=1', //Video Link
			//Question 1 with answers
			'Can you come to work with diarrhea, a soar throat, and a fever?',
			'Yes',
			'If your manager is ok with it',
			'No',
			'If you feel like you can make it through the day',
			//Question 2 with answers
			'Can you come to work if your allergies are bad and you have been sneezing and have a runny nose?',
			'Yes',
			'If your manager is ok with it',
			'No',
			'If you feel like you can make it through the day',
			//Question 3 with answers
			'Can a woman that is pregnant and sick work around food?',
			'Yes',
			'If your manager is ok with it',
			'No',
			'As long as she is not vomiting regularly she will be fine',
			//Correct Answers
			'3',
			'1',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Employee Illness 2', //Subheading
			'Safety', //Heading
			'https://www.youtube.com/embed/EOOLIoBu48c?rel=0&modestbranding=1', //Video Link
			//Question 1 with answers
			'What sicknesses can you not come to work with ever',
			'E. Coli, Hep A, Norovirus, Coronavirus',
			'Coronavirus, E. Coli, Hep A, Salmonella',
			'Hep A, Salmonella, Fever, Norovirus',
			'E. Coli, Hep A, Norovirus, Salmonella',
			//Question 2 with answers
			'What symptoms require you to stay home?',
			'Vomiting',
			'Diarrhea',
			'Sore throat with a fever',
			'Any of the above',
			//Question 3 with answers
			'How long do you have to leave work when you are sick?',
			'It depends on how long you have the symptoms',
			'Come back when you feel better',
			'Ask your manager when you can come back',
			'Just come back to work already',
			//Correct Answers
			'4',
			'4',
			'3',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Handling Chemicals', //Subheading
			'Safety', //Heading
			'https://www.youtube.com/embed/KG-MAsMg7wY?rel=0&modestbranding=1', //Video Link
			//Question 1 with answers
			'Where do chemicals need to be stored?',
			'Next to sinks',
			'Wherever there is room',
			'You do not need chemicals',
			'Away from food',
			//Question 2 with answers
			'What type of chemicals will you use?',
			'Chlorine',
			'Quaternary Ammonium',
			'Iodine',
			'All of the above',
			//Question 3 with answers
			'How do you know you mixed chemicals correctly?',
			'By checking the color',
			'By following the instructions',
			'Just mix them carfully',
			'Use testing strip',
			//Correct Answers
			'4',
			'4',
			'4',
			//Completed or Not Completed
			'Not Completed'
		]
	],
	'operations': [
		[
			'General Operations', //Subheading
			'Operations', //Heading
			'https://www.youtube.com/embed/gmzemf3OUy8?rel=0&modestbranding=1', //Video Link
			// Question with Answers
			'Where is the operations checklist located?',
			'In the breakroom',
			'On the front door',
			'On the ice machine',
			'Above the prep tables',
			// Question with Answers
			'What times of the day do you perform the tasks on the checklist?',
			'Morning and Night',
			'Opening and closing',
			'Opening, Mid-Day, and Closing',
			'Opening, Shift Change, Mid-day, Second shift change, and closing',
			// Question with Answers
			'What happens after you check off the tasks on your checklist?',
			'You start your day',
			'A manager will check off behind you',
			'Your day is completed',
			'You are done',
			// Correct Answers
			'3',
			'3',
			'2',
			//Completed or Not Completed
			'Not Completed'
		]
	],
	'barista': [
		[
			'Espresso Machine', //Subheading
			'Barista', //Heading
			'https://www.youtube.com/embed/VE5DmKG9yN8?rel=0&modestbranding=1', //Video Link
			// Question 1 with Answers
			'What is the first step in breaking down the espresso machine?',
			'Wipe down all surfaces',
			'Add descale tablet',
			'Remove cover to the overflow compartment',
			'Spray down with sanitizer',
			// Question 2 with Answers
			'Where does your descaling tablets go?',
			'Inside the overflow compartment',
			'Inside the wash sprayer',
			'In the very top where the cups are',
			'Inside your portafilters',
			// Question 3 with answers
			'How many portafilters do you usually clean?',
			'All of them',
			'None of them',
			'1',
			'2',
			// Correct Answers
			'3',
			'4',
			'1',
			// Completed or Not Completed
			'Not Completed'
		],
		[
			'Kingdom Talk', //Subheading
			'Barista', //Heading
			'https://www.youtube.com/embed/Leu9GCjkg5I?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'How do we greet our customers?',
			'With a royal welcome',
			'Not a baristas job',
			'Just tell them good morning',
			'Ask them what they want to eat',
			//Question with answers
			'How do we want our customers to feel?',
			'They should feel like people',
			'However they want to feel',
			'Like we care somewhat',
			'Like they are royalty',
			//Question with answers
			'What type of coffee do we serve right now at Omni?',
			'Ethiopian Hazzar',
			'Jamaican Blue Mountain',
			'Indonesian Arabica',
			'Ethiopian Yirgacheffe',
			//Correct Answers
			'1',
			'4',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Customer Service', //Subheading
			'Barista', //Heading
			'https://www.youtube.com/embed/C4qwBMhhNOo?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'How do you notice bad customer service?',
			'They have no enthusiasm or energy',
			'They have a bad attitude',
			'They seem aggravated by customers all the time',
			'All of the above',
			//Question with answers
			'What does it take to have good customer service?',
			'Enthusiasm',
			'Good attitude',
			'Have fun and relate to customer',
			'All of the above',
			//Question with answers
			'Why is it important to have good customer service?',
			'It really does not matter they will buy anyways',
			'Because my manager says i have to have it',
			'Makes customers feel at home and makes them more likely to return',
			'Because it is kind of cool',
			//Correct Answers
			'4',
			'4',
			'3',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Selling / Promotions', //Subheading
			'Barista', //Heading
			'https://www.youtube.com/embed/TrcVTuj1bN4?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'Why is it important to sell customers as a barista / cashier?',
			'Customers may not know what they want',
			'It is not really that important',
			'It drives revenue up therefore helping drive tips as well',
			'Because the manager gets praised for it',
			//Question with answers
			'What are good ways to upsell?',
			'Suggesting add-ons',
			'Pushing the most profitable items',
			'Be enthusiastic about the items you are suggesting',
			'All of the above',
			//Question with answers
			'What is a bad way of upselling?',
			'Continuously pushing something on a customer that has already said they do not want it',
			'Suggesting add-ons',
			'Being to enthusiastic',
			'There is no bad way of upselling',
			//Correct Answers
			'3',
			'4',
			'1',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Drinks / Menu', //Subheadin //Headingg
			'Barista',
			'https://www.youtube.com/embed/1Phf9XFKzmI?rel=0&modestbranding=1#1.5', //Video Link
			//Question with answers
			'Where are the Drink guides located?',
			'On the espresso machine',
			'Under the counter',
			'On the POS system',
			'On the espresso machine and the grinder',
			//Question with answers
			'What drink was made in the video?',
			'Lord Omni',
			'Queen San Amina',
			'Lord of Castleberry',
			'Queens Chalice',
			//Question with answers
			'What type of milk  is used in our lattes?',
			'Oat Milk',
			'Whole Milk',
			'Almond Milk',
			'Coconut Milk',
			//Correct Answers
			'4',
			'4',
			'1',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Storage', //Subheading
			'Barista', //Heading
			'https://www.youtube.com/embed/UaViyeYCcs8?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'Where does the non-dairy milk stored?',
			'Top Left',
			'Top Right',
			'Bottom Left',
			'Bottom Right',
			//Question with answers
			'Where is the chai ingredients stored?',
			'Top Left',
			'Top Right',
			'Bottom Left',
			'Bottom Right',
			//Question with answers
			'Where is the syrups stored?',
			'Top Left',
			'Top Right',
			'Bottom Left',
			'Bottom Right',
			//Correct Answers
			'2',
			'4',
			'1',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Retail', //Subheading
			'Barista', //Heading
			'https://www.youtube.com/embed/_kH7gB0E9L0?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'What Grade is the coffe that is served at Omni?' ,
			'Grade 1',
			'Grade 2',
			'Grade 3',
			'Grade 4',
			//Question with answers
			'What type of bean is served at Omni',
			'Jamaican Blue Mountain',
			'Ethiopian Hazzar',
			'Indonesian Arabica',
			'Ethiopian Yirgacheffe',
			//Question with answers
			'Other than cofffee, what other retail products do we offer our guests?',
			'Special coffee machines',
			'Food they can cook later',
			'Gourmet coffee syrups',
			'Travel size pouches',
			// Correct Answers
			'1',
			'4',
			'3',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Cleaning', //Subheading
			'Barista', //Heading
			'https://www.youtube.com/embed/PESR7PmDay8?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'Is cleaning under the shelf required?' ,
			'Yes',
			'No',
			'Depends on the day',
			'There is nothing under the counter',
			//Question with answers
			'What should you do with the cups, straws, stirrers, etc?',
			'Throw them away',
			'Put them back in the stock room',
			'Restock them',
			'Leave them there',
			//Question with answers
			'What do you do with the cooler?',
			'Restock it',
			'Unplugg it so you do not waste electricity',
			'Clean and Stock it',
			'Nothing',
			'1',
			'3',
			'3',
			'Not Completed'
		],
		[
			'Product Details', //Subheading
			'Barista', //Heading
			'https://www.youtube.com/embed/RxqlXZ7rH-w?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'How many Grade 1 coffees do we have?',
			'1',
			'2',
			'3',
			'5',
			//Question with answers
			'How many gourmet syrups do we have?',
			'2',
			'5',
			'7',
			'8',
			//Question with answers
			'How many K Cups do we offer?',
			'1',
			'2',
			'3',
			'5',
			
			//Correct Answers
			'2',
			'4',
			'3',
			//Completed or Not Completed
			'Not Completed'
		]
	],
	'line cook': [
		[
			'Dishes & Utensils', //Subheading
			'Line Cook', //Heading
			'https://www.youtube.com/embed/ROx7muwsMQw?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'What order does the 3 compartment sink go in?',
			'Soap, Sanitizer, CLean Water, Air Dry',
			'Sanitizer, Soap, Clean Water, Air Dry',
			'Clean Water, Soap, Air Dry, Sanitizer',
			'Soap, Clean Water, Sanitizer, Air Dry',
			//Question with answers
			'What temperature does the soap compartment need to be?',
			'80-100 degrees',
			'100-120 degrees',
			'120-140 degrees',
			'130-150 degrees',
			//Question with answers
			'How do you know the dilution is at correct setting?',
			'It does not matter',
			'You can smell the soap and sanitizer',
			'You match the color with the color on the bottle',
			'You use the testing strips provided',
			//Correct Answers
			'4',
			'3',
			'4',
			//Comnpleted or Not Completed
			'Not Completed'
		],
		[
			'Equipment Setup & Cleaning', //Subheading
			'Line Cook', //Heading
			'https://www.youtube.com/embed/0bpaCpAIB10?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'What is the first step in cleaning a flat top grill?',
			'Turn the burners on high',
			'Spray with cleaning agent',
			'Scrap the flat top',
			'Turn the burners off',
			//Question with answers
			'What is the second step in cleaning a flat top grill?',
			'Turn the burners off',
			'Turn the burners on high',
			'Spray with cleaning agent',
			'Scrap the flat top',
			//Question with answers
			'How long do you wait before scrapping/scrubbing the flat top?',
			'Do it immediately',
			'Wait 5 minutes',
			'wait 1 hour',
			'wait 10 minutes',
			//Correct Answers
			'1',
			'3',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Food Prep', //Subheading
			'Line Cook', //Heading
			'https://www.youtube.com/embed/KBvU4Bmu5O0?rel=0&modestbranding=1', //Video Link
			//Question with naswers
			'What are some things Katie does wrong?',
			'She sneezes in her glove',
			'She does not change gloves after touching chicken',
			'She is eating while preping food',
			'All of the above',
			//Question with naswers
			'Why do you have to remove all jewelry when preparing food?',
			'Because it is a policy',
			'Because it is the right thing to do',
			'Because it could come off into the food you are preping',
			'Because you will be fired if you do not do this',
			//Question with naswers
			'When do we need to wash our hands?',
			'When our hands are dirty, when you change food, if you change gloves',
			'When you feel like it',
			'Anytime the bacteria levels on your hand are noticeable',
			'When our hands are dirty, if you touched your face or hair, if you use the bathroom, if you change gloves',
			//Correct Answers
			'1',
			'2',
			'3',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Storage', //Subheading
			'Line Cook', //Heading
			'https://www.youtube.com/embed/EzjXAx8T2ro?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'Where do ready-to-eat foods go?',
			'3rd shelf',
			'bottom shelf',
			'top shelf',
			'It does not go in the fridge',
			//Question with answers
			'Where would raw chicken go?',
			'3rd shelf',
			'bottom shelf',
			'top shelf',
			'It does not go in the fridge',
			//Question with answers
			'Why is it important to follow the storage guide?',
			'It is not really important as long as you know what you are doing',
			'Because this is the policy of Omni',
			'Because not following this guide can lead to cross-contamination and food borne illnesses',
			'Because cooked foods taste really good when seasoned properly',
			//Correct Answers
			'3',
			'2',
			'3',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Detailed Food Safety Hierarchy (FIFO)', //Subheading
			'Line Cook', //Heading
			'https://www.youtube.com/embed/5o6YfIY2Ojk?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'What is FIFO',
			'Five Ingredients For Organization',
			'First In Fast Operations',
			'First In First Out',
			'First Out First In',
			//Question with answers
			'What can happen if FIFO is not followed correctly?',
			'Waste food',
			'Food can grow baxteria, mold, and pathogens',
			'Food can get bad smells',
			'All of the above',
			//Question with answers
			'What is the basic principal of FIFO?',
			'make sure you get rid of old items',
			'The first items that were stocked need to be the first ones used',
			'To know that it is illegal to sell or sewrve expired foods',
			'FIFo is not a real thing',
			//Correct Answers
			'3',
			'4',
			'2',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Dressing Food', //Subheading
			'Line Cook', //Heading
			'https://www.youtube.com/embed/6olp2bjuL8o?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'What food was being made?',
			'Burrito',
			'Omlet',
			'French Toast',
			'Omni Bowl',
			//Question with answers
			'What was put on top of the food?',
			'Different fruits',
			'Powdered Sugar',
			'Granola Crumble',
			'Nothing',
			//Question with answers
			'What was the last thing added for presentation?',
			'Syrup',
			'Condensed Milk',
			'Flowers',
			'Powdered Sugar',
			//Correct Answers
			'3',
			'1',
			'3',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Maintaining Inventory', //Subheading
			'Line Cook', //Heading
			'https://www.youtube.com/embed/mhbRrjzwK80?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'What is the first thing you should do when recieving an order?',
			'Open the door for them',
			'Make sure it is your order and not your neighbors order',
			'Count every item and make sure it is correct and not damaged or expired',
			'Clear a space for the new stock',
			//Question with answers
			'Why should you only order the food that you need?',
			'It can not all be eaten that fast',
			'Because it will take up space and spoil',
			'Because we will spend to much money on it',
			'You can order as much as you want with no downside',
			//Question with answers
			'What should you do if you notice an items stock level getting really low?',
			'Nothing, it is not your job',
			'Tell the kitchen manager or chef',
			'Re order the food',
			'Make sure it is not expired',
			//Correct Answers
			'3',
			'2',
			'2',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Cleaning', //Subheading
			'Line Cook', //Heading
			'https://www.youtube.com/embed/r0sWf0jf6T4?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'What is cleaning?',
			'The removal of food and soil debris from a surface',
			'Adding food to a dish',
			'Removing the smell of old food from a surface',
			'Scrapping a metal surface',
			//Question with answers
			'What is the steps to properly cleaning a surface?',
			'Wipe it down with a wet rag',
			'Spray with disinfectant',
			'throw the object away',
			'Scrub with soap rag then with a sanitizer rag',
			//Question with answers
			'What temperature should the soapy water be?',
			'Hot as possible',
			'90 degrees',
			'About 110 degrees',
			'Cold water',
			//Correct Answers
			'1',
			'4',
			'3',
			//Completed or Not Completed
			'Not Completed'
		]
	],
	'food runner': [
		[
			'Overview', //Subheading
			'Food Runner', //Heading
			'https://www.youtube.com/embed/9IczqDQ0z8Y?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'What is one of the most important things to pay attention to?',
			'When the food is ready',
			'When the drinks are ready',
			'How many people are in the restaurant',
			'What table number the customer has and where they sat at',
			//Question with answers
			'What are you in charge of as a food runner?',
			'Everything',
			'Making sure the cashier rings in the food correctly',
			'Making sure everything looks right ergo: the food and the drinks are correct',
			'Nothing',
			//Question with answers
			'It is good practice to _________ before you bring a customers food out.',
			'Clean off the plate so food is not contaminated',
			'Pay attention to the area to make sure it is clear for the food',
			'Taste the food to make sure it is good',
			'Make sure you are presentable',
			//Correct Answers
			'4',
			'3',
			'2',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Kingdom Talk', //Subheading
			'Food Runner', //Heading
			'https://www.youtube.com/embed/gyMPLl1koVw?rel=0&modestbranding=1', //Video Link
			//Question with answers
			'How was the food runners attitude in the video?',
			'Non-chalant',
			'Irritated',
			'Enthusiastic',
			'Ok',
			//Question with answers
			'What type of language was the food runner using in the video?',
			'Jamaican Language',
			'Friendly Language',
			'Royal Language',
			'Regular Language',
			//Question with answers
			'What was the food runners last question before leaving the customer?',
			'How was your day so far',
			'Would you like to taste it',
			'When are you free this weekend',
			'Is there anything else I can get for you',
			//Correct Answers
			'3',
			'3',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Upselling', //Subheading
			'Food Runner', //Heading
			'https://www.youtube.com/embed/TrcVTuj1bN4?rel=0&modestbranding=1', //Video Link
			//Question with Answers
			'Why is it important to sell customers as a food runner?',
			'Customers may not know what they want',
			'It is not really that important',
			'It drives revenue up therefore helping drive tips as well',
			'Because the manager gets praised for it',
			//Question with Answers
			'What are good ways to upsell?',
			'Suggesting add-ons',
			'Pushing the most profitable items',
			'Be enthusiastic about the items you are suggesting',
			'All of the above',
			//Question with Answers
			'What is a bad way of upselling?',
			'Continuously pushing something on a customer that has already said they do not want it',
			'Suggesting add-ons',
			'Being enthusiastic',
			'There is no bad way of upselling',
			//Correct Answers
			'3',
			'4',
			'1',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Carrying Food Trays', //Subheading
			'Food Runner', //Heading
			'https://www.youtube.com/embed/ZY5AdDyYQQA?rel=0&modestbranding=1', //Video Link
			//Question with Answers
			'What is the correct way to carry a tray?',
			'With both hands',
			'With open hand and fingers spread apart',
			'with one hand on the side of the tray',
			'We do not have trays',
			//Question with Answers
			'Which hand should you carry the tray in?',
			'Left Hand',
			'Right Hand',
			'Both Hands',
			'The hand opposite your dominant hand',
			//Question with Answers
			'At what position should you carry the food tray?',
			'At your belly',
			'Above your head so you do not hit anyone',
			'Eye Level',
			'As low as possible for balance',
			//Correct Answers
			'2',
			'4',
			'1',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Communication', //Subheading
			'Food Runner', //Heading
			'https://www.youtube.com/embed/v461HivdFHw?rel=0&modestbranding=1', //Video Link
			//Question with Answers
			'What do you do when you hear the bell?',
			'Go pick up your food',
			'Clean the tables off',
			'Say the creed',
			'Give the customer a Royal greeting or farewell',
			//Question with Answers
			'When You hear HANDS what should you do?',
			'Go pick up your food',
			'Clean the tables off',
			'Say the creed',
			'Give the customer a Royal greeting or farewell',
			//Question with Answers
			'If you are busy it is ok to not greet customers.',
			'True',
			'False',
			'During rush hours true',
			'Only on sundays',
			//Correct Answers
			'4',
			'1',
			'2',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Cleaning', //Subheading
			'Food Runner', //HEading
			'https://www.youtube.com/embed/K5T42WfUcnM?rel=0&modestbranding=1', //Video Link
			//Questions with Answers
			'Before you clear a table you should _____.',
			'Wash your hands',
			'Make sure the customers are gone',
			'Make sure the customers are finished',
			'Take a break',
			//Questions with Answers
			'How should you clear the table?',
			'As fast as possible so others can eat',
			'Slowly to make sure it is cleaned properly',
			'Deliberately make sure you pull plates away from the customer',
			'The customers clean iup after themselves',
			//Questions with Answers
			'How should you hold a plate you are taking away?',
			'With both hands',
			'You should have a carrying cart',
			'However you can to get the most plates at one time',
			'Three fingers underneath with thumb and pinky on top',
			//Correct Answers
			'3',
			'3',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Pre-Scrapping Dishes', //Subheading
			'Food Runner', //Heading
			'https://www.youtube.com/embed/gwQmGe3rjtE?rel=0&modestbranding=1', //Video Link
			//Questions with Answers
			'What is pre-scrapping?',
			'the process of knowing which plate to throw away',
			'the process of cleaning all food and debris from plate',
			'the process of fixing broken plates',
			'the process of putting the plate in the dishwasher',
			//Questions with Answers
			'What can happen if pre-scrapping is not done correctly?',
			'Leave plates unsanitary',
			'Damage equipment',
			'Hurt Employees',
			'All of the above',
			//Questions with Answers
			'If you damage the dishwashers wash tank what can happen?',
			'We do not have a wash tank',
			'Nothing, it is built to last',
			'the dishwasher will not clean the dishes properly',
			'You have to buy a new one',
			//Correct Answers
			'2',
			'4',
			'3',
			//Completed or Not Completed
			'Not Completed'
		]
	],
	'toast pos': [
		[
			'On-Site Ordering', //Subheading
			'Toast POS', //Heading
			'https://share.vidyard.com/watch/ozrjTn8PyooZyXJoGZvxLR', //Video Link
			//Question with Answers
			'What would the Passcode Screen be used for?', 
			'Clock In/Out of shifts',
			'Clock In/Out of breaks',
			'Access POS',
			'All of the above',
			//Question with Answers
			'What do you do quick order mode for?',
			'Navigate Menus, Groups, and Items',
			'Ring in guest orders',
			'Collect Payment',
			'All of the above',
			//Question with Answers
			'Where would you find the tabs for Open, Paid, and Closed checks?',
			'At the right of the terminal',
			'At the bottom of the terminal',
			'At the left of the terminal',
			'At the top of your terminal',
			//Correct Answers
			'4',
			'4',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Toast POS Operations', //Subheading
			'Toast POS', //HEading
			'https://share.vidyard.com/watch/VcbvnAaJ9XT6MFdZSfFFxm', //Video Link
			//Question with Answers
			'What are the 3 types of checks in Toast?' ,
			'Open, Closed, On Hold',
			'Standby, Paid, Closed',
			'Open, Paid, Closed',
			'Open Order, Paid, Closed',
			//Question with Answers
			'What button do you use to add a name to an order?',
			'Customer',
			'Check',
			'Tab',
			'Open order',
			//Question with Answers
			'What color are the checkout buttons for quick cash selections?',
			'Red',
			'Green',
			'Blue',
			'Yellow',
			//Correct Answers
			'1',
			'3',
			'3',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'KDS Training', //Subheading
			'Toast POS', //Heading
			'https://share.vidyard.com/watch/U6yMjqnjEmmtRngBWY1ToT', //Video Link
			//Question with Answers
			'What do you do to a ticket to mark entire order as fullfilled?',
			'Click complete order button',
			'Double Tap ticket',
			'Swipe up',
			'Press the "X" Button',
			//Question with Answers
			'How do you see tickets that were already fulfilled that day?',
			'Show Recently Fullfilled button',
			'Show all tickets button',
			'All Day display button',
			'Ask your manager for access',
			//Question with Answers
			'Where would you see your production items displayed on KDS?',
			'Top',
			'Right',
			'Bottom',
			'Left',
			//Correct Answers
			'2',
			'1',
			'3',
			//Completed or Not Completed
			'Not Completed'
		]
	],
	'management': [
		[
			'Operations & Procedures', //Subheading
			'Management', //Heading
			'https://www.youtube.com/embed/eCmERLJLefE?rel=0&modestbranding=1', //Video Link
			//Question with Answers
			'What is your responsibilty when it comes to operations Procedures',
			'To make sure everyone has actually done what they have checked off',
			'To make sure customer get their tips',
			'To make sure the floors are clean',
			'All of the above',
			//Question with Answers
			'If someone has checked off a task, what do you do?',
			'Go behind them and double check',
			'Congratulate them on a job well done',
			'Give them a couching session',
			'Make sure they are in the schedule for the day',
			//Question with Answers
			'Once you have check all the tasks for a position you should _____.',
			'Tell them to go home',
			'Give them a raise',
			'Make sure they clocked out',
			'Sign your name signafying you have checked behind them',
			//Correct Answers
			'1',
			'1',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Scheduling', //Subheading
			'Management', //Heading
			'https://www.youtube.com/embed/xWQuB8Gscp4?rel=0&modestbranding=1', //Video Link
			//Question with Answers
			'When more than one employee has claimed a shift, you should _____.',
			'Thank them for stepping up',
			'Ask them if they can work a different day',
			'Go in Homebase and choose the employee that will take that shift',
			'Terminate that employee that was last to apply as they are slow',
			//Question with Answers
			'Whos shift should you schedule first due to priority?',
			'Managers',
			'Employees',
			'New hires',
			'The order does not matter',
			//Question with Answers
			'When should you publish the schedule?',
			'2 weeks before the schedule',
			'As soon as possible',
			'the week of the schedule',
			'the day of the schedule',
			//Correct Answers
			'3',
			'1',
			'2',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Inventory Check', //Subheading
			'Management', //Heading
			'https://www.youtube.com/embed/Oet4LBfF2-I?modestbranding=1&rel=0', //Video Link
			//Question with Answers
			'Where is the frozen meats and breads kept?',
			'Freezer 2',
			'Upstairs Freezer',
			'Freezer 1',
			'We do not have frozen meats',
			//Question with Answers
			'What is kept in cooler #2',
			'More Meats',
			'Vegetables',
			'Soups',
			'Dairy',
			//Question with Answers
			'What do you do with inventory sheet once filled out?',
			'Put it in Inventory Bin',
			'Hang it on the freezer',
			'Give it to your manager/lead',
			'Order the food that you need',
			//Correct Answers
			'2',
			'4',
			'3',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Leadership Training', //Subheading
			'Management', //Heading
			'https://www.youtube.com/embed/bLJMvX2eLqM?rel=0&modestbranding=1', //Video Link
			//Questions with Answers
			'What is the monkey rule?',
			'Gorilla tape fixes most messes',
			'People love bananas',
			'Monkey see monkey do',
			'This job is gorillas',
			//Questions with Answers
			'What is the windex law?',
			'Make sure your people are cleaning properly',
			'Clearly define what employees should be doing every time',
			'If you have a bottle of windex you look busy',
			'This is not listed on here',
			//Questions with Answers
			'Why is it important to lead by example?',
			'You should be doing admin work not being on the floor',
			'Because people do not follow other people that do not do what they ask of others',
			'Because it is fun',
			'Because everyone has to work',
			//Correct Answers
			'3',
			'2',
			'2',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Meeting Schedule', //Subheading
			'Management', //Heading
			'https://www.youtube.com/embed/AhGT3ZFG5LE?modestbranding=1&rel=0', //Video Link
			//Question with Answers
			'What are the 2 days we have our Leadership meetings?',
			'Monday & Friday',
			'Monday & Thursday',
			'Tuesday & Saturday',
			'Saturday & Sunday',
			//Question with Answers
			'At what time are the Leadership Meetings to start?',
			'8:00 AM',
			'10:00 PM',
			'9:00 AM',
			'10:00 AM',
			//Question with Answers
			'What video chat software do we use?',
			'Google Chat',
			'Microsoft Teams',
			'Zoom',
			'Google Meet',
			//Correct Answers
			'2',
			'4',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Toast Offline Mode', //Subheading
			'Management', //Heading
			'https://share.vidyard.com/watch/2jc6tC5v175VQkYGzyGZQF', //Video Link
			//Question with Answers
			'What is the first thing you should do when you have a service disruption?',
			'Call your manager',
			'Stop cashiers from taking orders as they will not process',
			'Identify the route cause of the disruption',
			'Reboot the system',
			//Question with Answers
			'What is the Toast System Status Tab?',
			'A tab that shows you the full list of toast services',
			'A tab in the backend that shows you what toast services are operational',
			'A tab to show where you can find all the toast services',
			'A tab that shows the status of you restaurant',
			//Question with Answers
			'If Toast POS is in offline mode, what should you not do?',
			'Do not uninstall Toast',
			'D not wlog out of the Toast App',
			'Do not resync the data or unplug data cables',
			'All of the above',
			//Correct Answers
			'3',
			'2',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Toast POS Essentials', //Subheading
			'Management', //Heading
			'https://share.vidyard.com/watch/qZv6WFgVkjQTbfFerYtmfd?', //Video Link
			//Question with Answers
			'What tab do you use to add new employees?',
			'Employees',
			'Payroll',
			'Team',
			'Accounts',
			//Question with Answers
			'As a manager, what register tab would you log into, to see all transactions?',
			'Quick Order',
			'Payment Terminal',
			'All Terminals',
			'Table Service',
			//Question with Answers
			'What cash button would you use to cash out at the end of the day?',
			'Cash In',
			'Cash Out',
			'Close Drawer',
			'Cash Drop',
			//Correct Answers
			'1',
			'2',
			'3',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Toast KDS Backend', //Subheading
			'Management', //Heading
			'https://share.vidyard.com/watch/Mgfa9o5JZQM8Mq22RR1Rpd', //Video Link
			//Question with Answers
			'What is the Expeditor setting?',
			'Setting that shows you all the orders',
			'Setting that lets someone double check the order is complete before going out',
			'Setting that slows the kitchen down',
			'Nothing you need to worry about',
			//Question with Answers
			'What setting would you use to delay the making of one dish in a ticket?',
			'Start Time',
			'Delay Time',
			'Preparation Time',
			'Ticket Time',
			//Question with Answers
			'What color are your KDS tickets if they are over the set ticket time?',
			'Black',
			'Green',
			'Yellow',
			'Red',
			//Correct Answers
			'2',
			'3',
			'4',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Completing Delivery Orders', //Subheading
			'Management', //Heading
			'https://share.vidyard.com/watch/1zbBXbNtFucm8v45b6ArGR', //Video Link
			//Question with Answers
			'What mode do you use to manage deliveries?',
			'Delivery Mode',
			'Dispatch Mode',
			'Driver Mode',
			'Takeout Mode',
			//Question with Answers
			'If you see a dollar amount in red what does mean?',
			'Payment has been confirmed',
			'Payment is pending bank verification',
			'Payment not made',
			'Just shows the total of the order',
			//Question with Answers
			'What tab do you use to move an order from en route to completed?',
			'Finalize Order',
			'Close Order',
			'Complete Order',
			'Complete Delivery',
			//Correct Answers
			'3',
			'3',
			'4',
			//Completed or Not completed
			'Not Completed'
		],
		[
			'End Of Day Closeout', //Subheading
			'Management', //Heading
			'https://share.vidyard.com/watch/9584emh6rrJBsgPZeD9Vfo', //Video Link
			//Question with Answers
			'What is the first step in End of Day Closeout?',
			'Time Cards',
			'Find Checks',
			'Shift Review',
			'Close Out Day',
			//Question with Answers
			'At End Of Day when would you close out any checks not paid or not closed?',
			'During Close Out Day checklist',
			'During Find checks checklist',
			'Before you do any End Of Day steps',
			'During Shift Review Checklist',
			//Question with Answers
			'What total cash value would you enter into the "Cash Actual" at Closeout?',
			'Total Cash Tips',
			'Total of all the cash in the cash drawer',
			'Total of cash above the $200 that will be left in drawer',
			'Total of all money collected that day (Cash and Card Payments)',
			//Correct Answers
			'3',
			'4',
			'2',
			//Completed or Not Completed
			'Not Completed'
		],
		[
			'Money & Safe Deposit', //Subheading
			'Management', //Heading
			'https://www.youtube.com/embed/AjP5HzAfuIY?rel=0&modestbranding=1', //Video Link
			//Question with Answers
			'Where do you put the money made that day?', 
			'In the register',
			'In the deposit bag',
			'In the top drawer',
			'In the bank',
			//Question with Answers
			'How much money stays in the register?',
			'$150',
			'$100',
			'$250',
			'$200',
			//Question with Answers
			'What do you write on the envelope?',
			'Date',
			'Amount of Cash',
			'"Cash Deposit"',
			'All of the above',
			//Correct Answers
			'2',
			'4',
			'4',
			//Completed or Not Completed
			'Not Completed'
		]
	]
}

// =====================================================================All Variables
// Dialogs and Dialog Buttons
const quizBtn = document.querySelector('.quizBtnContent')
const quiz = document.querySelector('.quizBtn')
const quizDialog = document.querySelector('.quiz')
const dialogClose = document.querySelector('.closeBtn i')
// Quiz Dialog Backdrop
const backdrop = document.querySelector('.backdrop')
// Quiz Form
const form = document.querySelector('#quizForm')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const firstNameLabel = document.querySelector('#firstNameLabel')
const lastNameLabel = document.querySelector('#lastNameLabel')
const emailLabel = document.querySelector('#emailLabel')
const question1Label = document.querySelector('#q1Label')
const question1 = document.querySelector('#question1')
const q1a1 = question1.querySelector('.a1')
const q1a2 = question1.querySelector('.a2')
const q1a3 = question1.querySelector('.a3')
const q1a4 = question1.querySelector('.a4')
const question2Label = document.querySelector('#q2Label')
const question2 = document.querySelector('#question2')
const q2a1 = question2.querySelector('.a1')
const q2a2 = question2.querySelector('.a2')
const q2a3 = question2.querySelector('.a3')
const q2a4 = question2.querySelector('.a4')
const question3Label = document.querySelector('#q3Label')
const question3 = document.querySelector('#question3')
const q3a1 = question3.querySelector('.a1')
const q3a2 = question3.querySelector('.a2')
const q3a3 = question3.querySelector('.a3')
const q3a4 = question3.querySelector('.a4')
// Header
const menuIcon = document.querySelector('.menu i') 
const navbar = document.querySelector('.navbar')
// Main Nav
const navbarBtns = document.querySelectorAll('.navbar a')
// Dialog Content
const instructContent = document.querySelector('.instructions')
const mainContent = document.querySelector('.main-content')
const viewInstructionsBtn = document.querySelector('.instructBtn')
// Main Content
const heading = document.querySelector('.heading strong')
const subheading = document.querySelector('.subheading')
const video = document.querySelector('.video')
// Sub Nav
const mainContentNav = document.querySelector('.main-content-nav')
const mainContentNavLinks = document.querySelectorAll('.main-content-nav a')
const navFirstChild = document.querySelector('.main-content-nav')
// Pass / Fail Dialog
const passFailDialog = document.querySelector('.passFail')
const passFailImg = document.querySelector('.passFail-img')
const passFailHeading = document.querySelector('.passFail-heading')
const passFailText = document.querySelector('.passFail-text')
// =============================================================All Functions
// Open and Close Side Menu
function openSideNav() {
	navbar.classList.add('active')
	menuIcon.classList.remove('bx-menu')
	menuIcon.classList.add('bx-x')
}

function closeSideNav() {
	navbar.classList.remove('active')
	menuIcon.classList.remove('bx-x')
	menuIcon.classList.add('bx-menu')
}

// Display Instructions or Main Content
function showInstructions() {
	instructContent.style.display = 'flex'
	mainContent.style.display = 'none'
}

function showMainContent() {
	instructContent.style.display = 'none'
	mainContent.style.display = 'block'
}

// Add or remove active class from element
function addActiveClass(x) {
  x.classList.add('active');
}

function removeActiveClass(x) {
  x.classList.remove('active');
}

function changeVideoContainerHeight(x) {
	const vid = document.querySelector('.video')

	if (x.includes('https://share.vidyard.com/')) {
		vid.style.height = '75vh'
	} else {
		vid.style.height = '35vh'
	}
}

// Main Nav Link Click
function mainNavClick(x) {
	// Change main-content elements to reflect first training tab
	mainNavContentChange(x)
	// Create Nav Links
	createSubNavLinks(x)
	// Sub Nav Active Function
	subNavActive()
}

// Change Elements For Main Nav Clicks
function mainNavContentChange(x) {

	changeVideoContainerHeight(x[0][2])

	heading.innerHTML = x[0][1]
	subheading.innerHTML = x[0][0]
	video.setAttribute('src', x[0][2])
	quizBtn.innerHTML = x[0][0]

	question1Label.innerHTML = x[0][3]
	q1a1.innerHTML = x[0][4]
	q1a2.innerHTML = x[0][5]
	q1a3.innerHTML = x[0][6]
	q1a4.innerHTML = x[0][7]
	question2Label.innerHTML = x[0][8]
	q2a1.innerHTML = x[0][9]
	q2a2.innerHTML = x[0][10]
	q2a3.innerHTML = x[0][11]
	q2a4.innerHTML = x[0][12]
	question3Label.innerHTML = x[0][13]
	q3a1.innerHTML = x[0][14]
	q3a2.innerHTML = x[0][15]
	q3a3.innerHTML = x[0][16]
	q3a4.innerHTML = x[0][17]
}

// Create Sub Nav Links
function createSubNavLinks(x) {
	for (var i = 0; i < x.length; i++) {
		const links = document.createElement('a')
		links.innerHTML = x[i][0]
		
		if (x[i][21] === 'Completed') {

			const icon = document.createElement('i')
			icon.classList.add('bx')
			icon.classList.add('bxs-check-square')
			links.appendChild(icon)

		}
		else if (x[i][21] === 'Not Completed') {

			const icon = document.createElement('i')
			icon.classList.add('bx')
			icon.classList.add('bxs-checkbox')
			links.appendChild(icon)

		}
		mainContentNav.appendChild(links)
	}
}

// Active Class Rules for Sub Nav
function subNavActive() {
	// Make first-child nav link active
	const link1 = mainContentNav.querySelector('a')
	addActiveClass(link1)
	// Change active class on link click
	const links = mainContentNav.querySelectorAll('a')

	links.forEach(link => {
		link.addEventListener('click', (e) => {
			links.forEach(el => {
				removeActiveClass(el)
			})
			addActiveClass(link)
		})
	})
}

// Active Class Rules for Sub Nav
function mainNavActive() {
	// Change active class on link click
	navbarBtns.forEach(link => {
		link.addEventListener('click', (e) => {
			console.log('clicked')
			navbarBtns.forEach(el => {
				removeActiveClass(el)
			})
			addActiveClass(link)
		})
	})
}

// Sub Nav Link Click 
function subNavClick(x, y) {
	const els = x.querySelectorAll('a')

	els.forEach(link => {
		link.addEventListener('click', (e) => {
			subNavContentChange(y, e)
			//Reset Form
			form.reset()
			resetFormCSS()
		})
	})

}

// Sub Nav Content Change
function subNavContentChange(y, e) {

	for (var i = 0; i < y.length; i++){
		if (e.target.textContent == y[i][0]) {

			changeVideoContainerHeight(y[i][2])

			subheading.innerHTML = y[i][0]
			video.setAttribute('src', y[i][2])
			quizBtn.innerHTML = y[i][0]
			
			question1Label.innerHTML = y[i][3]
			q1a1.innerHTML = y[i][4]
			q1a2.innerHTML = y[i][5]
			q1a3.innerHTML = y[i][6]
			q1a4.innerHTML = y[i][7]
			question2Label.innerHTML = y[i][8]
			q2a1.innerHTML = y[i][9]
			q2a2.innerHTML = y[i][10]
			q2a3.innerHTML = y[i][11]
			q2a4.innerHTML = y[i][12]
			question3Label.innerHTML = y[i][13]
			q3a1.innerHTML = y[i][14]
			q3a2.innerHTML = y[i][15]
			q3a3.innerHTML = y[i][16]
			q3a4.innerHTML = y[i][17]
		}
	}
}

// hide valid / invalid icons
function resetFormCSS() {
	const invalid = document.querySelectorAll('.invalid')
	const valid = document.querySelectorAll('.valid')
	const inputField = document.querySelectorAll('input')
	const selectField = document.querySelectorAll('select')

	invalid.forEach(item => {
		item.style.display = 'none'
	})

	valid.forEach(item => {
		item.style.display = 'none'
	})

	inputField.forEach(field => {
		field.style.border = '1px solid black'
		field.style.boxShadow = 'none'
	})

	selectField.forEach(field => {
		field.style.border = '1px solid black'
		field.style.boxShadow = 'none'
	})
}

// Remove Sub Nav Btns
function removeNavBtns() {
	const btns = document.querySelectorAll('.main-content-nav a')
	btns.forEach(btn => {
		btn.parentElement.removeChild(btn)
	})
}

// Validate Form to make sure inputs are done
function formValidation() {

	let firstNameResult = validate(firstName, firstNameLabel)
	let lastNameResult = validate(lastName, lastNameLabel)
	let emailResult = validate(email, emailLabel)
	let q1Result = validate(question1, question1Label)
	let q2Result = validate(question2, question2Label)
	let q3Result = validate(question3, question3Label)

	if (firstNameResult == false || lastNameResult == false || emailResult == false || q1Result == false || q2Result == false || q3Result == false ) {
		isvalid = false
		return isvalid
	} else {
		isvalid = true
		return isvalid
	}
}

// Validation of Form functions
function validate(x, y) {
	const invalid = y.parentElement.querySelector('.invalid')
	const valid = y.parentElement.querySelector('.valid')
	
	if ( x.value === '') {
		invalid.style.display = 'inline'
		valid.style.display = 'none'
		x.style.border = '1px solid var(--main-red)'
		x.style.boxShadow = '0 0 5px var(--main-red)'

		isvalid = false
		return isvalid
	} else {
		valid.style.display = 'inline'
		invalid.style.display = 'none'
		x.style.border = '1px solid var(--success)'
		x.style.boxShadow = '0 0 5px var(--success)'

		isvalid = true
		return isvalid
	}
}

function completedVideo(x, y) {
	const subNav = mainContentNav.querySelectorAll('a')
	x[21] = 'Completed'

	for (var i = 0; i < subNav.length; i++) {
		if (x[0] === subNav[i].textContent) {
			const res = subNav[i].querySelector('i')
			res.classList.replace('bxs-checkbox', 'bxs-check-square')
		}
	}

	let compare = []
	let navArr = []

	y.forEach(data => {
		if (data[21] === 'Completed') {
			compare.push(data[21])
		}
	})

	navbarBtns.forEach(link => {
		navArr.push(link.textContent)
	})

	let indexVar = y[0][1] + ' '
	let index = navArr.indexOf(indexVar, 0)

	if (compare.length === y.length) {
		let completed = navbarBtns[index].querySelector('i')
		completed.classList.replace('bxs-checkbox', 'bxs-check-square')
		sendCompleteSectionEmail(firstName.value, lastName.value, heading.textContent)
	}
}

//Validate Form Answers as Correct or Wrong
function validateAnswers(v, w, x, y, z) {

	let linksText = mainContentNav.querySelectorAll('a')

	for (var i = 0; i < linksText.length; i++) {
		if (v === linksText[i].textContent) {
			
			if (x === data[w.toLowerCase()][i][18] && y === data[w.toLowerCase()][i][19] && z === data[w.toLowerCase()][i][20] ) {
				showPassDialog()
				completedVideo(data[w.toLowerCase()][i], data[w.toLowerCase()])
				sendCompleteVideoEmail(firstName.value, lastName.value, heading.textContent, subheading.textContent )
			} else {
				showFailDialog()
			}
		}
	}

	form.reset()
	resetFormCSS()
}

//Show Pass and Fail Dialog Screens
function showPassDialog() {
	quizDialog.close()
	backdrop.style.display = 'none'
	passFailImg.setAttribute('src', '/assets/pass.jpg')
	passFailHeading.innerHTML = 'Congratulations, You Passed!'
	passFailText.innerHTML = 'Please Continue To The Next Section'
	
	setTimeout(() => {
		passFailDialog.show()
	}, 300)

	setTimeout(() => {
		passFailDialog.close()
	}, 3000)
}

function showFailDialog() {
	passFailImg.setAttribute('src', '/assets/fail.jpg')
	passFailHeading.innerHTML = 'Sorry, You Failed This Quiz.'
	passFailText.innerHTML = 'Please retake this quiz now'
	
	setTimeout(() => {
		passFailDialog.show()
	}, 300)

	setTimeout(() => {
		passFailDialog.close()
	}, 3000)
}

function sendCompleteVideoEmail(a, b, c, d) {
	//a - firstName
	//b - lastName
	//c - email
	//d - Heading (Section)
	//e - subheading (Tab)


	Email.send({
    SecureToken : "3e820d0f-bc03-4e59-8120-941bc57ac71f",
    To: 'omniteam@omnicoffeeandeggs.com' ,
    From: 'omniteam@omnicoffeeandeggs.com',
    Subject:
      'Quiz Results For ' + a + ' ' + b,
    Body:
      a + ' ' + b + ' Has Successfully Passed The ' + d + ' in ' + c + ' training!'
  }).then (
    message => console.log(message)
  );
}

function sendCompleteSectionEmail(a, b, c) {
	//a - firstName
	//b - lastName
	//c - email
	//d - Heading (Section)
	//e - subheading (Tab)


	Email.send({
    SecureToken : "3e820d0f-bc03-4e59-8120-941bc57ac71f",
    To: 'omniteam@omnicoffeeandeggs.com' ,
    From: 'omniteam@omnicoffeeandeggs.com',
    Subject:
      c + ' Section Completed For ' + a + ' ' + b,
    Body:
      a + ' ' + b + ' has successfully passed the ' + c + ' Section Training! This means they have passed all videos in this section'
  }).then (
    message => console.log(message)
  );
}

// ==============================================================All Event Listeners=========================

// Toggle Main Navigation
menuIcon.addEventListener('click', (e) => {
	if (menuIcon.classList.contains('bx-menu')) {
		openSideNav()
	} else if (menuIcon.classList.contains('bx-x')) {
		closeSideNav()
	}
})

// Show Instructions Content when btn clicked
viewInstructionsBtn.addEventListener('click', (e) => {
	// Close Menu
	closeSideNav()

	// close main content and open instructions
	showInstructions()
})

// Open Quiz Dialog when Quiz Btn Clicked
quiz.addEventListener('click', (e) => {
	quizDialog.show()
	backdrop.style.display = 'block'
})

// Close Dialog when X clicked
dialogClose.addEventListener('click', (e) => {
	quizDialog.close()
	backdrop.style.display = 'none'
})

// Close Dialog when outside dialog clicked
window.addEventListener('click', (e) => {
	if (e.target == backdrop) {
		quizDialog.close()
		backdrop.style.display = 'none'
	}
})

// Show Proper Content On Main Nav Click
navbarBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		// Remove Nav Btns
		removeNavBtns()

		// Close Menu
		closeSideNav()

		// close instructions and open main content
		showMainContent()

		// Reset Form
		form.reset()
		resetFormCSS()

		if (e.target.textContent == 'Safety ') {
			mainNavClick(data['safety'])
			subNavClick(mainContentNav, data['safety'])
		} else if (e.target.textContent == 'Operations ') {
			mainNavClick(data['operations'])
			subNavClick(mainContentNav, data['operations'])
		} else if (e.target.textContent == 'Barista ') {
			mainNavClick(data['barista'])
			subNavClick(mainContentNav, data['barista'])
		} else if (e.target.textContent == 'Line Cook ') {
			mainNavClick(data['line cook'])
			subNavClick(mainContentNav, data['line cook'])
		} else if (e.target.textContent == 'Food Runner ') {
			mainNavClick(data['food runner'])
			subNavClick(mainContentNav, data['food runner'])
		} else if (e.target.textContent == 'Toast POS ') {
			mainNavClick(data['toast pos'])
			subNavClick(mainContentNav, data['toast pos'])
		} else if (e.target.textContent == 'Management ') {
			mainNavClick(data['management'])
			subNavClick(mainContentNav, data['management'])
		}
	})
})

form.addEventListener('submit', (e) => {
	e.preventDefault()
	formValidation()

	if (isvalid === true) {
		validateAnswers(subheading.textContent, heading.textContent, question1.value, question2.value, question3.value)
	}
})

	//Add Active to Main Nav
	mainNavActive()