import html from "html-literal";
export default(state)=>html`

<section id="header">
<a href="index.html"></a>
</section class=body2>

<h3>
 This is the ${state.data}
</h3>

<h2 class="body2">
  How can we help?

</h2>


<h2 >

<form method="post" action="">
  <label id= "age" name= "age" for="age">

    Age:</label>
    <input
    type="text"


  ><br>
</label>



    <fieldset>
        <legend>Do you?</legend>
        <select id="vice" name="vice">
        <input type="checkbox" name="vice" value="drinker">Drink<br>
        <input type="checkbox" name="vice" value="smoker">Smoke<br>
        <br>
        </select>

    </fieldset>



    <fieldset>
        <legend>What are your ailments?</legend>
        <select id="ailments" name="ailments">
        <input type="checkbox" name="ailment" value="stress">Stress><br>
        <input type="checkbox" name="ailment" value="cold">Cold<br>
        <input type="checkbox" name="ailment" value="cramps">Cramps<br>
        <input type="checkbox" name="ailment" value="weightManagement">Weight Management<br>
        <input type="checkbox" name="ailment" value="acne">Acne<br>
        </select>
        <br>

    </fieldset>



    <fieldset>
        <legend>Are you taking any of the following?</legend>
        <select id="pretrials" name="pretrials">
        <input type="checkbox" name="pretrials" value="ashwagandha">Ashwagandha<br>
        <input type="checkbox" name="pretrials" value="vitaminC">Vitamin C<br>
        <input type="checkbox" name="pretrials" value="magnesium">Magnesium<br>
        <input type="checkbox" name="pretrials" value="acv">Apple Cider Vinegar<br>
        <input type="checkbox" name="pretrials" value="blackSeedOil">Black Seed Oil<br>
        </select>
        <br>
        <input type="submit"  name="Results" value="Submit" />
    </fieldset>
</form>


</h2>


`


;
