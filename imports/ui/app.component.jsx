// REACT DEPENDENCIES
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'


// COMPONENT LAYERS
import Template from "./template/app.template.jsx"
import Api from "./api/app.api.jsx"
import Styles from "./services/app.styles.service.jsx"
import Texts from "./services/app.text.service.jsx"

// COMPONENT STATIC DATA
import stylesDefault from "./styles/app.styles.default.js"
import stylesOptions from "./styles/app.styles-options.default.js"
import computeStyles from "./styles/app.compute-styles.js"
import texts from "./text/app.text.js"


// COMPONENT SERVICES
import AppStylesOptionsService from "./services/app.styles-options.service.jsx"
import AppMaterialService from "./services/app.material.service.jsx"
import AppLanguageService from "./services/app.language.service.jsx"
import AppInjectorService from "./services/app.injector.service.jsx"


// COMPONENT CHILDREN
import TrbNewCampaign from "./components/trb-new-campaign/trb-new-campaign.component.jsx"


// THEMES
import themes from "./themes/index.js"
import materials from "./themes/materialui.index.js"
import materialTrb from "./themes/materialui.trb.js"
import materialRuggieri from "./themes/materialui.ruggieri.js"

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TrbNewCampaignCrudService from "./../api/hfCampaign/client/hfCampaign.crud.service.jsx"
import TrbNewCampaignDataService from "./../api/hfCampaign/client/hfCampaign.data.service.jsx"

import TrbSitesCrudService from "./../api/sites/client/sites.crud.service.jsx"
import TrbSitesDataService from "./../api/sites/client/sites.data.service.jsx"
import TrbSitesListDataService from "./../api/sites/client/sites-list.data.service.jsx"
import TrbSitesOneDataService from "./../api/sites/client/sites-one.data.service.jsx"

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILD______________________________________________________________________*/
/*______________________________________________________________________________________*/

@TrbSitesOneDataService()
@TrbSitesListDataService()
@TrbNewCampaignCrudService()
@AppStylesOptionsService(themes)
@TrbNewCampaign()
class $TrbNewCampaign{}

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT______________________________________________________________________*/
/*______________________________________________________________________________________*/


let appChilds = {
	TrbNewCampaign : $TrbNewCampaign,
}


export default function App(){
	return (wrappedComponent)=>{
	
		//@AppRouterService(BrowserRouter)
		//@AppWithRouterService(withRouter)
		@AppMaterialService(MuiThemeProvider, getMuiTheme, materials)
		@AppStylesOptionsService(themes)
		@AppLanguageService()
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(appChilds)
		class App_Component {}
		return App_Component
	}
}  

