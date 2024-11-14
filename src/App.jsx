/**  useState();
 Rules of React Hooks
 1. Only call Hooks inside functional components
 2. Only call Hooks at the top level of your component but NOT inside loops, conditions, or nested functions.

 Main reason why we should not use Hook in block level scope because we need to use it in rendering purpose
*/


import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import Section from './components/Section';

// export default function Header() {
// const description = getRandomDescription();
// return <header>
//           <img src= {reactImg} alt="Stylized atom" />
//           <h1>React Essentials</h1>
//           <p>
//             {description} React concepts you will need for almost any app you are
//             going to build!
//           </p>
//       </header>            
// }

// Header();

// Option 1:  using props to pass data to components
// function CoreConcept(props) {
  // return <li>
  //     <img src={props.image} alt={props.title}/>
  //     <h3>{props.title}</h3>
  //     <p>{props.description}</p>
  // </li>

//  option 2 Object destructuring


function App() {
// let tabContent = 'Please select a button';
const [selectedTopic, setSelectedTopic]= useState();



//  let tabContent = "Click a button to see the content";
  // tab button handleSelect
  function handleSelect(selectedButton){
    // console.log(`${selectedButton}Tab button clicked`);
    // Add logic to handle tab button click
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    //  always have last state value untill it re-render

    // tabContent = selectedButton
    // console.log(`${selectedTopic}. Tab button clicked`);
  }

  console.log('App component rendered');
  
//  rendering tab content based on the selected tab


let tabContent = <p>Please select a Topic!</p> ;

if(selectedTopic){

  tabContent = (
  <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>  
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
     </pre>
  </div>
  );
}

  return (
    <div>

      {/* <header>
        <h1>React Course</h1> 
      </header> */}
      <Header/>
   
      <main>
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
               {CORE_CONCEPTS.map((conceptItem)=> 
              //  <CoreConcept title={conceptItem.title} description={conceptItem.description} image={conceptItem.image} />

              <CoreConcept key={conceptItem.title} {...conceptItem} /> )}


                     {/* //  <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />

                      //  <CoreConcept {...CORE_CONCEPTS[1]}   />
                      //  <CoreConcept {...CORE_CONCEPTS[2]}   />
                      //  <CoreConcept {...CORE_CONCEPTS[3]}   /> */}

                      {/* <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />

                       <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />

                       <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} /> */}

              {/* <CoreConcept title="Components" description="The core UI block" image={componentImg}/>             
              <CoreConcept title="Components" description="The core UI block" image={componentImg}/>             
              <CoreConcept title="Components" description="The core UI block" image={componentImg}/>              */}
            </ul>

        </section>
        <Section id='examples'>
          <menu>
            {/* <li><button></button></li>
            <li><button></button></li>
            <li><button></button></li> */}
            <TabButton 
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')} >Components</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton
            isSelected={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')} >State</TabButton>
          </menu>
        {tabContent}
       </Section>
      </main>
    </div>
  );
}

export default App;
