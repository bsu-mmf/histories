/*
 * CSS Creator
 * https://github.com/Semigradsky/css-creator
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

(function (root, document) {
    
    'use strict';

    root.CSSCreator = function (stylesheet) {
        var self = this;
        this.onPage = function () {
            return !!self.stylesheet;
        };
        this.stylesheet = stylesheet || null;
        this.rules = [];
        this.sylesheetId = 'CSSCreator_' + new Date().getTime();
    };
    root.CSSCreator.version = '0.0.3';

    /**
     * Add the stylesheet to html page.
     */
    root.CSSCreator.prototype.addToPage = function () {
        if (this.stylesheet) {
            return this;
        }

        var self = this;
        var stylesheet = document.createElement('style');
        stylesheet.id = this.sylesheetId;
        document.getElementsByTagName('head')[0].appendChild(stylesheet);
        if (!stylesheet.styleSheet) { // not IE
            // Apparently some version of Safari needs the following line? I dunno.
            stylesheet.appendChild(document.createTextNode(''));
        }

        for (var i = document.styleSheets.length - 1; i >= 0; i--) {
            stylesheet = document.styleSheets.item(i);
            var owner = stylesheet.ownerNode || stylesheet.owningElement /* IE */;
            if (owner.id === self.sylesheetId) {
                self.stylesheet = stylesheet;
                break;
            }
        }

        if (this.stylesheet) {
            addRulesToSheet(this.rules, this.stylesheet);
        }
        return this;
    };

    /**
     * Remove the stylesheet from html page.
     */
    root.CSSCreator.prototype.removeFromPage = function () {
        if (!this.stylesheet) {
            return this;
        }

        var owner = this.stylesheet.ownerNode || this.stylesheet.owningElement /* IE */;
        document.getElementsByTagName('head')[0].removeChild(owner);
        this.stylesheet = null;
        return this;
    };

    /**
     * Add a stylesheet rule to the stylesheet.
     *
     * https://developer.mozilla.org/en-US/docs/DOM/CSSStyleSheet/insertRule
     *
     * Note that an array is needed for declarations and rules since ECMAScript does
     * not afford a predictable object iteration order and since CSS is 
     * order-dependent (i.e., it is cascading); those without need of
     * cascading rules could build a more accessor-friendly object-based API.
     * @param {Array} decls Accepts an array of JSON-encoded declarations
     * @example
        creator.addRules([
          ['h2', // Also accepts a second argument as an array of arrays instead
            ['color', 'red'],
            ['background-color', 'green', true] // 'true' for !important rules 
          ], 
          ['.myClass', 
            ['background-color', 'yellow']
          ]
        ]);
     */
    root.CSSCreator.prototype.addRules = function (decls) {
        var rules = this.rules;
        for (var i = 0, dl = decls.length; i < dl; i++) {
            var j = 1,
                decl = decls[i],
                selector = decl[0],
                rulesStr = '';
            if (Object.prototype.toString.call(decl[1][0]) === '[object Array]') {
                decl = decl[1];
                j = 0;
            }
            for (var rl = decl.length; j < rl; j++) {
                var rule = decl[j];
                if (!rule[1]) { continue; }

                rulesStr += rule[0] + ':' + rule[1] + (rule[2] ? ' !important' : '') + ';\n';
            }
            if (rulesStr) {
                rules.push({
                    selector: selector,
                    declarations: rulesStr
                });
            }
        }
        this.rules = rules;
        if (this.stylesheet) {
            addRulesToSheet(this.rules, this.stylesheet);
        }
        return this;
    };
    
    /**
     * Remove all css rules from stylesheet.
     */
    root.CSSCreator.prototype.clear = function() {
        this.rules = [];
        
        if (this.stylesheet) {
            removeRulesFromSheet(this.stylesheet);
        }

        return this;
    };
    
    /**
     * Replace css rules from another CSS Creator instance.
     * @param {CSSCreator} creator
     */
    root.CSSCreator.prototype.replace = function(creator) {
        this.clear();
        this.rules = creator.rules;
        if (this.stylesheet) {
            addRulesToSheet(this.rules, this.stylesheet);
        }
    };
    
    function addRulesToSheet(rules, sheet) {
        for (var i = 0, l = rules.length; i < l; i++) {
            var rule = rules[i];
            if (sheet.insertRule) {
                sheet.insertRule(rule.selector + '{' + rule.declarations + '}', sheet.cssRules.length);
            } else { /* IE */
                sheet.addRule(rule.selector, rule.declarations, -1);
            }
        }
    }
    
    function removeRulesFromSheet(sheet) {
        var rules = sheet.cssRules || sheet.rules;
        for (var i = 0, l = rules.length; i < l; i++) {
            if (sheet.deleteRule) {
                sheet.deleteRule(0);
            } else { /* IE */
                sheet.removeRule();
            }
        }
    }

}(this, this.document));