/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title:
      "On the impact of climatic, fiscal and environmental factors on Covid-19: A regression and correlation based study",
    authors: "Koushika P, Mahima S, Shahina A, Nayeemulla Khan A <br><br>",
      journal: "International journal of Artificial & Computational Intelligence",
    conferences:
      "Full Text : <a href = 'https://www.researchgate.net/publication/354951527_ON_THE_IMPACT_OF_CLIMATIC_FISCAL_AND_ENVIRONMENTAL_FACTORS_ON_COVID-19_A_REGRESSION_AND_CORRELATION_BASED_STUDY'> View </a> <br><br> 4th International Conference of COVID-19 Studies by IKSAD <br><br>",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/covid19-1.jpeg",
    citation: {
      vancouver:
        "Koushika P, Mahima S, Shahina A, Nayeemulla Khan A. On the impact of climatic, fiscal and environmental factors on Covid-19: A regression and correlation based study 2021.",
    },
    abstract:
      "COVID-19 is an infectious disease that has been affecting millions of people across nations, leading to a pandemic. We study the impact of climatic conditions, fiscal and developmental indices, population parameters and environmental conditions of a country on COVID-19 spread. Using JHU CSSE COVID-19 time-series dataset, we find that while the north temperate zone shows the highest increase in confirmed cases and deaths, the tropical zone has shown the highest recovery rate. The polar zone is negligibly affected by the virus. The correlation between number of cases and gross domestic product is 0.91. The Cases Per Population (CPP) and the country’s human development index show an unexpected positive correlation of 0.73. There is a negligible correlation of -0.11 between population density and the total cases. The correlation between urban population percent and CPP is 0.58. A weak correlation of 0.23 is obtained between urban particulate matter and total cases. <br> Keywords: COVID-19, zones, gross domestic product, human development index, population density, urban population percent, particulate matter, regression, correlation",
    absbox: "absPopup1",
  },
  {
    title:
      "Analysis of Lombard effect on Speech Emotions using Machine Learning",
    authors:
      "Indirapriyadarshini A, Mahima S, Uma Maheshwari, Shahina A <br><br>",
    journal: "International Journal of Computing and Digital Systems",
    conferences: "",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/speech.jpg",
    citation: {
      vancouver:
        "Indirapriyadarshini A, Mahima S, Uma Maheshwari, Shahina A Analysis of Lombard effect on Speech Emotions using Machine Learning.",
    },
    abstract:
      "The speech signal, as it emerges from a speaker's mouth, nose and cheeks, is a one-dimensional function of time. A recording device converts the fluctuating air pressure into electrical signals, voltages or currents, which is usually done in a quiet environment. Lombard Speech on the other hand, consists of signals recorded with background noise. Emotions can play an important role in how a person thinks and behaves, and increase the likelihood that action will be taken. In this project, we aim to study the emotions in speech under normal conditions and then compare that with emotions in Lombard speech. The study from our project will help services adapt to the emotional state of customers accordingly.  The Lombard effect influences the pitch and the loudness.  In many situations, individuals will change the manner in which they produce their speech due to the environment (i.e., Lombard Effect).The goal of our project is to create an emotion detector that will gauge your emotions in both a normal and a noisy environment and study what changes associated with the same. The machine learning model will be trained on a speech dataset recorded in a laboratory and then tested using a new database with simulated Lombard speech. For building the model, since the project is a classification problem, we intend to use Convolution Neural Network. <br> Keywords : Speech emotion recognition, Lombard effect, Convolution Neural Network, Machine learning.",
    absbox: "absPopup2",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      journal,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} <div font-style="bold"> Journal: ${journal} </div>
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
