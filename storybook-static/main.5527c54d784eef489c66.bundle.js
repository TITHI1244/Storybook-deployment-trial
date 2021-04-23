(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1042: function (module, exports) {},
    1053: function (module, exports) {},
    1115: function (module, exports) {},
    1158: function (module, exports) {},
    1179: function (module, exports) {},
    1232: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(640);
    },
    181: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Button;
      });
      var C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          933,
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        Button =
          (__webpack_require__(2021),
          function Button(_ref) {
            var primary = _ref.primary,
              backgroundColor = _ref.backgroundColor,
              size = _ref.size,
              label = _ref.label,
              props = Object(
                C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.a,
              )(_ref, ['primary', 'backgroundColor', 'size', 'label']),
              mode = primary
                ? 'storybook-button--primary'
                : 'storybook-button--secondary';
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'button',
              Object.assign(
                {
                  type: 'button',
                  className: [
                    'storybook-button',
                    'storybook-button--'.concat(size),
                    mode,
                  ].join(' '),
                  style: backgroundColor && {
                    backgroundColor: backgroundColor,
                  },
                },
                props,
              ),
              label,
            );
          });
      (Button.defaultProps = {
        backgroundColor: null,
        primary: !1,
        size: 'medium',
        onClick: void 0,
      }),
        (Button.__docgenInfo = {
          description: 'Primary UI component for user interaction',
          methods: [],
          displayName: 'Button',
          props: {
            backgroundColor: {
              defaultValue: { value: 'null', computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'What background color to use',
            },
            primary: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: 'Is this the principal call to action on the page?',
            },
            size: {
              defaultValue: { value: "'medium'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'small'", computed: !1 },
                  { value: "'medium'", computed: !1 },
                  { value: "'large'", computed: !1 },
                ],
              },
              required: !1,
              description: 'How large should the button be?',
            },
            onClick: {
              defaultValue: { value: 'undefined', computed: !0 },
              type: { name: 'func' },
              required: !1,
              description: 'Optional click handler',
            },
            label: {
              type: { name: 'string' },
              required: !0,
              description: 'Button contents',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\stories\\Button.js'] = {
            name: 'Button',
            docgenInfo: Button.__docgenInfo,
            path: 'src\\stories\\Button.js',
          });
    },
    1982: function (module, exports, __webpack_require__) {
      'use strict';
      var _clientApi = __webpack_require__(44),
        _clientLogger = __webpack_require__(29),
        _configFilename = __webpack_require__(1983);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      (_configFilename.args || _configFilename.argTypes) &&
        _clientLogger.logger.warn(
          'Invalid args/argTypes in config, ignoring.',
          JSON.stringify({
            args: _configFilename.args,
            argTypes: _configFilename.argTypes,
          }),
        ),
        _configFilename.decorators &&
          _configFilename.decorators.forEach(function (decorator) {
            return (0, _clientApi.addDecorator)(decorator, !1);
          }),
        _configFilename.loaders &&
          _configFilename.loaders.forEach(function (loader) {
            return (0, _clientApi.addLoader)(loader, !1);
          }),
        (_configFilename.parameters ||
          _configFilename.globals ||
          _configFilename.globalTypes) &&
          (0, _clientApi.addParameters)(
            _objectSpread(
              _objectSpread({}, _configFilename.parameters),
              {},
              {
                globals: _configFilename.globals,
                globalTypes: _configFilename.globalTypes,
              },
            ),
            !1,
          ),
        _configFilename.argTypesEnhancers &&
          _configFilename.argTypesEnhancers.forEach(function (enhancer) {
            return (0, _clientApi.addArgTypesEnhancer)(enhancer);
          });
    },
    1983: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'parameters', function () {
          return parameters;
        });
      var parameters = {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
          matchers: { color: /(background|color)$/i, date: /Date$/ },
        },
      };
    },
    1984: function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__(640).configure)(
          [__webpack_require__(1985), __webpack_require__(1987)],
          module,
          !1,
        );
      }.call(this, __webpack_require__(105)(module)));
    },
    1985: function (module, exports, __webpack_require__) {
      var map = { './stories/Introduction.stories.mdx': 1986 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1985);
    },
    1986: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(0);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          361,
        ),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          923,
        ),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          924,
        ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _assets_colors_svg__WEBPACK_IMPORTED_MODULE_4__,
        ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          925,
        ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _assets_comments_svg__WEBPACK_IMPORTED_MODULE_5__,
        ),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          926,
        ),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _assets_direction_svg__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          927,
        ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _assets_flow_svg__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          928,
        ),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_8__,
        ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          929,
        ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          _assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__,
        ),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          930,
        ),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_10__,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(
            _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b,
          )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.b, {
            title: 'Example/Introduction',
            mdxType: 'Meta',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'style',
            null,
            "\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            { id: 'welcome-to-storybook' },
            'Welcome to Storybook',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'strong',
              { parentName: 'p' },
              'stories',
            ),
            ' to revisit during development, testing, or QA.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              { parentName: 'p' },
              'src/stories',
            ),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'strong',
                { parentName: 'a' },
                'component-driven',
              ),
            ),
            ' process starting with atomic components and ending with pages.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'div',
            { className: 'subheading' },
            'Configure',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/addons/addon-types',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('img', {
                src: _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
                alt: 'plugin',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  'strong',
                  null,
                  'Presets for popular tools',
                ),
                'Easy setup for TypeScript, SCSS and more.',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/webpack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('img', {
                src:
                  _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
                alt: 'Build',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  'strong',
                  null,
                  'Build configuration',
                ),
                'How to customize webpack and Babel',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                className: 'link-item',
                href:
                  'https://storybook.js.org/docs/react/configure/styling-and-css',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('img', {
                src: _assets_colors_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
                alt: 'colors',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  'strong',
                  null,
                  'Styling',
                ),
                'How to load and configure CSS libraries',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                className: 'link-item',
                href:
                  'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('img', {
                src: _assets_flow_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                alt: 'flow',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  'strong',
                  null,
                  'Data',
                ),
                'Providers and mocking for data libraries',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'div',
            { className: 'subheading' },
            'Learn',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('img', {
                src: _assets_repo_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
                alt: 'repo',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  'strong',
                  null,
                  'Storybook documentation',
                ),
                'Configure, customize, and extend',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/tutorials/',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('img', {
                src:
                  _assets_direction_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
                alt: 'direction',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  'strong',
                  null,
                  'In-depth guides',
                ),
                'Best practices from leading teams',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://github.com/storybookjs/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('img', {
                src:
                  _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
                alt: 'code',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  'strong',
                  null,
                  'GitHub project',
                ),
                'View the source and add issues',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://discord.gg/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('img', {
                src:
                  _assets_comments_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
                alt: 'comments',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  'strong',
                  null,
                  'Discord chat',
                ),
                'Chat with maintainers and the community',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'div',
            { className: 'tip-wrapper' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'span',
              { className: 'tip' },
              'Tip',
            ),
            'Edit the Markdown in',
            ' ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              null,
              'src/stories/Introduction.stories.mdx',
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const __page = () => {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      const componentMeta = {
          title: 'Example/Introduction',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1987: function (module, exports, __webpack_require__) {
      var map = {
        './client/components/Forms/Forms.stories.js': 1988,
        './client/components/HomeDescription/HomeDescription.stories.js': 2032,
        './client/components/JobCard/JobCard.stories.js': 2033,
        './client/components/ProgressBar.components/ProgressBar.stories.js': 2034,
        './client/components/ResultJobFeatures/ResultJobFeatures.stories.js': 2035,
        './client/components/SampleComponent/SampleComponent.stories.js': 2036,
        './client/containers/ResetPassword/ResetPassword.stories.js': 2027,
        './stories/Button.stories.js': 2020,
        './stories/Header.stories.js': 363,
        './stories/Page.stories.js': 2037,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1987);
    },
    1988: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Component', function () {
          return Component;
        });
      var C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          36,
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _ResetPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(362);
      __webpack_exports__.default = {
        title: 'Components / Registration forms',
      };
      var Component = function Component() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ResetPassword__WEBPACK_IMPORTED_MODULE_2__.a,
          null,
        );
      };
      (Component.parameters = Object(
        C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
      )(
        { storySource: { source: '() => <ResetPassword />' } },
        Component.parameters,
      )),
        (Component.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Component',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\components\\Forms\\Forms.stories.js'
          ] = {
            name: 'Component',
            docgenInfo: Component.__docgenInfo,
            path: 'src\\client\\components\\Forms\\Forms.stories.js',
          });
    },
    1989: function (module, exports, __webpack_require__) {},
    1990: function (module, exports, __webpack_require__) {},
    1991: function (module, exports, __webpack_require__) {},
    1992: function (module, exports, __webpack_require__) {},
    2002: function (module, exports, __webpack_require__) {},
    2020: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Secondary', function () {
          return Secondary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large;
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small;
        });
      var C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          36,
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(181);
      __webpack_exports__.default = {
        title: 'Example/Button',
        component: _Button__WEBPACK_IMPORTED_MODULE_2__.a,
        argTypes: { backgroundColor: { control: 'color' } },
      };
      var Template = function Template(args) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Button__WEBPACK_IMPORTED_MODULE_2__.a,
            args,
          );
        },
        Primary = Template.bind({});
      Primary.args = { primary: !0, label: 'Button' };
      var Secondary = Template.bind({});
      Secondary.args = { label: 'Button' };
      var Large = Template.bind({});
      Large.args = { size: 'large', label: 'Button' };
      var Small = Template.bind({});
      (Small.args = { size: 'small', label: 'Button' }),
        (Primary.parameters = Object(
          C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
        )(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Primary.parameters,
        )),
        (Secondary.parameters = Object(
          C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
        )(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Secondary.parameters,
        )),
        (Large.parameters = Object(
          C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
        )(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Large.parameters,
        )),
        (Small.parameters = Object(
          C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
        )(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Small.parameters,
        ));
    },
    2021: function (module, exports, __webpack_require__) {},
    2022: function (module, exports, __webpack_require__) {},
    2023: function (module, exports, __webpack_require__) {},
    2027: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Component', function () {
          return ResetPassword_stories_Component;
        });
      var objectSpread2 = __webpack_require__(36),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        regenerator = __webpack_require__(119),
        regenerator_default = __webpack_require__.n(regenerator),
        asyncToGenerator = __webpack_require__(209),
        slicedToArray = __webpack_require__(80),
        ResetPassword = __webpack_require__(362);
      function Loader() {
        return react_default.a.createElement('div', null, 'Loading...');
      }
      function handleAuthErrors(_ref) {
        var code = _ref.code,
          message = _ref.message;
        switch (code) {
          case FIREBASE_ERROR_CODES.WRONG_PASSWORD:
            return alert('Wrong password.');
          case FIREBASE_ERROR_CODES.WEAK_PASSWORD:
            return alert('Your password is too weak.');
          case FIREBASE_ERROR_CODES.INVALID_EMAIL:
          case FIREBASE_ERROR_CODES.USER_NOT_FOUND:
          default:
            return alert(message);
        }
      }
      (Loader.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Loader',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\components\\Loader\\index.js'
          ] = {
            name: 'Loader',
            docgenInfo: Loader.__docgenInfo,
            path: 'src\\client\\components\\Loader\\index.js',
          });
      var FIREBASE_ERROR_CODES = {
        WEAK_PASSWORD: 'auth/weak-password',
        WRONG_PASSWORD: 'auth/wrong-password',
        INVALID_EMAIL: 'auth/invalid-email',
        USER_NOT_FOUND: 'auth/user-not-found',
      };
      function _signIn() {
        return (_signIn = Object(asyncToGenerator.a)(
          regenerator_default.a.mark(function _callee(auth, _ref2) {
            var email, password;
            return regenerator_default.a.wrap(
              function _callee$(_context) {
                for (;;)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      return (
                        (email = _ref2.email),
                        (password = _ref2.password),
                        (_context.prev = 1),
                        (_context.next = 4),
                        auth.signInWithEmailAndPassword(email, password)
                      );
                    case 4:
                      _context.next = 9;
                      break;
                    case 6:
                      (_context.prev = 6),
                        (_context.t0 = _context.catch(1)),
                        handleAuthErrors(_context.t0);
                    case 9:
                    case 'end':
                      return _context.stop();
                  }
              },
              _callee,
              null,
              [[1, 6]],
            );
          }),
        )).apply(this, arguments);
      }
      function _signUp() {
        return (_signUp = Object(asyncToGenerator.a)(
          regenerator_default.a.mark(function _callee2(auth, _ref3) {
            var email, password;
            return regenerator_default.a.wrap(
              function _callee2$(_context2) {
                for (;;)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      return (
                        (email = _ref3.email),
                        (password = _ref3.password),
                        (_context2.prev = 1),
                        (_context2.next = 4),
                        auth.createUserWithEmailAndPassword(email, password)
                      );
                    case 4:
                      return _context2.abrupt('return', !0);
                    case 7:
                      (_context2.prev = 7),
                        (_context2.t0 = _context2.catch(1)),
                        handleAuthErrors(_context2.t0);
                    case 10:
                    case 'end':
                      return _context2.stop();
                  }
              },
              _callee2,
              null,
              [[1, 7]],
            );
          }),
        )).apply(this, arguments);
      }
      function _resetPassword() {
        return (_resetPassword = Object(asyncToGenerator.a)(
          regenerator_default.a.mark(function _callee3(auth, _ref4) {
            var email;
            return regenerator_default.a.wrap(
              function _callee3$(_context3) {
                for (;;)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      return (
                        (email = _ref4.email),
                        (_context3.prev = 1),
                        (_context3.next = 4),
                        auth.sendPasswordResetEmail(email)
                      );
                    case 4:
                      alert('Password Reset Email Sent!'),
                        (_context3.next = 10);
                      break;
                    case 7:
                      (_context3.prev = 7),
                        (_context3.t0 = _context3.catch(1)),
                        handleAuthErrors(_context3.t0);
                    case 10:
                    case 'end':
                      return _context3.stop();
                  }
              },
              _callee3,
              null,
              [[1, 7]],
            );
          }),
        )).apply(this, arguments);
      }
      var index_cjs = __webpack_require__(210),
        configuration =
          (__webpack_require__(2015),
          __webpack_require__(2016),
          __webpack_require__(2017),
          __webpack_require__(2018),
          __webpack_require__(2019),
          {
            apiKey: '[YOUR CONFIG HERE]',
            authDomain: '[YOUR CONFIG HERE]',
            databaseURL: '[YOUR CONFIG HERE]',
            messagingSenderId: '[YOUR CONFIG HERE]',
            projectId: '[YOUR CONFIG HERE]',
            storageBucket: '[YOUR CONFIG HERE]',
          });
      var FirebaseContext = Object(react.createContext)();
      function FirebaseProvider(_ref) {
        var children = _ref.children,
          initialAuth = _ref.initialAuth,
          _useState = Object(react.useState)(initialAuth),
          _useState2 = Object(slicedToArray.a)(_useState, 2),
          auth = _useState2[0],
          setAuth = _useState2[1];
        Object(react.useEffect)(
          function () {
            if (!auth)
              try {
                var r = (function initFirebase() {
                  index_cjs.apps.length ||
                    index_cjs.initializeApp(configuration);
                  var auth = index_cjs.auth(),
                    db = index_cjs.database(),
                    firestore = index_cjs.firestore();
                  return (
                    'localhost' === window.location.hostname &&
                      firestore.settings({ host: 'localhost:8080', ssl: !1 }),
                    { auth: auth, db: db, firestore: firestore }
                  );
                })();
                setAuth(r.auth);
              } catch (e) {
                console.error(
                  'Unable to initialize firebase, check console for errors',
                  e,
                );
              }
          },
          [auth],
        );
        var value = Object(react.useMemo)(
          function () {
            return {
              auth: auth,
              isInitialized: !!auth,
              signIn: function signIn(data) {
                return (function auth_signIn(_x, _x2) {
                  return _signIn.apply(this, arguments);
                })(auth, data);
              },
              signUp: function signUp(data) {
                return (function auth_signUp(_x3, _x4) {
                  return _signUp.apply(this, arguments);
                })(auth, data);
              },
              signOut: function signOut() {
                return (function auth_signOut(auth) {
                  auth.signOut();
                })(auth);
              },
              resetPassword: function resetPassword(data) {
                return (function auth_resetPassword(_x5, _x6) {
                  return _resetPassword.apply(this, arguments);
                })(auth, data);
              },
            };
          },
          [auth],
        );
        return react_default.a.createElement(
          FirebaseContext.Provider,
          { value: value },
          children,
        );
      }
      function ResetPasswordContainer() {
        var _useState = Object(react.useState)(!1),
          _useState2 = Object(slicedToArray.a)(_useState, 2),
          isLoading = _useState2[0],
          setIsLoading = _useState2[1],
          resetPassword = (function useFirebase() {
            var firebase = Object(react.useContext)(FirebaseContext);
            if (!firebase)
              throw new Error('This component must be under FirebaseProvider');
            return firebase;
          })().resetPassword,
          onSubmit = (function () {
            var _ref = Object(asyncToGenerator.a)(
              regenerator_default.a.mark(function _callee(_ref2) {
                var email;
                return regenerator_default.a.wrap(function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return (
                          (email = _ref2.email),
                          setIsLoading(!0),
                          (_context.next = 4),
                          resetPassword({ email: email })
                        );
                      case 4:
                        setIsLoading(!1);
                      case 5:
                      case 'end':
                        return _context.stop();
                    }
                }, _callee);
              }),
            );
            return function onSubmit(_x) {
              return _ref.apply(this, arguments);
            };
          })();
        return isLoading
          ? react_default.a.createElement(Loader, null)
          : react_default.a.createElement(ResetPassword.a, {
              onSubmit: onSubmit,
            });
      }
      (FirebaseProvider.defaultProps = { initialAuth: null }),
        (FirebaseProvider.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'FirebaseProvider',
          props: {
            initialAuth: {
              defaultValue: { value: 'null', computed: !1 },
              type: { name: 'object' },
              required: !1,
              description: '',
            },
            children: { type: { name: 'node' }, required: !0, description: '' },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\firebase\\FirebaseContext.js'
          ] = {
            name: 'FirebaseProvider',
            docgenInfo: FirebaseProvider.__docgenInfo,
            path: 'src\\client\\firebase\\FirebaseContext.js',
          }),
        (ResetPasswordContainer.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ResetPasswordContainer',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\containers\\ResetPassword\\index.js'
          ] = {
            name: 'ResetPasswordContainer',
            docgenInfo: ResetPasswordContainer.__docgenInfo,
            path: 'src\\client\\containers\\ResetPassword\\index.js',
          });
      __webpack_exports__.default = { title: 'Containers / Reset password' };
      var ResetPassword_stories_Component = function Component() {
        return react_default.a.createElement(
          react_default.a.Fragment,
          null,
          react_default.a.createElement(ResetPasswordContainer, null),
        );
      };
      (ResetPassword_stories_Component.parameters = Object(objectSpread2.a)(
        {
          storySource: {
            source: '() => (\n  <>\n    <ResetPassword />\n  </>\n)',
          },
        },
        ResetPassword_stories_Component.parameters,
      )),
        (ResetPassword_stories_Component.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Component',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\containers\\ResetPassword\\ResetPassword.stories.js'
          ] = {
            name: 'Component',
            docgenInfo: ResetPassword_stories_Component.__docgenInfo,
            path:
              'src\\client\\containers\\ResetPassword\\ResetPassword.stories.js',
          });
    },
    2032: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'component', function () {
          return HomeDescription_stories_component;
        });
      var objectSpread2 = __webpack_require__(36),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react);
      __webpack_require__(1989);
      function HomeDescription() {
        return react_default.a.createElement(
          'div',
          { className: 'home-description' },
          react_default.a.createElement(
            'p',
            { className: 'home-description-upper' },
            react_default.a.createElement('strong', null, 'GuideIT '),
            'is a tool created to help newcomers find their professional way in Denmark.',
          ),
          react_default.a.createElement(
            'p',
            { className: 'home-description-lower' },
            'Are you looking for/to:',
          ),
        );
      }
      (HomeDescription.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'HomeDescription',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\components\\HomeDescription\\HomeDescription.js'
          ] = {
            name: 'HomeDescription',
            docgenInfo: HomeDescription.__docgenInfo,
            path:
              'src\\client\\components\\HomeDescription\\HomeDescription.js',
          });
      __webpack_exports__.default = {
        title: 'Components /Home description card',
        component: HomeDescription,
      };
      var HomeDescription_stories_component = function component() {
        return react_default.a.createElement(HomeDescription, null);
      };
      (HomeDescription_stories_component.parameters = Object(objectSpread2.a)(
        { storySource: { source: '() => <HomeDescription />' } },
        HomeDescription_stories_component.parameters,
      )),
        (HomeDescription_stories_component.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'component',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\components\\HomeDescription\\HomeDescription.stories.js'
          ] = {
            name: 'component',
            docgenInfo: HomeDescription_stories_component.__docgenInfo,
            path:
              'src\\client\\components\\HomeDescription\\HomeDescription.stories.js',
          });
    },
    2033: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'jobCard', function () {
          return jobCard;
        });
      var objectSpread2 = __webpack_require__(36),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react);
      __webpack_require__(1990);
      function JobCard(_ref) {
        var title = _ref.title,
          content = _ref.content;
        return react_default.a.createElement(
          'div',
          { className: 'job-card-container' },
          react_default.a.createElement('h1', null, title),
          react_default.a.createElement('p', null, content),
        );
      }
      (JobCard.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'JobCard',
        props: {
          title: { type: { name: 'string' }, required: !0, description: '' },
          content: { type: { name: 'string' }, required: !0, description: '' },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\components\\JobCard\\JobCard.js'
          ] = {
            name: 'JobCard',
            docgenInfo: JobCard.__docgenInfo,
            path: 'src\\client\\components\\JobCard\\JobCard.js',
          });
      __webpack_exports__.default = {
        title: 'Components /Job Card',
        component: JobCard,
        argTypes: { title: 'text', content: 'text' },
      };
      var jobCard = function Template(_ref) {
        var title = _ref.title,
          content = _ref.content;
        return react_default.a.createElement(JobCard, {
          title: title,
          content: content,
        });
      }.bind({});
      (jobCard.args = { title: 'Job title', content: 'content' }),
        (jobCard.parameters = Object(objectSpread2.a)(
          {
            storySource: {
              source:
                '({ title, content }) => (\n  <JobCard title={title} content={content} />\n)',
            },
          },
          jobCard.parameters,
        ));
    },
    2034: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Progress', function () {
          return Progress;
        });
      var objectSpread2 = __webpack_require__(36),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        ProgressBar_ProgressBar =
          (__webpack_require__(1991),
          function ProgressBar(_ref) {
            var level = _ref.level,
              backgroundColor = _ref.backgroundColor,
              alphaLevel = _ref.alphaLevel;
            return react_default.a.createElement(
              'div',
              { className: 'progress' },
              react_default.a.createElement(
                'span',
                {
                  className: 'progress-status',
                  style: { width: ''.concat(level, '%') },
                },
                react_default.a.createElement(
                  'span',
                  { className: 'progress-text' },
                  'PROGRESS',
                ),
              ),
              react_default.a.createElement('span', {
                style: {
                  width: ''.concat(100 - level, '%'),
                  height: 'inherit',
                  backgroundColor: ''.concat(backgroundColor),
                  opacity: ''.concat(alphaLevel),
                },
              }),
            );
          });
      (ProgressBar_ProgressBar.defaultProps = {
        level: '20',
        backgroundColor: 'red',
        alphaLevel: '0.5',
      }),
        (ProgressBar_ProgressBar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ProgressBar',
          props: {
            level: {
              defaultValue: { value: "'20'", computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: '',
            },
            backgroundColor: {
              defaultValue: { value: "'red'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            alphaLevel: {
              defaultValue: { value: "'0.5'", computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: '',
            },
          },
        });
      var components_ProgressBar_components_ProgressBar = ProgressBar_ProgressBar;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES[
          'src\\client\\components\\ProgressBar.components\\ProgressBar.js'
        ] = {
          name: 'ProgressBar',
          docgenInfo: ProgressBar_ProgressBar.__docgenInfo,
          path:
            'src\\client\\components\\ProgressBar.components\\ProgressBar.js',
        });
      __webpack_exports__.default = {
        title: 'ProgressBar',
        component: components_ProgressBar_components_ProgressBar,
        argTypes: {
          level: { control: { type: 'range', min: 0, max: 100, step: 1 } },
          backgroundColor: { control: { type: 'color' } },
          alphaLevel: {
            control: { type: 'range', min: 0, max: 1, step: 0.01 },
          },
        },
      };
      var Progress = function Template(_ref) {
        var level = _ref.level,
          backgroundColor = _ref.backgroundColor,
          alphaLevel = _ref.alphaLevel;
        return react_default.a.createElement(
          components_ProgressBar_components_ProgressBar,
          {
            level: level,
            backgroundColor: backgroundColor,
            alphaLevel: alphaLevel,
          },
        );
      }.bind({});
      (Progress.args = {
        level: '20',
        backgroundColor: 'red',
        alphaLevel: '0.5',
      }),
        (Progress.parameters = Object(objectSpread2.a)(
          {
            storySource: {
              source:
                '({ level, backgroundColor, alphaLevel }) => {\n  return (\n    <ProgressBar\n      level={level}\n      backgroundColor={backgroundColor}\n      alphaLevel={alphaLevel}\n    />\n  );\n}',
            },
          },
          Progress.parameters,
        ));
    },
    2035: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'JobFeatures', function () {
          return JobFeatures;
        });
      var objectSpread2 = __webpack_require__(36),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        slicedToArray = __webpack_require__(80),
        hyf_logo = (__webpack_require__(1992), __webpack_require__(931)),
        hyf_logo_default = __webpack_require__.n(hyf_logo),
        redi_logo = __webpack_require__(563),
        redi_logo_default = __webpack_require__.n(redi_logo),
        array = [
          {
            jobTitle: 'Full stack developer',
            branch: 'Full stack development',
            school: 'HYF school',
            webSite: 'https://www.hackyourfuture.dk/',
            logoPath: hyf_logo_default.a,
            links: ['https://www.youtube.com/watch?v=9GHtSbRX3dY'],
            skills: {
              title:
                'Full stack developer needs to have a following skill set:',
              ts: {
                title: '-Technical skills',
                skills:
                  '(HTML/CSS;Javascript;Git;Backend Languages:C#,Python,Ruby;Web Architecture;Databases)',
              },
              ss: {
                title: '-Soft skills',
                skills: '(critical thinking, detailed analysis, creativity)',
              },
            },
          },
          {
            jobTitle: 'Data analyst',
            branch: 'Data analysis',
            school: 'ReDI school',
            webSite: 'https://www.redi-school.org/',
            logoPath: redi_logo_default.a,
            links: ['https://www.youtube.com/watch?v=EeSvvtwdyDo'],
            skills: {
              title: 'Data analyst needs to have a following skill set:',
              ts: {
                title: '-Technical skills',
                skills:
                  '(high level of mathematical ability;the ability to analyze, model and interpret data;accuracy and attention to detail)',
              },
              ss: {
                title: '-Soft skills',
                skills: '(critical thinking, communication and teamwork)',
              },
            },
          },
          {
            jobTitle: 'UX designer',
            branch: 'UX design',
            school: 'ReDI school',
            webSite: 'https://www.redi-school.org/',
            logoPath: redi_logo_default.a,
            links: [
              'https://www.youtube.com/watch?v=O3EtKPG4OWE',
              'https://www.youtube.com/watch?v=ORZlHuD22UQ',
            ],
            skills: {
              title: 'UX designers need to have a very diverse skill set:',
              ts: {
                title: '-Technical and design skills',
                skills: '(wireframing, prototyping, interpreting data)',
              },
              ss: {
                title: '-Soft skills',
                skills: '(adaptability, communication, empathy and teamwork)',
              },
            },
          },
        ];
      function ResultJobFeatures(_ref) {
        var branchTitle = _ref.branchTitle,
          _useState = Object(react.useState)('none'),
          _useState2 = Object(slicedToArray.a)(_useState, 2),
          firstStyle = _useState2[0],
          setFirstStyle = _useState2[1],
          _useState3 = Object(react.useState)('none'),
          _useState4 = Object(slicedToArray.a)(_useState3, 2),
          secondStyle = _useState4[0],
          setSecondStyle = _useState4[1],
          _useState5 = Object(react.useState)('none'),
          _useState6 = Object(slicedToArray.a)(_useState5, 2),
          thirdStyle = _useState6[0],
          setThirdStyle = _useState6[1],
          _useState7 = Object(react.useState)('0deg'),
          _useState8 = Object(slicedToArray.a)(_useState7, 2),
          firstRotate = _useState8[0],
          setFirstRotate = _useState8[1],
          _useState9 = Object(react.useState)('0deg'),
          _useState10 = Object(slicedToArray.a)(_useState9, 2),
          secondRotate = _useState10[0],
          setSecondRotate = _useState10[1],
          _useState11 = Object(react.useState)('0deg'),
          _useState12 = Object(slicedToArray.a)(_useState11, 2),
          thirdRotate = _useState12[0],
          setThirdRotate = _useState12[1],
          result = [],
          selectedObject = array.filter(function (item) {
            return item.branch.toLowerCase() === branchTitle.toLowerCase();
          });
        selectedObject.length >= 1
          ? (result = Object(slicedToArray.a)(selectedObject, 1)[0])
          : (result = array[0]);
        var _result = result,
          jobTitle = _result.jobTitle,
          branch = _result.branch,
          school = _result.school,
          logoPath = _result.logoPath,
          links = _result.links,
          skills = _result.skills,
          webSite = _result.webSite,
          handleFirstClick = function handleFirstClick() {
            setFirstStyle('none' === firstStyle ? 'block' : 'none'),
              setSecondStyle('none'),
              setThirdStyle('none'),
              setFirstRotate('0deg' === firstRotate ? '90deg' : '0deg'),
              setSecondRotate('0deg'),
              setThirdRotate('0deg');
          },
          handleSecondClick = function handleSecondClick() {
            setSecondStyle('none' === secondStyle ? 'block' : 'none'),
              setFirstStyle('none'),
              setThirdStyle('none'),
              setSecondRotate('0deg' === secondRotate ? '90deg' : '0deg'),
              setFirstRotate('0deg'),
              setThirdRotate('0deg');
          },
          handleThirdClick = function handleThirdClick() {
            setThirdStyle('none' === thirdStyle ? 'block' : 'none'),
              setFirstStyle('none'),
              setSecondStyle('none'),
              setThirdRotate('0deg' === thirdRotate ? '90deg' : '0deg'),
              setSecondRotate('0deg'),
              setFirstRotate('0deg');
          };
        return react_default.a.createElement(
          'ul',
          { className: 'job-features-container' },
          react_default.a.createElement(
            'li',
            null,
            react_default.a.createElement(
              'div',
              { className: 'bullet-point' },
              react_default.a.createElement('div', {
                className: 'left-triangle',
                style: { transform: 'rotate('.concat(firstRotate, ')') },
              }),
              react_default.a.createElement(
                'div',
                {
                  className: 'job-features-title',
                  role: 'button',
                  tabIndex: 0,
                  onClick: function onClick() {
                    return handleFirstClick();
                  },
                  onKeyDown: function onKeyDown() {
                    return handleFirstClick();
                  },
                },
                'Become a '.concat(jobTitle),
              ),
            ),
            react_default.a.createElement(
              'div',
              {
                className: 'job-features-description',
                style: { display: firstStyle },
              },
              react_default.a.createElement(
                'p',
                null,
                ''
                  .concat(
                    school,
                    ' offers a course where you can learn basics of ',
                  )
                  .concat(branch, '.'),
              ),
              react_default.a.createElement(
                'div',
                { className: 'description-click-here' },
                react_default.a.createElement('p', null, 'Click here:'),
                react_default.a.createElement(
                  'div',
                  { className: 'job-features-logo-container' },
                  react_default.a.createElement(
                    'a',
                    {
                      href: webSite,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                    react_default.a.createElement('img', {
                      src: logoPath,
                      alt: ''.concat(school, ' logo'),
                    }),
                  ),
                ),
              ),
            ),
          ),
          react_default.a.createElement(
            'li',
            null,
            react_default.a.createElement(
              'div',
              { className: 'bullet-point' },
              react_default.a.createElement('div', {
                className: 'left-triangle',
                style: { transform: 'rotate('.concat(secondRotate, ')') },
              }),
              react_default.a.createElement(
                'div',
                {
                  className: 'job-features-title',
                  role: 'button',
                  tabIndex: 0,
                  onClick: function onClick() {
                    return handleSecondClick();
                  },
                  onKeyDown: function onKeyDown() {
                    return handleSecondClick();
                  },
                },
                'A day in the life of a '.concat(jobTitle),
              ),
            ),
            react_default.a.createElement(
              'div',
              {
                className: 'job-features-description',
                style: { display: secondStyle },
              },
              react_default.a.createElement(
                'p',
                null,
                'Interested in finding out what a '.concat(
                  jobTitle,
                  ' does and how it looks like to be one?',
                ),
              ),
              react_default.a.createElement(
                'div',
                { className: 'links-container' },
                links.map(function (link) {
                  return react_default.a.createElement(
                    'a',
                    { key: link, href: link },
                    link,
                  );
                }),
              ),
            ),
          ),
          react_default.a.createElement(
            'li',
            null,
            react_default.a.createElement(
              'div',
              { className: 'bullet-point' },
              react_default.a.createElement('div', {
                className: 'left-triangle',
                style: { transform: 'rotate('.concat(thirdRotate, ')') },
              }),
              react_default.a.createElement(
                'div',
                {
                  className: 'job-features-title',
                  role: 'button',
                  tabIndex: 0,
                  onClick: function onClick() {
                    return handleThirdClick();
                  },
                  onKeyDown: function onKeyDown() {
                    return handleThirdClick();
                  },
                },
                'Skills needed',
              ),
            ),
            react_default.a.createElement(
              'div',
              { className: 'skills-container', style: { display: thirdStyle } },
              react_default.a.createElement(
                'ul',
                null,
                react_default.a.createElement(
                  'li',
                  null,
                  react_default.a.createElement(
                    'p',
                    null,
                    ''.concat(skills.title),
                  ),
                ),
                react_default.a.createElement(
                  'li',
                  null,
                  react_default.a.createElement(
                    'b',
                    null,
                    skills.ts.title,
                    ' ',
                  ),
                  skills.ts.skills,
                ),
                react_default.a.createElement(
                  'li',
                  null,
                  react_default.a.createElement(
                    'b',
                    null,
                    skills.ss.title,
                    ' ',
                  ),
                  skills.ss.skills,
                ),
              ),
            ),
          ),
        );
      }
      (ResultJobFeatures.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'ResultJobFeatures',
        props: {
          branchTitle: {
            type: { name: 'string' },
            required: !0,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\components\\ResultJobFeatures\\ResultJobFeatures.js'
          ] = {
            name: 'ResultJobFeatures',
            docgenInfo: ResultJobFeatures.__docgenInfo,
            path:
              'src\\client\\components\\ResultJobFeatures\\ResultJobFeatures.js',
          });
      __webpack_exports__.default = {
        title: 'Components /Result Job Features',
        component: ResultJobFeatures,
        argTypes: {
          branchTitle: {
            name: 'Job branch',
            type: { name: 'string', required: !0 },
          },
        },
      };
      var JobFeatures = function Template(_ref) {
        var branchTitle = _ref.branchTitle;
        return react_default.a.createElement(ResultJobFeatures, {
          branchTitle: branchTitle,
        });
      }.bind({});
      (JobFeatures.args = { branchTitle: 'Full stack development' }),
        (JobFeatures.parameters = Object(objectSpread2.a)(
          {
            storySource: {
              source:
                '({ branchTitle }) => {\n  return <ResultJobFeatures branchTitle={branchTitle} />;\n}',
            },
          },
          JobFeatures.parameters,
        ));
    },
    2036: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Component', function () {
          return SampleComponent_stories_Component;
        });
      var objectSpread2 = __webpack_require__(36),
        dist = __webpack_require__(932),
        esm = __webpack_require__(180),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react);
      __webpack_require__(2002);
      function SampleComponent(_ref) {
        var title = _ref.title,
          onClick = _ref.onClick,
          children = _ref.children;
        return react_default.a.createElement(
          'div',
          { className: 'sample-component' },
          react_default.a.createElement('h2', null, title),
          react_default.a.createElement(
            'p',
            null,
            '(this is a sample component)',
          ),
          children,
          react_default.a.createElement(
            'button',
            { type: 'button', onClick: onClick },
            'Click me',
          ),
        );
      }
      (SampleComponent.defaultProps = { onClick: null, children: null }),
        (SampleComponent.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SampleComponent',
          props: {
            onClick: {
              defaultValue: { value: 'null', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: '',
            },
            children: {
              defaultValue: { value: 'null', computed: !1 },
              type: { name: 'node' },
              required: !1,
              description: '',
            },
            title: { type: { name: 'string' }, required: !0, description: '' },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\components\\SampleComponent\\SampleComponent.js'
          ] = {
            name: 'SampleComponent',
            docgenInfo: SampleComponent.__docgenInfo,
            path:
              'src\\client\\components\\SampleComponent\\SampleComponent.js',
          });
      __webpack_exports__.default = {
        title: 'Components / Sample Component',
        component: SampleComponent,
        argTypes: { onClick: { action: 'clicked' } },
        parameters: { actions: { argTypesRegex: '^on.*' } },
      };
      var SampleComponent_stories_Component = function Component() {
        return react_default.a.createElement(SampleComponent, {
          title: Object(dist.text)('Title', 'Test title'),
          onClick: Object(esm.action)('You have clicked the button'),
        });
      };
      (SampleComponent_stories_Component.parameters = Object(objectSpread2.a)(
        {
          storySource: {
            source:
              "() => (\n  <SampleComponent\n    title={text('Title', 'Test title')}\n    onClick={action('You have clicked the button')}\n  />\n)",
          },
        },
        SampleComponent_stories_Component.parameters,
      )),
        (SampleComponent_stories_Component.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Component',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\components\\SampleComponent\\SampleComponent.stories.js'
          ] = {
            name: 'Component',
            docgenInfo: SampleComponent_stories_Component.__docgenInfo,
            path:
              'src\\client\\components\\SampleComponent\\SampleComponent.stories.js',
          });
    },
    2037: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'LoggedIn', function () {
          return LoggedIn;
        }),
        __webpack_require__.d(__webpack_exports__, 'LoggedOut', function () {
          return LoggedOut;
        });
      var objectSpread2 = __webpack_require__(36),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Header = __webpack_require__(267),
        Page_Page =
          (__webpack_require__(2023),
          function Page(_ref) {
            var user = _ref.user,
              onLogin = _ref.onLogin,
              onLogout = _ref.onLogout,
              onCreateAccount = _ref.onCreateAccount;
            return react_default.a.createElement(
              'article',
              null,
              react_default.a.createElement(Header.a, {
                user: user,
                onLogin: onLogin,
                onLogout: onLogout,
                onCreateAccount: onCreateAccount,
              }),
              react_default.a.createElement(
                'section',
                null,
                react_default.a.createElement('h2', null, 'Pages in Storybook'),
                react_default.a.createElement(
                  'p',
                  null,
                  'We recommend building UIs with a',
                  ' ',
                  react_default.a.createElement(
                    'a',
                    {
                      href: 'https://componentdriven.org',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                    react_default.a.createElement(
                      'strong',
                      null,
                      'component-driven',
                    ),
                  ),
                  ' ',
                  'process starting with atomic components and ending with pages.',
                ),
                react_default.a.createElement(
                  'p',
                  null,
                  'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:',
                ),
                react_default.a.createElement(
                  'ul',
                  null,
                  react_default.a.createElement(
                    'li',
                    null,
                    'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories',
                  ),
                  react_default.a.createElement(
                    'li',
                    null,
                    'Assemble data in the page component from your services. You can mock these services out using Storybook.',
                  ),
                ),
                react_default.a.createElement(
                  'p',
                  null,
                  'Get a guided tutorial on component-driven development at',
                  ' ',
                  react_default.a.createElement(
                    'a',
                    {
                      href: 'https://storybook.js.org/tutorials/',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                    'Storybook tutorials',
                  ),
                  '. Read more in the',
                  ' ',
                  react_default.a.createElement(
                    'a',
                    {
                      href: 'https://storybook.js.org/docs',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                    'docs',
                  ),
                  '.',
                ),
                react_default.a.createElement(
                  'div',
                  { className: 'tip-wrapper' },
                  react_default.a.createElement(
                    'span',
                    { className: 'tip' },
                    'Tip',
                  ),
                  ' Adjust the width of the canvas with the',
                  ' ',
                  react_default.a.createElement(
                    'svg',
                    {
                      width: '10',
                      height: '10',
                      viewBox: '0 0 12 12',
                      xmlns: 'http://www.w3.org/2000/svg',
                    },
                    react_default.a.createElement(
                      'g',
                      { fill: 'none', fillRule: 'evenodd' },
                      react_default.a.createElement('path', {
                        d:
                          'M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z',
                        id: 'a',
                        fill: '#999',
                      }),
                    ),
                  ),
                  'Viewports addon in the toolbar',
                ),
              ),
            );
          });
      (Page_Page.defaultProps = { user: null }),
        (Page_Page.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Page',
          props: {
            user: {
              defaultValue: { value: 'null', computed: !1 },
              type: { name: 'shape', value: {} },
              required: !1,
              description: '',
            },
            onLogin: { type: { name: 'func' }, required: !0, description: '' },
            onLogout: { type: { name: 'func' }, required: !0, description: '' },
            onCreateAccount: {
              type: { name: 'func' },
              required: !0,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\stories\\Page.js'] = {
            name: 'Page',
            docgenInfo: Page_Page.__docgenInfo,
            path: 'src\\stories\\Page.js',
          });
      var Header_stories = __webpack_require__(363),
        Page_stories_Template =
          ((__webpack_exports__.default = {
            title: 'Example/Page',
            component: Page_Page,
          }),
          function Template(args) {
            return react_default.a.createElement(Page_Page, args);
          }),
        LoggedIn = Page_stories_Template.bind({});
      LoggedIn.args = Object(objectSpread2.a)({}, Header_stories.LoggedIn.args);
      var LoggedOut = Page_stories_Template.bind({});
      (LoggedOut.args = Object(objectSpread2.a)(
        {},
        Header_stories.LoggedOut.args,
      )),
        (LoggedIn.parameters = Object(objectSpread2.a)(
          { storySource: { source: '(args) => <Page {...args} />' } },
          LoggedIn.parameters,
        )),
        (LoggedOut.parameters = Object(objectSpread2.a)(
          { storySource: { source: '(args) => <Page {...args} />' } },
          LoggedOut.parameters,
        ));
    },
    267: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Header;
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(181),
        Header =
          (__webpack_require__(2022),
          function Header(_ref) {
            var user = _ref.user,
              onLogin = _ref.onLogin,
              onLogout = _ref.onLogout,
              onCreateAccount = _ref.onCreateAccount;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'header',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'wrapper' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'svg',
                    {
                      width: '32',
                      height: '32',
                      viewBox: '0 0 32 32',
                      xmlns: 'http://www.w3.org/2000/svg',
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'g',
                      { fill: 'none', fillRule: 'evenodd' },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'path',
                        {
                          d:
                            'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
                          fill: '#FFF',
                        },
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'path',
                        {
                          d:
                            'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
                          fill: '#555AB9',
                        },
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'path',
                        {
                          d:
                            'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
                          fill: '#91BAF8',
                        },
                      ),
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h1',
                    null,
                    'Acme',
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  user
                    ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                        { size: 'small', onClick: onLogout, label: 'Log out' },
                      )
                    : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                          { size: 'small', onClick: onLogin, label: 'Log in' },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                          {
                            primary: !0,
                            size: 'small',
                            onClick: onCreateAccount,
                            label: 'Sign up',
                          },
                        ),
                      ),
                ),
              ),
            );
          });
      (Header.defaultProps = { user: null }),
        (Header.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Header',
          props: {
            user: {
              defaultValue: { value: 'null', computed: !1 },
              type: { name: 'shape', value: {} },
              required: !1,
              description: '',
            },
            onLogin: { type: { name: 'func' }, required: !0, description: '' },
            onLogout: { type: { name: 'func' }, required: !0, description: '' },
            onCreateAccount: {
              type: { name: 'func' },
              required: !0,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\stories\\Header.js'] = {
            name: 'Header',
            docgenInfo: Header.__docgenInfo,
            path: 'src\\stories\\Header.js',
          });
    },
    362: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return ResetPassword;
      });
      var C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          80,
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
      function ResetPassword(_ref) {
        var onSubmit = _ref.onSubmit,
          _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
          _useState2 = Object(
            C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a,
          )(_useState, 2),
          email = _useState2[0],
          setEmail = _useState2[1];
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'form',
          {
            onSubmit: function handleSubmit(e) {
              e.preventDefault(), onSubmit({ email: email });
            },
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'label',
            { htmlFor: 'email' },
            'Email:',
            ' ',
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'input',
              {
                type: 'email',
                name: 'email',
                value: email,
                onChange: function handleEmailInput(e) {
                  return setEmail(e.target.value);
                },
                required: !0,
              },
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'button',
            { type: 'submit' },
            'Reset password',
          ),
        );
      }
      (ResetPassword.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'ResetPassword',
        props: {
          onSubmit: { type: { name: 'func' }, required: !0, description: '' },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\client\\components\\Forms\\ResetPassword.js'
          ] = {
            name: 'ResetPassword',
            docgenInfo: ResetPassword.__docgenInfo,
            path: 'src\\client\\components\\Forms\\ResetPassword.js',
          });
    },
    363: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'LoggedIn', function () {
          return LoggedIn;
        }),
        __webpack_require__.d(__webpack_exports__, 'LoggedOut', function () {
          return LoggedOut;
        });
      var C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          36,
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267);
      __webpack_exports__.default = {
        title: 'Example/Header',
        component: _Header__WEBPACK_IMPORTED_MODULE_2__.a,
      };
      var Template = function Template(args) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Header__WEBPACK_IMPORTED_MODULE_2__.a,
            args,
          );
        },
        LoggedIn = Template.bind({});
      LoggedIn.args = { user: {} };
      var LoggedOut = Template.bind({});
      (LoggedOut.args = {}),
        (LoggedIn.parameters = Object(
          C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
        )(
          { storySource: { source: '(args) => <Header {...args} />' } },
          LoggedIn.parameters,
        )),
        (LoggedOut.parameters = Object(
          C_Users_Chandra_Shekhar_Desktop_Storybook_deployment_trial_Storybook_deployment_trial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
        )(
          { storySource: { source: '(args) => <Header {...args} />' } },
          LoggedOut.parameters,
        ));
    },
    563: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/redi-logo.e85147ff.png';
    },
    923: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/code-brackets.d43eb968.svg';
    },
    924: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/colors.8104e6f5.svg';
    },
    925: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/comments.3f9a1398.svg';
    },
    926: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/direction.d3dc567b.svg';
    },
    927: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/flow.e3812c4f.svg';
    },
    928: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/plugin.5ba97e9b.svg';
    },
    929: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/repo.3452b916.svg';
    },
    930: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/stackalt.66f4b748.svg';
    },
    931: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/hyf-logo.e7eb3dbc.png';
    },
    936: function (module, exports, __webpack_require__) {
      __webpack_require__(937),
        __webpack_require__(1231),
        __webpack_require__(1232),
        __webpack_require__(1435),
        __webpack_require__(1751),
        __webpack_require__(1773),
        __webpack_require__(1820),
        __webpack_require__(1852),
        __webpack_require__(1946),
        __webpack_require__(1980),
        __webpack_require__(1982),
        (module.exports = __webpack_require__(1984));
    },
  },
  [[936, 1, 2]],
]);
//# sourceMappingURL=main.5527c54d784eef489c66.bundle.js.map
