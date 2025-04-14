//*********Greater than: >  ***********

//5 is greater than 10

console.log(5 > 10); // it is false/wrong

//8 is greater than 6

console.log(8 > 6); // it is true/right

//*********Less than: <  ***********

//2 is less than 4
console.log(2 < 4); // it is true/right

//3 is less than 2 
console.log(3 < 2);  // it is false/wrong

//*********Equal: ==  ***********

//7 is equal to 8 

console.log(7 == 8); // it is false/wrong

//7 is equal to 7 

console.log(7 == 7);  //it is true/right

//********* Greater Than or Equal: >=  ***********

//is 10 greater than or equal to 10
console.log(10 >= 10);

//is 12 greater than or equal to 13
console.log(12 >= 13);  // it is false/wrong

//is 13 greater than or equal to 12
console.log(13 >= 12);

//********* Less Than or Equal: <=  ***********

//is 15 Less than or equal to 16

console.log(15 <= 16); //it is true/right

//is 16 Less than or equal to 15
console.log(16 <= 15); //it is false/wrong

//is 16 Less than or equal to 16
console.log(16 <= 16); //it is true/right

//********* Not Equal: !=  ***********

//is 20 not equal to 22
console.log(20 != 22); //it is true/right

//is 20 not equal to 20
console.log(20 != 20); //it is false/wrong

//********* And : && ***********

//********* Comparison with variable ***********

//----number type variable comparison----

//peyara price is 40 and apple price is 50. Is peyara price greater than apple price?
const peyaraPrice = 40;
const applePrice = 50;
console.log(peyaraPrice > applePrice); //it is false/wrong

//apple price is 50 and peyara  price is 40. Is apple price  greater than  peyara price?

const applePricE = 50;
const peyaraPricE = 40;
console.log(applePricE > peyaraPricE); //it is true/right

//---string boolean comparison----

//for string data
const myName = "Rahim";
const friendName = "Karim";
console.log(myName == friendName); //two variable value names are not same.So, it is false.


const myNamE = "Rahim";
const friendNamE = "Rahim";
console.log(myNamE == friendNamE); //two variable value names are same.So, it is true.

//for boolean data
 const myPromise = true;
 const friendpromise = false;
 console.log(myPromise == friendpromise);

 const myPromisE = true;
 const friendpromisE = true;
 console.log(myPromisE == friendpromisE);

 //comparison directly  boolean type variable name with value

 const didStudy = true;
 console.log(didStudy != false);

 //Practice:

 //1. তোর ছোট ভাইয়ের বয়স 10 বছর, আ তোর বয়স 15 বছর । একটা প্রোগ্রাম লিখে দেখ, তোর ছোট ভাইয়ের বয়স কি তো বয়স থেকে কম বা সমান কি না।
 
 const chotorAge = 10;
 const yourAge = 15;

 console.log(chotorAge <= yourAge);  //it is true.

 //2. একটা পরীক্ষায় পাস মার্কস 33। ধর, তুই 45 পেয়েছিস। চেক কর, তুই পাস করেছিস কি না।

 const passMarks = 33;
 const youGot = 45 ;
 console.log(youGot > passMarks);

 //3. দুইটা ভেরিয়েবলে জাম্বুরা আর কদবেলের দাম রাখা হলো। জাম্বুরা কি কদবেলের চেয়ে সস্তা কি না, সেটার তুলনা কর।

 const jamboraPrice = 60;
 const kodbelPrice = 70;
 console.log(jamboraPrice < kodbelPrice); //it is true.

 //4. তুই 10 টা বই পড়েছিস, আর তোর বন্ধু পড়ছে 10 টা। চেক কর, তোরা কি সমান সংখ্যক বই পড়েছিস কি না।

 const youRead = 10;
 const friendRead = 10;

 console.log(youRead == friendRead); //it is true.

 //5. তোর কাছে 15 টা বিস্কুট আর তোর বন্ধুর কাছে 20টা । চেক কর, তুই কি তোর বন্ধুর তেকে কম বিস্কুট পেয়েছিস কি না।

 const yourBiscot = 15;
 const friendBiscot = 20;
 console.log(yourBiscot < friendBiscot); //it is true.

 //6. একটা ফুটবল ম্যাচে রিয়াল মাদ্রিদ 2 টা গোল করছে, আর বার্সা 3 টা গোল করছে। চেক কর, রিয়াল মাদ্রিদ কি বার্সার চেয়ে কম গোল করেছে কি না।

const realMadrid = 2;
const barsa = 3;
console.log(realMadrid < barsa); //it is true.

//7. তোর নাম ‘Rahim’ আর তোর বন্ধুর নাম ‘Karim’ । চেক কর, তোর নাম কি তোর বন্ধুর নামের সমান কি না ।

const nameOfYou = 'Rahim';
const nameOfFriend = "Karim";
console.log(nameOfYou == nameOfFriend); //it is false.

//8. তুই  আজকে পড়াশোনা করেছিস (true), আর তোর বন্ধু পড়াশোনা করেনি (false)। চেক কর, তোরা কি একই রকম কাজ করেছিস কি না।

const amiStudy = true;
const bondhuStudy = false;
console.log(amiStudy == bondhuStudy); //it is false.

//------Triple Equal: ===  -------

// practice:

//1. তোর কাছে 50 টাকা আছে, আর বন্ধুর কাছে আছে ‘50’ টাকা(স্ট্রিং হিসেবে)। একটাপ্রোগ্রাম লিখে দেখ, 50 == ‘50’ দিলে আর 50 === ‘50’ দিলে আউটপুট কি আসবে।


const torTaka = 50;
const buddyTaka = '50';
console.log(torTaka == buddyTaka); //it is true.
console.log(torTaka === buddyTaka); //it is false. As buddyTaka's data type is string.

//2. তোর প্রোগ্রামিং নোটবুকে “JavaScript” লিখে রেখেছিস, আর এটা একটা স্ট্রিং টাইপ ডাটা। এখন তুই দেখতে চাস “JavaScript” == ’JavaScript’ আর ”JavaScript” === ‘JavaScript’ দিলে কি আউটপুট আসবে। ব্যাখ্যা কর, কেন একই আউটপুটআসছে।

console.log("JavaScript" == 'JavaScript'); //it is true.
console.log("JavaScript" === 'JavaScript'); //it is true. As both the value and data type are the same here.

//3. একটা প্রোগ্রাম লিখে দেখ, 25 এবং ‘25’ -এর মধ্যে 25 == ‘25’ এবং 25 === ‘25’ দিলে কী আউটপুট আসবে এবং কেন সেটা হয়, সেটা কমেন্ট করে লিখ।

console.log(25 == '25'); // Although one value is string, it is true as double equal (==) only compare the similarity with the value not data types.
console.log(25 === '25'); //it is false. As triple equal (===) compare both the value and data type,but data type is not the same here.

//4. "apple" এবং "apple" লিখে তুলনা করলে, "apple" == "apple" এবং "apple" === "apple" - এর আউটপুট কী হবে।

console.log("apple" == "apple"); //it is true.
console.log("apple" === "apple"); //it is true.

//5. একটা প্রোগ্রাম লিখে দেখ, “test” এবং “TEST” -এর মধ্যে “test” == “TEST” এবং “test” === “TEST” - এর আউটপুট কী হবে।

console.log("test" == "TEST");  //it is false due to small letter and capital letter.
console.log("test" === "TEST"); //it is false due to small letter and capital letter, although data type is the same.

//6. variableX -এর মান 15 আর variableY -এর মান “20” দিলে  variableX != variableY এবং variableX !== variableY - এর আউটপুট কী হবে।
  const variableX = 15;
  const variableY = '20';
  console.log(variableX != variableY); // it is true as both the values are not equal.
  console.log(variableX !== variableY); // it is true as both the value and data type are not equal. 

//7. variableA -এর মান hello আর variableB -এর মান “Hello” দিলে এখন variableA == variableB এবং variableA === variableB চেক করার প্রোগ্রাম লিখ।

const variableA = hello;
const variableB = "Hello";
console.log(variableA == variableB); //it shows error as hello string data is written here without "" any mark.
console.log(variableA === variableB);