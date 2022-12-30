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


        let blank= store.Results.blank;




        let reccomendation = "";

        // if (requestData.ailments="stress"){
        //   return reccomendation="ashwagandha"
        // }

        //requestData.reccomendation

        axios
          .post(`${process.env.RESULT_API}/results`, requestData)
          .then(response => {
            console.log(reccomendation)
            store.Results.results.push(response.data);

//if stress is selectd
let ashLinks= {
  Link1: "180525",
  Link2: "223325"
}

store.Results.randomAshwagandhaLink.push(ashLinks);

console.log(store.Results.randomAshwagandhaLink);
console.log(store.Results.randomAshwagandhaLink);

if (inputList.ailments.value === "stress"){
  store.Results.blank[0]= store.Results.randomAshwagandhaLink;
  reccomendation= "ashwagandha";
  }
//if cramps is selected
  if (inputList.ailments.value === "cramps"){
    store.Results.blank[0]= store.Results.randomMagnesiumLink;
    reccomendation= "magnesium";
    }
  store.Results.reccomendation.push(reccomendation);



            console.log(store.Results.reccomendation);
            console.log(store.Results.randomAshwagandhaLink);
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

          axios
              .get(`https://api.ods.od.nih.gov/dsld/v8/browse-ingredientgroups?method=by_letter&q=${store.Results.reccomendation}&from=0&size=3

              `)
            .then(response =>  {
              console.log(store.Results.reccomendation);
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

