wwwwwwwww 
const child = React.createElement("div",{id:"child"},heading);
const headers = React.createElement("h1",{id:"heading"},"This is h1 in div:child in div:parent")


const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
