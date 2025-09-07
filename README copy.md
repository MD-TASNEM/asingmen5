
#### 1) What is the difference between var, let, and const?


var বারবার ডিক্লেয়ার করা যায়, বারবার ভ্যালু দেওয়া যায়।

let একবার ডিক্লেয়ার করার পর বারবার ডিক্লেয়ার করা যায় না, কিন্তু ভ্যালু চেঞ্জ করা যায়।

const একবার ডিক্লেয়ার করার পর বারবার ডিক্লেয়ার করা যায় না, একবার ভ্যালু সেট করতে হয়, পরে চেঞ্জ করা যায় না।



#### 2) What is the difference between map(), forEach(), and filter()?


map() নতুন array রিটার্ন করে।


forEach() কিছু রিটার্ন করে না (undefined)।


filter() শর্ত মেনে যেসব element true হয়, সেগুলো নিয়ে নতুন array বানায়।



#### 3) What are arrow functions in ES6?

Arrow function হলো ES6 এ আনা একটা নতুন ফাংশন লেখার শর্টকাট সিনট্যাক্স।
এটার নাম এসেছে "arrow" (=>) চিহ্ন থেকে।

Destructuring মানে হচ্ছে array বা object থেকে ভ্যালু নিয়ে সহজে ভ্যারিয়েবলে রাখা।




#### 4) How does destructuring assignment work in ES6?

একাধিক ভ্যারিয়েবল এক লাইনে অ্যাসাইন করে কাজ করে।


let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log(a, b, c); // 10 20 30


#### 5) Explain template literals in ES6. How are they different from string concatenation?

Template literal মানে হচ্ছে backtick (`` ` ``) ব্যবহার করে string লেখা।
