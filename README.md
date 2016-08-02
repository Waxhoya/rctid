README.md

## PDX Scarf Squad

This app allow the collection of consumer data by presenting a choice between three images and allowing the user to give feedback. The user votes are collected and then displayed to the users.

#### User/Consumer Interface

Three scarf pictures are shown and the user is asked to select their favorite by clicking on one. After 15 votes the feedback is presented to the user about their selection

The user can start the voter-app again to continue collecting votes if they so choose with the Vote Again button.

The new User button allows the user to restart the voter-app while reseting the user data. This data is not removed but available in the Marketing Interface.

#### Marketing interface

The Marketing button will display an overall voter-app stats and related data.

##### Objects :amp; Functions

ScarfCon.js
<ul>
	<li>new Scarf(team, name, imageLocation) creates a new product object. Must be scarfBox.push('newScarfObject')</li>
	<li>new MarketItem(team, name, imageLocation) creates a new product object to track total votes and total views. Must be marketBoxTotal.push('newObject') and marketBoxLong.push('newObject')</li>
	<li>resultTable(array) hides the scarfPic* elements and inserts a table of results.</li>
	<li>imgSelector(scarfBox) selects a random picture and check to see it hasn't been used. The it tallies the use and pushes the elemets. </li>
	<li>drawChart() renders a canvasJS chart of the current user data. It is called on 15 votes or the Vote Again button
	</li>
	<li>drawChartStack() rendersa a canvasJS chart of the total user data collected. It can be called with the marketing button.
	</li>
	<li>voteAgain() sets the CSS to change visability and starts the voter-app over again.
	</li>
	<li>rebuildScarfBox() loops to set the array scarfBox[].y value needed to clean data between users.</li>
	</ul>
