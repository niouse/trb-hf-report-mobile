
import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function App_Template(childs) {
    return (wrappedComponent) => {
        const $App_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="app-container" className="container" style={styles.container}>
					<childs.TrbNewCampaign	/>
					
				</div>
            );
        }
        $App_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $App_Template
    }
}
    