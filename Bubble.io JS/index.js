// function setTimeAndAdd(startDate, EndDate){
//     const dateIntervals = []
//     let d = startDate;
//     // let end = EndDate;
//     // let StartTime = d.getHours();
//     // let Endtime = end.getHours();
//     // console.log(StartTime);
//     // console.log(Endtime);
//     for(i = startDate.getHours()-Number(0.5); i <= EndDate.getHours(); i+=Number(0.5)){
//         d.setMinutes(d.getMinutes() + 30);
//         if(d.getHours() !== EndDate.getHours()+1){
//             console.log(i);
//             dateIntervals.push(new Date(d));
//             // console.log(dateIntervals);
//             console.log(d);
//         }else{
//             // console.log(d);
//         }
//     }
//     return dateIntervals
// }
// let startDate = new Date("October 25, 2014 11:00")
// startDate.setMinutes(startDate.getMinutes() - 30);
// let endDate =  new Date("October 12, 2014 16:00")
// // endDate.setMinutes(startDate.getMinutes() - 30);

// const MyTimes = setTimeAndAdd(startDate, endDate);
// console.log(MyTimes);

// function mergeDate(startDate, EndDate){
//     const date = startDate.setHours(EndDate.getHours())
//     return new Date(date)
// }
// let startDate = new Date("October 25, 2014 11:00")
// startDate.setMinutes(startDate.getMinutes() - 30);
// let endDate =  new Date("October 12, 2014 16:00")
// const Mydate = mergeDate(startDate, endDate);
// console.log(Mydate);\\\

const sections = [
  {
    elementId: "typewriter-text-1",
    sentences: [
      "with AI-powered product discovery",
      "text or/and image based search",
      "not just on product level",
      "directly in outfit suggestions",
      "enable users to always find what they need",
      "let AI-magic work for your business",
      "engage with customers on a new level",
    ],
  },
  {
    elementId: "typewriter-text-2",
    sentences: [
      "faster time to first click",
      "2x higher conversion rates",
      "leverage cross-selling",
      "up to 40% larger AOV",
      "improved NPS",
      "up to 35% better retention",
    ],
  },
  {
    elementId: "typewriter-text-3",
    sentences: [
      "let AI handle the manual work",
      "automate and refine your masterdata",
      "fix inconsistencies with AI tagging",
      "clean up data for better search accuracy",
      "generate on-brand product descriptions",
      "ensure consistency across your catalog",
      "improve filters and discovery with AI",
      "boost conversions with enriched data",
    ],
  },
  { elementId: "typewriter-text-4", sentences: ["integrate in your e-shop"] },
  {
    elementId: "typewriter-text-5",
    sentences: [
      "elevate your e-commerce?",
      "enable fashion search in complete looks",
      "integrate in your e-shop?",
      "benefit your business?",
      "enhance your product data?",
      "enable AI styling search by you?",
    ],
  },
  {
    elementId: "typewriter-text-6",
    sentences: [
      "turn every search into a sale",
      "enable fashion search in complete looks",
      "deliver relevant results instantly",
      "understand search intent of any complexity",
      "boost search success rates and conversions",
      "seamlessly enhance your existing search",
      "shorten time to first click",
    ],
  },
  {
    elementId: "typewriter-text-7",
    sentences: [
      "AI-powered full-look recommendations",
      "inspire new ways to style every product",
      "show customers how to wear it",
      "drive cross-selling with outfit inspirations",
      "increase AOV with effortless styling",
      "help customers decide faster",
      "reduce returns with better styling guidance",
    ],
  },
  {
    elementId: "typewriter-text-8",
    sentences: [
      "drive conversions with 1:1 personalized email",
      "make outfit suggestions based on purchase history",
      "AI-powered styling at scale",
      "recommend products customers actually want",
      "styling matching their unique style",
      "create capsule wardrobes for each customer",
      "reactivate shoppers with tailored looks",
      "boost retention with personalized fashion picks",
    ],
  },
  {
    elementId: "typewriter-text-9",
    sentences: [
      "bring AI-powered styling to your stores",
      "assist store staff with instant outfit recommendations",
      "help customers find and style products faster",
      "turn fitting rooms into personal styling hubs",
      "bridge online and offline with smart styling",
      "enhance product discovery with in-store AI",
      "connect in-store visits to digital follow-ups",
      "boost sales with personalized outfit suggestions",
    ],
  },
];

function typeWriter(section) {
  let currentSentence = 0;
  let currentChar = 0;
  const textElement = document.getElementById(section.elementId);

  function type() {
    if (currentChar < section.sentences[currentSentence].length) {
      textElement.textContent +=
        section.sentences[currentSentence][currentChar];
      currentChar++;
      setTimeout(type, 50); // Smooth typing speed
    } else {
      setTimeout(() => {
        textElement.textContent = ""; // Instantly remove text
        currentChar = 0;
        currentSentence = (currentSentence + 1) % section.sentences.length;
        setTimeout(type, 100); // Small delay before next sentence
      }, 1000); // Pause after full sentence
    }
  }

  type();
}

// Start the effect for all sections
sections.forEach(typeWriter);
