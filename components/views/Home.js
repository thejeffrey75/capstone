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
  <label for="fname">Age:</label><br>
  <input type="text" id="fname" name="fname"><br>



    <fieldset>
        <legend>Do you?</legend>
        <input type="checkbox" name="vice" value="drinker">Drink<br>
        <input type="checkbox" name="vice" value="smoker">Smoke<br>
        <br>

    </fieldset>



    <fieldset>
        <legend>What are your ailments?</legend>
        <input type="checkbox" name="ailment" value="stress">Stress<br>
        <input type="checkbox" name="ailment" value="cold">Cold<br>
        <input type="checkbox" name="ailment" value="cramps">Cramps<br>
        <input type="checkbox" name="ailment" value="weightManagement">Weight Management<br>
        <input type="checkbox" name="ailment" value="acne">Acne<br>
        <br>

    </fieldset>



    <fieldset>
        <legend>Are you taking any of the following?</legend>
        <input type="checkbox" name="supplement" value="ashwagandha">Ashwagandha<br>
        <input type="checkbox" name="supplement" value="vitaminC">Vitamin C<br>
        <input type="checkbox" name="supplement" value="magnesium">Magnesium<br>
        <input type="checkbox" name="supplement" value="acv">Apple Cider Vinegar<br>
        <input type="checkbox" name="supplement" value="blackSeedOil">Black Seed Oil<br>
        <br>
        <input type="submit"  name="Results" value="Submit" href= "Results" />
    </fieldset>
</form>


</h2>


`


;
