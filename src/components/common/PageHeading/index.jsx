import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Icon} from 'react-icons-kit'
import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left'
class PageHeading extends Component {
	render() {
		const maxLength = this.props.maxLength ? this.props.maxLength : 15;
		return (
			<div className={`page-heading-section  ${this.props.isSticky ? 'sticky' : ''}`}>
				<div className="page-heading">
					<div className = "backbtn-heading">
						{this.props.backButton && <div className="btn-group mr-3">
								<span className="bckBtn"onClick={() => this.props.handleBackBtn()}>
									<Icon size={35} 
									 icon={ic_keyboard_arrow_left} className="postn"/>
								</span>
						</div>}
						<h4>
							{this.props.hideEllipses
								? <span title={this.props.title}>{this.props.title}</span>
								: <span title={this.props.title}>{((this.props.title || '').length > maxLength) ? this.props.title.substr(0, maxLength) + '...' : this.props.title}</span>
							}
						</h4>
						<h6>
							<span>{this.props.subTitle}</span>
						</h6>
					</div>
					
				</div>
				<div className="page-heading-actions">
					{this.props.children}
				</div>
			</div>
		);
	}
}
PageHeading.propTypes = {
	title: PropTypes.string.isRequired
}
export default PageHeading;
