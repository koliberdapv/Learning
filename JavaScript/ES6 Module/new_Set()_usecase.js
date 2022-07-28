// new Set() - accepts iterable objects

const products = [
  {
    title: 'high-back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
];

// const companies = products.map((item) => item.company);
// console.log(companies);
// // (4) ['ikea', 'marcos', 'caressa', 'ikea']

// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);
// // Set(3) {'ikea', 'marcos', 'caressa'}

// const finalCompanies = ['all', ...uniqueCompanies];
// console.log(finalCompanies);

// one-liner
const result = ['all', ...new Set(products.map((item) => item.company))];
console.log(result);
