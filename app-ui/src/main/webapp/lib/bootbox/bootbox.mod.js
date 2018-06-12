/*
 * Licensed under MIT (https://github.com/ligoj/ligoj/blob/master/LICENSE)
 */
define(['jquery', 'cascade', 'i18n!bootbox/nls/bootbox-messages', 'bootbox/bootbox'], function ($, $cascade, bootMessages, module) {
	module.addLocale('user', bootMessages);
	module.setLocale('user');

	/**
	 * Display a prompt for a delete confirmation.
	 * @param {Function} callback confirmed callback.
	 * @param {String} param optional deletion parameter used for template.
	 * @param {String} param2 optional html message to add.
	 */
	module.confirmDelete = function (callback, param, param2) {
		debugger;
		var message = Handlebars.compile($cascade.$messages['deleteConfirm' + (param ? 'Param' : '')])(param) + (param2 || '');
		module.dialog({
			message: message,
			title: $cascade.$messages.delete,
			size: (message && message.length < 40) ? 'small' : undefined,
			onEscape: true,
			backdrop: '-',
			buttons: {
				danger: {
					label: $cascade.$messages.delete,
					className: 'btn-primary btn-danger btn-raised',
					callback: callback
				},
				cancel: {
					label: $cascade.$messages.cancel,
					className: 'btn-link'
				}
			}
		});
	};
	
	/**
	 * Display a prompt for a disable confirmation.
	 * @param {Function} callback confirmed callback.
	 * @param {String} param optional disable parameter used for template.
	 * @param {String} param2 optional html message to add.
	 */
	module.confirmDisable = function (callback, param, param2) {
		var message = Handlebars.compile($cascade.$messages['disableConfirm' + (param ? 'Param' : '')])(param) + (param2 || '');
		module.dialog({
			message: message,
			title: $cascade.$messages.disable,
			size: (message && message.length < 40) ? 'small' : undefined,
			onEscape: true,
			backdrop: '-',
			buttons: {
				danger: {
					label: $cascade.$messages.disable,
					className: 'btn-primary btn-danger btn-raised',
					callback: callback
				},
				cancel: {
					label: $cascade.$messages.cancel,
					className: 'btn-link'
				}
			}
		});
	};
	
	/**
	 * Display a prompt for a disable confirmation.
	 * @param {Function} callback confirmed callback.
	 * @param {String} param optional disable parameter used for template.
	 * @param {String} param2 optional html message to add.
	 */
	module.confirmEnable = function (callback, param, param2) {
		var message = Handlebars.compile($cascade.$messages['enableConfirm' + (param ? 'Param' : '')])(param) + (param2 || '');
		module.dialog({
			message: message,
			title: $cascade.$messages.enable,
			size: (message && message.length < 40) ? 'small' : undefined,
			onEscape: true,
			backdrop: '-',
			buttons: {
				danger: {
					label: $cascade.$messages.enable,
					className: 'btn-primary btn-success btn-raised',
					callback: callback
				},
				cancel: {
					label: $cascade.$messages.cancel,
					className: 'btn-link'
				}
			}
		});
	};

	/**
	 * Display a prompt for a delete confirmation.
	 * @param {Function} callback confirmed callback.
	 * @param {String} title Title to display.
	 * @param {String} message Raw message to display.
	 * @param {String} action Button to confirm the action.
	 */
	module.confirm = function (callback, title, message, action) {
		module.dialog({
			message: message,
			title: title || '',
			size: (message && message.length < 40) ? 'small' : undefined,
			onEscape: true,
			backdrop: '-',
			buttons: {
				danger: {
					label: action,
					className: 'btn-danger btn-raised',
					callback: callback
				},
				cancel: {
					label: $cascade.$messages.cancel,
					className: 'btn-link'
				}
			}
		});
	};

	// Expose globally this variable
	bootbox = module;
});
