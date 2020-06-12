import "./src/styles/index.scss"

import {_wrapRootElement, _wrapPageElement, _onClientEntry} from './wrapPageElement'

export const wrapRootElement = _wrapRootElement
export const wrapPageElement = _wrapPageElement
export const onClientEntry = _onClientEntry

const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/core/utils');
 
registerLinkResolver(linkResolver);