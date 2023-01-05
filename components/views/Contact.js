import html from "html-literal";
import contactPic from "../../dist/desola-lanre-ologun-IgUR1iX0mqM-unsplash.bfe405a8.jpg";
import contactPic4 from "../../assets/images/cytonn-photography-ZJEKICY5EXY-unsplash.jpg";
import mailbox from "../../assets/images/MailBoxWhite.png";
import mail from "../../assets/images/MailWhite.png";
import phone from "../../assets/images/PhoneWhite.png";

export default(state)=>html`


<h1 class="flex-container">
<div id = "headerC">
Hear about our team!
</h1>

<p>
  We here at All Around place your health at the core of our business satisfaction. We utilize reliable data from the National Institute of Health (NIH), to provide you with the best results possible. Our research team has commited to intense research to ensure you are receiving the most accurate and helpful aid in resolving any of your health problems!
</p>

<img class ="contactPic" src= ${contactPic}/>


</div>

<div class= "backgroundI">
<h2>
  Reach out to us!
</h2>
<ul style="list-style: none;">
<li ><img class ="contactIcon" src= ${phone}/> 561-555-3204 </li>
<li ><img class ="contactIcon" src= ${mail}/>   AllAround@AllAround.com </li>
<li><img class ="contactIcon" src= ${mailbox}/> 1234 All Around Ave, Delray Beach, FL 33444 </li>
</ul>
</div>
</div>





`
;
