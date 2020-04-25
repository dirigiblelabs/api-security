/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
var java = require('core/v3/java');

exports.getName = function() {
	return java.call('org.eclipse.dirigible.api.v3.security.UserFacade', 'getName', []);
};

exports.isInRole = function(role) {
	return java.call('org.eclipse.dirigible.api.v3.security.UserFacade', 'isInRole', [role]);
};
