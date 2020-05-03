import React from 'react';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/core-components/_footer.scss';

function Footer() {
	return (
		<div className="footer">
			<ul className="footer__list">
				<li className="item">
					<a href="www.facebook.com">
						<FontAwesomeIcon icon={faShareSquare} className="footer__svg" />
						<span>Share</span>
					</a>
				</li>
				<li className="item">
					<a href="www.facebook.com">
						<FontAwesomeIcon icon={faComment} className="footer__svg" />
						<span>Comments</span>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
