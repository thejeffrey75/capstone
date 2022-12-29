import{Header, Nav, Main, Footer} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import {capitalize, negate} from "lodash";
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

        const ailments = [];
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




        let reccomendation = "vitamin c";

        // if (requestData.ailments="stress"){
        //   return reccomendation="ashwagandha"
        // }

        //requestData.reccomendation

        axios
          .post(`${process.env.RESULT_API}/results`, requestData)
          .then(response => {
            console.log("hello");
            console.log(reccomendation)
            store.Results.results.push(response.data);
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
        case "Home":

          axios
           // .get(`https://api.ods.od.nih.gov/dsld/v8/#factsheet`)
             // .get(`https://api.ods.od.nih.gov/dsld/v8/search-filter?from=0&size=3&product_name=${reccomendation} `)
              .get(`https://api.ods.od.nih.gov/dsld/v8/browse-ingredientgroups?method=by_letter&q=magnesium&from=0&size=3

              `)
            .then(response =>  {
              //store.Home.ingredients = {};
              console.log(response.data)
             //  store.Results.dietarySupplementsFacts = {};
            //   store.Results.dietarySupplementsFacts.name= response.data.name;
            //  console.log( store.Results.dietarySupplementsFacts.name);

              //console.log(store.Results.results);
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

