import html from "html-literal";
export default(state)=>html`
<h1>
  Based off of your input, ${state.reccomendation} may be just for you!
</h1>

<div class="flex-container">

<h2>

<div>
<section class = "results">
<a target="_blank" href="https://dsld.od.nih.gov/label/${state.productInfo[0].data.hits[0]._id}">${state.productInfo[0].data.hits[0]._source.productName}</a>
</h2>
</div>


<h2>
<a target="_blank" href="https://dsld.od.nih.gov/label/${state.productInfo[0].data.hits[4]._id}">${state.productInfo[0].data.hits[4]._source.productName}</a>
</h2>

<h2>
<a target="_blank" href= "https://dsld.od.nih.gov/label/${state.productInfo[0].data.hits[8]._id}">${state.productInfo[0].data.hits[8]._source.productName}</a>
</h2>

</section>
</div>
</div>

<h2>
 Read more about <a target="_blank" href="https://www.rxlist.com/${state.reccomendationLink}/supplements.htm">${state.reccomendation}</a> and the benefits of it.
</h2>

<p>
<a target="_blank" href=${state.viceDrinkerLink[0]}>${state.viceDrinkerNotice[0]}</a>
</p>

<br>

<p>
<a target="_blank" href=${state.viceSmokerLink[0]}>${state.viceSmokerNotice[0]}</a>
</p>
</div>
`;

