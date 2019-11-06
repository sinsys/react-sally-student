function App() {
  return (
  	<section className="pageWrapper">
    	<Main />
    	<Footer />
	</section>
  );
}

function Main(props) {
  return (
  	<h1>Hello</h1>
  )
}

function Footer() {
  return (
  	<div>Test2</div>
  )
}

ReactDOM.render(
	<App />,
	document.querySelector('#app-root')
);