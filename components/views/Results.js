import html from "html-literal";
export default(state)=>html`
<h1>
${state.altOptions[0][1]}

  Based off of your input, ${state.reccomendation} may be just for you!
</h1>

<h2>
<section class = "results">
<a href="https://dsld.od.nih.gov/label/${state.productInfo[0].data.hits[0]._id}">${state.productInfo[0].data.hits[0]._source.productName}</a>
</h2>
\

<h2>

<a href="https://dsld.od.nih.gov/label/${state.productInfo[0].data.hits[4]._id}">${state.productInfo[0].data.hits[4]._source.productName}</a>
</h2>
<p>

</p>

<h2>

<a href="https://dsld.od.nih.gov/label/${state.productInfo[0].data.hits[8]._id}">${state.productInfo[0].data.hits[8]._source.productName}</a>
</h2>
<p>

</p>
</section>




<h2>
 Read more about <a href="https://www.rxlist.com/${state.reccomendationLink}/supplements.htm">${state.reccomendation}</a> and the benefits of it.


</h2>

`;

