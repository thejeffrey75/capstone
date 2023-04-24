import html from "html-literal";
export default(state)=>html`

<section id="header">
<a href="index.html">
</a>
</section class=body2>



<h2 class="body2">
  How can we help?



</h2>


<h2 class="form" >

<form method="post" action="">
  <label for="age">
    Age:</label>
    <input
    type="text"
    name="age"
    id="age"
    placeholder="Enter Age"
    required
    />
    <br>
</label >



    <fieldset>
        <legend>Do you?</legend>
        <input type="checkbox" id="vice" name="vice" value="drinker">Drink Alcohol<br>
        <input type="checkbox" id="vice" name="vice" value="smoker">Smoke<br>
        <br>
        </select>

    </fieldset>



    <fieldset >
        <legend>What ailment brings you here?</legend>
        <input  required type="radio" id="ailments" name="ailments" value="stress">Stress<br>
        <input  type="radio" id="ailments" name="ailments" value="cold">Cold<br>
        <input type="radio" id="ailments" name="ailments" value="cramps">Cramps<br>
        <input type="radio" id="ailments" name="ailments" value="weight management">Weight Management<br>
        <input type="radio" id="ailments" name="ailments" value="acne">Acne<br>

        </select>
        <br>

    </fieldset>



    <fieldset>
        <legend>Are you taking any of the following?</legend>
        <input type="checkbox" id="pretrials" name="pretrials" value="ashwagandha">Ashwagandha<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="vitamin C">Vitamin C<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="magnesium">Magnesium<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="apple cider vinegar">Apple Cider Vinegar<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="black seed">Black Seed Oil<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="melatonin">Melatonin<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="zinc">Zinc<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="vitamin B12">Vitamin B12<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="green tea">Green Tea<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="vitamin E">Vitamin E<br>
        <br>
        <input type="submit" id="submit" name="Results" value="Submit" />
    </fieldset>
</form>


</h2>


`


;
