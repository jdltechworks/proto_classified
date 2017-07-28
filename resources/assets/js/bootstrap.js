var default_headers = new Headers()

default_headers.append('X-CSRF-TOKEN', csrfToken)
default_headers.append('X-Requested-With', 'XMLHttpRequest')

window.Laravel = {}

window.Laravel.RequestHeaders = default_headers