
import image10 from "../front/images1/baleadas.jpg"
import image11 from "../front/images1/beetsmoothie.jpg"
import image12 from "../front/images1/blueberryburst.jpg"
import image13 from "../front/images1/grapefruitsplash.jpg"
import image14 from "../front/images1/greenjuice.jpg"
import image15 from "../front/images1/kicksomeacidDetox.jpg"
import image16 from "../front/images1/magicpotiondetox.jpg"
import image17 from "../front/images1/nutritiongreenhulk.jpg"
import image18 from "../front/images1/orangeCreamsicledetox.jpg"
import image19 from "../front/images1/REALTACOS.png"
import image20 from "../front/images1/StrawberryMangoSmoothie5.jpg"
import image21 from "../front/images1/tropicalTwist.jpg"
import image22 from "../front/images1/valentineVibe.jpg"
import image23 from "../front/images1/vampireyblooddetox.jpg"


const  getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			product:[
			
				{
					id: 1,
					label:"data Entry",
					description:"",
					image:image10
				},
				{
					id: 2,
					label:"patient billing",
					description:"",
					image:image11
				},
				{
					id: 3,
					label:"insurance payment posting",
					description:"",
					image:image12
				},
				{
					id: 4,
					label:"file claims",
					description:"",
					image:image13
				},
			],
			services:[
				{
					id:5,
					label:"Provider Credentialing",
					description:"CMB Provide comprehensive medical credentialing for all healthcare providers who are eligible for credentialing with Medicare, Medicaid, or commercial insurance carriers. The health care provider will have a dedicated medical credentialing coordinator who will ensure that all necessary documentation is collected and processed in accordance with each payer. Medical credentialing enables healthcare providers to utilize the patient's insurance to pay for medical services performed. Hence it is important for healthcare providers to credentialed with most payers depending upon the geographical area. Failing to medical credentials results in losing patients to other healthcare providerds. ",
					image:image14,
					title:"CMB offer Exclusive Provider Credentialing for all healthcare Providers"
				},
				{
					id:6,
					label:"Charge Entry",
					description:"Charge capture plays a crucial role in Medical Billing. Charge capture or entry is a process of creating clain for a service rendered by the provider to the patient. A clain is the most important aspect for getting reimbursement. Even a minor mistake in charge capture impacts the entire outcome. CMB gives high importance for accurate charge posting in order to submit clean claims. CMB's goal is to get paid at the very first submission and the team relentlessly pushes harder to achieve higher first-pass rate of claims. We are experienced in various Practice Management Systems and various medical specialties. We have predefined rules in charge entry for different medical specialties, which reduces the room for errors and contributes to clean claims.",
					image:image15,
					title:"CMB provide medical coding at a safe and secure practice"
				},
				{
					id:7,
					label:"Payment Posting",
					description:"Accuracy in payment posting and medical billing service is imperative for an optimized revenue cycle.",
					image:image16,
					title:"CMB Offer Payment Posting at a Safe and Secure Practice"

				},
				{
					id:8,
					label:"Claims Submission",
					description:"CMB Submits all claims electronically within 48 hours of charges received time. Electronic claim submission speeds up the process in medical billing.  The clearinghouse prorvides a comfirmation that the claim have reached the payer on time.Electronic claim submission reduces rejections and denials drastically.  CMB submits claims electronically to almost all clearinghouses and familiar with the clearinghouse portals.  Many payers have very strict claims filing time limits  Electronic claim filing helps ot stay on time and  enhance cash flow.  Before the claims are submitted the following checks are made.",
					image:image17,
					title:"CMB Submit all Claims electronically within 48 hours"
				},
				{
					id:9,
					label:"Charge Entry",
					description:"All charges entered are checked for errors.  CMB collects data on common errors and fixes systemic problems that affec payment delays and bad debt, this helps improve collection rates and helpd to protect future cash flow",
					image:image19,
					title:"All charges entered are checked for errors"
				},
 
			],
			allServices:[
				{
					id:10,
					label:"Baleadas",
					description:" Pick any meat from the menu Add your beans add your mozzarella cheese Pick your sauces ",
					image:image10
				},
				{
					id:11,
					label:"Blue Berry Burst",
					description:"Banana, Strawberry, blueberries, greet yogurt or plain, Almond milk ",
					image:image12
				},
				{
					id:12,
					label:"Grape fruit splash",
					description:" Pineapple, Lemonlime, grapefruit, Tumeric, Carrots ",
					image:image13
				},
				{
					id:13,
					label:"green goddest detox",
					description:" Cucumber, spinach, celery, ginger and kale. Honey. ",
					image:image14
				},
				{
					id:14,
					label:"Kick some acid detox",
					description:" Pinapple, Lemon, Orange, Grapefruit ",
					image:image15
				},
				{
					id:15,
					label:"Majic potion detox",
					description:" Melon, Tumeric, Lemon, Orange ",
					image:image16
				},
				{
					id:16,
					label:"nutrition green hulk detox",
					description:"Avocado, spinach, aloe, coconut water",
					image:image17
				},
				{
					id:17,
					label:"orange Creamsicle detox",
					description:" Oranges, Apple, carrots, ginger, lemon ",
					image:image18
				},
				{
					id:18,
					label:" Best Deal Birria Tacos",
					description:" Buy 3 tacos and get a coke for FREE! ",
					image:image19
				},
				{
					id:19,
					label:"(NEW) mango Tango smoothie",
					description:" Mango ,bananas, strawberry, cinnamon, granola. ",
					image:image20
				},
				{
					id:20,
					label:" tropical Twist ",
					description:" Mango, Strawberry, Kiwi, Almond milk, Topped with granola ",
					image:image21
				},
				{
					id:21,
					label:"Valentine Vibe",
					description:" Banana, strawberry, papaya, Almond Milk, Honey Topped with granola ",
					image:image22
				},
				{
					id:22,
					label:"Vampirey Blood Detox",
					description:" Blackberries, beets, ginger, lemon ",
					image:image23
				},
				{
					id:23,
					label:" Beets me Detox juice  ",
					description:" Carrots, beets, Orange juice, Apple  ",
					image:image11
				},
 
 
 
				
			],
		
			
			
	
			
		},
		actions: {
	
		}
	};
};

export default getState;