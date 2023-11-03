'use strict';
var e = require('react'),
  t = function () {
    return (
      (t =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      t.apply(this, arguments)
    );
  };
function n(e, t, n) {
  if (n || 2 === arguments.length)
    for (var r, o = 0, a = t.length; o < a; o++)
      (!r && o in t) ||
        (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
  return e.concat(r || Array.prototype.slice.call(t));
}
function r(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, 'raw', { value: t })
      : (e.raw = t),
    e
  );
}
function o(e) {
  var t = Object.create(null);
  return function (n) {
    return void 0 === t[n] && (t[n] = e(n)), t[n];
  };
}
'function' == typeof SuppressedError && SuppressedError;
var a =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  i = o(function (e) {
    return (
      a.test(e) ||
      (111 === e.charCodeAt(0) &&
        110 === e.charCodeAt(1) &&
        e.charCodeAt(2) < 91)
    );
  }),
  s = '-ms-',
  c = '-moz-',
  l = '-webkit-',
  u = 'comm',
  d = 'rule',
  p = 'decl',
  h = '@import',
  f = '@keyframes',
  m = '@layer',
  g = Math.abs,
  y = String.fromCharCode,
  v = Object.assign;
function w(e) {
  return e.trim();
}
function b(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function x(e, t, n) {
  return e.replace(t, n);
}
function S(e, t) {
  return e.indexOf(t);
}
function k(e, t) {
  return 0 | e.charCodeAt(t);
}
function D(e, t, n) {
  return e.slice(t, n);
}
function E(e) {
  return e.length;
}
function C(e) {
  return e.length;
}
function T(e, t) {
  return t.push(e), e;
}
function N(e, t) {
  return e.filter(function (e) {
    return !b(e, t);
  });
}
var A = 1,
  P = 1,
  I = 0,
  O = 0,
  M = 0,
  Y = '';
function R(e, t, n, r, o, a, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: a,
    line: A,
    column: P,
    length: i,
    return: '',
    siblings: s,
  };
}
function _(e, t) {
  return v(
    R('', null, null, '', null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function F(e) {
  for (; e.root; ) e = _(e.root, { children: [e] });
  T(e, e.siblings);
}
function j() {
  return (M = O > 0 ? k(Y, --O) : 0), P--, 10 === M && ((P = 1), A--), M;
}
function L() {
  return (M = O < I ? k(Y, O++) : 0), P++, 10 === M && ((P = 1), A++), M;
}
function $() {
  return k(Y, O);
}
function H() {
  return O;
}
function z(e, t) {
  return D(Y, e, t);
}
function V(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function W(e) {
  return w(z(O - 1, G(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function U(e) {
  for (; (M = $()) && M < 33; ) L();
  return V(e) > 2 || V(M) > 3 ? '' : ' ';
}
function B(e, t) {
  for (
    ;
    --t &&
    L() &&
    !(M < 48 || M > 102 || (M > 57 && M < 65) || (M > 70 && M < 97));

  );
  return z(e, H() + (t < 6 && 32 == $() && 32 == L()));
}
function G(e) {
  for (; L(); )
    switch (M) {
      case e:
        return O;
      case 34:
      case 39:
        34 !== e && 39 !== e && G(M);
        break;
      case 40:
        41 === e && G(e);
        break;
      case 92:
        L();
    }
  return O;
}
function q(e, t) {
  for (; L() && e + M !== 57 && (e + M !== 84 || 47 !== $()); );
  return '/*' + z(t, O - 1) + '*' + y(47 === e ? e : L());
}
function X(e) {
  for (; !V($()); ) L();
  return z(e, O);
}
function J(e) {
  return (function (e) {
    return (Y = ''), e;
  })(
    K(
      '',
      null,
      null,
      null,
      [''],
      (e = (function (e) {
        return (A = P = 1), (I = E((Y = e))), (O = 0), [];
      })(e)),
      0,
      [0],
      e
    )
  );
}
function K(e, t, n, r, o, a, i, s, c) {
  for (
    var l = 0,
      u = 0,
      d = i,
      p = 0,
      h = 0,
      f = 0,
      m = 1,
      g = 1,
      v = 1,
      w = 0,
      b = '',
      D = o,
      C = a,
      N = r,
      A = b;
    g;

  )
    switch (((f = w), (w = L()))) {
      case 40:
        if (108 != f && 58 == k(A, d - 1)) {
          -1 != S((A += x(W(w), '&', '&\f')), '&\f') && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += W(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += U(f);
        break;
      case 92:
        A += B(H() - 1, 7);
        continue;
      case 47:
        switch ($()) {
          case 42:
          case 47:
            T(Q(q(L(), H()), t, n, c), c);
            break;
          default:
            A += '/';
        }
        break;
      case 123 * m:
        s[l++] = E(A) * v;
      case 125 * m:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            -1 == v && (A = x(A, /\f/g, '')),
              h > 0 &&
                E(A) - d &&
                T(
                  h > 32
                    ? ee(A + ';', r, n, d - 1, c)
                    : ee(x(A, ' ', '') + ';', r, n, d - 2, c),
                  c
                );
            break;
          case 59:
            A += ';';
          default:
            if (
              (T((N = Z(A, t, n, l, u, o, s, b, (D = []), (C = []), d, a)), a),
              123 === w)
            )
              if (0 === u) K(A, t, N, N, D, a, d, s, C);
              else
                switch (99 === p && 110 === k(A, 3) ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    K(
                      e,
                      N,
                      N,
                      r && T(Z(e, N, N, 0, 0, o, s, b, o, (D = []), d, C), C),
                      o,
                      C,
                      d,
                      s,
                      r ? D : C
                    );
                    break;
                  default:
                    K(A, N, N, N, [''], C, 0, s, C);
                }
        }
        (l = u = h = 0), (m = v = 1), (b = A = ''), (d = i);
        break;
      case 58:
        (d = 1 + E(A)), (h = f);
      default:
        if (m < 1)
          if (123 == w) --m;
          else if (125 == w && 0 == m++ && 125 == j()) continue;
        switch (((A += y(w)), w * m)) {
          case 38:
            v = u > 0 ? 1 : ((A += '\f'), -1);
            break;
          case 44:
            (s[l++] = (E(A) - 1) * v), (v = 1);
            break;
          case 64:
            45 === $() && (A += W(L())),
              (p = $()),
              (u = d = E((b = A += X(H())))),
              w++;
            break;
          case 45:
            45 === f && 2 == E(A) && (m = 0);
        }
    }
  return a;
}
function Z(e, t, n, r, o, a, i, s, c, l, u, p) {
  for (
    var h = o - 1, f = 0 === o ? a : [''], m = C(f), y = 0, v = 0, b = 0;
    y < r;
    ++y
  )
    for (var S = 0, k = D(e, h + 1, (h = g((v = i[y])))), E = e; S < m; ++S)
      (E = w(v > 0 ? f[S] + ' ' + k : x(k, /&\f/g, f[S]))) && (c[b++] = E);
  return R(e, t, n, 0 === o ? d : s, c, l, u, p);
}
function Q(e, t, n, r) {
  return R(e, t, n, u, y(M), D(e, 2, -2), 0, r);
}
function ee(e, t, n, r, o) {
  return R(e, t, n, p, D(e, 0, r), D(e, r + 1, -1), r, o);
}
function te(e, t, n) {
  switch (
    (function (e, t) {
      return 45 ^ k(e, 0)
        ? (((((((t << 2) ^ k(e, 0)) << 2) ^ k(e, 1)) << 2) ^ k(e, 2)) << 2) ^
            k(e, 3)
        : 0;
    })(e, t)
  ) {
    case 5103:
      return l + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return l + e + e;
    case 4789:
      return c + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return l + e + c + e + s + e + e;
    case 5936:
      switch (k(e, t + 11)) {
        case 114:
          return l + e + s + x(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return l + e + s + x(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return l + e + s + x(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return l + e + s + e + e;
    case 6165:
      return l + e + s + 'flex-' + e + e;
    case 5187:
      return (
        l + e + x(e, /(\w+).+(:[^]+)/, l + 'box-$1$2' + s + 'flex-$1$2') + e
      );
    case 5443:
      return (
        l +
        e +
        s +
        'flex-item-' +
        x(e, /flex-|-self/g, '') +
        (b(e, /flex-|baseline/)
          ? ''
          : s + 'grid-row-' + x(e, /flex-|-self/g, '')) +
        e
      );
    case 4675:
      return (
        l +
        e +
        s +
        'flex-line-pack' +
        x(e, /align-content|flex-|-self/g, '') +
        e
      );
    case 5548:
      return l + e + s + x(e, 'shrink', 'negative') + e;
    case 5292:
      return l + e + s + x(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        l +
        'box-' +
        x(e, '-grow', '') +
        l +
        e +
        s +
        x(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return l + x(e, /([^-])(transform)/g, '$1' + l + '$2') + e;
    case 6187:
      return (
        x(x(x(e, /(zoom-|grab)/, l + '$1'), /(image-set)/, l + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return x(e, /(image-set\([^]*)/, l + '$1$`$1');
    case 4968:
      return (
        x(
          x(e, /(.+:)(flex-)?(.*)/, l + 'box-pack:$3' + s + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        l +
        e +
        e
      );
    case 4200:
      if (!b(e, /flex-|baseline/)) return s + 'grid-column-align' + D(e, t) + e;
      break;
    case 2592:
    case 3360:
      return s + x(e, 'template-', '') + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (e, n) {
          return (t = n), b(e.props, /grid-\w+-end/);
        })
        ? ~S(e + (n = n[t].value), 'span')
          ? e
          : s +
            x(e, '-start', '') +
            e +
            s +
            'grid-row-span:' +
            (~S(n, 'span') ? b(n, /\d+/) : +b(n, /\d+/) - +b(e, /\d+/)) +
            ';'
        : s + x(e, '-start', '') + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (e) {
          return b(e.props, /grid-\w+-start/);
        })
        ? e
        : s + x(x(e, '-end', '-span'), 'span ', '') + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return x(e, /(.+)-inline(.+)/, l + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (E(e) - 1 - t > 6)
        switch (k(e, t + 1)) {
          case 109:
            if (45 !== k(e, t + 4)) break;
          case 102:
            return (
              x(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + l + '$2-$3$1' + c + (108 == k(e, t + 3) ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~S(e, 'stretch')
              ? te(x(e, 'stretch', 'fill-available'), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return x(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (t, n, r, o, a, i, c) {
          return (
            s +
            n +
            ':' +
            r +
            c +
            (o ? s + n + '-span:' + (a ? i : +i - +r) + c : '') +
            e
          );
        }
      );
    case 4949:
      if (121 === k(e, t + 6)) return x(e, ':', ':' + l) + e;
      break;
    case 6444:
      switch (k(e, 45 === k(e, 14) ? 18 : 11)) {
        case 120:
          return (
            x(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                l +
                (45 === k(e, 14) ? 'inline-' : '') +
                'box$3$1' +
                l +
                '$2$3$1' +
                s +
                '$2box$3'
            ) + e
          );
        case 100:
          return x(e, ':', ':' + s) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return x(e, 'scroll-', 'scroll-snap-') + e;
  }
  return e;
}
function ne(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
  return n;
}
function re(e, t, n, r) {
  switch (e.type) {
    case m:
      if (e.children.length) break;
    case h:
    case p:
      return (e.return = e.return || e.value);
    case u:
      return '';
    case f:
      return (e.return = e.value + '{' + ne(e.children, r) + '}');
    case d:
      if (!E((e.value = e.props.join(',')))) return '';
  }
  return E((n = ne(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
}
function oe(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case p:
        return void (e.return = te(e.value, e.length, n));
      case f:
        return ne([_(e, { value: x(e.value, '@', '@' + l) })], r);
      case d:
        if (e.length)
          return (function (e, t) {
            return e.map(t).join('');
          })((n = e.props), function (t) {
            switch (b(t, (r = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                F(_(e, { props: [x(t, /:(read-\w+)/, ':' + c + '$1')] })),
                  F(_(e, { props: [t] })),
                  v(e, { props: N(n, r) });
                break;
              case '::placeholder':
                F(_(e, { props: [x(t, /:(plac\w+)/, ':' + l + 'input-$1')] })),
                  F(_(e, { props: [x(t, /:(plac\w+)/, ':' + c + '$1')] })),
                  F(_(e, { props: [x(t, /:(plac\w+)/, s + 'input-$1')] })),
                  F(_(e, { props: [t] })),
                  v(e, { props: N(n, r) });
            }
            return '';
          });
    }
}
var ae = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  ie =
    ('undefined' != typeof process &&
      void 0 !== process.env &&
      (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
    'data-styled',
  se = 'undefined' != typeof window && 'HTMLElement' in window,
  ce = Boolean(
    'boolean' == typeof SC_DISABLE_SPEEDY
      ? SC_DISABLE_SPEEDY
      : 'undefined' != typeof process &&
        void 0 !== process.env &&
        void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        '' !== process.env.REACT_APP_SC_DISABLE_SPEEDY
      ? 'false' !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY
      : 'undefined' != typeof process &&
        void 0 !== process.env &&
        void 0 !== process.env.SC_DISABLE_SPEEDY &&
        '' !== process.env.SC_DISABLE_SPEEDY
      ? 'false' !== process.env.SC_DISABLE_SPEEDY &&
        process.env.SC_DISABLE_SPEEDY
      : 'production' !== process.env.NODE_ENV
  ),
  le = /invalid hook call/i,
  ue = new Set(),
  de = function (t, r) {
    if ('production' !== process.env.NODE_ENV) {
      var o = r ? ' with the id of "'.concat(r, '"') : '',
        a =
          'The component '
            .concat(t)
            .concat(o, ' has been created dynamically.\n') +
          "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
        i = console.error;
      try {
        var s = !0;
        (console.error = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          le.test(e)
            ? ((s = !1), ue.delete(a))
            : i.apply(void 0, n([e], t, !1));
        }),
          e.useRef(),
          s && !ue.has(a) && (console.warn(a), ue.add(a));
      } catch (e) {
        le.test(e.message) && ue.delete(a);
      } finally {
        console.error = i;
      }
    }
  },
  pe = Object.freeze([]),
  he = Object.freeze({});
var fe = new Set([
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'u',
    'ul',
    'use',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]),
  me = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  ge = /(^-|-$)/g;
function ye(e) {
  return e.replace(me, '-').replace(ge, '');
}
var ve = /(a)(d)/gi,
  we = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function be(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = we(t % 52) + n;
  return (we(t % 52) + n).replace(ve, '$1-$2');
}
var xe,
  Se = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  ke = function (e) {
    return Se(5381, e);
  };
function De(e) {
  return (
    ('production' !== process.env.NODE_ENV && 'string' == typeof e && e) ||
    e.displayName ||
    e.name ||
    'Component'
  );
}
function Ee(e) {
  return (
    'string' == typeof e &&
    ('production' === process.env.NODE_ENV ||
      e.charAt(0) === e.charAt(0).toLowerCase())
  );
}
var Ce = 'function' == typeof Symbol && Symbol.for,
  Te = Ce ? Symbol.for('react.memo') : 60115,
  Ne = Ce ? Symbol.for('react.forward_ref') : 60112,
  Ae = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Pe = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Ie = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Oe =
    (((xe = {})[Ne] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (xe[Te] = Ie),
    xe);
function Me(e) {
  return ('type' in (t = e) && t.type.$$typeof) === Te
    ? Ie
    : '$$typeof' in e
    ? Oe[e.$$typeof]
    : Ae;
  var t;
}
var Ye = Object.defineProperty,
  Re = Object.getOwnPropertyNames,
  _e = Object.getOwnPropertySymbols,
  Fe = Object.getOwnPropertyDescriptor,
  je = Object.getPrototypeOf,
  Le = Object.prototype;
function $e(e, t, n) {
  if ('string' != typeof t) {
    if (Le) {
      var r = je(t);
      r && r !== Le && $e(e, r, n);
    }
    var o = Re(t);
    _e && (o = o.concat(_e(t)));
    for (var a = Me(e), i = Me(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in Pe || (n && n[c]) || (i && c in i) || (a && c in a))) {
        var l = Fe(t, c);
        try {
          Ye(e, c, l);
        } catch (e) {}
      }
    }
  }
  return e;
}
function He(e) {
  return 'function' == typeof e;
}
function ze(e) {
  return 'object' == typeof e && 'styledComponentId' in e;
}
function Ve(e, t) {
  return e && t ? ''.concat(e, ' ').concat(t) : e || t || '';
}
function We(e, t) {
  if (0 === e.length) return '';
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Ue(e) {
  return (
    null !== e &&
    'object' == typeof e &&
    e.constructor.name === Object.name &&
    !('props' in e && e.$$typeof)
  );
}
function Be(e, t, n) {
  if ((void 0 === n && (n = !1), !n && !Ue(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Be(e[r], t[r]);
  else if (Ue(t)) for (var r in t) e[r] = Be(e[r], t[r]);
  return e;
}
function Ge(e, t) {
  Object.defineProperty(e, 'toString', { value: t });
}
var qe =
  'production' !== process.env.NODE_ENV
    ? {
        1: 'Cannot create styled-component for component: %s.\n\n',
        2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
        3: 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n',
        4: 'The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n',
        5: 'The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n',
        6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
        7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
        8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
        9: 'Missing document `<head>`\n\n',
        10: 'Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n',
        11: '_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n',
        12: 'It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n',
        13: '%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n',
        14: 'ThemeProvider: "theme" prop is required.\n\n',
        15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
        16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
        17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
        18: 'ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`',
      }
    : {};
function Xe() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, a = e.length; o < a; o += 1) r.push(e[o]);
  return (
    r.forEach(function (e) {
      n = n.replace(/%[a-z]/, e);
    }),
    n
  );
}
function Je(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return 'production' === process.env.NODE_ENV
    ? new Error(
        'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
          .concat(e, ' for more information.')
          .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : '')
      )
    : new Error(Xe.apply(void 0, n([qe[e]], t, !1)).trim());
}
var Ke = (function () {
    function e(e) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = e);
    }
    return (
      (e.prototype.indexOfGroup = function (e) {
        for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
        return t;
      }),
      (e.prototype.insertRules = function (e, t) {
        if (e >= this.groupSizes.length) {
          for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
            if ((o <<= 1) < 0) throw Je(16, ''.concat(e));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(n),
            (this.length = o);
          for (var a = r; a < o; a++) this.groupSizes[a] = 0;
        }
        for (
          var i = this.indexOfGroup(e + 1), s = ((a = 0), t.length);
          a < s;
          a++
        )
          this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
      }),
      (e.prototype.clearGroup = function (e) {
        if (e < this.length) {
          var t = this.groupSizes[e],
            n = this.indexOfGroup(e),
            r = n + t;
          this.groupSizes[e] = 0;
          for (var o = n; o < r; o++) this.tag.deleteRule(n);
        }
      }),
      (e.prototype.getGroup = function (e) {
        var t = '';
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for (
          var n = this.groupSizes[e],
            r = this.indexOfGroup(e),
            o = r + n,
            a = r;
          a < o;
          a++
        )
          t += ''.concat(this.tag.getRule(a)).concat('/*!sc*/\n');
        return t;
      }),
      e
    );
  })(),
  Ze = new Map(),
  Qe = new Map(),
  et = 1,
  tt = function (e) {
    if (Ze.has(e)) return Ze.get(e);
    for (; Qe.has(et); ) et++;
    var t = et++;
    if (
      'production' !== process.env.NODE_ENV &&
      ((0 | t) < 0 || t > 1073741824)
    )
      throw Je(16, ''.concat(t));
    return Ze.set(e, t), Qe.set(t, e), t;
  },
  nt = function (e, t) {
    Ze.set(e, t), Qe.set(t, e);
  },
  rt = 'style['
    .concat(ie, '][')
    .concat('data-styled-version', '="')
    .concat('6.1.0', '"]'),
  ot = new RegExp(
    '^'.concat(ie, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  at = function (e, t, n) {
    for (var r, o = n.split(','), a = 0, i = o.length; a < i; a++)
      (r = o[a]) && e.registerName(t, r);
  },
  it = function (e, t) {
    for (
      var n,
        r = (null !== (n = t.textContent) && void 0 !== n ? n : '').split(
          '/*!sc*/\n'
        ),
        o = [],
        a = 0,
        i = r.length;
      a < i;
      a++
    ) {
      var s = r[a].trim();
      if (s) {
        var c = s.match(ot);
        if (c) {
          var l = 0 | parseInt(c[1], 10),
            u = c[2];
          0 !== l && (nt(u, l), at(e, u, c[3]), e.getTag().insertRules(l, o)),
            (o.length = 0);
        } else o.push(s);
      }
    }
  };
var st = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      o = (function (e) {
        var t = Array.from(e.querySelectorAll('style['.concat(ie, ']')));
        return t[t.length - 1];
      })(n),
      a = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(ie, 'active'),
      r.setAttribute('data-styled-version', '6.1.0');
    var i = 'undefined' != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
    return i && r.setAttribute('nonce', i), n.insertBefore(r, a), r;
  },
  ct = (function () {
    function e(e) {
      (this.element = st(e)),
        this.element.appendChild(document.createTextNode('')),
        (this.sheet = (function (e) {
          if (e.sheet) return e.sheet;
          for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
            var o = t[n];
            if (o.ownerNode === e) return o;
          }
          throw Je(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (e, t) {
        try {
          return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e) {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (e) {
        this.sheet.deleteRule(e), this.length--;
      }),
      (e.prototype.getRule = function (e) {
        var t = this.sheet.cssRules[e];
        return t && t.cssText ? t.cssText : '';
      }),
      e
    );
  })(),
  lt = (function () {
    function e(e) {
      (this.element = st(e)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (e, t) {
        if (e <= this.length && e >= 0) {
          var n = document.createTextNode(t);
          return (
            this.element.insertBefore(n, this.nodes[e] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (e) {
        this.element.removeChild(this.nodes[e]), this.length--;
      }),
      (e.prototype.getRule = function (e) {
        return e < this.length ? this.nodes[e].textContent : '';
      }),
      e
    );
  })(),
  ut = (function () {
    function e(e) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (e, t) {
        return (
          e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (e) {
        this.rules.splice(e, 1), this.length--;
      }),
      (e.prototype.getRule = function (e) {
        return e < this.length ? this.rules[e] : '';
      }),
      e
    );
  })(),
  dt = se,
  pt = { isServer: !se, useCSSOMInjection: !ce },
  ht = (function () {
    function e(e, n, r) {
      void 0 === e && (e = he), void 0 === n && (n = {});
      var o = this;
      (this.options = t(t({}, pt), e)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!e.isServer),
        !this.server &&
          se &&
          dt &&
          ((dt = !1),
          (function (e) {
            for (
              var t = document.querySelectorAll(rt), n = 0, r = t.length;
              n < r;
              n++
            ) {
              var o = t[n];
              o &&
                'active' !== o.getAttribute(ie) &&
                (it(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
          })(this)),
        Ge(this, function () {
          return (function (e) {
            for (
              var t = e.getTag(),
                n = t.length,
                r = '',
                o = function (n) {
                  var o = (function (e) {
                    return Qe.get(e);
                  })(n);
                  if (void 0 === o) return 'continue';
                  var a = e.names.get(o),
                    i = t.getGroup(n);
                  if (void 0 === a || 0 === i.length) return 'continue';
                  var s = ''
                      .concat(ie, '.g')
                      .concat(n, '[id="')
                      .concat(o, '"]'),
                    c = '';
                  void 0 !== a &&
                    a.forEach(function (e) {
                      e.length > 0 && (c += ''.concat(e, ','));
                    }),
                    (r += ''
                      .concat(i)
                      .concat(s, '{content:"')
                      .concat(c, '"}')
                      .concat('/*!sc*/\n'));
                },
                a = 0;
              a < n;
              a++
            )
              o(a);
            return r;
          })(o);
        });
    }
    return (
      (e.registerId = function (e) {
        return tt(e);
      }),
      (e.prototype.reconstructWithOptions = function (n, r) {
        return (
          void 0 === r && (r = !0),
          new e(t(t({}, this.options), n), this.gs, (r && this.names) || void 0)
        );
      }),
      (e.prototype.allocateGSInstance = function (e) {
        return (this.gs[e] = (this.gs[e] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((e = (function (e) {
              var t = e.useCSSOMInjection,
                n = e.target;
              return e.isServer ? new ut(n) : t ? new ct(n) : new lt(n);
            })(this.options)),
            new Ke(e)))
        );
        var e;
      }),
      (e.prototype.hasNameForId = function (e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
      }),
      (e.prototype.registerName = function (e, t) {
        if ((tt(e), this.names.has(e))) this.names.get(e).add(t);
        else {
          var n = new Set();
          n.add(t), this.names.set(e, n);
        }
      }),
      (e.prototype.insertRules = function (e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(tt(e), n);
      }),
      (e.prototype.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (e.prototype.clearRules = function (e) {
        this.getTag().clearGroup(tt(e)), this.clearNames(e);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  ft = /&/g,
  mt = /^\s*\/\/.*$/gm;
function gt(e, t) {
  return e.map(function (e) {
    return (
      'rule' === e.type &&
        ((e.value = ''.concat(t, ' ').concat(e.value)),
        (e.value = e.value.replaceAll(',', ','.concat(t, ' '))),
        (e.props = e.props.map(function (e) {
          return ''.concat(t, ' ').concat(e);
        }))),
      Array.isArray(e.children) &&
        '@keyframes' !== e.type &&
        (e.children = gt(e.children, t)),
      e
    );
  });
}
var yt = new ht(),
  vt = (function (e) {
    var t,
      n,
      r,
      o = void 0 === e ? he : e,
      a = o.options,
      i = void 0 === a ? he : a,
      s = o.plugins,
      c = void 0 === s ? pe : s,
      l = function (e, r, o) {
        return o === n ||
          (o.startsWith(n) && o.endsWith(n) && o.replaceAll(n, '').length > 0)
          ? '.'.concat(t)
          : e;
      },
      u = c.slice();
    u.push(function (e) {
      e.type === d &&
        e.value.includes('&') &&
        (e.props[0] = e.props[0].replace(ft, n).replace(r, l));
    }),
      i.prefix && u.push(oe),
      u.push(re);
    var p = function (e, o, a, s) {
      void 0 === o && (o = ''),
        void 0 === a && (a = ''),
        void 0 === s && (s = '&'),
        (t = s),
        (n = o),
        (r = new RegExp('\\'.concat(n, '\\b'), 'g'));
      var c = e.replace(mt, ''),
        l = J(a || o ? ''.concat(a, ' ').concat(o, ' { ').concat(c, ' }') : c);
      i.namespace && (l = gt(l, i.namespace));
      var d,
        p = [];
      return (
        ne(
          l,
          (function (e) {
            var t = C(e);
            return function (n, r, o, a) {
              for (var i = '', s = 0; s < t; s++) i += e[s](n, r, o, a) || '';
              return i;
            };
          })(
            u.concat(
              ((d = function (e) {
                return p.push(e);
              }),
              function (e) {
                e.root || ((e = e.return) && d(e));
              })
            )
          )
        ),
        p
      );
    };
    return (
      (p.hash = c.length
        ? c
            .reduce(function (e, t) {
              return t.name || Je(15), Se(e, t.name);
            }, 5381)
            .toString()
        : ''),
      p
    );
  })(),
  wt = e.createContext({
    shouldForwardProp: void 0,
    styleSheet: yt,
    stylis: vt,
  });
function bt() {
  return e.useContext(wt);
}
wt.Consumer, e.createContext(void 0);
var xt = (function () {
    function e(e, t) {
      var n = this;
      (this.inject = function (e, t) {
        void 0 === t && (t = vt);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) ||
          e.insertRules(n.id, r, t(n.rules, r, '@keyframes'));
      }),
        (this.name = e),
        (this.id = 'sc-keyframes-'.concat(e)),
        (this.rules = t),
        Ge(this, function () {
          throw Je(12, String(n.name));
        });
    }
    return (
      (e.prototype.getName = function (e) {
        return void 0 === e && (e = vt), this.name + e.hash;
      }),
      e
    );
  })(),
  St = function (e) {
    return e >= 'A' && e <= 'Z';
  };
function kt(e) {
  for (var t = '', n = 0; n < e.length; n++) {
    var r = e[n];
    if (1 === n && '-' === r && '-' === e[0]) return e;
    St(r) ? (t += '-' + r.toLowerCase()) : (t += r);
  }
  return t.startsWith('ms-') ? '-' + t : t;
}
var Dt = function (e) {
    return null == e || !1 === e || '' === e;
  },
  Et = function (e) {
    var t,
      r,
      o = [];
    for (var a in e) {
      var i = e[a];
      e.hasOwnProperty(a) &&
        !Dt(i) &&
        ((Array.isArray(i) && i.isCss) || He(i)
          ? o.push(''.concat(kt(a), ':'), i, ';')
          : Ue(i)
          ? o.push.apply(o, n(n([''.concat(a, ' {')], Et(i), !1), ['}'], !1))
          : o.push(
              ''
                .concat(kt(a), ': ')
                .concat(
                  ((t = a),
                  null == (r = i) || 'boolean' == typeof r || '' === r
                    ? ''
                    : 'number' != typeof r ||
                      0 === r ||
                      t in ae ||
                      t.startsWith('--')
                    ? String(r).trim()
                    : ''.concat(r, 'px')),
                  ';'
                )
            ));
    }
    return o;
  };
function Ct(e, t, n, r) {
  if (Dt(e)) return [];
  if (ze(e)) return ['.'.concat(e.styledComponentId)];
  if (He(e)) {
    if (!He((a = e)) || (a.prototype && a.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return (
      'production' === process.env.NODE_ENV ||
        'object' != typeof o ||
        Array.isArray(o) ||
        o instanceof xt ||
        Ue(o) ||
        null === o ||
        console.error(
          ''.concat(
            De(e),
            ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.'
          )
        ),
      Ct(o, t, n, r)
    );
  }
  var a;
  return e instanceof xt
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Ue(e)
    ? Et(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        pe,
        e.map(function (e) {
          return Ct(e, t, n, r);
        })
      )
    : [e.toString()];
}
var Tt = ke('6.1.0'),
  Nt = (function () {
    function e(e, t, n) {
      (this.rules = e),
        (this.staticRulesId = ''),
        (this.isStatic =
          'production' === process.env.NODE_ENV &&
          (void 0 === n || n.isStatic) &&
          (function (e) {
            for (var t = 0; t < e.length; t += 1) {
              var n = e[t];
              if (He(n) && !ze(n)) return !1;
            }
            return !0;
          })(e)),
        (this.componentId = t),
        (this.baseHash = Se(Tt, t)),
        (this.baseStyle = n),
        ht.registerId(t);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (e, t, n) {
        var r = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(e, t, n)
          : '';
        if (this.isStatic && !n.hash)
          if (
            this.staticRulesId &&
            t.hasNameForId(this.componentId, this.staticRulesId)
          )
            r = Ve(r, this.staticRulesId);
          else {
            var o = We(Ct(this.rules, e, t, n)),
              a = be(Se(this.baseHash, o) >>> 0);
            if (!t.hasNameForId(this.componentId, a)) {
              var i = n(o, '.'.concat(a), void 0, this.componentId);
              t.insertRules(this.componentId, a, i);
            }
            (r = Ve(r, a)), (this.staticRulesId = a);
          }
        else {
          for (
            var s = Se(this.baseHash, n.hash), c = '', l = 0;
            l < this.rules.length;
            l++
          ) {
            var u = this.rules[l];
            if ('string' == typeof u)
              (c += u), 'production' !== process.env.NODE_ENV && (s = Se(s, u));
            else if (u) {
              var d = We(Ct(u, e, t, n));
              (s = Se(s, d + l)), (c += d);
            }
          }
          if (c) {
            var p = be(s >>> 0);
            t.hasNameForId(this.componentId, p) ||
              t.insertRules(
                this.componentId,
                p,
                n(c, '.'.concat(p), void 0, this.componentId)
              ),
              (r = Ve(r, p));
          }
        }
        return r;
      }),
      e
    );
  })(),
  At = e.createContext(void 0);
At.Consumer;
var Pt = {},
  It = new Set();
function Ot(n, r, o) {
  var a = ze(n),
    s = n,
    c = !Ee(n),
    l = r.attrs,
    u = void 0 === l ? pe : l,
    d = r.componentId,
    p =
      void 0 === d
        ? (function (e, t) {
            var n = 'string' != typeof e ? 'sc' : ye(e);
            Pt[n] = (Pt[n] || 0) + 1;
            var r = ''.concat(n, '-').concat(
              (function (e) {
                return be(ke(e) >>> 0);
              })('6.1.0' + n + Pt[n])
            );
            return t ? ''.concat(t, '-').concat(r) : r;
          })(r.displayName, r.parentComponentId)
        : d,
    h = r.displayName,
    f =
      void 0 === h
        ? (function (e) {
            return Ee(e) ? 'styled.'.concat(e) : 'Styled('.concat(De(e), ')');
          })(n)
        : h,
    m =
      r.displayName && r.componentId
        ? ''.concat(ye(r.displayName), '-').concat(r.componentId)
        : r.componentId || p,
    g = a && s.attrs ? s.attrs.concat(u).filter(Boolean) : u,
    y = r.shouldForwardProp;
  if (a && s.shouldForwardProp) {
    var v = s.shouldForwardProp;
    if (r.shouldForwardProp) {
      var w = r.shouldForwardProp;
      y = function (e, t) {
        return v(e, t) && w(e, t);
      };
    } else y = v;
  }
  var b = new Nt(o, m, a ? s.componentStyle : void 0);
  function x(n, r) {
    return (function (n, r, o) {
      var a = n.attrs,
        s = n.componentStyle,
        c = n.defaultProps,
        l = n.foldedComponentIds,
        u = n.styledComponentId,
        d = n.target,
        p = e.useContext(At),
        h = bt(),
        f = n.shouldForwardProp || h.shouldForwardProp;
      'production' !== process.env.NODE_ENV && e.useDebugValue(u);
      var m = (function (e, n, r) {
          for (
            var o, a = t(t({}, n), { className: void 0, theme: r }), i = 0;
            i < e.length;
            i += 1
          ) {
            var s = He((o = e[i])) ? o(a) : o;
            for (var c in s)
              a[c] =
                'className' === c
                  ? Ve(a[c], s[c])
                  : 'style' === c
                  ? t(t({}, a[c]), s[c])
                  : s[c];
          }
          return n.className && (a.className = Ve(a.className, n.className)), a;
        })(
          a,
          r,
          (function (e, t, n) {
            return (
              void 0 === n && (n = he),
              (e.theme !== n.theme && e.theme) || t || n.theme
            );
          })(r, p, c) || he
        ),
        g = m.as || d,
        y = {};
      for (var v in m)
        void 0 === m[v] ||
          '$' === v[0] ||
          'as' === v ||
          'theme' === v ||
          ('forwardedAs' === v
            ? (y.as = m.forwardedAs)
            : (f && !f(v, g)) ||
              ((y[v] = m[v]),
              f ||
                'development' !== process.env.NODE_ENV ||
                i(v) ||
                It.has(v) ||
                !fe.has(g) ||
                (It.add(v),
                console.warn(
                  'styled-components: it looks like an unknown prop "'.concat(
                    v,
                    '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)'
                  )
                ))));
      var w = (function (t, n) {
        var r = bt(),
          o = t.generateAndInjectStyles(n, r.styleSheet, r.stylis);
        return 'production' !== process.env.NODE_ENV && e.useDebugValue(o), o;
      })(s, m);
      'production' !== process.env.NODE_ENV &&
        n.warnTooManyClasses &&
        n.warnTooManyClasses(w);
      var b = Ve(l, u);
      return (
        w && (b += ' ' + w),
        m.className && (b += ' ' + m.className),
        (y[Ee(g) && !fe.has(g) ? 'class' : 'className'] = b),
        (y.ref = o),
        e.createElement(g, y)
      );
    })(S, n, r);
  }
  'production' !== process.env.NODE_ENV && (x.displayName = f);
  var S = e.forwardRef(x);
  return (
    (S.attrs = g),
    (S.componentStyle = b),
    (S.shouldForwardProp = y),
    'production' !== process.env.NODE_ENV && (S.displayName = f),
    (S.foldedComponentIds = a
      ? Ve(s.foldedComponentIds, s.styledComponentId)
      : ''),
    (S.styledComponentId = m),
    (S.target = a ? s.target : n),
    Object.defineProperty(S, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (e) {
        this._foldedDefaultProps = a
          ? (function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              for (var r = 0, o = t; r < o.length; r++) Be(e, o[r], !0);
              return e;
            })({}, s.defaultProps, e)
          : e;
      },
    }),
    'production' !== process.env.NODE_ENV &&
      (de(f, m),
      (S.warnTooManyClasses = (function (e, t) {
        var n = {},
          r = !1;
        return function (o) {
          if (!r && ((n[o] = !0), Object.keys(n).length >= 200)) {
            var a = t ? ' with the id of "'.concat(t, '"') : '';
            console.warn(
              'Over '
                .concat(200, ' classes were generated for component ')
                .concat(e)
                .concat(a, '.\n') +
                'Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />'
            ),
              (r = !0),
              (n = {});
          }
        };
      })(f, m))),
    Ge(S, function () {
      return '.'.concat(S.styledComponentId);
    }),
    c &&
      $e(S, n, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    S
  );
}
function Mt(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Yt = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Rt(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (He(e) || Ue(e)) return Yt(Ct(Mt(pe, n([e], t, !0))));
  var o = e;
  return 0 === t.length && 1 === o.length && 'string' == typeof o[0]
    ? Ct(o)
    : Yt(Ct(Mt(o, t)));
}
function _t(e, r, o) {
  if ((void 0 === o && (o = he), !r)) throw Je(1, r);
  var a = function (t) {
    for (var a = [], i = 1; i < arguments.length; i++) a[i - 1] = arguments[i];
    return e(r, o, Rt.apply(void 0, n([t], a, !1)));
  };
  return (
    (a.attrs = function (n) {
      return _t(
        e,
        r,
        t(t({}, o), {
          attrs: Array.prototype.concat(o.attrs, n).filter(Boolean),
        })
      );
    }),
    (a.withConfig = function (n) {
      return _t(e, r, t(t({}, o), n));
    }),
    a
  );
}
var Ft = function (e) {
    return _t(Ot, e);
  },
  jt = Ft;
fe.forEach(function (e) {
  jt[e] = Ft(e);
}),
  'production' !== process.env.NODE_ENV &&
    'undefined' != typeof navigator &&
    'ReactNative' === navigator.product &&
    console.warn(
      "It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"
    );
var Lt = '__sc-'.concat(ie, '__');
function $t(e, t, n) {
  var r = new Date(Date.UTC(t, e + 1, 0)).getUTCDate(),
    o = new Date(Date.UTC(t, e, 1)).getUTCDay(),
    a = 1;
  n && (0 === o ? (o = 6) : o--);
  for (var i = [], s = 0; s < 6; s++) {
    for (var c = [], l = 0; l < 7; l++)
      if (0 === s && l < o) {
        var u = new Date(Date.UTC(t, e, 0)).getUTCDate(),
          d = new Date(Date.UTC(t, e - 1, u - (o - l - 1), 0, 0, 0));
        d.setUTCHours(d.getUTCHours() + -3),
          c.push({ date: d, isCurrentMonth: !1 });
      } else if (a <= r) {
        var p = new Date(Date.UTC(t, e, a, 0, 0, 0));
        p.setUTCHours(p.getUTCHours() + -3),
          c.push({ date: p, isCurrentMonth: !0 }),
          a++;
      } else {
        var h = new Date(Date.UTC(t, e + 1, a - r, 0, 0, 0));
        h.setUTCHours(h.getUTCHours() + -3),
          c.push({ date: h, isCurrentMonth: !1 }),
          a++;
      }
    i.push(c);
  }
  return i;
}
'production' !== process.env.NODE_ENV &&
  'test' !== process.env.NODE_ENV &&
  'undefined' != typeof window &&
  (window[Lt] || (window[Lt] = 0),
  1 === window[Lt] &&
    console.warn(
      "It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."
    ),
  (window[Lt] += 1));
var Ht,
  zt,
  Vt,
  Wt,
  Ut,
  Bt,
  Gt,
  qt,
  Xt,
  Jt,
  Kt,
  Zt,
  Qt,
  en = [
    { day: 15, month: 3 },
    { day: 2, month: 4 },
    { day: 9, month: 5 },
    { day: 3, month: 7 },
    { day: 17, month: 9 },
    { day: 15, month: 3 },
    { day: 1, month: 1 },
    { day: 2, month: 1 },
    { day: 23, month: 2 },
    { day: 8, month: 3 },
    { day: 1, month: 5 },
    { day: 7, month: 11 },
    { day: 7, month: 1 },
    { day: 2, month: 11 },
    { day: 25, month: 12 },
  ],
  tn = jt.div(
    Ht ||
      (Ht = r(
        [
          '\n  width: 32px;\n  height: 32px;\n  user-select: none;\n  display: flex;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n  align-items: center;\n  &:hover {\n    background-color: #f1f1f1;\n    color: blue;\n  }\n  color: ',
          ';\n  background-color: ',
          ';\n  border-radius: ',
          ';\n',
        ],
        [
          '\n  width: 32px;\n  height: 32px;\n  user-select: none;\n  display: flex;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n  align-items: center;\n  &:hover {\n    background-color: #f1f1f1;\n    color: blue;\n  }\n  color: ',
          ';\n  background-color: ',
          ';\n  border-radius: ',
          ';\n',
        ]
      )),
    function (e) {
      return e.color;
    },
    function (e) {
      return e.backgroundcolor;
    },
    function (e) {
      return e.borderradius;
    }
  ),
  nn = function (t) {
    var n = t.date,
      r = t.isCurrentMonth,
      o = t.selectedDay,
      a = t.selectedFirstDay,
      i = t.selectedSecondDay,
      s = t.handleSelectDay,
      c = t.toggleTodoList,
      l = new Date().toDateString() === n.toDateString(),
      u =
        n.toDateString() === (null == o ? void 0 : o.toDateString()) ||
        n.toDateString() === (null == a ? void 0 : a.toDateString()) ||
        n.toDateString() === (null == i ? void 0 : i.toDateString()),
      d = en.some(function (e) {
        return e.day === n.getDate() && e.month === n.getMonth() + 1;
      }),
      p = 0 === n.getDay() || 6 === n.getDay(),
      h =
        !(!i || !a) &&
        n.getTime() < (null == i ? void 0 : i.getTime()) &&
        n.getTime() > (null == a ? void 0 : a.getTime()),
      f = (function () {
        switch (!0) {
          case u:
            return 'white';
          case l:
            return 'blue';
          case d || p:
            return 'red';
          case r:
            return 'black';
          default:
            return 'grey';
        }
      })(),
      m = (function () {
        switch (!0) {
          case n.toDateString() === (null == a ? void 0 : a.toDateString()):
            return '#82b3f5';
          case n.toDateString() === (null == i ? void 0 : i.toDateString()):
            return '#3080ea';
          case h:
            return '#ebf3fe';
          case u:
            return '#3080ea';
          default:
            return 'transparent';
        }
      })(),
      g = (function () {
        switch (!0) {
          case n.toDateString() === (null == a ? void 0 : a.toDateString()):
            return '10px 0 0 10px;';
          case n.toDateString() === (null == i ? void 0 : i.toDateString()):
            return '0 10px 10px 0';
          case h:
            return '0px';
          default:
            return '10px';
        }
      })(),
      y = s
        ? function () {
            s(n);
          }
        : function () {};
    return e.createElement(
      tn,
      {
        borderradius: g,
        backgroundcolor: m,
        color: f,
        onMouseOver: function (e) {
          1 !== e.buttons || o || y();
        },
        onClick: y,
        onDoubleClick: c,
      },
      n.getDate()
    );
  },
  rn = function (t) {
    var n = t.startOnMonday,
      r = void 0 === n || n,
      o = t.month,
      a = void 0 === o ? new Date().getMonth() : o,
      i = t.year,
      s = void 0 === i ? new Date().getFullYear() : i,
      c = t.selectedDay,
      l = t.handleSelectDay,
      u = t.selectedFirstDay,
      d = t.selectedSecondDay,
      p = t.toggleTodoList,
      h = $t(a, s, r);
    return e.createElement(
      'div',
      null,
      h.map(function (t) {
        return t.map(function (t) {
          var n = t.date,
            r = t.isCurrentMonth;
          return e.createElement(nn, {
            toggleTodoList: p,
            selectedFirstDay: u,
            selectedSecondDay: d,
            key: n.toLocaleDateString(),
            selectedDay: c,
            date: n,
            isCurrentMonth: r,
            handleSelectDay: l,
          });
        });
      })
    );
  },
  on = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  an = jt.div(
    zt ||
      (zt = r(
        [
          '\n  display: flex;\n  width: 100px;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 30px;\n  font-size: 15px;\n  cursor: pointer;\n  &:hover {\n    color: white;\n    background-color: #297aec;\n    border-radius: 7px;\n  }\n',
        ],
        [
          '\n  display: flex;\n  width: 100px;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 30px;\n  font-size: 15px;\n  cursor: pointer;\n  &:hover {\n    color: white;\n    background-color: #297aec;\n    border-radius: 7px;\n  }\n',
        ]
      ))
  ),
  sn = function (t) {
    var n = t.monthName,
      r = t.id,
      o = t.handleSelectMonth;
    return e.createElement(an, { onClick: o, id: r }, n);
  },
  cn = function (t) {
    var n = t.handleSelectMonth;
    return e.createElement(
      'div',
      null,
      on.map(function (t, r) {
        return e.createElement(sn, {
          handleSelectMonth: n,
          key: t,
          monthName: t,
          id: ''.concat(r),
        });
      })
    );
  },
  ln = jt.div(
    Vt ||
      (Vt = r(
        [
          '\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 250px;\n  flex-wrap: nowrap;\n  margin-top: 10px;\n  p {\n    font-family: Arial, Helvetica, sans-serif;\n    width: 150px;\n    max-width: 250px;\n    word-break: break-all;\n  }\n  input {\n    width: 45px;\n  }\n  button {\n    border: none;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    border-radius: 7px;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #317cf0;\n    }\n  }\n  div {\n    width: 56px;\n    display: flex;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 250px;\n  flex-wrap: nowrap;\n  margin-top: 10px;\n  p {\n    font-family: Arial, Helvetica, sans-serif;\n    width: 150px;\n    max-width: 250px;\n    word-break: break-all;\n  }\n  input {\n    width: 45px;\n  }\n  button {\n    border: none;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    border-radius: 7px;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #317cf0;\n    }\n  }\n  div {\n    width: 56px;\n    display: flex;\n  }\n',
        ]
      ))
  ),
  un = jt.div(
    Wt ||
      (Wt = r(
        [
          '\n  align-items: center;\n  justify-content: center;\n  input {\n    margin-top: 10px;\n    width: 100px;\n  }\n  button {\n    border: none;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    width: 45px;\n    height: 32px;\n    border-radius: 7px;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #317cf0;\n    }\n  }\n',
        ],
        [
          '\n  align-items: center;\n  justify-content: center;\n  input {\n    margin-top: 10px;\n    width: 100px;\n  }\n  button {\n    border: none;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    width: 45px;\n    height: 32px;\n    border-radius: 7px;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #317cf0;\n    }\n  }\n',
        ]
      ))
  ),
  dn = function (t) {
    var r = t.selectedDay,
      o = e.useRef(null),
      a = e.useState([]),
      i = a[0],
      s = a[1],
      c = e.useState([]),
      l = c[0],
      u = c[1];
    e.useEffect(
      function () {
        var e = localStorage.getItem('todoList'),
          t = e ? JSON.parse(e) : [];
        s(t);
      },
      [r]
    ),
      e.useEffect(
        function () {
          r &&
            u(
              i.filter(function (e) {
                return e.day === r.toLocaleDateString();
              })
            );
        },
        [i, r]
      );
    return e.createElement(
      'div',
      null,
      e.createElement(
        un,
        null,
        e.createElement('input', {
          placeholder: 'Task...',
          ref: o,
          type: 'text',
        }),
        e.createElement(
          'button',
          {
            onClick: function () {
              if (r && o.current && o.current.value) {
                var e = {
                  day: r.toLocaleDateString(),
                  value: o.current.value,
                  id: Date.now(),
                };
                localStorage.setItem(
                  'todoList',
                  JSON.stringify(n(n([], i, !0), [e], !1))
                ),
                  s(function (t) {
                    return n(n([], t, !0), [e], !1);
                  });
              }
            },
          },
          'Add'
        )
      ),
      e.createElement(
        'div',
        null,
        l.map(function (t) {
          return e.createElement(
            ln,
            { key: t.id },
            e.createElement('p', null, t.value),
            e.createElement(
              'div',
              null,
              e.createElement('input', { type: 'checkbox' }),
              e.createElement(
                'button',
                {
                  onClick: function () {
                    var e, n;
                    (e = t.id),
                      (n = i.filter(function (t) {
                        return t.id !== e;
                      })),
                      localStorage.setItem('todoList', JSON.stringify(n)),
                      s(n);
                  },
                },
                'Delete'
              )
            )
          );
        })
      )
    );
  },
  pn = function (t) {
    var n = t.startOnMonday,
      r = void 0 === n || n,
      o = t.month,
      a = void 0 === o ? new Date().getMonth() : o,
      i = t.year,
      s = void 0 === i ? new Date().getFullYear() : i,
      c = t.selectedDay,
      l = t.handleSelectDay,
      u = t.weekCounter,
      d = t.setIsLastWeek,
      p = t.setIsFirstWeek,
      h = t.selectedFirstDay,
      f = t.selectedSecondDay,
      m = t.toggleTodoList,
      g = $t(a, s, r).filter(function (e) {
        return e.some(function (e) {
          return !0 === e.isCurrentMonth;
        });
      }),
      y = g.at(u % g.length);
    return (
      e.useEffect(
        function () {
          u % g.length == 0
            ? (p(!0), d(!1))
            : u % g.length == g.length - 1 || u % g.length == -1
            ? (p(!1), d(!0))
            : (p(!1), d(!1));
        },
        [u, a, s]
      ),
      e.createElement(
        'div',
        null,
        null == y
          ? void 0
          : y.map(function (t) {
              var n = t.date,
                r = t.isCurrentMonth;
              return e.createElement(nn, {
                toggleTodoList: m,
                selectedFirstDay: h,
                selectedSecondDay: f,
                key: n.toLocaleDateString(),
                selectedDay: c,
                date: n,
                isCurrentMonth: r,
                handleSelectDay: l,
              });
            })
      )
    );
  },
  hn = jt.div(
    Ut ||
      (Ut = r(
        [
          '\n  width: 100px;\n  height: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n  cursor: pointer;\n  border-radius: 7px;\n  &:hover {\n    color: white;\n    background-color: #297aed;\n  }\n',
        ],
        [
          '\n  width: 100px;\n  height: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n  cursor: pointer;\n  border-radius: 7px;\n  &:hover {\n    color: white;\n    background-color: #297aed;\n  }\n',
        ]
      ))
  ),
  fn = function (t) {
    var n = t.currentDecadeYears,
      r = t.handleSelectYear;
    return e.createElement(
      'div',
      null,
      n.map(function (t) {
        return e.createElement(hn, { onClick: r, key: t }, t);
      })
    );
  },
  mn = jt.div(
    Bt ||
      (Bt = r(
        [
          '\n  width: 250px;\n  div {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n  }\n',
        ],
        [
          '\n  width: 250px;\n  div {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n  }\n',
        ]
      ))
  ),
  gn = function (t) {
    var n = t.startOnMonday,
      r = void 0 === n || n,
      o = t.month,
      a = void 0 === o ? new Date().getMonth() : o,
      i = t.year,
      s = void 0 === i ? new Date().getFullYear() : i,
      c = t.selectedDay,
      l = t.handleSelectDay,
      u = t.calendarView,
      d = t.weekCounter,
      p = t.setIsLastWeek,
      h = t.setIsFirstWeek,
      f = t.handleSelectMonth,
      m = t.handleSelectYear,
      g = t.selectedFirstDay,
      y = t.selectedSecondDay,
      v = t.currentDecadeYears,
      w = t.withTodos,
      b = e.useState(!0),
      x = b[0],
      S = b[1],
      k = function () {
        S(function (e) {
          return !e;
        });
      };
    switch (u) {
      case 'month':
        return e.createElement(
          mn,
          null,
          e.createElement(rn, {
            selectedFirstDay: g,
            selectedSecondDay: y,
            startOnMonday: r,
            month: a,
            year: s,
            selectedDay: c,
            handleSelectDay: l,
            toggleTodoList: k,
          }),
          w && c && x ? e.createElement(dn, { selectedDay: c }) : null
        );
      case 'week':
        return e.createElement(
          mn,
          null,
          e.createElement(pn, {
            selectedFirstDay: g,
            selectedSecondDay: y,
            startOnMonday: r,
            month: a,
            year: s,
            selectedDay: c,
            handleSelectDay: l,
            weekCounter: d,
            setIsLastWeek: p,
            setIsFirstWeek: h,
            toggleTodoList: k,
          }),
          w && c && x ? e.createElement(dn, { selectedDay: c }) : null
        );
      case 'months':
        return e.createElement(
          mn,
          null,
          e.createElement(cn, { handleSelectMonth: f }),
          ';'
        );
      case 'years':
        return e.createElement(
          mn,
          null,
          e.createElement(fn, {
            year: s,
            currentDecadeYears: v,
            handleSelectYear: m,
          })
        );
    }
  },
  yn = jt.button(
    Gt ||
      (Gt = r(
        [
          '\n  border: none;\n  color: black;\n  width: 25px;\n  height: 25px;\n  background-color: transparent;\n  &:hover {\n    color: white;\n    background-color: #277bec;\n  }\n  border-radius: ',
          ';\n',
        ],
        [
          '\n  border: none;\n  color: black;\n  width: 25px;\n  height: 25px;\n  background-color: transparent;\n  &:hover {\n    color: white;\n    background-color: #277bec;\n  }\n  border-radius: ',
          ';\n',
        ]
      )),
    function (e) {
      return 'true' === e.isnext ? '0 10px 10px 0' : '10px 0 0 10px';
    }
  ),
  vn = function (t) {
    var n = t.isNext,
      r = t.callback;
    return e.createElement(
      yn,
      { isnext: n.toString(), onClick: r },
      n ? '»' : '«'
    );
  },
  wn = function (t) {
    var n = t.month,
      r = void 0 === n ? new Date().getMonth() : n,
      o = t.year,
      a = void 0 === o ? new Date().getFullYear() : o,
      i = t.handleSetToPrevMonth,
      s = t.handleSetToNextMonth,
      c = t.minCalendarYear,
      l = t.maxCalendarYear,
      u = t.setCalendarView;
    return e.createElement(
      e.Fragment,
      null,
      0 === r && a === c
        ? null
        : e.createElement(vn, { callback: i, isNext: !1 }),
      e.createElement(
        'h3',
        {
          onClick: function () {
            u('months');
          },
        },
        on[r],
        ' ',
        a
      ),
      11 === r && a === l
        ? null
        : e.createElement(vn, { callback: s, isNext: !0 })
    );
  },
  bn = function (t) {
    var n = t.year,
      r = void 0 === n ? new Date().getFullYear() : n,
      o = t.handleSetToPrevYear,
      a = t.handleSetToNextYear,
      i = t.minCalendarYear,
      s = t.maxCalendarYear,
      c = t.setCalendarView;
    return e.createElement(
      'div',
      null,
      r === i ? null : e.createElement(vn, { callback: o, isNext: !1 }),
      e.createElement(
        'h3',
        {
          onClick: function () {
            c('years');
          },
        },
        r
      ),
      r === s ? null : e.createElement(vn, { callback: a, isNext: !0 })
    );
  },
  xn = function (t) {
    var n = t.month,
      r = void 0 === n ? new Date().getMonth() : n,
      o = t.year,
      a = void 0 === o ? new Date().getFullYear() : o,
      i = t.handleSetToPrevWeek,
      s = t.handleSetToNextWeek,
      c = t.minCalendarYear,
      l = t.maxCalendarYear,
      u = t.isFirstWeek,
      d = t.isLastWeek;
    return e.createElement(
      'div',
      null,
      0 === r && a === c && u
        ? null
        : e.createElement(vn, { callback: i, isNext: !1 }),
      e.createElement('h3', null, on[r], ' ', a),
      11 === r && a === l && d
        ? null
        : e.createElement(vn, { callback: s, isNext: !0 })
    );
  },
  Sn = function (t) {
    var n = t.minCalendarYear,
      r = t.maxCalendarYear,
      o = t.currentDecadeYears,
      a = t.handleSetToPrevDecade,
      i = t.handleSetToNextDecade;
    return e.createElement(
      'div',
      null,
      n === (null == o ? void 0 : o.at(0))
        ? null
        : e.createElement(vn, { callback: a, isNext: !1 }),
      e.createElement(
        'h3',
        null,
        ''
          .concat(null == o ? void 0 : o.at(0), ' - ')
          .concat(null == o ? void 0 : o.at(-1))
      ),
      r === (null == o ? void 0 : o.at(-1))
        ? null
        : e.createElement(vn, { callback: i, isNext: !0 })
    );
  },
  kn = jt.div(
    qt ||
      (qt = r(
        [
          '\n  div {\n    display: flex;\n    align-items: center;\n  }\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  justify-content: space-evenly;\n\n  h3 {\n    width: 190px;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #297aec;\n      border-radius: 7px;\n    }\n  }\n',
        ],
        [
          '\n  div {\n    display: flex;\n    align-items: center;\n  }\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  justify-content: space-evenly;\n\n  h3 {\n    width: 190px;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #297aec;\n      border-radius: 7px;\n    }\n  }\n',
        ]
      ))
  ),
  Dn = function (t) {
    var n = t.month,
      r = void 0 === n ? new Date().getMonth() : n,
      o = t.year,
      a = void 0 === o ? new Date().getFullYear() : o,
      i = t.handleSetToPrevMonth,
      s = t.handleSetToNextMonth,
      c = t.handleSetToPrevWeek,
      l = t.handleSetToNextWeek,
      u = t.handleSetToNextYear,
      d = t.handleSetToPrevYear,
      p = t.handleSetToPrevDecade,
      h = t.handleSetToNextDecade,
      f = t.setCalendarView,
      m = t.currentDecadeYears,
      g = t.minCalendarYear,
      y = t.maxCalendarYear,
      v = t.calendarView,
      w = t.isLastWeek,
      b = t.isFirstWeek;
    switch (v) {
      case 'month':
        return e.createElement(
          kn,
          null,
          e.createElement(wn, {
            handleSetToPrevMonth: i,
            handleSetToNextMonth: s,
            minCalendarYear: g,
            maxCalendarYear: y,
            month: r,
            year: a,
            setCalendarView: f,
          })
        );
      case 'week':
        return e.createElement(
          kn,
          null,
          e.createElement(xn, {
            handleSetToPrevWeek: c,
            handleSetToNextWeek: l,
            minCalendarYear: g,
            maxCalendarYear: y,
            month: r,
            year: a,
            isLastWeek: w,
            isFirstWeek: b,
          })
        );
      case 'months':
        return e.createElement(
          kn,
          null,
          e.createElement(bn, {
            handleSetToNextYear: u,
            handleSetToPrevYear: d,
            setCalendarView: f,
            minCalendarYear: g,
            maxCalendarYear: y,
            year: a,
          })
        );
      case 'years':
        return e.createElement(
          kn,
          null,
          e.createElement(Sn, {
            currentDecadeYears: m,
            minCalendarYear: g,
            maxCalendarYear: y,
            handleSetToPrevDecade: p,
            handleSetToNextDecade: h,
          })
        );
    }
  },
  En = jt.div(
    Xt ||
      (Xt = r(
        [
          '\n  justify-content: center;\n  display: flex;\n  font-family: Arial, Helvetica, sans-serif;\n',
        ],
        [
          '\n  justify-content: center;\n  display: flex;\n  font-family: Arial, Helvetica, sans-serif;\n',
        ]
      ))
  ),
  Cn = jt.div(
    Jt ||
      (Jt = r(
        [
          '\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ],
        [
          '\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ]
      ))
  ),
  Tn = function (t) {
    var n = t.startOnMonday,
      r = void 0 === n || n,
      o = t.calendarView,
      a = r
        ? ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
        : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return 'months' === o || 'years' === o
      ? null
      : e.createElement(
          En,
          null,
          a.map(function (t) {
            return e.createElement(Cn, { key: t }, t);
          })
        );
  },
  Nn = jt.div(
    Kt ||
      (Kt = r(
        [
          '\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid grey;\n  box-sizing: border-box;\n  border-radius: ',
          ';\n  padding-bottom: 10px;\n',
        ],
        [
          '\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid grey;\n  box-sizing: border-box;\n  border-radius: ',
          ';\n  padding-bottom: 10px;\n',
        ]
      )),
    function (e) {
      return 'false' === e.isclearbuttonvisible
        ? '10px 10px 10px 10px'
        : '10px 10px 0 0';
    }
  ),
  An = function (t) {
    var n = t.selectedDay,
      r = t.isInputHaveValue,
      o = void 0 !== r && r,
      a = t.handleSelectDay,
      i = t.startOnMonday,
      s = void 0 === i || i,
      c = t.maxCalendarYear,
      l = void 0 === c ? 3023 : c,
      u = t.minCalendarYear,
      d = void 0 === u ? 1020 : u,
      p = t.defaultMonth,
      h = void 0 === p ? new Date().getMonth() : p,
      f = t.defaultYear,
      m = void 0 === f ? new Date().getFullYear() : f,
      g = t.defaultCalendarView,
      y = void 0 === g ? 'month' : g,
      v = t.selectedFirstDay,
      w = t.selectedSecondDay,
      b = t.withTodos,
      x = void 0 !== b && b,
      S = e.useState(h),
      k = S[0],
      D = S[1],
      E = e.useState(m),
      C = E[0],
      T = E[1],
      N = e.useState(y),
      A = N[0],
      P = N[1],
      I = e.useState(!1),
      O = I[0],
      M = I[1],
      Y = e.useState(!0),
      R = Y[0],
      _ = Y[1],
      F = e.useState(0),
      j = F[0],
      L = F[1];
    e.useEffect(
      function () {
        n &&
          n.getFullYear() <= l &&
          n.getFullYear() >= d &&
          (D(n.getMonth()), T(n.getFullYear()));
      },
      [n]
    );
    var $ = (function (e, t, n) {
      for (
        var r = 10 * Math.floor(n / 10),
          o = r + 9,
          a = Math.max(r, e),
          i = Math.min(o, t),
          s = [],
          c = a;
        c <= i;
        c++
      )
        s.push(c);
      return s;
    })(d, l, C);
    function H() {
      0 === k && C
        ? (T(function (e) {
            return e - 1;
          }),
          D(11))
        : D(function (e) {
            return e - 1;
          });
    }
    function z() {
      11 === k
        ? (T(function (e) {
            return e + 1;
          }),
          D(0))
        : D(function (e) {
            return e + 1;
          });
    }
    return e.createElement(
      Nn,
      { isclearbuttonvisible: o.toString() },
      e.createElement(Dn, {
        handleSetToPrevDecade: function () {
          T(function (e) {
            return e - 10;
          });
        },
        handleSetToNextDecade: function () {
          T(function (e) {
            return e + 10;
          });
        },
        currentDecadeYears: $,
        handleSetToPrevMonth: H,
        handleSetToNextMonth: z,
        handleSetToNextWeek: function () {
          L(function (e) {
            return e + 1;
          }),
            O && (L(0), z());
        },
        handleSetToPrevWeek: function () {
          L(function (e) {
            return e - 1;
          }),
            R && H();
        },
        handleSetToNextYear: function () {
          T(function (e) {
            return e + 1;
          });
        },
        handleSetToPrevYear: function () {
          T(function (e) {
            return e - 1;
          });
        },
        setCalendarView: P,
        month: k,
        year: C,
        maxCalendarYear: l,
        minCalendarYear: d,
        calendarView: A,
        isLastWeek: O,
        isFirstWeek: R,
      }),
      e.createElement(Tn, { startOnMonday: s, calendarView: A }),
      e.createElement(gn, {
        withTodos: x,
        selectedFirstDay: v,
        selectedSecondDay: w,
        handleSelectYear: function (e) {
          var t = e.target;
          T(Number(t.textContent)), P('months');
        },
        handleSelectMonth: function (e) {
          var t = e.target;
          D(Number(t.id)), P('month');
        },
        startOnMonday: s,
        month: k,
        year: C,
        selectedDay: n,
        handleSelectDay: a,
        calendarView: A,
        setIsLastWeek: M,
        setIsFirstWeek: _,
        weekCounter: j,
        currentDecadeYears: $,
      })
    );
  },
  Pn = jt.button(
    Zt ||
      (Zt = r(
        [
          '\n  width: 100%;\n  height: 25px;\n  margin: 0;\n  border-radius: 0 0 7px 7px;\n  background-color: white;\n  border: 1px solid grey;\n  border-top: 0px;\n  height: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  &:hover {\n    color: white;\n    background-color: #277bec;\n  }\n',
        ],
        [
          '\n  width: 100%;\n  height: 25px;\n  margin: 0;\n  border-radius: 0 0 7px 7px;\n  background-color: white;\n  border: 1px solid grey;\n  border-top: 0px;\n  height: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  &:hover {\n    color: white;\n    background-color: #277bec;\n  }\n',
        ]
      ))
  ),
  In = jt.div(
    Qt ||
      (Qt = r(
        [
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 250px;\n  input {\n    margin-bottom: 10px;\n    border: 1px solid grey;\n    border-radius: 5px;\n    width: 200px;\n    padding-left: 25px;\n    padding-right: 25px;\n    height: 30px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: ',
          ';\n    border-color: ',
          ';\n  }\n',
        ],
        [
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 250px;\n  input {\n    margin-bottom: 10px;\n    border: 1px solid grey;\n    border-radius: 5px;\n    width: 200px;\n    padding-left: 25px;\n    padding-right: 25px;\n    height: 30px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: ',
          ';\n    border-color: ',
          ';\n  }\n',
        ]
      )),
    function (e) {
      return 'true' === e.isnotvalid ? 'red' : 'black';
    },
    function (e) {
      return 'true' === e.isnotvalid ? 'red' : 'grey';
    }
  ),
  On = function (n) {
    return function (r) {
      var o = e.useState(r.selectedDay || new Date()),
        a = o[0],
        i = o[1],
        s = e.useState(''),
        c = s[0],
        l = s[1],
        u = e.useState(!1),
        d = u[0],
        p = u[1],
        h = !!c;
      return e.createElement(
        In,
        { isnotvalid: d.toString() },
        e.createElement('input', {
          type: 'text',
          placeholder: 'dd-mm-yyyy',
          value: c,
          onChange: function (e) {
            !(function (e) {
              var t = e.target.value,
                n = t.split('-'),
                r = parseInt(n[0], 10),
                o = parseInt(n[1], 10) - 1,
                a = parseInt(n[2], 10),
                s = new Date(a, o, r);
              s.getDate() === r && s.getMonth() === o && s.getFullYear() === a
                ? (i(s), p(!1))
                : p(!0),
                l(t);
            })(e);
          },
        }),
        e.createElement(
          n,
          t({}, r, {
            handleSelectDay: function (e) {
              var t = ''
                .concat(e.getDate(), '-')
                .concat(e.getMonth() + 1, '-')
                .concat(e.getFullYear());
              i(e), l(t);
            },
            selectedDay: a,
            isInputHaveValue: h,
          })
        ),
        c &&
          e.createElement(
            Pn,
            {
              onClick: function () {
                i(new Date()), l('');
              },
            },
            'Clear all'
          )
      );
    };
  },
  Mn = (function () {
    function n() {}
    return (
      (n.getDefaultCalendar = function () {
        return An;
      }),
      (n.withInput = function () {
        return On(An);
      }),
      (n.withInputs = function () {
        return (
          (n = An),
          function (r) {
            var o,
              a,
              i = e.useState(r.selectedFirstDay || new Date(0)),
              s = i[0],
              c = i[1],
              l = e.useState(r.selectedSecondDay || new Date(0)),
              u = l[0],
              d = l[1],
              p = e.useState(
                (null === (o = r.selectedFirstDay) || void 0 === o
                  ? void 0
                  : o.toLocaleDateString()) || ''
              ),
              h = p[0],
              f = p[1],
              m = e.useState(
                (null === (a = r.selectedSecondDay) || void 0 === a
                  ? void 0
                  : a.toLocaleDateString()) || ''
              ),
              g = m[0],
              y = m[1],
              v = e.useState(!1),
              w = v[0],
              b = v[1],
              x = function (e) {
                var t = e.target.value,
                  n = t.split('-'),
                  r = parseInt(n[0], 10),
                  o = parseInt(n[1], 10) - 1,
                  a = parseInt(n[2], 10),
                  i = new Date(a, o, r);
                i.getDate() === r && i.getMonth() === o && i.getFullYear() === a
                  ? ('firstInput' === e.target.id && (c(i), b(!0)),
                    'secondInput' === e.target.id && (d(i), b(!0)))
                  : b(!0),
                  'firstInput' === e.target.id && f(t),
                  'secondInput' === e.target.id && y(t);
              },
              S = !!h || !!g;
            return e.createElement(
              In,
              { isnotvalid: w.toString() },
              e.createElement('input', {
                type: 'text',
                id: 'firstInput',
                placeholder: 'dd-mm-yyyy',
                value: h,
                onChange: function (e) {
                  x(e);
                },
              }),
              e.createElement('input', {
                type: 'text',
                id: 'secondInput',
                placeholder: 'dd-mm-yyyy',
                value: g,
                onChange: function (e) {
                  x(e);
                },
              }),
              e.createElement(
                n,
                t({}, r, {
                  handleSelectDay: function (e) {
                    var t = ''
                      .concat(e.getDate(), '-')
                      .concat(e.getMonth() + 1, '-')
                      .concat(e.getFullYear());
                    '01.01.1970' === s.toLocaleDateString() ||
                    u.getTime() - e.getTime() > e.getTime() - s.getTime()
                      ? (c(e), f(t))
                      : (d(e), y(t));
                  },
                  selectedFirstDay: s,
                  selectedSecondDay: u,
                  isInputHaveValue: S,
                })
              ),
              (h || g) &&
                e.createElement(
                  Pn,
                  {
                    onClick: function () {
                      c(new Date(0)), d(new Date(0)), y(''), f('');
                    },
                  },
                  'Clear all'
                )
            );
          }
        );
        var n;
      }),
      (n.withTodos = function (n) {
        return function (r) {
          e.createElement(n, t({}, r, { withTodos: !0 }));
        };
      }),
      n
    );
  })();
module.exports = Mn;
//# sourceMappingURL=index.js.map
