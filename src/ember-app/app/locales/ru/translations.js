import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s8',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s8',
          title: 'I s s8'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
