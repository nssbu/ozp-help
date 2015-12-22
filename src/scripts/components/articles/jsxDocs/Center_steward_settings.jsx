// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var { Route, RouteHandler, Link } = Router;
module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },
	
render: function(){
return ( 
<div>

<h1>Change Center Settings</h1>

<p>The Center steward manages configurable aspects of the store. He or she adds, modifies and deletes field values on the Listing Create/Edit Form; monitors organizational stewards and sends system-wide notifications. The following sub-sections explains how to add, edit and delete field values on the <Link to="article" params={{
  part: 'global',
  article: 'Center_listings_create',
  title: 'Create a Listing'
}}>Listing Create/Edit Form</Link>.</p>

<p>To access the Center Settings window:</p>

<ol>
	<li>Click <i className="icon-menu"></i> on the right-side of the Global Toolbar.</li>
	<li>Select Center Settings<br />
	<img alt="Center Settings Link on Main Menu" src="Doc_images/centerSettingsLink_MainMenu.png"  title="Center Settings Link on Main Menu" /></li>
	<li>The Center Settings page will open to the Categories tab:<br />
	<img alt="Center Settings Page" src="Doc_images/centerSettings.png" title="Center Settings Page" /></li>
</ol>


	</div>
	);
	}
});
