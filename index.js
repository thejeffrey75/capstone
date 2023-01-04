import{Header, Nav, Main, Footer} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import {capitalize} from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state=store.Home){
  document.querySelector("#root").innerHTML=`
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}`;
   afterRender(state);
  router.updatePageLinks();
  }


  function afterRender(state) {
    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });



    if (state.view === "Home") {



      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();



        const inputList = event.target.elements;
        console.log("Input Element List", inputList);

        const vice=[];
        const pretrials=[];


        for (let input of inputList.vice) {
          if (input.checked) {
              vice.push(input.value);
                }
              }
        for (let input of inputList.pretrials) {
          if (input.checked) {
            pretrials.push(input.value);
                }
              }


        const requestData = {
          age: inputList.age.value,
          vice: vice,
          ailments: inputList.ailments.value,
          pretrials: pretrials,

        };
        console.log("request Body", requestData);



        // store.Articles.push(requestData.pretrials);

        let reccomendation = "fff";

        // if (requestData.ailments="stress"){
        //   return reccomendation="ashwagandha"
        // }

        //requestData.reccomendation

        axios
          .post(`${process.env.RESULT_API}/results`, requestData)
          .then(response => {
            console.log(reccomendation)
            store.Results.results.push(response.data);

let altOptionsNotice="Keep it consistent with the supplements you are already using. Here are some additional supplements that may provide better results.";
let altOptionsLink= "https://www.nhlbi.nih.gov/health/educational/healthdisp/pdf/tipsheets/Tips-for-a-Healthy-Lifestyle.pdf";
let altOptionsLinkNotice= "Check out this link to learn about different ways to improve your health";


let viceSmokerNotice="Smoking can have a negative impact on your health, click on this link to learn more";
let viceSmokerLink=  "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5490618/"
let viceDrinkerNotice= "Drinking alcohol can have a negative impact on your health, click on this link to learn more";
let viceDrinkerLink=  "https://www.niaaa.nih.gov/alcohols-effects-health/alcohols-effects-body";

if (vice.includes("smoker")) {
store.Results.viceSmokerLink.push(viceSmokerLink);
store.Results.viceSmokerNotice.push(viceSmokerNotice);
};


if (vice.includes("drinker")) {
  store.Results.viceDrinkerLink.push(viceDrinkerLink);
  store.Results.viceDrinkerNotice.push(viceDrinkerNotice);

  };

//if stress is selectd

if (inputList.ailments.value === "stress" && !pretrials.includes("ashwagandha")){
  reccomendation= "ashwagandha";
}
  else if (inputList.ailments.value === "stress" && pretrials.includes("ashwagandha") && !pretrials.includes("melatonin")){
    reccomendation= "melatonin";
  }

  else if (inputList.ailments.value === "stress" && pretrials.includes("ashwagandha") && pretrials.includes("melatonin") ){
    reccomendation= "magnesium";
    store.Results.altOptionsLink.push(altOptionsLink);
    store.Results.altOptionsNotice.push(altOptionsNotice);
    store.Results.altOptionsLinkNotice.push(altOptionsLinkNotice);
  }
//if cramps is selected

  if (inputList.ailments.value === "cramps" && !pretrials.includes("magnesium")) {
    reccomendation= "magnesium";
    }
    else if (inputList.ailments.value === "cramps" && pretrials.includes("magnesium")  && !pretrials.includes("vitamin B12")){
      reccomendation= "vitamin B12";

  }
  else if (inputList.ailments.value === "cramps" && pretrials.includes("magnesium") && pretrials.includes("vitamin B12") ){
reccomendation= "magnesium";
store.Results.altOptionsLink.push(altOptionsLink);
store.Results.altOptionsNotice.push(altOptionsNotice);
store.Results.altOptionsLinkNotice.push(altOptionsLinkNotice);
  }

  //if cold is selected

    if (inputList.ailments.value === "cold" && !pretrials.includes("vitamin C")){
      reccomendation= "vitamin C";
    }
      else if (inputList.ailments.value === "cold" &&  pretrials.includes("vitamin C") && !pretrials.includes("zinc")){
        reccomendation= "zinc";
      }
      else if (inputList.ailments.value === "cold" && pretrials.includes("zinc") && pretrials.includes("vitamin C") ){
        reccomendation= "vitamin C";
        store.Results.altOptionsLink.push(altOptionsLink);
        store.Results.altOptionsNotice.push(altOptionsNotice);
        store.Results.altOptionsLinkNotice.push(altOptionsLinkNotice)
      };



  //if weight management is selected


    if (inputList.ailments.value === "weight management" && !pretrials.includes("apple cider vinegar")){
      reccomendation= "apple cider vinegar";
    }
    else if (inputList.ailments.value === "weight management" && pretrials.includes("apple cider vinegar")&& !pretrials.includes("green tea")){
      reccomendation= "green tea";
      }
      else if (inputList.ailments.value === "weight management" && pretrials.includes("apple cider vinegar") && pretrials.includes("green tea") ){
        reccomendation= "apple cider vinegar";
        store.Results.altOptionsLink.push(altOptionsLink);
        store.Results.altOptionsNotice.push(altOptionsNotice);
        store.Results.altOptionsLinkNotice.push(altOptionsLinkNotice)
      };


  //if acne is selected

    if (inputList.ailments.value === "acne" && !pretrials.includes("black seed")) {
      reccomendation= "black seed";
    }
    else if (inputList.ailments.value === "acne" && pretrials.includes("black seed")&& !pretrials.includes("vitamin E")){
      reccomendation= "vitamin E";
      }
      else if (inputList.ailments.value === "acne" && pretrials.includes("black seed") && pretrials.includes("vitamin E") ){
        reccomendation= "apple cider vinegar";
        store.Results.altOptionsLink.push(altOptionsLink);
        store.Results.altOptionsNotice.push(altOptionsNotice);
        store.Results.altOptionsLinkNotice.push(altOptionsLinkNotice)
      };


      //console.log(store.Results.viceDrinkerLink);
      console.log(reccomendation);
      console.log(store.Results.viceDrinkerLink);
  store.Results.reccomendation.push(reccomendation);
  store.Results.reccomendationLink.push(reccomendation.replaceAll(' ', '_'))

            router.navigate("/Results");
          })
          .catch(error => {
            console.log("It puked", error);
          });

      });
    }

  }




  router.hooks({
    before: (done, params) => {
      const view = params && params.data && params.data.view
      ? capitalize(params.data.view)
      : "Home";  // Add a switch case statement to handle multiple routes
      switch (view) {
        case "Results":
          let referencePage =   `https://api.ods.od.nih.gov/dsld/v8/browse-products/?method=by_keyword&q=${store.Results.reccomendation}&from=0&size=10`
       // let referencePage = `https://api.ods.od.nih.gov/dsld/v8/browse-ingredientgroups?method=by_letter&q=${store.Results.reccomendation}&from=0&size=3`
       //let link1 = `https://api.ods.od.nih.gov/dsld/v8/label/${store.Results.productInfo[0].data.hits[0]._id}`
       let link1 = `https://api.ods.od.nih.gov/dsld/v8/label/${store.Results.blank[0]}`
        let link2 = `https://api.ods.od.nih.gov/dsld/v8/label/${store.Results.blank[1]}`
        let link3 = `https://api.ods.od.nih.gov/dsld/v8/label/${store.Results.blank[2]}`
        const requestOne = axios.get(referencePage);
        const requestTwo = axios.get(link1);
        const requestThree = axios.get(link2);
        const requestFour= axios.get(link3);
        axios.all([requestOne, requestTwo, requestThree,requestFour])

            .then(response =>  {
              store.Results.productInfo= response;
              console.log(store.Results.altOptions);
              console.log(store.Results.altOptions[0]);
              console.log(store.Results.productInfo)
              console.log(store.Results.productInfo[0].data.hits[0]._id)

              done();
            })
            .catch(error => {
              console.log("It puked", error);
              done();
            });
            break;
        default:
          done();
      }
    }
  });

  router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      render(store[view]);
    },
  })
  .resolve();

