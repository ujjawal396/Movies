import React from "react";

class App extends React.Component {
  componentDidMount() {
    //i will get data here

    let f = async () => {
      let result = await fetch("/movies");//browser function
      console.log(result);
      let json = await result.json();
      console.log(json);
    };

    f();
  }

  render() {
    return <div></div>;
  }
}

export default App;