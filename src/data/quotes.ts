export type Quote = {
  text: string;
  author: string;
  role?: string;
};

export const quotes: Quote[] = [
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    role: "Software Engineer & Author",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    role: "Developer",
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
    role: "Writer",
  },
  {
    text: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel",
    role: "Designer",
  },
  {
    text: "Java is to JavaScript what car is to carpet.",
    author: "Chris Heilmann",
    role: "Developer Evangelist",
  },
  {
    text: "Knowledge is power.",
    author: "Francis Bacon",
    role: "Philosopher",
  },
  {
    text: "Sometimes it pays to stay in bed on Monday rather than spending the rest of the week debugging Monday's code.",
    author: "Dan Salomon",
    role: "Developer",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    role: "Author",
  },
  {
    text: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
    role: "Computer Scientist",
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    role: "Software Engineer",
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    role: "Developer",
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    role: "Software Architect",
  },
  {
    text: "Fix the cause, not the symptom.",
    author: "Steve Maguire",
    role: "Author",
  },
  {
    text: "Optimism is an occupational hazard of programming; feedback is the treatment.",
    author: "Kent Beck",
    role: "Software Engineer",
  },
  {
    text: "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
    author: "Martin Fowler",
    role: "Software Engineer & Author",
  },
  {
    text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
    role: "Author",
  },
  {
    text: "It's not a bug — it's an undocumented feature.",
    author: "Anonymous",
  },
  {
    text: "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
    role: "Computer Scientist",
  },
  {
    text: "The function of good software is to make the complex appear simple.",
    author: "Grady Booch",
    role: "Software Engineer",
  },
  {
    text: "Programming is the art of algorithm design and the craft of debugging errant code.",
    author: "Ellen Ullman",
    role: "Software Engineer & Author",
  },
  {
    text: "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
    author: "Bjarne Stroustrup",
    role: "Creator of C++",
  },
  {
    text: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates",
    role: "Co-founder of Microsoft",
  },
  {
    text: "One of my most productive days was throwing away 1,000 lines of code.",
    author: "Ken Thompson",
    role: "Co-creator of Unix",
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    role: "Creator of Linux",
  },
  {
    text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "John Woods",
    role: "Developer",
  },
  {
    text: "Software is a great combination of artistry and engineering.",
    author: "Bill Gates",
    role: "Co-founder of Microsoft",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Scientist",
  },
  {
    text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates",
    role: "Co-founder of Microsoft",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    role: "MIT Professor",
  },
  {
    text: "The only way to go fast is to go well.",
    author: "Robert C. Martin",
    role: "Author of Clean Code",
  },
];

export function getQuoteOfTheDay(): Quote {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return quotes[dayOfYear % quotes.length];
}
