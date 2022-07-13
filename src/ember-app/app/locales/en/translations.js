import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS8ВидПоддержкиLForm from './forms/i-i-s-i-s-s8-вид-поддержки-l';
import IISISS8ПользовательLForm from './forms/i-i-s-i-s-s8-пользователь-l';
import IISISS8ФормаLForm from './forms/i-i-s-i-s-s8-форма-l';
import IISISS8ВидПоддержкиEForm from './forms/i-i-s-i-s-s8-вид-поддержки-e';
import IISISS8ПользовательEForm from './forms/i-i-s-i-s-s8-пользователь-e';
import IISISS8ФормаEForm from './forms/i-i-s-i-s-s8-форма-e';
import IISISS8ВидПоддержкиModel from './models/i-i-s-i-s-s8-вид-поддержки';
import IISISS8ПользовательModel from './models/i-i-s-i-s-s8-пользователь';
import IISISS8УсловиеModel from './models/i-i-s-i-s-s8-условие';
import IISISS8ФормаModel from './models/i-i-s-i-s-s8-форма';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s8-вид-поддержки': IISISS8ВидПоддержкиModel,
    'i-i-s-i-s-s8-пользователь': IISISS8ПользовательModel,
    'i-i-s-i-s-s8-условие': IISISS8УсловиеModel,
    'i-i-s-i-s-s8-форма': IISISS8ФормаModel
  },

  'application-name': 'I s s8',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s8',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s8',
          title: 'I s s8'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s8': {
          caption: 'ISS8',
          title: 'ISS8',
          'i-i-s-i-s-s8-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-i-s-s8-форма-l': {
            caption: 'Форма',
            title: ''
          },
          'i-i-s-i-s-s8-вид-поддержки-l': {
            caption: 'Вид поддержки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s8-вид-поддержки-l': IISISS8ВидПоддержкиLForm,
    'i-i-s-i-s-s8-пользователь-l': IISISS8ПользовательLForm,
    'i-i-s-i-s-s8-форма-l': IISISS8ФормаLForm,
    'i-i-s-i-s-s8-вид-поддержки-e': IISISS8ВидПоддержкиEForm,
    'i-i-s-i-s-s8-пользователь-e': IISISS8ПользовательEForm,
    'i-i-s-i-s-s8-форма-e': IISISS8ФормаEForm
  },

});

export default translations;
