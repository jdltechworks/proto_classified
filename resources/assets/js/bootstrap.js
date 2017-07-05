import _ from 'lodash'

var default_headers = new Headers()

const csrfToken = document.getElementsByName('csrf-token')[0].content

default_headers.append('X-CSRF-TOKEN', csrfToken)
default_headers.append('X-Requested-With', 'XMLHttpRequest')

window.Laravel = {}

window.Laravel.csrfToken = csrfToken
window.Laravel.RequestHeaders = default_headers