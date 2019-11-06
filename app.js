function App() {
  return (
  	<section id="body-container">
	  	<section className="paper-container">
	  		<section className="paper-wrapper">
		    	<Header />
		    	<Main />
		    	<Employment />
		    	<Education />
		    </section>
			</section>
			<Footer />
		</section>
  );
}

function Header() {
  return (
    <header>
      <img className="avatar" src="http://stimhaus.com/images/profile-256.jpg" alt="Sally Student profile picture" />
      <h1 className="resume-name">Sally Student - Resume</h1>
      <address>
        Sally Student<br />
        9057 East Fake Dr,<br />
        A Place, GA 10101<br />
        <a href="mailto:faker.fakerson@gmail.com?Subject=I%20Want%20Help!">faker.fakerson@gmail.com</a>
      </address>
    </header>  	
  )
}

function Main() {
  return (
    <section className="main">
      <h2>Objective:</h2>
      <p>I plan to rule the world with microphones. Speakers are secondary, but a neccessity in the long term of things. I prefer to have an audience of people that aren't deaf, but I will include <code>aria</code> properties when necessary to make sure to accomodate.</p>
    </section>
  )
}

function Employment() {
  return (
    <section id="employment">
    	<h2 className="col-exp">Employment<span>&#11206;</span></h2>
      <table>
      	<tbody>
	        <tr>
	          <td>FakeSystems Inc</td>
	          <td>Master Developer</td>
	          <td>2000-2010</td>
	          <td>Managed API routing by coordinating with foo and assessing the accuracy of returned data from 3rd party partners</td>
	        </tr>
	        <tr>
	          <td>WorseSystems Inc</td>
	          <td>Lesser Developer</td>
	          <td>1990-2000</td>
	          <td>Made sites with Geocities and Angelfire that included tons of <code>blink</code> tags and gifs to make me look awesome</td>
	        </tr>
	      </tbody>
      </table>
    </section>
  )
}

function Education() {
  return (
    <section id="education">
    	<h2 className="col-exp">Education<span>&#11206;</span></h2>
      <table>
      	<tbody>
	        <tr>
	          <td>Fake Institute of Fortitude</td>
	          <td>1986-1990</td>
	        </tr>
        </tbody>
      </table>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>&copy;&nbsp;Sally Student | 2019</p>
    </footer>
  )
}

ReactDOM.render(
	<App />,
	document.querySelector('#app-root')
);

