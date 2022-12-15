import html from "html-literal";
export default(state)=>html`
<section id="header">
<a href="index.html"></a>
</section class=body2>


<h2 class="body2">
  How can we help?

</h2>

<h2 >

<form>
  <label for="fname">Age:</label><br>
  <input type="text" id="fname" name="fname"><br>

</form>

<form method="post" action="/Tests/Post/">
    <fieldset>
        <legend>Do you?</legend>
        <input type="checkbox" name="vice" value="drinker">Drink<br>
        <input type="checkbox" name="vice" value="smoker">Smoke<br>
        <br>
        <input type="submit" value="Submit now" />
    </fieldset>
</form>

<form method="post" action="/Tests/Post/">
    <fieldset>
        <legend>What are your ailments?</legend>
        <input type="checkbox" name="ailment" value="stress">Stress<br>
        <input type="checkbox" name="ailment" value="cold">Cold<br>
        <input type="checkbox" name="ailment" value="cramps">Cramps<br>
        <br>
        <input type="submit" value="Submit now" />
    </fieldset>
</form>

<form method="post" action="/Tests/Post/">
    <fieldset>
        <legend>Are you taking any of the following?</legend>
        <input type="checkbox" name="suppplement" value="Ashwagandha">Stress<br>
        <input type="checkbox" name="suppplement" value="Vitamin C">Cold<br>
        <input type="checkbox" name="suppplement" value="Magnesium">Cramps<br>
        <br>
        <input type="submit" value="Submit now" />
    </fieldset>
</form>

</h2>
<h4>
  The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
</h4>

`


;
