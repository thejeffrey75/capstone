import html from "html-literal";
import supps from "../../assets/images/pills2.png";
export default(state)=>html`
<h1 id="basedOffInput">

  Based off of your input, ${state.reccomendation} may be just for you!
  ${state.altOptionsNotice}
</h1>
<section class = "flex-container">
<img id= "supps" src= ${supps}/>
<article class="box1">


<ul style="list-style: none;">
<li><a target="_blank" href="https://dsld.od.nih.gov/label/${state.productInfo[0].data.hits[0]._id}">${state.productInfo[0].data.hits[0]._source.productName}</a> </li>
<li><a target="_blank" href="https://dsld.od.nih.gov/label/${state.productInfo[0].data.hits[4]._id}">${state.productInfo[0].data.hits[4]._source.productName}</a> </li>
<li><a target="_blank" href= "https://dsld.od.nih.gov/label/${state.productInfo[0].data.hits[8]._id}">${state.productInfo[0].data.hits[8]._source.productName}</a> </li>
</ul>

</article>


<article class= "box2">
 Read more about <a target="_blank" href="https://www.rxlist.com/${state.reccomendationLink}/supplements.htm">${state.reccomendation}</a> and the benefits of it.
</h2>
</article>

<article class="box3">

<P>
<a target="_blank" href= ${state.altOptionsLink}>${state.altOptionsLinkNotice}</a>
</P>

<p> <a target="_blank" href=${state.viceDrinkerLink[0]}>${state.viceDrinkerNotice[0]}</a></p>
 <br>
<p> <a target="_blank" href=${state.viceSmokerLink[0]}>${state.viceSmokerNotice[0]}</a></p>
</article>

</section>
`;

