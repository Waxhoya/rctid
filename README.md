README.md

## PDX Scarf Squad

This app allow the collection of consumer data by presenting a choice between three images and allowing the user to give feedback. The user votes are collected and then displayed to the users.

#### User/Consumer Interface

<li>Three items are shown. The user selects their favorite by clicking on it. After 15 votes the user feedback is presented as a graph to inform the user of the choices.</li>

<li>With the Vote Again button the user can start the voter-app again to continue voting.</li>

<li>The new User button allows the user to restart the voter-app while reseting the user data. This data is not removed but available in the Marketing Interface.</li>

#### Animations and transitions

The product pictures chage opacity on :hover
Buttons change opacity on :hover

#### Clear Data Button

This has been updated to a Red scheme to warn the user. It also alerts that the localStorage has been cleared. 

#### Marketing interface

The Marketing button will display an overall voter-app stats.

#### Objects Constructors & Functions

<ul>
	<li>new Scarf(team, name, imageLocation) creates a new product object. Must be scarfBox.push('newScarfObject')</li>
	<li>new MarketItem(team, name, imageLocation) creates a new product object to track total votes and total views. Must be marketBoxTotal.push('newObject') and marketBoxLong.push('newObject')</li>
	<li>resultTable(array) hides the scarfPic* elements and inserts a table of results.</li>
	<li>imgSelector(scarfBox) selects a random picture and check to see it hasn't been used. The it tallies the use and pushes the elemets. </li>
	<li>drawChart() renders a canvasJS chart of the current user data. It is called on 15 votes or the Vote Again button
	</li>
	<li>drawChartStack() rendersa a canvasJS chart of the total user daTta collected. It can be called with the marketing button.
	</li>
	<li>voteAgain() sets the CSS to change visability and starts the voter-app over again.
	</li>
	<li>rebuildScarfBox() loops to set the array scarfBox[].y value needed to clean data between users.</li>
</ul>

#### HTML localStorage
<ul>
	<li>storeData(key, tarArray) stores the marketing data as a JSON and saves onclick.</li>
	<li>getMyData(key, tarArray) retreives the data and formats it into Scarf Objects.</li>
	<li>clearData() clears the localStorage and is attached to the red button
labeled Clear Data in the nav div.</ul>
