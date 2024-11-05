import DoubleImg from '../../assets/double.png';
import SingleImg from '../../assets/Single.png';
import TripleImg from '../../assets/triple.png';
export const cardsData = [
  {
    id: 1,
    title: "Single User",
    price: `$150`,
    storage: "500GB Storage",
    desc: "send upto 10GB",
    usersAllowed: "1 User Allowed",
    img: SingleImg,
  },
  {
    id: 2,
    title: "Partnerships",
    price: `$199`,
    storage: "1TB Storage",
    desc: "send upto 20GB",
    usersAllowed: "1 User Allowed",
    img: DoubleImg
  },
  {
    id: 3,
    title: "Group Account",
    price: `$299`,
    storage: "5TB Storage",
    desc: "send upto 30GB",
    usersAllowed: "1 User Allowed",
    img: TripleImg,
  },
];
