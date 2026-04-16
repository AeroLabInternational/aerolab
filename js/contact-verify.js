/* ================================================
   contact-verify.js
   Bot-prevention verification modal for contact
   email buttons. Emails are stored as base64 in
   data-email-b64 attributes — never in plain href.
   ================================================ */
(function () {
  'use strict';

  var pendingEmail = null;
  var expectedAnswer = null;

  /* ── Inject modal HTML once ── */
  var MODAL_HTML = [
    '<div id="contact-verify-overlay" role="dialog" aria-modal="true" aria-labelledby="verify-title">',
    '  <div id="contact-verify-modal">',
    '    <button id="contact-verify-close" aria-label="閉じる">&times;</button>',
    '    <h2 id="verify-title">送信前の確認</h2>',
    '    <p id="verify-desc">ロボットでないことを確認するため、以下の計算の答えを入力してください。</p>',
    '    <p id="verify-question" aria-live="polite"></p>',
    '    <input id="verify-input" type="number" inputmode="numeric" autocomplete="off" placeholder="答えを入力" />',
    '    <p id="verify-error" role="alert" aria-live="assertive"></p>',
    '    <button id="verify-submit">メールを開く</button>',
    '  </div>',
    '</div>'
  ].join('\n');

  /* ── Generate a random math question ── */
  function generateQuestion() {
    var a = Math.floor(Math.random() * 9) + 1;
    var b = Math.floor(Math.random() * 9) + 1;
    var useAdd = Math.random() > 0.5;
    var question, answer;

    if (useAdd) {
      question = a + ' + ' + b + ' = ?';
      answer = a + b;
    } else {
      /* Ensure non-negative result */
      if (a < b) { var tmp = a; a = b; b = tmp; }
      question = a + ' − ' + b + ' = ?';
      answer = a - b;
    }

    expectedAnswer = answer;
    document.getElementById('verify-question').textContent = question;
    document.getElementById('verify-input').value = '';
    document.getElementById('verify-error').textContent = '';
  }

  /* ── Decode base64 email safely ── */
  function decodeEmail(b64) {
    try {
      return atob(b64);
    } catch (e) {
      return null;
    }
  }

  /* ── Open modal ── */
  function openModal(email) {
    pendingEmail = email;
    var overlay = document.getElementById('contact-verify-overlay');
    overlay.style.display = 'flex';
    generateQuestion();
    document.getElementById('verify-input').focus();
  }

  /* ── Close modal ── */
  function closeModal() {
    var overlay = document.getElementById('contact-verify-overlay');
    if (overlay) overlay.style.display = 'none';
    pendingEmail = null;
    expectedAnswer = null;
  }

  /* ── Handle submission ── */
  function submitVerify() {
    var raw = document.getElementById('verify-input').value;
    var val = parseInt(raw, 10);

    if (raw === '' || isNaN(val)) {
      document.getElementById('verify-error').textContent = '数値を入力してください。';
      return;
    }

    if (val === expectedAnswer) {
      var email = pendingEmail; /* capture before closeModal clears it */
      closeModal();
      if (email) {
        window.location.href = 'mailto:' + email;
      }
    } else {
      document.getElementById('verify-error').textContent = '答えが正しくありません。もう一度お試しください。';
      generateQuestion();
      document.getElementById('verify-input').focus();
    }
  }

  /* ── Bootstrap on DOM ready ── */
  document.addEventListener('DOMContentLoaded', function () {
    /* Inject modal */
    document.body.insertAdjacentHTML('beforeend', MODAL_HTML);

    /* Close on × button */
    document.getElementById('contact-verify-close').addEventListener('click', closeModal);

    /* Close on backdrop click */
    document.getElementById('contact-verify-overlay').addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });

    /* Submit */
    document.getElementById('verify-submit').addEventListener('click', submitVerify);

    /* Enter key in input */
    document.getElementById('verify-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') submitVerify();
    });

    /* Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    /* Attach to every contact button */
    var buttons = document.querySelectorAll('.contact-inquiry-card-btn[data-email-b64]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var email = decodeEmail(btn.getAttribute('data-email-b64'));
        if (email) openModal(email);
      });
    });
  });
}());
