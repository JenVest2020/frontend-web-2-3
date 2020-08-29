import React, { useState } from "react";
import {connect} from 'react-redux';
import {deletingEvent} from './actions/actionsIndex';

function Display(props) {
  const [formHeader, SetFormHeader] = useState({
    title: '',
    name: '',
    ocassion: '',
    location: '',
    date: '',
    time: '',
    rsvp: false,
    yes: false,
    no: false,
    maybe: false,
    attending: false,
    one: false,
    two: false,
    three: false,
    four: false,
    fivePlus: false,
  });

  const [bringBev, setBringBev] = useState({
    bev1: false,
    coke1: false,
    coke2: false,
    coke3: false,
    coke4: false,
    bev2: false,
    sprite1: false,
    sprite2: false,
    sprite3: false,
    sprite4: false,
    bev3: false,
    dp1: false,
    dp2: false,
    dp3: false,
    dp4: false,
    bev4: false,
    pepsi1: false,
    pepsi2: false,
    pepsi3: false,
    pepsi4: false,
    otherBev: false,
    other1: false,
    other2: false,
    other3: false,
    other4: false,
    sweet: false,
    unsweet: false,
    koolAid: false,
    otherBevChoice: false

  });

  const [bringFood, setBringFood] = useState({
    casserole: false,
    food1: '',
    coleSlaw: false,
    food2: '',
    potatoes: false,
    food3: '',
    vegetables: false,
    food4: '',
    otherFood: false,
    potatoChips: false,
    hotDogs: false,
    cheese: false,
    bread: false,
    otherFoodChoice: false,
    otherFoodInput: '',
  });
  const [bringDes, setBringDes] = useState({
    pie: false,
    des1: '',
    cake: false,
    des2: '',
    iceCream: false,
    des3: '',
    otherDes: false,
    otherDesInput: '',
  });

  const handleInputs = e => {
    setBringBev({ [e.target.name]: e.target.value });
    setBringFood({ [e.target.name]: e.target.value });
    setBringDes({ [e.target.name]: e.target.value })
  };

  const handleCheckBoxes = e => {
    setBringBev({ [e.target.name]: e.target.checked });
    setBringFood({ [e.target.name]: e.target.checked });
    setBringDes({ [e.target.name]: e.target.checked })
  }

  const handleSave = e => {
    e.preventDefault();
  }

  const handleEdit = e => {
    e.preventDefault();
  };

  const handleDelete = e => {
    e.preventDefault();
    props.deletingEvent();
  };

  return (
    <div>
      <div className='eventHeader'>
        <h1>Vest Family Reunion</h1>
        <h2>Jenni & Allen Vest</h2>
        <h2>Annual Celebration</h2>
        <h3> 123 E. Main St, DeSoto, MO 63020<br></br> <span>Friday, June 15. 2021 5:45PM</span></h3>
        <label htmlFor="rsvp">RSVP:
        <select id="rsvpDrop" name="rsvp">
            <option value="choose">please choose</option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
            <option value="maybe">maybe</option>
          </select>
        </label><br></br>
        <label htmlFor='attending'>how many in your group?
        <select id="attendingDrop" name="attending">
            <option value="choose">please choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </label>
      </div>
      <h3 className='bringHeader' >Please choose something to Bring:</h3>
      <div className='bring'>

        <div className='bevForm'>
          <form className='form'>
            <h3>Beverages</h3>
            <p>*No Adult Beverages Please*</p>
            <label style={{ fontWeight: 'bold' }} htmlFor="bev1"> 2 liter of Coke
  <input type="checkbox" id="bev1Check" name="bev1" value={bringBev.bev1}
                onChange={handleCheckBoxes} />
            </label>
            <label htmlFor="qnty">how many?:</label>
            <select className='select' id="qnty1Drop" name="qnty">
              <option value="choose">please choose</option>
              <option value={bringBev.coke1}>1</option>
              <option value={bringBev.coke2}>2</option>
              <option value={bringBev.coke3}>3</option>
              <option value={bringBev.coke4}>4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} htmlFor="bev2"> 2 liter of Sprite
  <input type="checkbox" id="bev2Check" name="bev2" value={bringBev.bev2}
                onChange={handleCheckBoxes} />
            </label>
            <label htmlFor="qnty">how many?:</label>
            <select className='select' id="qnty2Drop" name="qnty">
              <option value="choose">please choose</option>
              <option value={bringBev.sprite1}>1</option>
              <option value={bringBev.sprite2}>2</option>
              <option value={bringBev.sprite3}>3</option>
              <option value={bringBev.sprite4}>4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} htmlFor="bev3"> 2 liter of Dr. Pepper
  <input type="checkbox" id="bev3Check" name="bev3" value={bringBev.bev3}
                onChange={handleCheckBoxes} />
            </label>
            <label htmlFor="qnty">how many?:</label>
            <select className='select' id="qnty3Drop" name="qnty">
              <option value="choose">please choose</option>
              <option value={bringBev.dp1}>1</option>
              <option value={bringBev.dp2}>2</option>
              <option value={bringBev.dp3}>3</option>
              <option value={bringBev.dp4}>4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} htmlFor="bev4"> 2 liter of Pepsi
  <input type="checkbox" id="bev4Check" name="bev4" value={bringBev.bev4}
                onChange={handleCheckBoxes} />
            </label>
            <label htmlFor="qnty">how many?:</label>
            <select className='select' id="qntyDrop" name="qnty">
              <option value="choose">please choose</option>
              <option value={bringBev.pepsi1}>1</option>
              <option value={bringBev.pepsi2}>2</option>
              <option value={bringBev.pepsi3}>3</option>
              <option value={bringBev.pepsi4}>4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} htmlFor="otherBev"> Other
  <input type="checkbox" id="otherBevCheck" name="otherBev" value={bringBev.otherBev}
                onChange={handleCheckBoxes} />
            </label>
            <select className='select' id="otherBevDrop" name="other">
              <option value="choose">please choose</option>
              <option value={bringBev.sweet}>Sweet Tea</option>
              <option value={bringBev.unsweet}>Tea Unsweetened</option>
              <option value={bringBev.koolAid}>KoolAid</option>
              <option value={bringBev.otherBevChoice}>Other</option>
            </select>
            <input
              type='text'
              id='otherInput'
              name='otherBev'
              placeholder='Other Beverage Name here'
              value={props.otherBev}
              onChange={handleInputs} />
          </form>
        </div>
        <div className='foodForm'>
          <form className='form'>
            <h3>Food</h3>
            <label style={{ fontWeight: 'bold' }} htmlFor="food1"> Casserole
  <input type="checkbox" id="food1Check" name="food1" value={bringFood.casserole}
                onChange={handleCheckBoxes} />
            </label>
            <input
              type='text'
              id='food1Input'
              name='casserole'
              placeholder='Name of Casserole here'
              value={bringFood.food1}
              onChange={handleInputs} />

            <label style={{ fontWeight: 'bold' }} htmlFor="food2"> Cole Slaw
  <input type="checkbox" id="food2Check" name="food2" value={bringFood.coleSlaw}
                onChange={handleCheckBoxes} />
            </label>
            <input
              type='text'
              id='food2Input'
              name='coleSlaw'
              placeholder='Name & quantity of Slaw here'
              value={bringFood.food2}
              onChange={handleInputs} />

            <label style={{ fontWeight: 'bold' }} htmlFor="food3"> Potatoes
  <input type="checkbox" id="food3Check" name="food3" value={bringFood.potatoes}
                onChange={handleCheckBoxes} />
            </label>
            <input
              type='text'
              id='food3Input'
              name='potatoes'
              placeholder='Name & quantity of Potatoes here'
              value={bringFood.food3}
              onChange={handleInputs} />

            <label style={{ fontWeight: 'bold' }} htmlFor="food4"> Vegetables
  <input type="checkbox" id="food4Check" name="food4" value={bringFood.vegetables}
                onChange={handleCheckBoxes} />
            </label>
            <input
              type='text'
              id='food4Input'
              name='vegetables'
              placeholder='Name & quantity of vegetables here'
              value={bringFood.food4}
              onChange={handleInputs} />

            <label style={{ fontWeight: 'bold' }} htmlFor="otherFood"> Other
  <input type="checkbox" id="otherFoodCheck" name="otherFood" value={bringFood.otherFood}
                onChange={handleCheckBoxes} />
            </label>
            <select className='select' id="otherFoodDrop" name="other">
              <option value="choose">please choose</option>
              <option value={bringFood.potatoChips}>Potato Chips</option>
              <option value={bringFood.hotDogs}>Hot Dogs</option>
              <option value={bringFood.cheese}>Cheese</option>
              <option value={bringFood.bread}>Bread</option>
              <option value={bringFood.otherFoodChoice}>Other</option>
            </select>
            <input
              type='text'
              id='otherFoodInput'
              name='otherFood'
              placeholder='Other Food Name here'
              value={bringFood.otherFoodInput}
              onChange={handleInputs} />
          </form>
        </div>
        <div className='desForm'>
          <form className='form'>
            <h3>Desserts</h3>
            <label style={{ fontWeight: 'bold' }} htmlFor="des1Input"> Pie
  <input type="checkbox" id="des1" name="des1" value={bringDes.pie}
                onChange={handleCheckBoxes} />
            </label>
            <input
              type='text'
              id='des1Input'
              name='pie'
              placeholder='Name & quantity of pie here'
              value={bringDes.des1}
              onChange={handleInputs} />


            <label style={{ fontWeight: 'bold' }} htmlFor="cake"> Cake
  <input type="checkbox" id="des2" name="des2" value={bringDes.cake}
                onChange={handleCheckBoxes} />
            </label>
            <input
              type='text'
              id='cake'
              name='cake'
              placeholder='Name & quantity of cake here'
              value={bringDes.des2}
              onChange={handleInputs} />

            <label style={{ fontWeight: 'bold' }} htmlFor="des3Input"> Ice Cream
  <input type="checkbox" id="des3" name="des3" value={bringDes.iceCream}
                onChange={handleCheckBoxes} />
            </label>
            <input
              type='text'
              id='des3Input'
              name='iceCream'
              placeholder='Name & quantity of Ice Cream here'
              value={bringDes.des3}
              onChange={handleInputs} />

            <label style={{ fontWeight: 'bold' }} htmlFor="otherDesInput"> Other
  <input type="checkbox" id="otherDes" name="otherDes" value={bringDes.otherDes}
                onChange={handleCheckBoxes} />
            </label>

            <input
              type='text'
              id='otherDesInput'
              name='otherDes'
              placeholder='Other Dessert Name & quantity here'
              value={bringDes.otherDesInput}
              onChange={handleInputs} />
          </form>
        </div>
      </div>
      <button className='btn' onClick={handleSave}>Save</button>
      <button className='btn' onClick={handleEdit}>Edit</button>
      <button className='btn' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default connect(
  null,
{
  deletingEvent
}) (Display);
