!function(t){var e=t.django||(t.django={});e.pluralidx=function(t){return 0},e.catalog=e.catalog||{},e.jsi18n_initialized||(e.gettext=function(t){var n=e.catalog[t];return void 0===n?t:"string"==typeof n?n:n[0]},e.ngettext=function(t,n,r){var i=e.catalog[t];return void 0===i?1==r?t:n:i[e.pluralidx(r)]},e.gettext_noop=function(t){return t},e.pgettext=function(t,n){var r=e.gettext(t+""+n);return-1!=r.indexOf("")&&(r=n),r},e.npgettext=function(t,n,r,i){var o=e.ngettext(t+""+n,t+""+r,i);return-1!=o.indexOf("")&&(o=e.ngettext(n,r,i)),o},e.interpolate=function(t,e,n){return n?t.replace(/%\(\w+\)s/g,function(t){return String(e[t.slice(2,-2)])}):t.replace(/%s/g,function(t){return String(e.shift())})},e.formats={DATETIME_FORMAT:"j F Y, G:i",DATETIME_INPUT_FORMATS:["%d/%m/%Y %H:%M:%S.%f","%d/%m/%Y %H:%M:%S","%d/%m/%Y %H:%M","%Y-%m-%d %H:%M:%S","%Y-%m-%d %H:%M:%S.%f","%Y-%m-%d %H:%M","%Y-%m-%d"],DATE_FORMAT:"j F Y",DATE_INPUT_FORMATS:["%d/%m/%Y","%d %b %Y","%d %B %Y","%Y-%m-%d"],DECIMAL_SEPARATOR:".",FIRST_DAY_OF_WEEK:"0",MONTH_DAY_FORMAT:"j F",NUMBER_GROUPING:"3",SHORT_DATETIME_FORMAT:"j M Y, G:i",SHORT_DATE_FORMAT:"j M Y",THOUSAND_SEPARATOR:",",TIME_FORMAT:"G:i",TIME_INPUT_FORMATS:["%H:%M:%S.%f","%H:%M:%S","%H:%M"],YEAR_MONTH_FORMAT:"F Y"},e.get_format=function(t){var n=e.formats[t];return void 0===n?t:n},t.pluralidx=e.pluralidx,t.gettext=e.gettext,t.ngettext=e.ngettext,t.gettext_noop=e.gettext_noop,t.pgettext=e.pgettext,t.npgettext=e.npgettext,t.interpolate=e.interpolate,t.get_format=e.get_format,e.jsi18n_initialized=!0)}(this);