import CalendarCard from './CalendarCard';
import { helper } from '../Helpers/helper';
import Kitty from "../img/kitty.png"

var christmasCards;
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }

  return array;
}

function preLoadCalendarDataToLocalStorage(){
  if(localStorage.getItem('cards') === null){
    var array = helper;
    array = shuffleArray(array);
    localStorage.setItem('cards', JSON.stringify(array));
    console.log("Cards loaded to local storage")
  }
}

function getCalendarDataFromLocalStorage(){
  christmasCards = JSON.parse(localStorage.getItem('cards'));
  console.log("Cards extracted")
}


export default function CalendarCardList() {
  // const {movie} = props;
  // const [open, setOpen] = useState(false);

  preLoadCalendarDataToLocalStorage();
  getCalendarDataFromLocalStorage();

  return (
    <div className="card-list">
      {christmasCards.map(card => (<CalendarCard card = {card} key = {card.id}/>))}
    </div>
  )
}