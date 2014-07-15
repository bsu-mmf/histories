function processText(text) {
    'use strict';
    
    return text.replace(/<</g, '&laquo;')
        .replace(/>>/g, '&raquo;')
        .replace(/ ---/g, '&nbsp;&mdash;')
        .replace(/---/g, '&mdash;')
        .replace(/--/g, '&mdash;')
        .replace(/ldots/g, '&hellip;')
        .replace(/\.\.\./g, '&hellip;');
}