import React, { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import styles from "./OfferPopUp.module.scss";
import Router from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { LangContext } from "../../pages/_app";
import Head from "next/head";

const markup = {
  __html: `
<script type="text/javascript">
window.cfields = [];
window._show_thank_you = function(id, message, trackcmp_url, email) {
  var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
  form.querySelector('._form-content').style.display = 'none';
  thank_you.innerHTML = message;
  thank_you.style.display = 'block';
  const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
  var visitorObject = window[vgoAlias];
  if (email && typeof visitorObject !== 'undefined') {
    visitorObject('setEmail', email);
    visitorObject('update');
  } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
    // Site tracking URL to use after inline form submission.
    _load_script(trackcmp_url);
  }
  if (typeof window._form_callback !== 'undefined') window._form_callback(id);
};
window._show_error = function(id, message, html) {
  var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
  if (old_error) old_error.parentNode.removeChild(old_error);
  err.innerHTML = message;
  err.className = '_error-inner _form_error _no_arrow';
  var wrapper = document.createElement('div');
  wrapper.className = '_form-inner';
  wrapper.appendChild(err);
  button.parentNode.insertBefore(wrapper, button);
  document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
  if (html) {
    var div = document.createElement('div');
    div.className = '_error-html';
    div.innerHTML = html;
    err.appendChild(div);
  }
};
window._load_script = function(url, callback, isSubmit) {
  var head = document.querySelector('head'), script = document.createElement('script'), r = false;
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.src = url;
  if (callback) {
    script.onload = script.onreadystatechange = function() {
      if (!r && (!this.readyState || this.readyState == 'complete')) {
        r = true;
        callback();
      }
    };
  }
  script.onerror = function() {
    if (isSubmit) {
      if (script.src.length > 10000) {
        _show_error("8", "Sorry, your submission failed. Please shorten your responses and try again.");
      } else {
        _show_error("8", "Sorry, your submission failed. Please try again.");
      }
    }
  }

  head.appendChild(script);
};
(function() {
  if (window.location.search.search("excludeform") !== -1) return false;
  var getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
  var setCookie = function(name, value) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 60 * 60 * 24 * 365;
    now.setTime(expireTime);
    document.cookie = name + '=' + value + '; expires=' + now + ';path=/; Secure; SameSite=Lax;';// cannot be HttpOnly
  }
      var addEvent = function(element, event, func) {
    if (element.addEventListener) {
      element.addEventListener(event, func);
    } else {
      var oldFunc = element['on' + event];
      element['on' + event] = function() {
        oldFunc.apply(this, arguments);
        func.apply(this, arguments);
      };
    }
  }
  var _removed = false;
  var form_to_submit = document.getElementById('_form_8_');
  var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

  var getUrlParam = function(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name) || false;
  };

  for (var i = 0; i < allInputs.length; i++) {
    var regexStr = "field\\[(\\d+)\\]";
    var results = new RegExp(regexStr).exec(allInputs[i].name);
    if (results != undefined) {
      allInputs[i].dataset.name = window.cfields[results[1]];
    } else {
      allInputs[i].dataset.name = allInputs[i].name;
    }
    var fieldVal = getUrlParam(allInputs[i].dataset.name);

    if (fieldVal) {
      if (allInputs[i].dataset.autofill === "false") {
        continue;
      }
      if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
        if (allInputs[i].value == fieldVal) {
          allInputs[i].checked = true;
        }
      } else {
        allInputs[i].value = fieldVal;
      }
    }
  }

  var remove_tooltips = function() {
    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
    }
    tooltips = [];
  };
  var remove_tooltip = function(elem) {
    for (var i = 0; i < tooltips.length; i++) {
      if (tooltips[i].elem === elem) {
        tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
        tooltips.splice(i, 1);
        return;
      }
    }
  };
  var create_tooltip = function(elem, text) {
    var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
    if (elem.type != 'radio' && elem.type != 'checkbox') {
      tooltip.className = '_error';
      arrow.className = '_error-arrow';
      inner.className = '_error-inner';
      inner.innerHTML = text;
      tooltip.appendChild(arrow);
      tooltip.appendChild(inner);
      elem.parentNode.appendChild(tooltip);
    } else {
      tooltip.className = '_error-inner _no_arrow';
      tooltip.innerHTML = text;
      elem.parentNode.insertBefore(tooltip, elem);
      new_tooltip.no_arrow = true;
    }
    new_tooltip.tip = tooltip;
    new_tooltip.elem = elem;
    tooltips.push(new_tooltip);
    return new_tooltip;
  };
  var resize_tooltip = function(tooltip) {
    var rect = tooltip.elem.getBoundingClientRect();
    var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
    if (scrollPosition < 40) {
      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
    } else {
      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
    }
  };
  var resize_tooltips = function() {
    if (_removed) return;
    for (var i = 0; i < tooltips.length; i++) {
      if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
    }
  };
  var validate_field = function(elem, remove) {
    var tooltip = null, value = elem.value, no_error = true;
    remove ? remove_tooltip(elem) : false;
    if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
    if (elem.getAttribute('required') !== null) {
      if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
        var elems = form_to_submit.elements[elem.name];
        if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
          no_error = elem.checked;
        }
        else {
          no_error = false;
          for (var i = 0; i < elems.length; i++) {
            if (elems[i].checked) no_error = true;
          }
        }
        if (!no_error) {
          tooltip = create_tooltip(elem, "Please select an option.");
        }
      } else if (elem.type =='checkbox') {
        var elems = form_to_submit.elements[elem.name], found = false, err = [];
        no_error = true;
        for (var i = 0; i < elems.length; i++) {
          if (elems[i].getAttribute('required') === null) continue;
          if (!found && elems[i] !== elem) return true;
          found = true;
          elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
          if (!elems[i].checked) {
            no_error = false;
            elems[i].className = elems[i].className + ' _has_error';
            err.push("Checking %s is required".replace("%s", elems[i].value));
          }
        }
        if (!no_error) {
          tooltip = create_tooltip(elem, err.join('<br/>'));
        }
      } else if (elem.tagName == 'SELECT') {
        var selected = true;
        if (elem.multiple) {
          selected = false;
          for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected) {
              selected = true;
              break;
            }
          }
        } else {
          for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected && (!elem.options[i].value || (elem.options[i].value.match(/\n/g)))) {
              selected = false;
            }
          }
        }
        if (!selected) {
          elem.className = elem.className + ' _has_error';
          no_error = false;
          tooltip = create_tooltip(elem, "Please select an option.");
        }
      } else if (value === undefined || value === null || value === '') {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "This field is required.");
      }
    }
    if (no_error && (elem.id == 'field[]' || elem.id == 'ca[11][v]')) {
      if (elem.className.includes('phone-input-error')) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
      }
    }
    if (no_error && elem.name == 'email') {
      if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Enter a valid email address.");
      }
    }
    if (no_error && /date_field/.test(elem.className)) {
      if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Enter a valid date.");
      }
    }
    tooltip ? resize_tooltip(tooltip) : false;
    return no_error;
  };
  var needs_validate = function(el) {
        if(el.getAttribute('required') !== null){
            return true
        }
        if(el.name === 'email' && el.value !== ""){
            return true
        }
    if((el.id == 'field[]' || el.id == 'ca[11][v]') && el.className.includes('phone-input-error')){
            return true
        }
        return false
  };
  var validate_form = function(e) {
    var err = form_to_submit.querySelector('._form_error'), no_error = true;
    if (!submitted) {
      submitted = true;
      for (var i = 0, len = allInputs.length; i < len; i++) {
        var input = allInputs[i];
        if (needs_validate(input)) {
          if (input.type == 'tel') {
            addEvent(input, 'blur', function() {
              this.value = this.value.trim();
              validate_field(this, true);
            });
          }
          if (input.type == 'text' || input.type == 'number' || input.type == 'time') {
            addEvent(input, 'blur', function() {
              this.value = this.value.trim();
              validate_field(this, true);
            });
            addEvent(input, 'input', function() {
              validate_field(this, true);
            });
          } else if (input.type == 'radio' || input.type == 'checkbox') {
            (function(el) {
              var radios = form_to_submit.elements[el.name];
              for (var i = 0; i < radios.length; i++) {
                addEvent(radios[i], 'click', function() {
                  validate_field(el, true);
                });
              }
            })(input);
          } else if (input.tagName == 'SELECT') {
            addEvent(input, 'change', function() {
              validate_field(this, true);
            });
          } else if (input.type == 'textarea'){
            addEvent(input, 'input', function() {
              validate_field(this, true);
            });
          }
        }
      }
    }
    remove_tooltips();
    for (var i = 0, len = allInputs.length; i < len; i++) {
      var elem = allInputs[i];
      if (needs_validate(elem)) {
        if (elem.tagName.toLowerCase() !== "select") {
          elem.value = elem.value.trim();
        }
        validate_field(elem) ? true : no_error = false;
      }
    }
    if (!no_error && e) {
      e.preventDefault();
    }
    resize_tooltips();
    return no_error;
  };
  addEvent(window, 'resize', resize_tooltips);
  addEvent(window, 'scroll', resize_tooltips);
  var hidePhoneInputError = function(inputId) {
    var errorMessage =  document.getElementById("error-msg-" + inputId);
    var input = document.getElementById(inputId);
    errorMessage.classList.remove("phone-error");
    errorMessage.classList.add("phone-error-hidden");
    input.classList.remove("phone-input-error");
  };
  var initializePhoneInput = function(input, defaultCountry) {
    return window.intlTelInput(input, {
      utilsScript: "https://unpkg.com/intl-tel-input@17.0.18/build/js/utils.js",
      autoHideDialCode: false,
      separateDialCode: true,
      initialCountry: defaultCountry,
      preferredCountries: []
    });
  }
  var setPhoneInputEventListeners = function(inputId, input, iti) {
    input.addEventListener('blur', function() {
      var errorMessage = document.getElementById("error-msg-" + inputId);
      if (input.value.trim()) {
        if (iti.isValidNumber()) {
          iti.setNumber(iti.getNumber());
          if (errorMessage.classList.contains("phone-error")){
            hidePhoneInputError(inputId);
          }
        } else {
          showPhoneInputError(inputId)
        }
      } else {
        if (errorMessage.classList.contains("phone-error")){
          hidePhoneInputError(inputId);
        }
      }
    });
    input.addEventListener("countrychange", function() {
      iti.setNumber('');
    });
    input.addEventListener("keydown", function(e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 8) {
               e.preventDefault();
      }
     });
  };
  var showPhoneInputError = function(inputId) {
    var errorMessage =  document.getElementById("error-msg-" + inputId);
    var input = document.getElementById(inputId);
    errorMessage.classList.add("phone-error");
    errorMessage.classList.remove("phone-error-hidden");
    input.classList.add("phone-input-error");
  };
    var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].previousSibling.querySelector('div.iti__selected-dial-code').innerText)+encodeURIComponent(" ")+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
  var form_submit = function(e) {
    e.preventDefault();
    if (validate_form()) {
      // use this trick to get the submit button & disable it using plain javascript
      document.querySelector('#_form_8_submit').disabled = true;
            var serialized = _form_serialize(document.getElementById('_form_8_')).replace(/%0A/g, '\\n');
      var err = form_to_submit.querySelector('._form_error');
      err ? err.parentNode.removeChild(err) : false;
      _load_script('https://ready4977.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
    }
    return false;
  };
  addEvent(form_to_submit, 'submit', form_submit);
})();
</script>
  `,
};

export default function OfferPDFOpenSending({ handlerCloseEventPopup }) {
  const { isToggleLang } = React.useContext(LangContext);

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [isPhoneValid, setIsPhoneValid] = React.useState(false);


  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Roboto&family=IBM+Plex+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://ready4977.activehosted.com/f/embed.php?id=8"
          type="text/javascript"
          charset="utf-8"
        />
        <Script async type="text/javascript" dangerouslySetInnerHTML={markup} />
      </Head>
      <section className={styles.offer__section}>
        <div className={styles.offer__container}>
          <div
            className={styles.offer__inner}
            style={{ transform: "none!important" }}
          >
            <button
              type="button"
              className={styles.offer__button_close}
              onClick={handlerCloseEventPopup}
            >
              <svg
                className="w-[3vw] sm:w-[1.4vw] xl:w-[20px]"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 17.5633L12.3467 9.98416L19.9234 2.33916L17.5634 -5.72205e-06L9.98837 7.64916L2.3417 0.0758276L3.45707e-05 2.41749L7.65503 10.005L0.0758679 17.6583L2.41753 20L10.0109 12.34L17.6609 19.9233L20 17.5633Z"
                  fill="#C4C4C4"
                />
              </svg>
            </button>

            {isToggleLang === "ro" ? (
              <h2 className={styles.offer__title}>
                Lasă-ne datele de contact mai jos și înscrie-te în
                <br />
                concurs, iar noi îți expediem biletul online
              </h2>
            ) : (
              <h2 className={styles.offer__title}>
                Оставь данные и мы вышлем
                <br />
                тебе онлайн-билет
              </h2>
            )}
            <form
              method="POST"
              action="https://ready4977.activehosted.com/proc.php"
              id="_form_8_"
              className={`${styles.offer__form} _form _form_8 _inline-form  _dark`}
              noValidate
            >
              <style jsx>
                {`
                  #_form_8_ {
                    font-size: 14px;
                    line-height: 1.6;
                    font-family: arial, helvetica, sans-serif;
                    margin: 0;
                  }
                  #_form_8_ * {
                    outline: 0;
                  }
                  ._form_hide {
                    display: none;
                    visibility: hidden;
                  }
                  ._form_show {
                    display: block;
                    visibility: visible;
                  }
                  #_form_8_._form-top {
                    top: 0;
                  }
                  #_form_8_._form-bottom {
                    bottom: 0;
                  }
                  #_form_8_._form-left {
                    left: 0;
                  }
                  #_form_8_._form-right {
                    right: 0;
                  }
                  #_form_8_ input[type="text"],
                  #_form_8_ input[type="tel"],
                  #_form_8_ input[type="date"],
                  #_form_8_ textarea {
                    padding: 10px;
                    margin-top: 5%;
                    height: auto;
                    color: #000 !important;
                    font-size: 14px;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                  }
                  #_form_8_ textarea {
                    resize: none;
                  }
                  #_form_8_ ._submit {
                    -webkit-appearance: none;
                    cursor: pointer;
                    text-align: center;
                    border: 0 !important;
                    color: #fff !important;
                  }
                  #_form_8_ ._form-body {
                    margin-bottom: 30px;
                  }
                  #_form_8_ ._form-image-left {
                    width: 150px;
                    float: left;
                  }
                  #_form_8_ ._form-content-right {
                    margin-left: 164px;
                  }
                  #_form_8_ ._form-branding {
                    color: #fff;
                    font-size: 10px;
                    clear: both;
                    text-align: left;
                    margin-top: 30px;
                    font-weight: 100;
                  }
                  #_form_8_ ._form-branding ._logo {
                    display: block;
                    width: 130px;
                    height: 14px;
                    margin-top: 6px;
                    background-image: url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");
                    background-size: 130px auto;
                    background-repeat: no-repeat;
                  }
                  #_form_8_ .form-sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    border: 0;
                  }
                  #_form_8_ ._form-label,
                  #_form_8_ ._form_element ._form-label {
                    font-weight: bold;
                    margin-bottom: 5px;
                    display: block;
                  }
                  #_form_8_._dark ._form-branding {
                    color: #333;
                  }
                  #_form_8_._dark ._form-branding ._logo {
                    background-image: url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png");
                  }
                  #_form_8_ ._form_element {
                    position: relative;
                    margin-bottom: 10px;
                    font-size: 0;
                    max-width: 100%;
                  }
                  #_form_8_ ._form_element * {
                    font-size: 14px;
                  }
                  #_form_8_ ._form_element._clear {
                    clear: both;
                    width: 100%;
                    float: none;
                  }
                  #_form_8_ ._form_element._clear:after {
                    clear: left;
                  }
                  #_form_8_ ._form_element input[type="text"],
                  #_form_8_ ._form_element input[type="date"],
                  #_form_8_ ._form_element select,
                  #_form_8_ ._form_element textarea:not(.g-recaptcha-response) {
                    display: block;
                    width: 100%;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    font-family: inherit;
                  }
                  #_form_8_ ._field-wrapper {
                    position: relative;
                  }
                  #_form_8_ ._inline-style {
                    float: left;
                  }
                  #_form_8_ ._inline-style input[type="text"] {
                    width: 150px;
                  }
                  #_form_8_
                    ._inline-style:not(._clear)
                    + ._inline-style:not(._clear) {
                    margin-left: 20px;
                  }
                  #_form_8_ ._form_element img._form-image {
                    max-width: 100%;
                  }
                  #_form_8_ ._form_element ._form-fieldset {
                    border: 0;
                    padding: 0.01em 0 0 0;
                    margin: 0;
                    min-width: 0;
                  }
                  #_form_8_ ._clear-element {
                    clear: left;
                  }
                  #_form_8_ ._full_width {
                    width: 100%;
                  }
                  #_form_8_ ._form_full_field {
                    display: block;
                    width: 100%;
                    margin-bottom: 10px;
                  }
                  #_form_8_ input[type="text"]._has_error,
                  #_form_8_ textarea._has_error {
                    border: #f37c7b 1px solid;
                  }
                  #_form_8_ input[type="checkbox"]._has_error {
                    outline: #f37c7b 1px solid;
                  }
                  #_form_8_ ._error {
                    display: block;
                    position: absolute;
                    font-size: 14px;
                    z-index: 10000001;
                  }
                  #_form_8_ ._error._above {
                    padding-bottom: 4px;
                    bottom: 39px;
                    right: 0;
                  }
                  #_form_8_ ._error._below {
                    padding-top: 8px;
                    top: 100%;
                    right: 0;
                  }
                  #_form_8_ ._error._above ._error-arrow {
                    bottom: -4px;
                    right: 15px;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-top: 8px solid #fdd;
                  }
                  #_form_8_ ._error._below ._error-arrow {
                    top: 0;
                    right: 15px;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-bottom: 8px solid #fdd;
                  }
                  #_form_8_ ._error-inner {
                    padding: 12px 12px 12px 36px;
                    background-color: #fdd;
                    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z' fill='%23CA0000'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: 12px center;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 16px;
                    color: #000;
                    text-align: center;
                    text-decoration: none;
                    box-shadow: 0px 1px 4px rgba(31, 33, 41, 0.298295);
                  }
                  #_form_8_ ._error-inner._form_error {
                    margin-bottom: 5px;
                    text-align: left;
                  }
                  #_form_8_ ._button-wrapper ._error-inner._form_error {
                    position: static;
                  }
                  #_form_8_ ._error-inner._no_arrow {
                    margin-bottom: 10px;
                  }
                  #_form_8_ ._error-arrow {
                    position: absolute;
                    width: 0;
                    height: 0;
                  }
                  #_form_8_ ._error-html {
                    margin-bottom: 10px;
                  }
                  .pika-single {
                    z-index: 10000001 !important;
                  }
                  #_form_8_ input[type="text"].datetime_date {
                    width: 69%;
                    display: inline;
                  }
                  #_form_8_ select.datetime_time {
                    width: 29%;
                    display: inline;
                    height: 32px;
                  }
                  #_form_8_ input[type="date"].datetime_date {
                    width: 69%;
                    display: inline-flex;
                  }
                  #_form_8_ input[type="time"].datetime_time {
                    width: 29%;
                    display: inline-flex;
                  }
                  @media all and (min-width: 320px) and (max-width: 667px) {
                    ::-webkit-scrollbar {
                      display: none;
                    }
                    #_form_8_ {
                      margin: 0;
                      width: 100%;
                      min-width: 100%;
                      max-width: 100%;
                      box-sizing: border-box;
                    }
                    #_form_8_ * {
                      -webkit-box-sizing: border-box;
                      -moz-box-sizing: border-box;
                      box-sizing: border-box;
                      font-size: 1em;
                    }
                    #_form_8_ ._form-content {
                      margin: 0;
                      width: 100%;
                    }
                    #_form_8_ ._form-inner {
                      display: block;
                      min-width: 100%;
                    }
                    #_form_8_ ._form-title,
                    #_form_8_ ._inline-style {
                      margin-top: 0;
                      margin-right: 0;
                      margin-left: 0;
                    }
                    #_form_8_ ._form-title {
                      font-size: 1.2em;
                    }
                    #_form_8_ ._form_element {
                      margin: 0 0 20px;
                      padding: 0;
                      width: 100%;
                    }
                    #_form_8_ ._form-element,
                    #_form_8_ ._inline-style,
                    #_form_8_ input[type="text"],
                    #_form_8_ label,
                    #_form_8_ p,
                    #_form_8_ textarea:not(.g-recaptcha-response) {
                      float: none;
                      display: block;
                      width: 100%;
                    }
                    #_form_8_ ._row._checkbox-radio label {
                      display: inline;
                    }
                    #_form_8_ ._row,
                    #_form_8_ p,
                    #_form_8_ label {
                      margin-bottom: 0.7em;
                      width: 100%;
                    }
                    #_form_8_ ._row input[type="checkbox"],
                    #_form_8_ ._row input[type="radio"] {
                      margin: 0 !important;
                      vertical-align: middle !important;
                    }
                    #_form_8_ ._row input[type="checkbox"] + span label {
                      display: inline;
                    }
                    #_form_8_ ._row span label {
                      margin: 0 !important;
                      width: initial !important;
                      vertical-align: middle !important;
                    }
                    #_form_8_ ._form-image {
                      max-width: 100%;
                      height: auto !important;
                    }
                    #_form_8_ input[type="text"] {
                      padding-left: 10px;
                      padding-right: 10px;
                      font-size: 16px;
                      line-height: 1.3em;
                      -webkit-appearance: none;
                    }
                    #_form_8_ input[type="radio"],
                    #_form_8_ input[type="checkbox"] {
                      display: inline-block;
                      width: 1.3em;
                      height: 1.3em;
                      font-size: 1em;
                      margin: 0 0.3em 0 0;
                      vertical-align: baseline;
                    }
                  }
                  #_form_8_ {
                    position: relative;
                    text-align: left;
                    padding: 20px;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    *zoom: 1;
                    background: transparent !important;
                    border: 0px solid #b0b0b0 !important;
                    max-width: 500px;
                    -moz-border-radius: 0px !important;
                    -webkit-border-radius: 0px !important;
                    border-radius: 0px !important;
                    color: #000 !important;
                  }
                  #_form_8_._inline-form,
                  #_form_8_._inline-form ._form-content,
                  #_form_8_._inline-form input,
                  #_form_8_ ._form-title {
                    font-size: 22px;
                    line-height: 22px;
                    font-weight: 600;
                    margin-bottom: 0;
                  }
                  #_form_8_:before,
                  #_form_8_:after {
                    content: " ";
                    display: table;
                  }
                  #_form_8_:after {
                    clear: both;
                  }
                  #_form_8_._inline-style {
                    width: auto;
                    display: inline-block;
                  }
                  #_form_8_._inline-style input[type="text"],
                  #_form_8_._inline-style input[type="date"] {
                    padding: 10px 12px;
                  }
                  #_form_8_._inline-style button._inline-style {
                    position: relative;
                    top: 27px;
                  }
                  #_form_8_._inline-style p {
                    margin: 0;
                  }
                  #_form_8_._inline-style ._button-wrapper {
                    position: relative;
                    margin: 27px 12.5px 0 20px;
                  }
                  #_form_8_ ._form-thank-you {
                    position: relative;
                    left: 0;
                    right: 0;
                    text-align: center;
                    font-size: 18px;
                  }
                  @media all and (min-width: 320px) and (max-width: 667px) {
                    #_form_8_._inline-form._inline-style
                      ._inline-style._button-wrapper {
                      margin-top: 20px !important;
                      margin-left: 0 !important;
                    }
                  }
                  #_form_8_ .iti.iti--allow-dropdown.iti--separate-dial-code {
                    width: 100%;
                  }
                  #_form_8_ .iti input {
                    width: 100%;
                    height: 32px;
                    border-radius: 4px;
                  }
                  #_form_8_ .iti--separate-dial-code .iti__selected-flag {
                    background-color: #fff;
                    border-radius: 4px;
                  }
                  #_form_8_ .iti--separate-dial-code .iti__selected-flag:hover {
                    background-color: rgba(0, 0, 0, 0.05);
                  }
                  #_form_8_ .iti__country-list {
                    border-radius: 4px;
                    margin-top: 4px;
                    min-width: 460px;
                  }
                  #_form_8_ .iti__country-list--dropup {
                    margin-bottom: 4px;
                  }
                  #_form_8_ .phone-error-hidden {
                    display: none;
                  }
                  #_form_8_ .phone-error {
                    color: #e40e49;
                  }
                  #_form_8_ .phone-input-error {
                    border: 1px solid #e40e49 !important;
                  }

                  #_form_8_ ._submit {
                    width: 100%;
                    margin-top: 5.5%;
                    background: linear-gradient(
                      180deg,
                      #40c131 0%,
                      #24a02d 100%
                    );
                  }
                  #_form_8_ input[type="text"]:nth-child(2) {
                    border: none;
                    margin-top: 0;
                    border-radius: 0;
                    border-left: 1px solid #c4c4c4;
                  }
                `}
              </style>

              <input type="hidden" name="u" value="8" />
              <input type="hidden" name="f" value="8" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input
                type="hidden"
                name="or"
                value="1865751a877870b22dda7db88b02b4c1"
              />
              <input
                type="text"
                className="text-[10rem] sm:text-[2.2rem] bg-transparent border-[#C4C4C4] w-full rounded-[6px]"
                id="fullname"
                name="fullname"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder="Numele, Prenume"
                required
              />
              <input
                type="text"
                className="text-[10rem] sm:text-[2.2rem] bg-transparent border-[#C4C4C4] w-full rounded-[6px]"
                id="email"
                name="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="E-mail"
                required
              />

              <div className="flex items-center relative border-[1px] border-[#C4C4C4] mt-[5%] rounded-[6px] bg-[#F5F5F5]">
                <svg
                  className="w-[6vw] sm:w-[2vw] mx-[3%]"
                  viewBox="0 0 30 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1022_315)">
                    <g>
                      <path d="M30 0H0V17.503H30V0Z" fill="#EFD928" />
                      <path d="M10.003 0H0V17.503H10.003V0Z" fill="#1F00AF" />
                      <path
                        d="M30.0088 0H20.0059V17.503H30.0088V0Z"
                        fill="#D00524"
                      />
                      <g mask="url(#mask1_1022_315)">
                        <path
                          d="M14.0001 3.91541C13.9376 3.91541 13.8839 3.93328 13.8571 3.9601C13.9018 3.97798 13.9376 4.02268 13.9376 4.07631V4.21934H13.7945C13.7409 4.21934 13.6873 4.18358 13.6783 4.12995C13.6515 4.1657 13.6426 4.21934 13.6426 4.28191C13.6426 4.34449 13.6605 4.39812 13.6783 4.43388C13.6962 4.38024 13.7409 4.34449 13.7945 4.34449H13.9376V5.02387C13.9376 5.0775 13.9018 5.1222 13.8571 5.14008C13.9197 5.14902 13.9823 5.23841 14.0001 5.29204C14.018 5.23841 14.0717 5.14902 14.1432 5.14008C14.0985 5.1222 14.0627 5.0775 14.0627 5.02387V4.34449H14.2057C14.2683 4.34449 14.313 4.38024 14.322 4.42494C14.3488 4.39812 14.3577 4.34449 14.3577 4.28191C14.3577 4.21934 14.3398 4.1657 14.322 4.12995C14.3041 4.18358 14.2594 4.21934 14.2057 4.21934H14.0627V4.07631C14.0627 4.02268 14.0985 3.97798 14.1521 3.9601C14.1164 3.93328 14.0627 3.91541 14.0001 3.91541Z"
                          fill="black"
                        />
                        <path
                          d="M14.0007 3.95117C14.0007 3.95117 13.9381 3.95117 13.9202 3.96905C13.956 3.99587 13.9739 4.04056 13.9739 4.08526V4.22829V4.25511H13.947H13.9292H13.804C13.7593 4.25511 13.7146 4.23723 13.6878 4.20147C13.6878 4.22829 13.6699 4.25511 13.6699 4.29086C13.6699 4.32662 13.6699 4.35344 13.6878 4.38025C13.7146 4.3445 13.7504 4.32662 13.804 4.32662H13.9739V4.35344V5.04176C13.9739 5.04176 13.947 5.12221 13.9202 5.14903C13.947 5.16691 13.9649 5.18478 13.9739 5.20266C13.9917 5.22054 13.9917 5.23842 14.0007 5.2563C14.0096 5.23842 14.0096 5.22054 14.0275 5.20266C14.0364 5.18478 14.0632 5.1669 14.0811 5.15797C14.0454 5.13115 14.0275 5.09539 14.0275 5.0507V4.42495V4.3445H14.0543H14.1079H14.1973C14.242 4.3445 14.2867 4.36238 14.3135 4.39813C14.3135 4.37131 14.3225 4.3445 14.3225 4.31768C14.3225 4.29086 14.3225 4.2551 14.3135 4.23723C14.2867 4.27298 14.242 4.29086 14.1973 4.29086H14.0543H14.0275V4.26404V4.12102C14.0275 4.07632 14.0454 4.04056 14.0722 4.00481C14.0454 4.00481 14.0275 3.98693 13.9828 3.98693"
                          fill="#F9F92B"
                        />
                        <path
                          d="M14.106 6.43629L13.8736 6.38265L13.373 6.12341L13.0602 6.10554L13.0423 5.49767L12.4434 5.01495L11.8265 5.67645L11.7461 5.87312L11.7729 11.8624L12.1662 11.3886L12.2556 11.4065L12.6579 10.9685L13.0065 10.0924L13.1049 9.72592L13.5786 10.2801L13.3998 10.6109L13.5608 10.593L13.5786 10.7271L13.7217 10.6735L13.7574 10.8612L14.0882 10.5304L14.5351 10.7539L13.677 12.2825L13.373 12.506L13.9273 12.7116L14.4904 12.0501L14.41 12.4881L14.2401 12.9083L14.9285 13.3016L15.6793 12.8636L15.3039 12.0859L15.429 12.0322L15.9118 12.7384L16.4392 12.4792L15.7509 11.6747L15.3039 10.7092L15.7777 10.5483L16.0995 10.8612L16.1531 10.6645L16.323 10.745L16.2962 10.5751L16.4749 10.6109L16.2604 10.2801L16.7967 9.83319L17.1364 10.888L17.6281 11.4512L17.7354 11.4422L18.0929 11.8892V5.71221L17.4314 5.00601L16.7789 5.53343L16.8057 6.10554L16.5107 6.11447L16.0816 6.33796L15.8403 6.41841L15.724 6.43629L15.581 6.27538L15.3754 5.88206L15.3665 5.48873L15.4916 5.22949L15.4648 4.98813H15.5721L15.5095 4.82723L15.5989 4.79147L15.4559 4.65738L15.5095 4.60375L14.9553 4.36239L14.5441 4.33557L14.4279 4.38921L14.3742 4.48754L14.4815 4.80041L14.3653 4.91662L14.4815 5.14904V5.64964L14.3921 6.07872L14.2044 6.40053L14.106 6.43629Z"
                          fill="#7F6332"
                        />
                        <path
                          d="M13.472 10.6198L13.0608 11.2545L12.8552 11.2456L12.6496 11.3439L12.5781 11.5674L12.6139 11.6747L12.8374 11.916L13.0251 11.8088L13.1681 11.6478L13.2039 11.5138L13.7313 10.8344L13.7045 10.6556L13.5883 10.736L13.5436 10.593L13.472 10.6198Z"
                          fill="#C11B2C"
                        />
                        <path
                          d="M16.1191 10.8076L16.6734 11.5495L16.727 11.7015L16.9684 11.925L17.0488 11.8982L17.317 11.5942L17.2544 11.3797L17.0041 11.2277L16.8164 11.2456L16.3963 10.6199L16.3247 10.5841L16.289 10.7093L16.1728 10.6735L16.1191 10.8076Z"
                          fill="#C11B2C"
                        />
                        <path
                          d="M14.6694 4.30872C14.5979 4.30872 14.4995 4.30872 14.4369 4.35341C14.3833 4.38917 14.3922 4.43386 14.3654 4.45174C14.3207 4.4875 14.2403 4.4875 14.2045 4.4875C13.9632 4.4875 13.9542 4.74674 13.9542 4.74674C13.9542 4.74674 14.0168 4.65734 14.1241 4.65734C14.3029 4.65734 14.4369 4.75568 14.4369 4.79143C14.4369 4.80931 14.4191 4.80931 14.4191 4.80931C14.3029 4.80931 14.1241 4.74674 14.0257 4.7378V4.77355C14.2403 4.84507 14.4459 4.95234 14.4459 5.40824C14.4459 5.69429 14.4101 5.98929 14.2671 6.22171C14.2135 6.30216 14.142 6.37367 14.0615 6.43625C14.0257 6.42731 13.838 6.36473 13.7129 6.29322C13.4894 6.16807 13.3732 6.04292 13.105 6.03398V5.82838C13.105 5.72111 13.1408 5.62278 13.1408 5.51551C13.0335 5.48869 12.7206 5.10431 12.4256 4.93446C12.0055 5.21158 11.6747 5.65854 11.6747 5.86414C11.6747 5.86414 11.6837 10.3248 11.6747 11.8802C11.6747 11.9696 11.6211 12.0948 11.6211 12.0948C11.7731 12.0322 12.0591 11.6389 12.1217 11.4958V11.5674C12.3541 11.4601 12.5329 11.183 12.6044 11.0399C12.6044 11.0578 12.6044 11.1115 12.6044 11.1115C12.8189 10.9237 13.0782 9.84209 13.0782 9.84209V9.61861C13.0782 9.61861 12.8815 10.5036 12.667 10.6824V6.87427L12.8368 7.02624L13.0871 6.79382V6.61503L12.8636 6.82063V6.28428C12.8994 6.23065 12.9173 6.19489 12.9352 6.16807C12.9709 6.23065 13.0871 6.42731 13.2212 6.54352C13.248 6.45413 13.3911 6.36473 13.3911 6.36473C13.3911 6.36473 13.4447 6.50776 13.5251 6.54352C13.552 6.49882 13.7218 6.38261 13.7218 6.38261C13.7218 6.38261 13.5788 6.40943 13.5251 6.46307C13.4715 6.45413 13.4626 6.24852 13.4626 6.24852C13.4626 6.24852 13.248 6.3558 13.2123 6.42731C13.1676 6.41837 13.105 6.25746 13.0871 6.18595C13.1229 6.18595 13.1765 6.17701 13.248 6.17701C13.3106 6.17701 13.3911 6.20383 13.4715 6.24852C13.5609 6.29322 13.6592 6.34686 13.7397 6.38261C13.847 6.42731 14.0168 6.44519 14.0615 6.44519C14.0079 6.48094 13.9453 6.5167 13.8827 6.55246C13.8827 6.55246 14.142 6.55246 14.3207 6.46307C14.3833 6.42731 14.4548 6.38261 14.5085 6.32898C14.4816 6.40049 14.4459 6.48094 14.3833 6.55246C14.6515 6.53458 14.7856 6.38261 14.8124 6.32898C14.8303 6.37367 14.8571 6.44519 14.9107 6.5167C14.9644 6.45413 14.9912 6.38261 15.0091 6.32898C15.0448 6.38261 15.1789 6.53458 15.4471 6.55246C15.3845 6.48094 15.3487 6.40049 15.3219 6.32898C15.3756 6.38261 15.4471 6.41837 15.5097 6.46307C15.6884 6.55246 15.9477 6.55246 15.9477 6.55246C15.8851 6.5167 15.8225 6.48094 15.7689 6.44519C15.8136 6.44519 15.9745 6.43625 16.0907 6.38261C16.1712 6.34686 16.2695 6.29322 16.3589 6.24852C16.4393 6.21277 16.5198 6.17701 16.5824 6.17701C16.6539 6.17701 16.7075 6.17701 16.7433 6.18595C16.7164 6.25746 16.6539 6.40943 16.6181 6.42731C16.5824 6.3558 16.3678 6.24852 16.3678 6.24852C16.3678 6.24852 16.3499 6.44519 16.3052 6.46307C16.2516 6.40943 16.0996 6.38261 16.0996 6.38261C16.0996 6.38261 16.2695 6.49882 16.2963 6.54352C16.3768 6.50776 16.4304 6.36473 16.4304 6.36473C16.4304 6.36473 16.5824 6.45413 16.6002 6.54352C16.7433 6.42731 16.8505 6.23065 16.8952 6.16807C16.9131 6.19489 16.931 6.23959 16.9667 6.28428V6.82063L16.7433 6.61503V6.79382L16.9936 7.02624L17.1545 6.87427V10.6824C16.9489 10.5036 16.7611 9.61861 16.7611 9.61861L16.7433 9.84209C16.7433 9.84209 17.0114 10.9237 17.217 11.1115C17.217 11.1115 17.217 11.0578 17.217 11.0399C17.2886 11.183 17.4673 11.469 17.6998 11.5674V11.4958C17.7623 11.6389 18.0394 12.0322 18.2004 12.0948C18.2004 12.0948 18.1467 11.9696 18.1467 11.8802C18.1378 10.3248 18.1467 5.86414 18.1467 5.86414C18.1467 5.65854 17.816 5.20264 17.3958 4.93446C17.1098 5.10431 16.788 5.48869 16.6807 5.51551C16.6807 5.62278 16.7254 5.72111 16.7254 5.82838V6.03398C16.4572 6.04292 16.341 6.16807 16.1175 6.29322C15.9834 6.36473 15.8046 6.42731 15.7689 6.43625C15.6884 6.37367 15.608 6.30216 15.5633 6.22171C15.4381 6.02504 15.3845 5.78369 15.3845 5.54233C15.3845 5.43506 15.5007 5.32779 15.5007 5.23839C15.5007 5.11324 15.4828 5.04173 15.4828 5.04173C15.5275 5.04173 15.599 5.12218 15.599 5.12218C15.599 5.12218 15.599 4.90764 15.5275 4.87189C15.5275 4.87189 15.5543 4.84507 15.6527 4.84507C15.6259 4.77355 15.4918 4.6931 15.4918 4.6931C15.4918 4.68416 15.5097 4.66628 15.5275 4.65734C15.5633 4.63947 15.608 4.62159 15.6437 4.62159C15.608 4.62159 15.5543 4.60371 15.5097 4.58583C15.3934 4.55007 15.2683 4.49644 15.1431 4.43386C14.9197 4.32659 14.7498 4.31765 14.6515 4.31765M14.6515 4.38023C14.6515 4.38023 14.6962 4.38023 14.7051 4.38023C14.9286 4.38023 15.0806 4.47856 15.2862 4.57689C15.3398 4.60371 15.3934 4.62159 15.4381 4.63947C15.4113 4.66628 15.3845 4.6931 15.3845 4.71098C15.3845 4.71098 15.4739 4.72886 15.5186 4.80931C15.5186 4.80931 15.4292 4.81825 15.4113 4.87189C15.465 4.87189 15.5097 4.93446 15.5097 4.99704L15.3845 4.95234C15.3845 4.95234 15.4113 5.09537 15.4113 5.24733C15.4113 5.32779 15.2951 5.41718 15.2951 5.55127C15.2951 5.97141 15.4024 6.13232 15.4739 6.25746C15.5097 6.3111 15.5275 6.36473 15.5812 6.40943C15.3666 6.29322 15.2057 6.15019 15.2057 6.01611V5.51551H15.1521V6.01611C15.1521 6.11444 15.1789 6.15913 15.1789 6.15913C15.2147 6.2664 15.2772 6.42731 15.3219 6.49882C15.1253 6.39155 15.0269 6.25746 15.0269 6.21277V5.51551H14.9733V6.2664C14.9733 6.2664 14.9286 6.34686 14.9018 6.3558C14.8839 6.33792 14.8571 6.30216 14.8303 6.2664L14.8482 6.22171V5.51551H14.7856V6.21277C14.7856 6.25746 14.6872 6.39155 14.4906 6.49882C14.5353 6.42731 14.5979 6.2664 14.6336 6.15913C14.6336 6.15913 14.6604 6.11444 14.6604 6.01611V5.51551H14.6068V6.01611C14.6068 6.15019 14.4459 6.29322 14.2313 6.40943C14.276 6.36473 14.3029 6.3111 14.3297 6.25746C14.4101 6.11444 14.5085 5.93565 14.5085 5.42612C14.5085 5.23839 14.4816 5.10431 14.428 5.01491C14.4101 4.9881 14.3922 4.90764 14.5085 4.90764C14.571 4.90764 14.7051 5.01491 14.7051 5.01491C14.7051 5.01491 14.7051 4.93446 14.6336 4.88083C14.6247 4.88083 14.5979 4.85401 14.5979 4.82719C14.5979 4.80931 14.6336 4.76462 14.6515 4.75568C14.6694 4.75568 14.4191 4.70204 14.4191 4.59477C14.4191 4.56795 14.4369 4.55007 14.4816 4.55007C14.5532 4.55007 14.6604 4.63053 14.7588 4.63053C14.8303 4.63053 14.8571 4.61265 14.9375 4.61265C15.0269 4.61265 15.2236 4.78249 15.2772 4.78249C15.2057 4.7378 15.0895 4.56795 14.9107 4.56795C14.8482 4.56795 14.7945 4.58583 14.7319 4.58583C14.6604 4.58583 14.5889 4.51432 14.5085 4.51432C14.4548 4.51432 14.4012 4.51432 14.3923 4.50538C14.3744 4.47856 14.3923 4.46962 14.4101 4.45174C14.4369 4.41599 14.5085 4.40705 14.5889 4.39811C14.6157 4.39811 14.6336 4.39811 14.6515 4.39811M12.4256 5.15794C12.4256 5.15794 12.8189 5.51551 12.953 5.56914V5.69429V6.05186C12.8547 6.01611 12.7385 5.86414 12.6759 5.77475V5.72111C12.6759 5.67642 12.7027 5.64066 12.7206 5.62278L12.658 5.6049C12.658 5.6049 12.6133 5.66748 12.6133 5.71217V5.73899L12.5955 5.75687H12.5865L12.4435 5.92671L12.2737 5.66748V5.6049C12.2737 5.6049 12.3094 5.51551 12.3362 5.47975L12.2737 5.46187C12.2737 5.46187 12.22 5.55127 12.22 5.59596V5.6496L12.0234 5.8552C12.0234 5.8552 11.9429 5.68535 11.925 5.64066C12.0412 5.47081 12.2379 5.29203 12.4167 5.15794M17.3869 5.15794C17.5657 5.29203 17.7623 5.47081 17.8785 5.64066C17.8517 5.68535 17.7802 5.8552 17.7802 5.8552C17.7802 5.8552 17.6282 5.69429 17.5835 5.6496V5.59596C17.5835 5.55127 17.5567 5.49763 17.5299 5.46187L17.4763 5.47975C17.4763 5.47975 17.5299 5.56021 17.5299 5.6049V5.66748L17.3601 5.92671L17.217 5.77475L17.1992 5.74793V5.72111C17.1992 5.67642 17.1723 5.64066 17.1545 5.61384L17.1008 5.63172C17.1008 5.63172 17.1455 5.68535 17.1455 5.73005V5.78369C17.0919 5.86414 16.9667 6.02504 16.8684 6.0608V5.57808C17.0114 5.53339 17.4048 5.16688 17.4048 5.16688L17.3869 5.15794ZM11.8535 5.74793L11.9429 5.90883V6.20383L11.7999 6.32898V5.89096C11.7999 5.89096 11.8178 5.80156 11.8446 5.73899M17.9322 5.73899C17.9679 5.79263 17.9769 5.84626 17.9769 5.89096V6.32898L17.8428 6.20383V5.90883L17.9322 5.74793V5.73899ZM12.2021 5.77475L12.3541 6.01611V6.20383L12.2021 6.3558V5.78369V5.77475ZM17.5746 5.77475V6.34686L17.4137 6.19489V6.00717L17.5746 5.76581V5.77475ZM12.1485 5.81944V6.34686L11.9876 6.20383V5.98929L12.1485 5.82838V5.81944ZM17.6282 5.81944L17.7892 5.98035V6.19489L17.6282 6.33792V5.8105V5.81944ZM12.6312 5.8552C12.6312 5.8552 12.7653 6.06974 12.8726 6.12338C12.8368 6.17701 12.7385 6.30216 12.6312 6.3558V5.8552ZM17.1455 5.8552V6.3558C17.0383 6.30216 16.9489 6.17701 16.9042 6.12338C17.0114 6.06974 17.1187 5.89096 17.1455 5.8552ZM12.5776 5.88202V6.34686L12.4167 6.20383V6.04292L12.5776 5.89096V5.88202ZM17.1992 5.88202L17.3601 6.03398V6.19489L17.1992 6.33792V5.87308V5.88202ZM11.934 6.37367V6.83851L11.7909 6.71336V6.50776L11.934 6.37367ZM17.8428 6.37367L17.9769 6.50776V6.71336L17.8428 6.83851V6.37367ZM11.9876 6.37367L12.077 6.45413L12.1485 6.5167V6.67761L12.077 6.74018L11.9876 6.82063V6.36473V6.37367ZM12.3541 6.37367V6.82957L12.2647 6.74912L12.1932 6.68655V6.52564L12.2647 6.46307L12.3541 6.38261V6.37367ZM12.4167 6.37367L12.5776 6.52564V6.68655L12.515 6.74912L12.4256 6.82957V6.37367H12.4167ZM12.7921 6.37367V6.83851L12.7027 6.75806L12.6312 6.69549V6.54352C12.6849 6.50776 12.7385 6.44519 12.7921 6.38261M16.9936 6.38261C17.0383 6.44519 17.1008 6.50776 17.1545 6.54352V6.69549L17.083 6.75806L16.9936 6.83851V6.37367V6.38261ZM17.369 6.38261V6.83851L17.2796 6.75806L17.2081 6.69549V6.53458L17.369 6.38261ZM17.4316 6.38261L17.521 6.46307L17.5835 6.52564V6.68655L17.521 6.74912L17.4316 6.82957V6.37367V6.38261ZM17.7981 6.38261V6.83851L17.7087 6.75806L17.6372 6.69549V6.53458L17.7087 6.472L17.7981 6.39155V6.38261ZM12.2379 6.89215L12.4077 7.04411L12.5776 6.89215V10.7003C12.5776 10.7003 12.5865 10.888 12.5955 11.0131C12.524 11.0846 12.2468 11.3707 12.2468 11.3707V6.89215H12.2379ZM17.5657 6.89215V11.3707C17.5657 11.3707 17.2886 11.0846 17.2081 11.0131C17.217 10.888 17.2349 10.7003 17.2349 10.7003V6.89215L17.4048 7.04411L17.5746 6.89215H17.5657ZM12.1396 6.89215V11.2277C12.1396 11.3528 11.9161 11.6389 11.8088 11.7014V6.89215L11.9787 7.04411L12.1485 6.89215H12.1396ZM17.664 6.89215L17.8338 7.04411L18.0037 6.89215V11.7014C17.8964 11.6389 17.6729 11.3528 17.6729 11.2277V6.89215H17.664ZM13.5162 10.298C13.5162 10.298 13.3553 10.6198 13.2927 10.6824C13.2927 10.6824 13.3285 10.6824 13.3821 10.6824C13.3553 10.7271 13.1318 11.0399 13.0603 11.1651C12.9888 11.2813 12.9441 11.2277 12.8458 11.2277C12.7653 11.2277 12.5776 11.3618 12.5418 11.4154C12.5061 11.469 12.4882 11.5405 12.4882 11.5942C12.4882 11.6567 12.5508 11.7372 12.5508 11.7372C12.5508 11.7104 12.5687 11.7014 12.5687 11.7014C12.5687 11.7014 12.7474 11.916 12.7653 11.9428C12.7832 11.9607 12.8726 11.9786 12.9083 11.9428C12.9888 11.8713 13.0603 11.8177 13.1318 11.7193C13.1676 11.6657 13.1676 11.6031 13.2123 11.5495C13.3464 11.3618 13.6235 10.9952 13.6861 10.9148C13.6861 10.9416 13.6861 10.9595 13.6861 10.9863C13.7576 10.8433 14.0973 10.5662 14.0973 10.5662L13.9989 10.5036C13.9989 10.5036 13.7933 10.7449 13.7307 10.7896C13.7307 10.7896 13.7039 10.6734 13.6861 10.6287C13.6861 10.6287 13.6056 10.6913 13.5698 10.6913C13.5698 10.6913 13.552 10.6109 13.543 10.5572C13.4894 10.593 13.4 10.584 13.4 10.584C13.4804 10.5483 13.5698 10.3159 13.5698 10.3159L13.5073 10.2801L13.5162 10.298ZM16.2874 10.298L16.2248 10.3337C16.2248 10.3337 16.3231 10.5662 16.3946 10.6019C16.3946 10.6019 16.3052 10.6019 16.2516 10.5751C16.2427 10.6287 16.2248 10.7092 16.2248 10.7092C16.1801 10.7092 16.0996 10.6466 16.0996 10.6466C16.0818 10.6913 16.0549 10.8075 16.0549 10.8075C15.9924 10.7628 15.7868 10.5215 15.7868 10.5215L15.6974 10.584C15.6974 10.584 16.0371 10.8522 16.1086 11.0042C16.1086 10.9774 16.1086 10.9595 16.1265 10.9327C16.189 11.0131 16.4572 11.3796 16.6002 11.5674C16.636 11.621 16.6449 11.6836 16.6807 11.7372C16.7433 11.8355 16.8237 11.8892 16.9042 11.9607C16.931 11.9875 17.0204 11.9696 17.0383 11.9607C17.0651 11.9339 17.2349 11.7193 17.2349 11.7193C17.2349 11.7193 17.2528 11.7283 17.2528 11.7551C17.2528 11.7551 17.3154 11.6657 17.3154 11.6121C17.3154 11.5584 17.2886 11.4869 17.2528 11.4333C17.226 11.3796 17.0383 11.2455 16.9489 11.2455C16.8505 11.2455 16.8058 11.2992 16.7343 11.183C16.6628 11.0578 16.4393 10.7449 16.4125 10.7003C16.4572 10.7003 16.5019 10.7003 16.5019 10.7003C16.4393 10.6377 16.2784 10.3159 16.2784 10.3159M13.4894 10.6824C13.4894 10.6824 13.4894 10.7896 13.5251 10.8343L13.6503 10.7539C13.6503 10.7539 13.6503 10.7896 13.6682 10.8522C13.6145 10.9237 13.3106 11.3349 13.1676 11.5316C13.1318 11.5852 13.0961 11.7104 13.0961 11.7104C13.0961 11.7104 13.0424 11.6836 13.0424 11.6389C13.0424 11.5942 13.0424 11.5405 13.0424 11.5405C13.0424 11.5405 13.0067 11.5852 12.9262 11.5852C12.9262 11.5316 13.0335 11.469 13.0424 11.3886C12.962 11.4511 12.8905 11.4154 12.7921 11.4511C12.6849 11.4869 12.658 11.5227 12.6223 11.5227C12.6044 11.5227 12.5865 11.4869 12.5955 11.469C12.6044 11.4333 12.7296 11.3349 12.8279 11.326C12.8547 11.326 13.0156 11.3618 13.0514 11.3081C13.1855 11.0936 13.4179 10.7449 13.4358 10.7092C13.4536 10.7092 13.4626 10.7092 13.4715 10.6913M16.2874 10.6913C16.2874 10.6913 16.3052 10.7003 16.3231 10.7092C16.3499 10.7449 16.5734 11.0936 16.7075 11.3081C16.7433 11.3618 16.9131 11.3171 16.931 11.326C17.0204 11.3439 17.1455 11.4333 17.1634 11.469C17.1634 11.4869 17.1634 11.5227 17.1366 11.5227C17.1008 11.5227 17.074 11.478 16.9757 11.4511C16.8774 11.4243 16.8058 11.4511 16.7254 11.3886C16.7254 11.469 16.8327 11.5316 16.8327 11.5852C16.7611 11.5852 16.7254 11.5405 16.7254 11.5405C16.7254 11.5405 16.7254 11.5942 16.7254 11.6389C16.7254 11.6836 16.6717 11.7104 16.6717 11.7104C16.6717 11.7104 16.636 11.5852 16.6002 11.5316C16.4483 11.3349 16.1533 10.9237 16.0996 10.8522C16.1175 10.7986 16.1265 10.7539 16.1265 10.7539L16.2427 10.8343L16.2784 10.6824M14.4369 10.7628C14.4369 10.7628 13.7754 12.2914 13.1855 12.5239C13.1855 12.5239 13.4447 12.6311 13.7576 12.801C13.8023 12.8188 13.8559 12.8457 13.9006 12.8725C13.9453 12.8278 13.981 12.7741 14.0257 12.7116C14.2135 12.4613 14.4012 12.1663 14.4012 12.1663C14.4191 12.2378 14.3118 12.4792 14.142 12.7652C14.1062 12.8188 14.0704 12.8814 14.0347 12.944C14.0794 12.9708 14.1241 12.9887 14.1598 13.0155C14.4727 13.2032 14.7677 13.4178 14.875 13.6144C14.9822 13.4178 15.2772 13.2032 15.5901 13.0155C15.6348 12.9887 15.6706 12.9619 15.7153 12.944C15.6706 12.8814 15.6437 12.8188 15.608 12.7652C15.4381 12.4792 15.3398 12.2378 15.3487 12.1663C15.3487 12.1663 15.5365 12.4613 15.7242 12.7116C15.7689 12.7652 15.8046 12.8188 15.8493 12.8725C15.894 12.8457 15.9477 12.8188 15.9924 12.801C16.3142 12.6311 16.5645 12.5239 16.5645 12.5239C15.9745 12.2914 15.3041 10.7628 15.3041 10.7628L15.2057 10.7896C15.2057 10.7896 15.7331 12.1126 16.2516 12.506C16.1354 12.5417 15.9924 12.5954 15.8493 12.649C15.6795 12.4434 15.5007 12.1752 15.3487 11.9249C15.1968 11.6567 15.0716 11.2008 15.0716 11.2008C15.0001 11.3796 15.1521 12.2646 15.465 12.8278C15.2057 12.9619 14.9733 13.1049 14.866 13.23C14.7588 13.1138 14.5263 12.9619 14.2671 12.8278C14.58 12.2646 14.7409 11.3796 14.6604 11.2008C14.6604 11.2008 14.5353 11.6567 14.3744 11.9249C14.2313 12.1663 14.0526 12.4434 13.8827 12.649C13.7397 12.5864 13.5967 12.5417 13.4805 12.506C13.9989 12.1037 14.5263 10.7896 14.5263 10.7896L14.428 10.7628H14.4369ZM12.7027 11.4958C12.7027 11.4958 12.7027 11.4958 12.7117 11.4958C12.7117 11.4958 12.7117 11.5137 12.7117 11.5227L12.658 11.5674C12.658 11.5674 12.6402 11.5674 12.6312 11.5674C12.6223 11.5674 12.6312 11.5495 12.6312 11.5405L12.6849 11.4958C12.6849 11.4958 12.6849 11.4958 12.7027 11.4958ZM17.0472 11.4958C17.0472 11.4958 17.0472 11.4958 17.0561 11.4958L17.1098 11.5405C17.1098 11.5405 17.1187 11.5584 17.1098 11.5674C17.1098 11.5674 17.0919 11.5763 17.0919 11.5674L17.0383 11.5227C17.0383 11.5227 17.0293 11.5048 17.0383 11.4958C17.0383 11.4958 17.0472 11.4958 17.0561 11.4958M12.7653 11.5405C12.7653 11.5405 12.7921 11.5405 12.8011 11.5584C12.8189 11.5763 12.8189 11.6031 12.8011 11.621L12.667 11.7372C12.667 11.7372 12.6223 11.7551 12.6044 11.7372C12.5865 11.7193 12.5865 11.6925 12.6044 11.6746L12.7385 11.5584C12.7385 11.5584 12.7564 11.5495 12.7653 11.5495M16.9846 11.5495C16.9846 11.5495 16.9846 11.5495 16.9936 11.5495C17.0025 11.5495 17.0114 11.5495 17.0204 11.5584L17.1545 11.6746C17.1545 11.6746 17.1723 11.7193 17.1545 11.7372C17.1366 11.7551 17.1098 11.7551 17.0919 11.7372L16.9578 11.621C16.9578 11.621 16.9399 11.5763 16.9578 11.5584C16.9578 11.5495 16.9757 11.5405 16.9846 11.5405M12.8368 11.6299C12.8368 11.6299 12.8636 11.6299 12.8815 11.6478C12.8994 11.6657 12.8905 11.6925 12.8815 11.7104L12.7474 11.8266C12.7474 11.8266 12.7027 11.8355 12.6938 11.8266C12.6759 11.8087 12.6759 11.7819 12.6938 11.764L12.8279 11.6478H12.8458M16.9131 11.6478C16.9131 11.6478 16.931 11.6478 16.9399 11.6478L17.074 11.764C17.074 11.764 17.0919 11.8087 17.074 11.8266C17.0561 11.8445 17.0293 11.8534 17.0114 11.8266L16.8774 11.7104C16.8774 11.7104 16.8595 11.6657 16.8774 11.6478C16.8774 11.6389 16.8952 11.6299 16.9042 11.6299M12.9173 11.7193C12.9173 11.7193 12.9441 11.7193 12.962 11.7283C12.9799 11.7461 12.9709 11.773 12.962 11.7908L12.8279 11.907C12.8279 11.907 12.7832 11.916 12.7743 11.907C12.7564 11.8892 12.7564 11.8624 12.7743 11.8445L12.9083 11.7283C12.9083 11.7283 12.9173 11.7283 12.9262 11.7283M16.8237 11.7283C16.8237 11.7283 16.8237 11.7283 16.8327 11.7283H16.8505L16.9846 11.8445C16.9846 11.8445 17.0025 11.8892 16.9846 11.907C16.9667 11.9249 16.9399 11.9339 16.931 11.907L16.7969 11.7908C16.7969 11.7908 16.779 11.7461 16.7969 11.7283C16.7969 11.7283 16.8148 11.7193 16.8237 11.7193"
                          fill="black"
                        />
                        <path
                          d="M13.1067 11.7551L13.4195 11.925L13.348 12.2647L13.0352 12.0948L13.1067 11.7551Z"
                          fill="black"
                        />
                        <path
                          d="M11.667 8.4386L11.5508 8.49223L12.8112 11.2634H12.9453L11.6581 8.4386H11.667ZM13.1598 11.7014L13.0704 11.7997L13.1241 11.9249L13.2403 11.8713L13.1598 11.7014Z"
                          fill="black"
                        />
                        <path
                          d="M13.1502 11.8445L13.3468 11.9518L13.3021 12.1663L13.1055 12.068L13.1502 11.8445Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M12.0597 10.6199C12.0597 10.6199 12.167 10.8434 12.2474 10.8702C12.2027 10.8612 12.0687 10.9059 12.0687 10.9059C12.0687 10.9059 12.31 11.1205 12.5156 11.1383C12.6855 11.1473 12.7659 11.0668 12.7659 11.0668L12.7302 10.888C12.7302 10.888 12.6229 10.7629 12.453 10.7003C12.2832 10.6378 12.0508 10.6288 12.0508 10.6288"
                          fill="black"
                        />
                        <path
                          d="M12.8548 10.2264C12.8548 10.2264 12.7117 10.3516 12.667 10.4946C12.6223 10.6376 12.6939 10.8075 12.6939 10.8075L12.819 11.0399C12.819 11.0399 12.9889 10.9505 13.0604 10.8164C13.1319 10.6823 13.1051 10.4946 13.1051 10.4946C13.1051 10.4946 12.971 10.5483 12.9531 10.5661C12.9799 10.4142 12.8548 10.2264 12.8548 10.2264Z"
                          fill="black"
                        />
                        <path
                          d="M12.3824 10.164C12.3824 10.164 12.2126 10.2176 12.0517 10.2087C11.8908 10.1997 11.7656 10.0656 11.7656 10.0656C11.7656 10.0656 11.8908 9.97624 11.9533 9.99412C11.8818 9.9673 11.7835 9.79745 11.7835 9.79745C11.7835 9.79745 11.9265 9.75276 12.0517 9.79745C12.1858 9.84215 12.293 9.98518 12.293 9.98518L12.3735 10.164H12.3824Z"
                          fill="black"
                        />
                        <path
                          d="M12.4442 9.35046C12.4442 9.35046 12.5336 9.52031 12.5068 9.58288C12.5336 9.53819 12.6319 9.48455 12.6319 9.48455C12.6319 9.48455 12.6945 9.76167 12.6319 9.93151C12.5694 10.1014 12.3995 10.1729 12.3995 10.1729L12.2118 9.80636C12.2118 9.80636 12.185 9.67228 12.2386 9.55607C12.3012 9.44879 12.4353 9.35046 12.4353 9.35046H12.4442Z"
                          fill="black"
                        />
                        <path
                          d="M11.353 8.89456C11.353 8.89456 11.5318 8.87668 11.6927 8.93926C11.8357 9.00183 11.8715 9.10016 11.8715 9.10016L11.943 9.27895C11.943 9.27895 11.7463 9.35046 11.5943 9.29682C11.4424 9.24319 11.3262 9.05547 11.3262 9.05547C11.3262 9.05547 11.4334 9.01077 11.4781 9.02865C11.4156 9.00183 11.353 8.88562 11.353 8.88562"
                          fill="black"
                        />
                        <path
                          d="M11.9258 8.55481C11.9258 8.55481 12.0063 8.65314 12.0152 8.77829C12.0331 8.71572 12.1314 8.6442 12.1314 8.6442C12.1314 8.6442 12.2387 8.8945 12.2119 9.06435C12.185 9.24313 12.042 9.34146 12.042 9.34146L11.8543 8.99283C11.8543 8.99283 11.8007 8.8498 11.8096 8.74253C11.8275 8.63526 11.9258 8.55481 11.9258 8.55481Z"
                          fill="black"
                        />
                        <path
                          d="M11.3001 7.8844C11.3001 7.8844 11.2643 8.07212 11.3269 8.17939C11.3806 8.27772 11.4074 8.2956 11.4074 8.2956C11.318 8.23303 11.166 8.22409 11.166 8.22409C11.166 8.22409 11.2197 8.42969 11.3448 8.52802C11.4699 8.62635 11.6577 8.59954 11.6577 8.59954C11.6577 8.59954 11.7828 8.43863 11.7739 8.25985C11.7739 8.08106 11.6219 7.89334 11.6219 7.89334C11.6219 7.89334 11.5683 8.00955 11.5683 8.09894C11.5325 8.00955 11.309 7.8844 11.309 7.8844H11.3001Z"
                          fill="black"
                        />
                        <path
                          d="M11.3535 8.00061C11.3535 8.00061 11.3535 8.1347 11.3893 8.21515C11.434 8.2956 11.5412 8.32242 11.5412 8.32242C11.5412 8.32242 11.5412 8.17939 11.4965 8.10788C11.4518 8.02743 11.3535 8.00061 11.3535 8.00061Z"
                          fill="#285F37"
                        />
                        <path
                          d="M11.2559 8.31348C11.2559 8.31348 11.3721 8.31348 11.4436 8.37605C11.5151 8.42969 11.5419 8.53696 11.5419 8.53696C11.5419 8.53696 11.4615 8.53696 11.3899 8.49226C11.3184 8.43863 11.2559 8.31348 11.2559 8.31348Z"
                          fill="#285F37"
                        />
                        <path
                          d="M11.6307 8.03641C11.6307 8.03641 11.586 8.1258 11.5949 8.22413C11.5949 8.32246 11.6575 8.42973 11.6575 8.42973C11.6575 8.42973 11.7111 8.31352 11.7022 8.21519C11.7022 8.11686 11.6396 8.06322 11.6307 8.02747"
                          fill="#285F37"
                        />
                        <path
                          d="M11.4336 8.92141C11.4336 8.92141 11.4962 9.00187 11.5856 9.04656C11.675 9.09126 11.809 9.09126 11.809 9.09126C11.809 9.09126 11.7465 9.00187 11.6481 8.95717C11.5587 8.91248 11.4336 8.91248 11.4336 8.91248"
                          fill="#285F37"
                        />
                        <path
                          d="M11.4609 9.11804C11.4609 9.11804 11.5056 9.1985 11.5861 9.24319C11.6665 9.27895 11.8274 9.27895 11.8274 9.27895C11.8274 9.27895 11.7649 9.1985 11.6844 9.16274C11.604 9.12698 11.4609 9.12698 11.4609 9.12698"
                          fill="#285F37"
                        />
                        <path
                          d="M11.9177 8.66211C11.9177 8.66211 11.873 8.74256 11.873 8.83195C11.873 8.92135 11.9356 9.01074 11.9356 9.01074C11.9356 9.01074 11.9714 8.90347 11.9714 8.81408C11.9714 8.72468 11.9177 8.66211 11.9177 8.66211Z"
                          fill="#285F37"
                        />
                        <path
                          d="M12.0954 8.77832C12.0954 8.77832 12.015 8.88559 11.9971 9.0018C11.9882 9.11801 12.0418 9.23422 12.0418 9.23422C12.0418 9.23422 12.1401 9.13589 12.1491 9.01968C12.158 8.90347 12.0865 8.77832 12.0865 8.77832"
                          fill="#285F37"
                        />
                        <path
                          d="M11.873 9.82422C11.873 9.82422 11.873 9.85998 11.9177 9.90467C11.9535 9.94937 12.0161 9.99406 12.0161 9.99406C12.0161 9.99406 12.0697 9.97619 12.1412 9.99406C12.2127 10.0119 12.3111 10.0745 12.3111 10.0745C12.3111 10.0745 12.2038 9.92255 12.1055 9.86891C11.9982 9.80634 11.882 9.83316 11.882 9.83316"
                          fill="#285F37"
                        />
                        <path
                          d="M11.8535 10.0745C11.8535 10.0745 11.9787 10.0209 12.0949 10.0298C12.2021 10.0477 12.3005 10.1281 12.3005 10.1281C12.3005 10.1281 12.1574 10.1818 12.0502 10.1639C11.9429 10.155 11.8625 10.0745 11.8625 10.0745"
                          fill="#285F37"
                        />
                        <path
                          d="M12.4084 9.47559C12.4084 9.47559 12.2921 9.5918 12.2832 9.69907C12.2832 9.80634 12.3726 9.90467 12.3726 9.90467C12.3726 9.90467 12.3726 9.83315 12.3905 9.78846C12.4084 9.74376 12.4441 9.69907 12.4441 9.69907C12.4441 9.69907 12.462 9.64543 12.453 9.60073C12.4441 9.53816 12.4084 9.47559 12.4084 9.47559Z"
                          fill="#285F37"
                        />
                        <path
                          d="M12.5693 9.60965C12.5693 9.60965 12.4621 9.71692 12.4352 9.83313C12.4084 9.94934 12.4621 10.0745 12.4621 10.0745C12.4621 10.0745 12.5604 9.99403 12.5872 9.87782C12.614 9.76161 12.5783 9.60071 12.5783 9.60071"
                          fill="#285F37"
                        />
                        <path
                          d="M12.847 10.3248C12.847 10.3248 12.8917 10.4321 12.9096 10.5126C12.9096 10.593 12.9096 10.6288 12.9096 10.6288C12.9096 10.6288 12.856 10.6735 12.8381 10.7092C12.8113 10.745 12.8023 10.8165 12.8023 10.8165C12.8023 10.8165 12.6951 10.6645 12.7129 10.5572C12.7308 10.45 12.847 10.3338 12.847 10.3338"
                          fill="#285F37"
                        />
                        <path
                          d="M13.0607 10.5573C13.0607 10.5573 12.9355 10.6466 12.8819 10.736C12.8372 10.8254 12.8551 10.9148 12.8551 10.9148C12.8551 10.9148 12.9534 10.9148 12.9981 10.8165C13.0518 10.7271 13.0518 10.5573 13.0518 10.5573"
                          fill="#285F37"
                        />
                        <path
                          d="M12.2031 10.9237C12.2031 10.9237 12.3908 10.9237 12.5071 10.9505C12.6233 10.9773 12.668 11.0399 12.668 11.0399C12.668 11.0399 12.5428 11.1025 12.4266 11.0757C12.3104 11.0489 12.2121 10.9326 12.2121 10.9326"
                          fill="#285F37"
                        />
                        <path
                          d="M12.168 10.7003C12.168 10.7003 12.2574 10.8344 12.3646 10.879C12.5166 10.9416 12.6954 10.9148 12.6954 10.9148C12.6954 10.9148 12.5971 10.7986 12.4719 10.745C12.3468 10.6913 12.1769 10.7003 12.1769 10.7003"
                          fill="#285F37"
                        />
                        <path
                          d="M12.7754 11.0578V11.1293C12.8916 11.1293 12.9095 11.1204 12.9363 11.1562C12.9542 11.183 12.9989 11.2008 13.0525 11.183C13.0972 11.1651 13.1151 11.1115 13.0972 11.0578C13.0793 11.0131 13.0346 11.0042 12.9899 11.0131C12.9631 11.0131 12.9452 11.0399 12.9274 11.0489C12.8916 11.0668 12.7754 11.0668 12.7754 11.0668"
                          fill="black"
                        />
                        <path
                          d="M13.0515 11.0668C13.0515 11.0668 13.0515 11.1204 13.0246 11.1383C12.9978 11.1472 12.971 11.1383 12.9531 11.1115C12.9531 11.1115 12.9531 11.0578 12.9799 11.0489C13.0068 11.0399 13.0336 11.0489 13.0425 11.0757L13.0515 11.0668Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M12.7653 11.0042L12.8189 11.0399C12.7564 11.1382 12.7474 11.1472 12.7564 11.1919C12.7564 11.2187 12.7564 11.2723 12.7117 11.2991C12.667 11.326 12.6133 11.317 12.5865 11.2723C12.5597 11.2276 12.5686 11.1919 12.5954 11.1561C12.6133 11.1382 12.6401 11.1382 12.658 11.1204C12.6938 11.0935 12.7564 11.0042 12.7564 11.0042"
                          fill="black"
                        />
                        <path
                          d="M12.6225 11.2456C12.6225 11.2456 12.6672 11.2724 12.694 11.2635C12.7209 11.2456 12.7209 11.2188 12.703 11.1919C12.703 11.1919 12.6583 11.1651 12.6404 11.1741C12.6136 11.1919 12.6136 11.2188 12.6225 11.2456Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M12.382 10.1997V10.2712C12.4982 10.2712 12.5161 10.2622 12.5429 10.298C12.5608 10.3248 12.6055 10.3427 12.6502 10.3248C12.6949 10.3069 12.7217 10.2444 12.6949 10.1997C12.677 10.155 12.6323 10.146 12.5876 10.155C12.5608 10.155 12.5429 10.1818 12.525 10.1907C12.4803 10.2175 12.373 10.2086 12.373 10.2086"
                          fill="black"
                        />
                        <path
                          d="M12.6597 10.2086C12.6597 10.2086 12.6597 10.2623 12.6418 10.2712C12.615 10.2801 12.5882 10.2712 12.5703 10.2444C12.5703 10.2444 12.5703 10.1908 12.5971 10.1818C12.6239 10.1729 12.6508 10.1818 12.6597 10.2086Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M12.409 10.2176L12.4537 10.2623C12.3822 10.3516 12.3554 10.3516 12.3733 10.3963C12.3733 10.4232 12.3643 10.4768 12.3107 10.4947C12.266 10.5126 12.2124 10.4947 12.1945 10.45C12.1677 10.4053 12.1945 10.3606 12.2302 10.3427C12.2481 10.3248 12.2749 10.3248 12.3018 10.3159C12.3465 10.298 12.418 10.2086 12.418 10.2086"
                          fill="black"
                        />
                        <path
                          d="M12.2291 10.4411C12.2291 10.4411 12.2648 10.4768 12.2917 10.4679C12.3185 10.459 12.3274 10.4232 12.3185 10.4053C12.3185 10.4053 12.2738 10.3696 12.247 10.3785C12.2201 10.3874 12.2112 10.4232 12.2201 10.4411H12.2291Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M12.007 9.3951V9.46661C12.1232 9.46661 12.1411 9.45768 12.1679 9.49343C12.1858 9.52025 12.2305 9.53813 12.2752 9.52025C12.3199 9.49343 12.3467 9.44874 12.3199 9.3951C12.293 9.35041 12.2573 9.34147 12.2126 9.35041C12.1858 9.35041 12.1679 9.37722 12.15 9.38616C12.1053 9.40404 11.998 9.40404 11.998 9.40404"
                          fill="black"
                        />
                        <path
                          d="M12.2828 9.40407C12.2828 9.40407 12.2828 9.45771 12.2559 9.46665C12.2291 9.47559 12.2023 9.46665 12.1934 9.43983C12.1934 9.43983 12.1934 9.38619 12.2202 9.37725C12.247 9.36831 12.2738 9.37725 12.2828 9.40407Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M12.034 9.37732L12.0787 9.42202C12.0072 9.51141 11.9893 9.51141 11.9983 9.5561C11.9983 9.58292 11.9893 9.63656 11.9446 9.65444C11.8999 9.67231 11.8463 9.65444 11.8195 9.60974C11.7927 9.56504 11.8195 9.52929 11.8552 9.50247C11.8821 9.48459 11.8999 9.48459 11.9268 9.47565C11.9715 9.45777 12.034 9.37732 12.034 9.37732Z"
                          fill="black"
                        />
                        <path
                          d="M11.8535 9.60075C11.8535 9.60075 11.8982 9.63651 11.925 9.62757C11.9518 9.61863 11.9608 9.58287 11.9518 9.565C11.9518 9.565 11.9161 9.52924 11.8893 9.53818C11.8625 9.54712 11.8535 9.58287 11.8625 9.60969L11.8535 9.60075Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M11.5949 8.54586V8.61737C11.7111 8.61737 11.729 8.60843 11.7558 8.64419C11.7737 8.67101 11.8184 8.68888 11.8631 8.67101C11.9077 8.65313 11.9256 8.59949 11.9077 8.54586C11.8809 8.50116 11.8452 8.49222 11.8005 8.50116C11.7737 8.50116 11.7647 8.52798 11.7379 8.53692C11.6932 8.5548 11.5859 8.5548 11.5859 8.5548"
                          fill="black"
                        />
                        <path
                          d="M11.8804 8.55483C11.8804 8.55483 11.8804 8.60846 11.8536 8.6174C11.8268 8.62634 11.8 8.6174 11.791 8.59058C11.791 8.59058 11.791 8.53695 11.8178 8.52801C11.8447 8.51907 11.8804 8.52801 11.8893 8.55483H11.8804Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M11.6309 8.53702L11.6756 8.58171C11.604 8.66216 11.5772 8.6711 11.5862 8.7158C11.5862 8.74262 11.5772 8.79625 11.5325 8.81413C11.4878 8.84095 11.4253 8.81413 11.4074 8.76944C11.3806 8.72474 11.4074 8.68004 11.4431 8.66216C11.461 8.64429 11.4878 8.64429 11.5146 8.63535C11.5593 8.61747 11.6309 8.52808 11.6309 8.52808"
                          fill="black"
                        />
                        <path
                          d="M11.4517 8.75151C11.4517 8.75151 11.4875 8.78727 11.5143 8.77833C11.5411 8.76939 11.5501 8.74257 11.5411 8.71576C11.5411 8.71576 11.4964 8.68 11.4696 8.69788C11.4428 8.70682 11.4339 8.73363 11.4428 8.76045"
                          fill="#F9F92B"
                        />
                        <path
                          d="M12.3099 9.99405C12.3099 9.99405 12.2116 9.83315 12.1669 9.74375C12.1222 9.64542 12.0328 9.49346 12.0596 9.48452C12.0864 9.47558 12.1222 9.54709 12.1669 9.65436C12.2116 9.75269 12.3457 9.98511 12.3099 10.003"
                          fill="#F9F92B"
                        />
                        <path
                          d="M11.8892 9.07327C11.8892 9.07327 11.7998 8.97494 11.764 8.87661C11.7193 8.77828 11.6746 8.70676 11.7015 8.69783C11.7283 8.68889 11.773 8.76934 11.8087 8.84979C11.8445 8.93025 11.9249 9.05539 11.8892 9.07327Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M12.8552 11.174C12.8552 11.174 12.6854 10.8969 12.5692 10.6466C12.4619 10.4052 12.3725 10.2086 12.3993 10.1907C12.4262 10.1817 12.5155 10.4052 12.6318 10.6555C12.748 10.9058 12.8731 11.1651 12.8552 11.174Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M13.0977 8.39392L13.1066 9.88677L13.2139 10.0656L13.9111 10.4499L14.805 10.8522L14.9123 10.9774L15.6811 10.5572L16.5839 10.1281L16.7538 9.86889V8.40286L13.0977 8.39392Z"
                          fill="#2E59A0"
                        />
                        <path
                          d="M13.0617 6.59717L13.1064 6.73126V8.44758L13.16 8.5191L13.6874 8.58167L14.2595 8.50122C14.2595 8.50122 14.5903 8.55486 14.8227 8.59061V8.62637C14.8227 8.62637 14.9032 8.61743 14.93 8.60849C14.9568 8.60849 15.0372 8.62637 15.0372 8.62637V8.59061C15.2697 8.55486 15.6004 8.50122 15.6004 8.50122L16.1725 8.58167L16.6999 8.5191L16.7625 8.44758V6.73126L16.7983 6.59717H16.1725C16.1725 6.59717 15.4484 6.60611 14.93 6.61505C14.4115 6.61505 13.6874 6.60611 13.6874 6.60611H13.0527L13.0617 6.59717Z"
                          fill="#C11B2C"
                        />
                        <path
                          d="M13.2402 8.51012L13.5263 8.39391L13.723 8.24194L13.857 8.38497L14.1342 8.50118L13.9107 8.62633L13.714 8.80511L13.5442 8.67103L13.2402 8.51012Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M16.1269 8.25098L16.0017 8.38507L15.7246 8.50128L15.9838 8.66218L16.1537 8.81415L16.3325 8.66218L16.6275 8.51915L16.3235 8.394L16.1269 8.25098Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M14.9297 6.8385L14.8403 7.09774L14.59 6.97259L14.7062 7.22289L14.4648 7.32122L14.7062 7.41061L14.5989 7.65197L14.8314 7.53576L14.9297 7.795L15.0191 7.53576L15.2604 7.63409L15.1532 7.41061L15.3945 7.32122L15.1621 7.21395L15.2604 6.96365L15.0191 7.0888L14.9297 6.8385Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M15.5901 6.79388L15.6706 7.07099L15.7868 7.41962L15.8047 7.75931L15.6706 8.00067L15.4203 8.10794L15.2862 8.1437L15.1163 8.06325L14.9376 8.17052L14.7409 8.05431L14.5711 8.16158L14.4727 8.099L14.2939 8.07219L14.0883 7.84871L14.0347 7.46432L14.2939 6.776L13.9811 7.0263L13.7129 7.38387V7.86659L13.9006 8.17946L14.2492 8.40294L14.3386 8.42976L14.1777 8.73369L14.4638 8.81414L14.6068 8.96611L14.6873 9.2611L14.6694 9.88685L14.58 10.0299L14.3923 10.164L14.3833 10.2802L14.5889 10.4143L14.7677 10.5573L15.0359 10.5662L15.2773 10.4053L15.4739 10.2891L15.4203 10.1193L15.2147 9.95836L15.17 9.45776L15.2326 8.95717L15.5276 8.76945L15.6795 8.71581L15.5276 8.40294L15.7689 8.32249L16.046 8.07219L16.1801 7.59841L16.0997 7.30341L15.903 7.06206L15.5901 6.79388Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M14.41 8.94824L14.5352 9.07339L14.4189 9.18066L14.3027 9.06445L14.41 8.94824Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M15.4482 8.93921L15.332 9.06436L15.4393 9.18057L15.5645 9.06436L15.4482 8.93921Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M15.5369 9.26111L15.3134 9.3058L15.2598 9.43095V9.77958L15.3492 9.97625L15.4743 10.0209L15.4564 9.57398L15.5369 9.26111Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M14.3223 9.26111L14.4027 9.64549V10.012L14.51 9.94049L14.5815 9.77064L14.5994 9.47565L14.5457 9.29687L14.3223 9.26111Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M16.2976 9.56494L16.0473 9.44873L15.8149 9.49343L15.6808 9.64539L15.6719 9.87781L15.8507 10.0924L15.8954 10.1013L15.8864 9.87781L16.0741 9.61858L16.2976 9.56494Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M13.9278 9.48457L13.901 9.38624L13.7669 9.30579L13.6507 9.35048L13.5971 9.46669L13.6239 9.56502L13.5077 9.55608L13.4183 9.64548L13.4004 9.76169L13.4719 9.84214L13.5613 9.8779L13.606 9.86896L13.5613 9.97623L13.5971 10.0835L13.7043 10.1461L13.8295 10.1103L13.892 9.99411L13.9993 10.0567L14.1245 10.0388L14.2049 9.91365L14.1513 9.79744L14.0887 9.74381L14.1781 9.69911L14.2139 9.55608L14.0976 9.422L13.9814 9.43987L13.9278 9.48457Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M14.3029 6.69556C14.2851 6.82071 13.6504 7.07994 13.6504 7.6163C13.6504 8.29568 14.2851 8.45658 14.2851 8.45658L14.2583 8.50128L14.1063 8.77839C14.1063 8.77839 14.3655 8.78733 14.5086 8.91248C14.6784 9.05551 14.6605 9.35944 14.6605 9.57398C14.6605 9.74383 14.6337 9.93155 14.5532 10.0031C14.437 10.1014 14.3476 10.1103 14.3476 10.2265C14.3476 10.3249 14.4281 10.3428 14.5532 10.4143C14.7142 10.4947 14.7052 10.6109 14.9376 10.6109C15.1701 10.6109 15.1701 10.4947 15.331 10.4143C15.4561 10.3517 15.5276 10.3338 15.5276 10.2265C15.5276 10.1103 15.4472 10.1014 15.331 10.0031C15.2416 9.92261 15.2237 9.74383 15.2237 9.57398C15.2237 9.3505 15.2058 9.05551 15.3757 8.91248C15.5187 8.79627 15.7779 8.77839 15.7779 8.77839L15.626 8.50128L15.5991 8.45658C15.5991 8.45658 16.2338 8.29568 16.2338 7.6163C16.2338 7.08888 15.5991 6.82964 15.5813 6.69556C15.5187 6.9101 15.7958 7.21403 15.7958 7.5716C15.7958 8.03644 15.4561 8.05432 15.4561 8.05432C15.3757 8.05432 15.3399 8.10795 15.3131 8.10795C15.2416 8.10795 15.2147 8.01856 15.1432 8.01856C15.0807 8.01856 15.036 8.11689 14.9466 8.11689C14.8572 8.11689 14.8214 8.01856 14.7588 8.01856C14.6963 8.01856 14.6605 8.10795 14.5979 8.10795C14.5622 8.10795 14.5354 8.05432 14.4549 8.05432C14.4549 8.05432 14.1152 8.0275 14.1152 7.5716C14.1152 7.21403 14.3923 6.9101 14.3298 6.69556M15.6349 8.50128C15.6349 8.50128 16.064 8.689 16.1712 8.84991C16.4126 8.66218 16.7344 8.51916 16.7344 8.51916C16.7344 8.51916 16.4305 8.4387 16.1712 8.21522C16.0193 8.41189 15.6349 8.50128 15.6349 8.50128ZM14.2851 8.50128C14.2851 8.50128 13.8917 8.40295 13.7487 8.21522C13.4895 8.44764 13.1855 8.51916 13.1855 8.51916C13.1855 8.51916 13.5074 8.66218 13.7487 8.84991C13.8649 8.689 14.2851 8.50128 14.2851 8.50128ZM14.9555 6.74919L14.8482 7.06206L14.5532 6.91904L14.6963 7.22297L14.3834 7.33024L14.6963 7.43751L14.5532 7.74144L14.8482 7.59842L14.9555 7.91129L15.0717 7.59842L15.3667 7.74144L15.2237 7.43751L15.5366 7.33024L15.2237 7.22297L15.3667 6.91904L15.0717 7.06206L14.9555 6.74919ZM14.2404 6.89222C14.2672 6.94585 14.0258 7.29448 14.0258 7.58054C14.0258 7.92917 14.2136 8.13477 14.4549 8.13477C14.4996 8.13477 14.5532 8.19734 14.5979 8.19734C14.6695 8.19734 14.7142 8.11689 14.7588 8.11689C14.8214 8.11689 14.8572 8.20628 14.9466 8.20628C15.036 8.20628 15.0896 8.11689 15.1432 8.11689C15.1879 8.11689 15.2326 8.19734 15.3131 8.19734C15.3578 8.19734 15.4114 8.13477 15.4561 8.13477C15.7064 8.13477 15.8852 7.92917 15.8852 7.58054C15.8852 7.29448 15.6438 6.94585 15.6706 6.89222C15.6706 6.89222 16.1355 7.22297 16.1355 7.6163C16.1355 8.25098 15.4919 8.40295 15.4919 8.40295L15.6349 8.72476C15.6349 8.72476 15.4382 8.75158 15.322 8.84991C15.1522 8.98399 15.1522 9.33262 15.1522 9.57398C15.1522 9.86004 15.1522 9.97625 15.2594 10.0478C15.3667 10.1282 15.4472 10.1461 15.4472 10.2265C15.4472 10.2981 15.3667 10.3249 15.2594 10.3785C15.1343 10.4321 15.1254 10.5305 14.9466 10.5305C14.7678 10.5305 14.7588 10.4321 14.6337 10.3785C14.5264 10.3338 14.446 10.307 14.446 10.2265C14.446 10.1461 14.5264 10.1282 14.6337 10.0478C14.741 9.96731 14.741 9.8511 14.741 9.57398C14.741 9.34156 14.741 8.98399 14.5801 8.84991C14.4549 8.75158 14.2583 8.72476 14.2583 8.72476L14.4013 8.40295C14.4013 8.40295 13.7577 8.24204 13.7577 7.6163C13.7577 7.22297 14.2225 6.89222 14.2225 6.89222M14.9466 6.95479L15.0181 7.15146L15.2058 7.06206L15.1164 7.24979L15.3131 7.3213L15.1164 7.39282L15.2058 7.58054L15.0181 7.49115L14.9466 7.68781L14.8751 7.49115L14.6873 7.58054L14.7767 7.39282L14.5801 7.3213L14.7767 7.24979L14.6873 7.06206L14.8751 7.15146L14.9466 6.95479ZM13.7308 8.30462C13.856 8.45658 14.0616 8.51022 14.0616 8.51022C14.0616 8.51022 13.847 8.61749 13.7308 8.75158V8.7337C13.6057 8.62643 13.3643 8.51022 13.3643 8.51022C13.3643 8.51022 13.5968 8.42976 13.7308 8.28674M16.1623 8.28674C16.3053 8.42976 16.5288 8.51022 16.5288 8.51022C16.5288 8.51022 16.2875 8.62643 16.1623 8.7337V8.75158C16.0461 8.60855 15.8316 8.50128 15.8316 8.50128C15.8316 8.50128 16.0372 8.44764 16.1623 8.29568M14.4281 8.90354L14.2761 9.05551L14.4281 9.20748L14.5801 9.05551L14.4281 8.90354ZM15.4561 8.90354L15.3041 9.05551L15.4561 9.20748L15.6081 9.05551L15.4561 8.90354ZM14.4281 8.97506L14.5086 9.05551L14.4281 9.13596L14.3476 9.05551L14.4281 8.97506ZM15.4561 8.97506L15.5366 9.05551L15.4561 9.13596L15.3757 9.05551L15.4561 8.97506ZM14.294 9.20748C14.3208 9.27899 14.3923 9.51141 14.3923 9.78852C14.3923 9.97625 14.3745 10.0835 14.3745 10.0835C14.3745 10.0835 14.589 10.0209 14.6337 9.8064C14.6516 9.70807 14.6784 9.33262 14.5711 9.26111L14.294 9.20748ZM15.5991 9.20748L15.322 9.26111C15.2147 9.32369 15.2416 9.69913 15.2594 9.8064C15.3041 10.0209 15.5187 10.0835 15.5187 10.0835C15.5187 10.0835 15.5008 9.98519 15.5008 9.78852C15.5008 9.51141 15.5723 9.27899 15.5991 9.20748ZM13.7666 9.27005C13.7666 9.27005 13.7487 9.27005 13.7308 9.27005C13.6325 9.29687 13.5699 9.38626 13.5968 9.49353C13.5968 9.50247 13.5968 9.52035 13.6146 9.52929C13.6057 9.52929 13.5878 9.52929 13.5699 9.52929H13.5521C13.4627 9.52929 13.3822 9.6008 13.3733 9.69913C13.3733 9.79746 13.4448 9.88686 13.5431 9.88686C13.561 9.88686 13.5699 9.88686 13.5878 9.88686C13.5878 9.8958 13.5699 9.91367 13.561 9.92261C13.5252 10.012 13.561 10.1193 13.6683 10.155C13.7577 10.1908 13.8649 10.1461 13.9007 10.0567C13.9007 10.0388 13.9096 10.0299 13.9096 10.012C13.9096 10.0209 13.9275 10.0299 13.9454 10.0478C14.0169 10.1103 14.1331 10.1014 14.1957 10.0209C14.2583 9.94943 14.2493 9.83322 14.1689 9.77065C14.1599 9.77065 14.142 9.75277 14.1331 9.74383C14.142 9.74383 14.1599 9.73489 14.1689 9.72595C14.2493 9.67231 14.2761 9.56504 14.2225 9.47565C14.1867 9.42202 14.1242 9.38626 14.0527 9.3952C14.0258 9.3952 13.999 9.40414 13.9722 9.42202C13.9633 9.42202 13.9454 9.43989 13.9364 9.44883C13.9364 9.43096 13.9364 9.42202 13.9364 9.40414C13.9186 9.32369 13.8381 9.26111 13.7487 9.27005M14.3745 9.28793L14.5264 9.32369C14.5801 9.3952 14.5711 9.52035 14.5711 9.69913C14.5711 9.87792 14.446 9.94049 14.446 9.94049C14.446 9.52035 14.4013 9.42202 14.3834 9.29687M15.5008 9.29687C15.474 9.42202 15.4293 9.52035 15.4293 9.94049C15.4293 9.94049 15.3041 9.86898 15.3041 9.69913C15.3041 9.52929 15.3041 9.40414 15.3488 9.32369L15.5008 9.28793V9.29687ZM13.7755 9.3505C13.8381 9.3505 13.9007 9.38626 13.9186 9.45777C13.9186 9.47565 13.9186 9.48459 13.9186 9.50247C13.9186 9.51141 13.9186 9.52929 13.9186 9.53823C13.8917 9.53823 13.8739 9.52929 13.847 9.52929C13.7845 9.52929 13.7308 9.5561 13.6951 9.6008C13.6861 9.59186 13.6772 9.58292 13.6683 9.57398C13.6683 9.56504 13.6504 9.54717 13.6504 9.52929C13.6325 9.45777 13.6772 9.37732 13.7487 9.35944C13.7487 9.35944 13.7666 9.35944 13.7755 9.35944M16.0193 9.41308C15.7869 9.41308 15.617 9.59186 15.6438 9.8064C15.6617 9.98519 15.8137 10.1461 15.9925 10.1908C15.9567 10.1372 15.9388 10.0835 15.9388 10.0209C15.912 9.8064 16.0819 9.62762 16.3143 9.62762C16.35 9.62762 16.3858 9.62762 16.4215 9.6455C16.3411 9.51141 16.1891 9.42202 16.0193 9.42202M14.0616 9.46671C14.0616 9.46671 14.142 9.49353 14.1689 9.52929C14.2136 9.59186 14.1957 9.68125 14.1242 9.72595C14.1152 9.72595 14.0973 9.73489 14.0795 9.74383C14.0616 9.74383 14.0527 9.74383 14.0437 9.74383C14.0437 9.65444 13.999 9.58292 13.9275 9.54717C13.9275 9.53823 13.9364 9.52035 13.9454 9.51141C13.9454 9.50247 13.9633 9.49353 13.9811 9.48459C14.008 9.47565 14.0348 9.45777 14.0616 9.46671ZM16.0193 9.50247C16.0908 9.50247 16.1623 9.52035 16.2159 9.56504C15.9925 9.60974 15.8316 9.8064 15.8494 10.0388C15.7779 9.97625 15.7243 9.89579 15.7153 9.81534C15.6975 9.6455 15.8226 9.51141 16.0103 9.51141M13.5968 9.59186C13.5968 9.59186 13.6236 9.59186 13.6414 9.6008C13.6504 9.6008 13.6683 9.60974 13.6683 9.61868C13.6414 9.65444 13.6236 9.69913 13.6236 9.74383C13.6236 9.77959 13.6325 9.81534 13.6504 9.84216C13.6414 9.84216 13.6236 9.86004 13.6146 9.86004C13.6057 9.86004 13.5878 9.86004 13.5699 9.86004C13.4895 9.86004 13.4358 9.78852 13.4448 9.70807C13.4448 9.62762 13.5163 9.57398 13.5968 9.57398M13.8381 9.59186C13.9096 9.59186 13.9722 9.65444 13.9722 9.72595C13.9722 9.79746 13.9096 9.86004 13.8381 9.86004C13.7577 9.86004 13.6951 9.79746 13.6951 9.72595C13.6951 9.65444 13.7577 9.59186 13.8381 9.59186ZM14.0348 9.74383C14.0348 9.74383 14.0616 9.74383 14.0705 9.75277C14.0884 9.75277 14.0973 9.76171 14.1063 9.77065C14.1689 9.82428 14.1689 9.90473 14.1242 9.96731C14.0795 10.0299 13.9811 10.0388 13.9275 9.98519C13.9186 9.97625 13.9096 9.95837 13.9007 9.94943C13.9007 9.94049 13.8917 9.92261 13.8828 9.91367C13.9633 9.8958 14.0169 9.82428 14.0258 9.73489M13.6504 9.83322C13.6861 9.88686 13.7487 9.92261 13.8202 9.92261C13.8202 9.92261 13.847 9.92261 13.8649 9.92261C13.8649 9.94049 13.8649 9.94943 13.8649 9.95837C13.8649 9.97625 13.8649 9.98519 13.856 10.0031C13.8292 10.0746 13.7487 10.1103 13.6772 10.0835C13.6057 10.0567 13.5699 9.97625 13.5968 9.90473C13.5968 9.88686 13.6146 9.87792 13.6236 9.86898C13.6236 9.86004 13.6414 9.8511 13.6504 9.84216M14.6784 10.1729C14.5532 10.1729 14.4728 10.1997 14.4728 10.2355C14.4728 10.2712 14.5532 10.2981 14.6784 10.2981C14.7142 10.2981 14.7499 10.2802 14.7499 10.2355C14.7499 10.1908 14.7142 10.1729 14.6784 10.1729ZM15.1611 10.1729C15.1611 10.1729 15.0896 10.1908 15.0896 10.2355C15.0896 10.2802 15.1254 10.2981 15.1611 10.2981C15.2863 10.2981 15.3667 10.2712 15.3667 10.2355C15.3667 10.1997 15.2863 10.1729 15.1611 10.1729Z"
                          fill="black"
                        />
                        <path
                          d="M12.8906 6.55249C12.8906 6.55249 13.0605 6.67764 13.0605 6.80279V9.83318C13.0605 9.91363 13.0873 9.96727 13.123 10.0209C13.1588 10.0745 13.2482 10.155 13.3376 10.2086C13.6058 10.3785 14.0527 10.5662 14.3835 10.7182C14.6695 10.8433 14.7768 10.8969 14.9288 11.0757C15.0807 10.8969 15.1969 10.8433 15.4741 10.7182C15.8137 10.5662 16.2607 10.3785 16.5199 10.2086C16.6093 10.155 16.6898 10.0745 16.7345 10.0209C16.7702 9.96727 16.7971 9.92257 16.7971 9.83318V6.80279C16.7971 6.67764 16.9669 6.55249 16.9669 6.55249H12.8996H12.8906ZM13.1052 6.65082H16.7524C16.7524 6.65082 16.6987 6.70446 16.6987 6.80279V9.83318C16.6987 9.9047 16.6362 10.0567 16.2339 10.2533C15.5813 10.5751 15.0718 10.736 14.9288 10.9148C14.7768 10.7271 14.2762 10.5751 13.6236 10.2533C13.2303 10.0567 13.1588 9.9047 13.1588 9.83318V6.80279C13.1588 6.70446 13.1052 6.65082 13.1052 6.65082Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M14.8407 4.702C14.8407 4.76457 14.7782 4.80927 14.6977 4.80927C14.6173 4.80927 14.5547 4.76457 14.5547 4.702C14.5547 4.63942 14.6173 4.59473 14.6977 4.59473C14.7782 4.59473 14.8407 4.63942 14.8407 4.702Z"
                          fill="black"
                        />
                        <path
                          d="M14.0176 4.63944C14.0176 4.63944 14.0623 4.55005 14.1874 4.55005C14.2321 4.55005 14.402 4.55005 14.402 4.55005C14.4288 4.60368 14.5182 4.70202 14.5182 4.80035C14.5182 4.80035 14.4198 4.62156 14.1427 4.62156C14.0712 4.62156 14.0265 4.64838 14.0265 4.64838"
                          fill="#C11B2C"
                        />
                        <path
                          d="M14.3751 4.65734C14.3751 4.65734 14.3125 4.63946 14.3125 4.61264C14.3125 4.58582 14.3483 4.58582 14.3661 4.61264C14.384 4.63052 14.384 4.66628 14.384 4.66628"
                          fill="black"
                        />
                        <path
                          d="M14.4727 4.82723C14.4727 4.82723 14.419 4.88981 14.4011 4.92556C14.3386 4.89875 14.2402 4.80042 14.2402 4.80042C14.2402 4.80042 14.3296 4.85405 14.4727 4.83617"
                          fill="#C11B2C"
                        />
                        <path
                          d="M18.8368 7.95596L18.6222 8.11687L18.6491 8.1705C18.6491 8.1705 18.6133 8.17944 18.5954 8.2152C18.5776 8.25095 18.6044 8.30459 18.6044 8.30459C18.6044 8.30459 18.3988 8.28671 18.363 8.30459C18.3362 8.32247 18.372 8.4655 18.363 8.59064C18.3362 8.76049 18.2647 8.74261 18.2647 8.77837C18.2647 8.81412 18.2915 8.85882 18.2915 8.85882C18.2915 8.85882 18.2557 8.86776 18.2468 8.88564C18.2379 8.91246 18.2557 8.95715 18.2468 8.99291C18.1574 9.17169 18.0233 9.43093 17.9339 9.60078C17.925 9.62759 17.8892 9.63653 17.8714 9.66335C17.8624 9.69017 17.8714 9.73486 17.8714 9.73486C17.8714 9.73486 17.8177 9.73486 17.7909 9.77956C17.773 9.82426 17.7909 9.87789 17.7909 9.87789C17.7909 9.87789 17.7551 9.87789 17.7373 9.92259C17.7194 9.95834 17.7551 9.98516 17.7373 9.9941C17.6211 10.2265 17.478 10.5036 17.3886 10.6645C17.3618 10.7271 17.2456 10.7361 17.183 10.8612C17.1294 10.9864 17.2099 11.0757 17.2099 11.0757C17.2099 11.0757 17.1205 11.0757 17.0936 11.1294C17.0758 11.1741 17.0936 11.2545 17.1562 11.2813C17.2188 11.3171 17.2903 11.2813 17.3171 11.2367C17.3439 11.192 17.2903 11.1115 17.2903 11.1115C17.2903 11.1115 17.4155 11.1294 17.478 11.0042C17.5406 10.8791 17.478 10.7808 17.5138 10.7271C17.6032 10.5573 17.7373 10.2891 17.8624 10.0567C17.8624 10.0388 17.9071 10.0567 17.925 10.0209C17.9518 9.98516 17.925 9.9494 17.925 9.9494C17.925 9.9494 17.9786 9.92259 18.0054 9.88683C18.0233 9.85107 17.9965 9.79744 17.9965 9.79744C17.9965 9.79744 18.0412 9.77956 18.0591 9.75274C18.077 9.71699 18.0591 9.69017 18.077 9.66335C18.1663 9.49351 18.3004 9.22533 18.3898 9.05548C18.4077 9.01973 18.4613 9.01079 18.4703 8.98397C18.4792 8.96609 18.4703 8.93033 18.4703 8.93033C18.4703 8.93033 18.5329 8.93033 18.5507 8.90352C18.5776 8.88564 18.5239 8.832 18.6491 8.71579C18.7385 8.6264 18.8725 8.58171 18.8725 8.54595C18.8725 8.51019 18.7385 8.34929 18.7385 8.34929C18.7385 8.34929 18.7921 8.34929 18.81 8.30459C18.8279 8.26883 18.81 8.22414 18.81 8.22414H18.8636V7.94702L18.8368 7.95596ZM16.7897 11.8445C16.7897 11.8445 16.745 11.8624 16.7361 11.8803C16.7361 11.8982 16.7271 11.916 16.7361 11.9428C16.7361 11.9428 16.6646 11.925 16.6467 11.9339C16.6199 11.9428 16.6467 12.2647 16.6467 12.2647C16.6467 12.2647 16.9149 12.0948 16.9149 12.068C16.9149 12.0412 16.8523 11.9965 16.8523 11.9965C16.8702 11.9965 16.888 11.9786 16.897 11.9607C16.897 11.9428 16.9059 11.8892 16.8433 11.8624C16.8165 11.8535 16.7987 11.8445 16.7808 11.8445"
                          fill="black"
                        />
                        <path
                          d="M18.8002 8.03638L18.6751 8.12577L18.7377 8.16153L18.8002 8.19728V8.04532V8.03638ZM18.6751 8.18834C18.6751 8.18834 18.6304 8.20622 18.6214 8.2241C18.6036 8.25986 18.6215 8.29561 18.6572 8.31349C18.693 8.33137 18.7377 8.31349 18.7555 8.28668C18.7734 8.25092 18.7555 8.21516 18.7198 8.18834C18.7019 8.18834 18.693 8.1794 18.6751 8.18834ZM18.4337 8.34031H18.398C18.3801 8.34031 18.398 8.46546 18.398 8.56379C18.398 8.65318 18.3622 8.68 18.3443 8.71576C18.3443 8.74257 18.2728 8.77833 18.2728 8.77833L18.3175 8.82303C18.3175 8.82303 18.3443 8.77833 18.398 8.68894C18.4516 8.58167 18.4516 8.38501 18.4695 8.37607C18.4784 8.36713 18.5946 8.34031 18.5946 8.34031C18.5946 8.34031 18.4874 8.34031 18.4337 8.34031ZM18.6304 8.36713C18.6304 8.36713 18.5142 8.38501 18.4963 8.40288C18.4784 8.42076 18.4784 8.58167 18.4248 8.70682C18.3712 8.81409 18.3443 8.84985 18.3443 8.84985L18.3801 8.86772L18.4158 8.8856C18.4158 8.8856 18.4337 8.84091 18.4874 8.74257C18.5499 8.61743 18.684 8.52803 18.684 8.50122C18.684 8.4744 18.6393 8.36713 18.6393 8.36713M18.6751 8.38501C18.6751 8.38501 18.7198 8.49228 18.7198 8.51016C18.7198 8.52803 18.5678 8.64424 18.5052 8.75151C18.4605 8.84091 18.4427 8.89454 18.4427 8.89454H18.5052C18.5052 8.89454 18.5052 8.84091 18.5142 8.80515C18.5321 8.76939 18.541 8.73364 18.6125 8.68C18.684 8.61743 18.7913 8.56379 18.7913 8.54591C18.7913 8.52803 18.6751 8.38501 18.6751 8.38501ZM18.3175 8.90348C18.3175 8.90348 18.2818 8.91242 18.2728 8.9303C18.2639 8.95712 18.2728 8.98393 18.1745 9.17166C18.1298 9.25211 18.1119 9.28787 18.0672 9.37726C18.0225 9.46665 17.9599 9.60074 17.9599 9.60074C17.9599 9.60074 17.9331 9.64544 17.9778 9.66331C18.0225 9.68119 18.0404 9.6365 18.0404 9.6365C18.0404 9.6365 18.1119 9.51135 18.1566 9.41302C18.2013 9.32362 18.2192 9.29681 18.2639 9.20741C18.3533 9.01969 18.389 9.01075 18.398 8.98393C18.4158 8.95712 18.4158 8.92136 18.3712 8.90348C18.3533 8.90348 18.3443 8.89454 18.3265 8.90348M17.9153 9.68119C17.9153 9.68119 17.8884 9.68119 17.8795 9.69907C17.8706 9.72589 17.8884 9.75271 17.9242 9.77952C17.9689 9.7974 18.0046 9.7974 18.0136 9.77952C18.0315 9.75271 18.0136 9.72589 17.9689 9.70801C17.951 9.69907 17.9331 9.69013 17.9153 9.69907M17.8616 9.80634C17.8616 9.80634 17.8169 9.80634 17.808 9.83316C17.7901 9.86892 17.808 9.90467 17.8616 9.93149C17.9063 9.95831 17.951 9.94937 17.9689 9.92255C17.9778 9.89573 17.9599 9.85104 17.9153 9.82422C17.8974 9.82422 17.8795 9.81528 17.8706 9.80634M17.799 9.94937C17.799 9.94937 17.7722 9.94937 17.7633 9.96725C17.7543 9.99406 17.7633 10.0209 17.808 10.0388C17.8437 10.0566 17.8884 10.0566 17.8974 10.0388C17.9063 10.0119 17.8974 9.98513 17.8527 9.95831C17.8348 9.95831 17.8169 9.94937 17.799 9.94937ZM17.7633 10.0656L17.7275 10.0924C17.7275 10.0924 17.4862 10.5662 17.4057 10.7271C17.3789 10.7807 17.2627 10.8075 17.218 10.8969C17.1733 10.9863 17.2091 11.0668 17.2627 11.0936C17.3163 11.1204 17.4057 11.0936 17.4504 11.0131C17.4951 10.9237 17.4504 10.8165 17.4862 10.7628C17.5666 10.593 17.808 10.1282 17.808 10.1282C17.808 10.1282 17.8348 10.0835 17.7901 10.0656C17.7812 10.0656 17.7722 10.0656 17.7633 10.0656ZM17.1822 11.1472C17.1822 11.1472 17.1286 11.1562 17.1197 11.183C17.1018 11.2187 17.1197 11.2634 17.1644 11.2903C17.2091 11.3171 17.2538 11.2992 17.2716 11.2634C17.2895 11.2277 17.2716 11.183 17.2269 11.1562C17.2091 11.1562 17.1912 11.1472 17.1733 11.1472M16.7979 11.8981C16.7979 11.8981 16.771 11.8981 16.771 11.916C16.771 11.9339 16.78 11.9607 16.8157 11.9786C16.8515 11.9964 16.8872 11.9964 16.8872 11.9786C16.8962 11.9607 16.8872 11.9339 16.8425 11.916C16.8247 11.916 16.8068 11.9071 16.7979 11.9071M16.6816 11.9964V12.2289L16.8694 12.0948C16.8694 12.0948 16.8425 12.0501 16.7889 12.0233C16.7353 11.9964 16.6816 12.0054 16.6816 12.0054"
                          fill="#F9F92B"
                        />
                        <path
                          d="M14.7963 4.70209C14.7963 4.75573 14.7516 4.80042 14.6979 4.80042C14.6443 4.80042 14.5996 4.75573 14.5996 4.70209C14.5996 4.64846 14.6443 4.60376 14.6979 4.60376C14.7516 4.60376 14.7963 4.64846 14.7963 4.70209Z"
                          fill="#F9F92B"
                        />
                        <path
                          d="M14.7417 4.70204C14.7417 4.70204 14.7239 4.74674 14.697 4.74674C14.6702 4.74674 14.6523 4.72886 14.6523 4.70204C14.6523 4.67523 14.6702 4.65735 14.697 4.65735C14.7239 4.65735 14.7417 4.68417 14.7417 4.70204Z"
                          fill="black"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1022_315">
                      <rect width="30" height="17.503" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  type="text"
                  className="text-[10rem] sm:text-[2.2rem] bg-transparent w-full h-full"
                  id="phone"
                  name="phone"
                  value={phoneValue}
                  onChange={(e) => setPhoneValue(e.target.value)}
                  placeholder="+373"
                  required
                />
              </div>

              {/* <PhoneInput
                className={styles.input}
                id="phone"
                name="phone"
                style={{
                  height: "auto",
                  width: "100%",
                  paddingTop: "0",
                  paddingBottom: "0",
                  borderRadius: "6px",
                  border: "0.5px solid #C4C4C4",
                }}
                placeholder="+373-XXX-XXX-XX"
                country={"md"}
                value={phoneValue}
                onChange={setPhoneValue}
                masks={{ md: "(...) ...-.." }}
              /> */}
              <button
                id="_form_8_submit"
                className={`${styles.button__sending} _submit disabled:cursor-default`}
                type="submit"
                disabled={nameValue.length < 3 || emailValue.length < 5}
              >
                {isToggleLang === "ro" ? "trimite" : "отправить"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
