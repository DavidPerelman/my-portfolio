import tipCalculatorAppWeb from '../assets/tip-calculator-app-1.png';
import tipCalculatorAppMob from '../assets/tip-calculator-app-mobile.png';
import randomQuoteMachineWeb from '../assets/random-quote-machine-1.png';
import randomQuoteMachineMob from '../assets/random-quote-machine-mobile.jpeg';
import myCoolStoreWeb from '../assets/my-cool-store.png';
import myCoolStoreWeb1 from '../assets/my-cool-store (1).png';
import myCoolStoreWeb2 from '../assets/my-cool-store (2).png';
import myCoolStoreWeb3 from '../assets/my-cool-store (3).png';
import myCoolStoreWeb4 from '../assets/my-cool-store (4).png';
import myCoolStoreMob from '../assets/my-cool-store-mobile.jpeg';
import myCoolStoreMob1 from '../assets/my-cool-store-mobile (1).jpeg';
import myCoolStoreMob2 from '../assets/my-cool-store-mobile (1).jpeg';

export const ProjectList = [
  {
    name: 'Tip Calculator App',
    image: [tipCalculatorAppWeb, tipCalculatorAppMob],
    skills: 'React',
    github: 'https://github.com/DavidPerelman/tip-calculator-app',
    webLink: 'https://david-tip-calculator-app.netlify.app/',
  },
  {
    name: 'Random Quote Machine',
    image: [randomQuoteMachineWeb, randomQuoteMachineMob],
    skills: 'React',
    github: 'https://github.com/DavidPerelman/random-quote-machine',
    webLink: 'https://david-random-quote-machine.netlify.app/',
  },
  {
    name: 'My Cool Store',
    image: [
      myCoolStoreWeb,
      myCoolStoreWeb1,
      myCoolStoreWeb2,
      myCoolStoreWeb3,
      myCoolStoreWeb4,
      myCoolStoreMob,
      myCoolStoreMob1,
      myCoolStoreMob2,
    ],
    skills: 'Next.js',
    github: 'https://github.com/DavidPerelman/my-cool-store-next-js',
    webLink: 'https://my-cool-store-next-js.netlify.app/',
  },
];
