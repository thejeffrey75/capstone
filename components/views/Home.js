import html from "html-literal";
export default(state)=>html`

<section id="header">
<a href="index.html"></a>
</section class=body2>

<h3>
 This is the ${state.primIng}
</h3>


<h2 class="body2">
  How can we help?



</h2>


<h2 >

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
</label>



    <fieldset>
        <legend>Do you?</legend>
        <input type="checkbox" id="vice" name="vice" value="drinker">Drink<br>
        <input type="checkbox" id="vice" name="vice" value="smoker">Smoke<br>
        <br>
        </select>

    </fieldset>



    <fieldset>
        <legend>What ailment brings you here?</legend>
        <input type="radio" id="ailments" name="ailments" value="stress">Stress<br>
        <input type="radio" id="ailments" name="ailments" value="cold">Cold<br>
        <input type="radio" id="ailments" name="ailments" value="cramps">Cramps<br>
        <input type="radio" id="ailments" name="ailments" value="weightManagement">Weight Management<br>
        <input type="radio" id="ailments" name="ailments" value="acne">Acne<br>
        </select>
        <br>

    </fieldset>



    <fieldset>
        <legend>Are you taking any of the following?</legend>
        <input type="checkbox" id="pretrials" name="pretrials" value="ashwagandha">Ashwagandha<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="vitaminC">Vitamin C<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="magnesium">Magnesium<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="acv">Apple Cider Vinegar<br>
        <input type="checkbox" id="pretrials" name="pretrials" value="blackSeedOil">Black Seed Oil<br>
        <br>
        <input type="submit"  name="Results" value="Submit" />
    </fieldset>
</form>


</h2>


`


;
