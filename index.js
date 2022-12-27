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
   afterRender();
  router.updatePageLinks();
  }


  function afterRender() {
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


        for (let input of inputList.ailments) {
          if (input.checked) {
            ailments.push(input.value);
          }
        }

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
          ailments: ailments,
          pretrials: pretrials,

        };
        console.log("request Body", requestData);

        axios
          .post(`${process.env.RESULT_API}/results`, requestData)
          .then(response => {
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
      const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";  // Add a switch case statement to handle multiple routes
      switch (view) {
        case "Home":
          axios
            .get(
              // Replace the key provided here with your own key from openweathermap
              `'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=${process.env.SUP_FACTS}`
            )
            .then(response => {

              store.Home.suppFacts = {};
             store.Home.suppFacts = response.data;

              console.log(store.Home.suppFacts);
              done();
            })
            .catch(err => console.log(err));
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

