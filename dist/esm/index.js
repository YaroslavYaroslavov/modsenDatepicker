import e, {
  useRef as t,
  useDebugValue as n,
  createElement as r,
  useContext as o,
  useState as a,
  useEffect as i,
} from 'react';
var s = function () {
  return (
    (s =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }),
    s.apply(this, arguments)
  );
};
function c(e, t, n) {
  if (n || 2 === arguments.length)
    for (var r, o = 0, a = t.length; o < a; o++)
      (!r && o in t) ||
        (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
  return e.concat(r || Array.prototype.slice.call(t));
}
function l(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, 'raw', { value: t })
      : (e.raw = t),
    e
  );
}
function u(e) {
  var t = Object.create(null);
  return function (n) {
    return void 0 === t[n] && (t[n] = e(n)), t[n];
  };
}
'function' == typeof SuppressedError && SuppressedError;
var d =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  p = u(function (e) {
    return (
      d.test(e) ||
      (111 === e.charCodeAt(0) &&
        110 === e.charCodeAt(1) &&
        e.charCodeAt(2) < 91)
    );
  }),
  h = '-ms-',
  f = '-moz-',
  m = '-webkit-',
  g = 'comm',
  y = 'rule',
  v = 'decl',
  w = '@import',
  b = '@keyframes',
  x = '@layer',
  S = Math.abs,
  k = String.fromCharCode,
  D = Object.assign;
function C(e) {
  return e.trim();
}
function E(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function T(e, t, n) {
  return e.replace(t, n);
}
function N(e, t) {
  return e.indexOf(t);
}
function A(e, t) {
  return 0 | e.charCodeAt(t);
}
function P(e, t, n) {
  return e.slice(t, n);
}
function I(e) {
  return e.length;
}
function O(e) {
  return e.length;
}
function M(e, t) {
  return t.push(e), e;
}
function Y(e, t) {
  return e.filter(function (e) {
    return !E(e, t);
  });
}
var R = 1,
  _ = 1,
  F = 0,
  j = 0,
  L = 0,
  $ = '';
function H(e, t, n, r, o, a, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: a,
    line: R,
    column: _,
    length: i,
    return: '',
    siblings: s,
  };
}
function z(e, t) {
  return D(
    H('', null, null, '', null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function V(e) {
  for (; e.root; ) e = z(e.root, { children: [e] });
  M(e, e.siblings);
}
function W() {
  return (L = j > 0 ? A($, --j) : 0), _--, 10 === L && ((_ = 1), R--), L;
}
function U() {
  return (L = j < F ? A($, j++) : 0), _++, 10 === L && ((_ = 1), R++), L;
}
function B() {
  return A($, j);
}
function G() {
  return j;
}
function q(e, t) {
  return P($, e, t);
}
function X(e) {
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
function J(e) {
  return C(q(j - 1, Q(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function K(e) {
  for (; (L = B()) && L < 33; ) U();
  return X(e) > 2 || X(L) > 3 ? '' : ' ';
}
function Z(e, t) {
  for (
    ;
    --t &&
    U() &&
    !(L < 48 || L > 102 || (L > 57 && L < 65) || (L > 70 && L < 97));

  );
  return q(e, G() + (t < 6 && 32 == B() && 32 == U()));
}
function Q(e) {
  for (; U(); )
    switch (L) {
      case e:
        return j;
      case 34:
      case 39:
        34 !== e && 39 !== e && Q(L);
        break;
      case 40:
        41 === e && Q(e);
        break;
      case 92:
        U();
    }
  return j;
}
function ee(e, t) {
  for (; U() && e + L !== 57 && (e + L !== 84 || 47 !== B()); );
  return '/*' + q(t, j - 1) + '*' + k(47 === e ? e : U());
}
function te(e) {
  for (; !X(B()); ) U();
  return q(e, j);
}
function ne(e) {
  return (function (e) {
    return ($ = ''), e;
  })(
    re(
      '',
      null,
      null,
      null,
      [''],
      (e = (function (e) {
        return (R = _ = 1), (F = I(($ = e))), (j = 0), [];
      })(e)),
      0,
      [0],
      e
    )
  );
}
function re(e, t, n, r, o, a, i, s, c) {
  for (
    var l = 0,
      u = 0,
      d = i,
      p = 0,
      h = 0,
      f = 0,
      m = 1,
      g = 1,
      y = 1,
      v = 0,
      w = '',
      b = o,
      x = a,
      S = r,
      D = w;
    g;

  )
    switch (((f = v), (v = U()))) {
      case 40:
        if (108 != f && 58 == A(D, d - 1)) {
          -1 != N((D += T(J(v), '&', '&\f')), '&\f') && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        D += J(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        D += K(f);
        break;
      case 92:
        D += Z(G() - 1, 7);
        continue;
      case 47:
        switch (B()) {
          case 42:
          case 47:
            M(ae(ee(U(), G()), t, n, c), c);
            break;
          default:
            D += '/';
        }
        break;
      case 123 * m:
        s[l++] = I(D) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            -1 == y && (D = T(D, /\f/g, '')),
              h > 0 &&
                I(D) - d &&
                M(
                  h > 32
                    ? ie(D + ';', r, n, d - 1, c)
                    : ie(T(D, ' ', '') + ';', r, n, d - 2, c),
                  c
                );
            break;
          case 59:
            D += ';';
          default:
            if (
              (M((S = oe(D, t, n, l, u, o, s, w, (b = []), (x = []), d, a)), a),
              123 === v)
            )
              if (0 === u) re(D, t, S, S, b, a, d, s, x);
              else
                switch (99 === p && 110 === A(D, 3) ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    re(
                      e,
                      S,
                      S,
                      r && M(oe(e, S, S, 0, 0, o, s, w, o, (b = []), d, x), x),
                      o,
                      x,
                      d,
                      s,
                      r ? b : x
                    );
                    break;
                  default:
                    re(D, S, S, S, [''], x, 0, s, x);
                }
        }
        (l = u = h = 0), (m = y = 1), (w = D = ''), (d = i);
        break;
      case 58:
        (d = 1 + I(D)), (h = f);
      default:
        if (m < 1)
          if (123 == v) --m;
          else if (125 == v && 0 == m++ && 125 == W()) continue;
        switch (((D += k(v)), v * m)) {
          case 38:
            y = u > 0 ? 1 : ((D += '\f'), -1);
            break;
          case 44:
            (s[l++] = (I(D) - 1) * y), (y = 1);
            break;
          case 64:
            45 === B() && (D += J(U())),
              (p = B()),
              (u = d = I((w = D += te(G())))),
              v++;
            break;
          case 45:
            45 === f && 2 == I(D) && (m = 0);
        }
    }
  return a;
}
function oe(e, t, n, r, o, a, i, s, c, l, u, d) {
  for (
    var p = o - 1, h = 0 === o ? a : [''], f = O(h), m = 0, g = 0, v = 0;
    m < r;
    ++m
  )
    for (var w = 0, b = P(e, p + 1, (p = S((g = i[m])))), x = e; w < f; ++w)
      (x = C(g > 0 ? h[w] + ' ' + b : T(b, /&\f/g, h[w]))) && (c[v++] = x);
  return H(e, t, n, 0 === o ? y : s, c, l, u, d);
}
function ae(e, t, n, r) {
  return H(e, t, n, g, k(L), P(e, 2, -2), 0, r);
}
function ie(e, t, n, r, o) {
  return H(e, t, n, v, P(e, 0, r), P(e, r + 1, -1), r, o);
}
function se(e, t, n) {
  switch (
    (function (e, t) {
      return 45 ^ A(e, 0)
        ? (((((((t << 2) ^ A(e, 0)) << 2) ^ A(e, 1)) << 2) ^ A(e, 2)) << 2) ^
            A(e, 3)
        : 0;
    })(e, t)
  ) {
    case 5103:
      return m + 'print-' + e + e;
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
      return m + e + e;
    case 4789:
      return f + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return m + e + f + e + h + e + e;
    case 5936:
      switch (A(e, t + 11)) {
        case 114:
          return m + e + h + T(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return m + e + h + T(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return m + e + h + T(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return m + e + h + e + e;
    case 6165:
      return m + e + h + 'flex-' + e + e;
    case 5187:
      return (
        m + e + T(e, /(\w+).+(:[^]+)/, m + 'box-$1$2' + h + 'flex-$1$2') + e
      );
    case 5443:
      return (
        m +
        e +
        h +
        'flex-item-' +
        T(e, /flex-|-self/g, '') +
        (E(e, /flex-|baseline/)
          ? ''
          : h + 'grid-row-' + T(e, /flex-|-self/g, '')) +
        e
      );
    case 4675:
      return (
        m +
        e +
        h +
        'flex-line-pack' +
        T(e, /align-content|flex-|-self/g, '') +
        e
      );
    case 5548:
      return m + e + h + T(e, 'shrink', 'negative') + e;
    case 5292:
      return m + e + h + T(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        m +
        'box-' +
        T(e, '-grow', '') +
        m +
        e +
        h +
        T(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return m + T(e, /([^-])(transform)/g, '$1' + m + '$2') + e;
    case 6187:
      return (
        T(T(T(e, /(zoom-|grab)/, m + '$1'), /(image-set)/, m + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return T(e, /(image-set\([^]*)/, m + '$1$`$1');
    case 4968:
      return (
        T(
          T(e, /(.+:)(flex-)?(.*)/, m + 'box-pack:$3' + h + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        m +
        e +
        e
      );
    case 4200:
      if (!E(e, /flex-|baseline/)) return h + 'grid-column-align' + P(e, t) + e;
      break;
    case 2592:
    case 3360:
      return h + T(e, 'template-', '') + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (e, n) {
          return (t = n), E(e.props, /grid-\w+-end/);
        })
        ? ~N(e + (n = n[t].value), 'span')
          ? e
          : h +
            T(e, '-start', '') +
            e +
            h +
            'grid-row-span:' +
            (~N(n, 'span') ? E(n, /\d+/) : +E(n, /\d+/) - +E(e, /\d+/)) +
            ';'
        : h + T(e, '-start', '') + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (e) {
          return E(e.props, /grid-\w+-start/);
        })
        ? e
        : h + T(T(e, '-end', '-span'), 'span ', '') + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return T(e, /(.+)-inline(.+)/, m + '$1$2') + e;
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
      if (I(e) - 1 - t > 6)
        switch (A(e, t + 1)) {
          case 109:
            if (45 !== A(e, t + 4)) break;
          case 102:
            return (
              T(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + m + '$2-$3$1' + f + (108 == A(e, t + 3) ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~N(e, 'stretch')
              ? se(T(e, 'stretch', 'fill-available'), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return T(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (t, n, r, o, a, i, s) {
          return (
            h +
            n +
            ':' +
            r +
            s +
            (o ? h + n + '-span:' + (a ? i : +i - +r) + s : '') +
            e
          );
        }
      );
    case 4949:
      if (121 === A(e, t + 6)) return T(e, ':', ':' + m) + e;
      break;
    case 6444:
      switch (A(e, 45 === A(e, 14) ? 18 : 11)) {
        case 120:
          return (
            T(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                m +
                (45 === A(e, 14) ? 'inline-' : '') +
                'box$3$1' +
                m +
                '$2$3$1' +
                h +
                '$2box$3'
            ) + e
          );
        case 100:
          return T(e, ':', ':' + h) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return T(e, 'scroll-', 'scroll-snap-') + e;
  }
  return e;
}
function ce(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
  return n;
}
function le(e, t, n, r) {
  switch (e.type) {
    case x:
      if (e.children.length) break;
    case w:
    case v:
      return (e.return = e.return || e.value);
    case g:
      return '';
    case b:
      return (e.return = e.value + '{' + ce(e.children, r) + '}');
    case y:
      if (!I((e.value = e.props.join(',')))) return '';
  }
  return I((n = ce(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
}
function ue(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case v:
        return void (e.return = se(e.value, e.length, n));
      case b:
        return ce([z(e, { value: T(e.value, '@', '@' + m) })], r);
      case y:
        if (e.length)
          return (function (e, t) {
            return e.map(t).join('');
          })((n = e.props), function (t) {
            switch (E(t, (r = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                V(z(e, { props: [T(t, /:(read-\w+)/, ':' + f + '$1')] })),
                  V(z(e, { props: [t] })),
                  D(e, { props: Y(n, r) });
                break;
              case '::placeholder':
                V(z(e, { props: [T(t, /:(plac\w+)/, ':' + m + 'input-$1')] })),
                  V(z(e, { props: [T(t, /:(plac\w+)/, ':' + f + '$1')] })),
                  V(z(e, { props: [T(t, /:(plac\w+)/, h + 'input-$1')] })),
                  V(z(e, { props: [t] })),
                  D(e, { props: Y(n, r) });
            }
            return '';
          });
    }
}
var de = {
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
  pe =
    ('undefined' != typeof process &&
      void 0 !== process.env &&
      (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
    'data-styled',
  he = 'undefined' != typeof window && 'HTMLElement' in window,
  fe = Boolean(
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
  me = /invalid hook call/i,
  ge = new Set(),
  ye = function (e, n) {
    if ('production' !== process.env.NODE_ENV) {
      var r = n ? ' with the id of "'.concat(n, '"') : '',
        o =
          'The component '
            .concat(e)
            .concat(r, ' has been created dynamically.\n') +
          "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
        a = console.error;
      try {
        var i = !0;
        (console.error = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          me.test(e)
            ? ((i = !1), ge.delete(o))
            : a.apply(void 0, c([e], t, !1));
        }),
          t(),
          i && !ge.has(o) && (console.warn(o), ge.add(o));
      } catch (e) {
        me.test(e.message) && ge.delete(o);
      } finally {
        console.error = a;
      }
    }
  },
  ve = Object.freeze([]),
  we = Object.freeze({});
var be = new Set([
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
  xe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Se = /(^-|-$)/g;
function ke(e) {
  return e.replace(xe, '-').replace(Se, '');
}
var De = /(a)(d)/gi,
  Ce = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Ee(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Ce(t % 52) + n;
  return (Ce(t % 52) + n).replace(De, '$1-$2');
}
var Te,
  Ne = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Ae = function (e) {
    return Ne(5381, e);
  };
function Pe(e) {
  return (
    ('production' !== process.env.NODE_ENV && 'string' == typeof e && e) ||
    e.displayName ||
    e.name ||
    'Component'
  );
}
function Ie(e) {
  return (
    'string' == typeof e &&
    ('production' === process.env.NODE_ENV ||
      e.charAt(0) === e.charAt(0).toLowerCase())
  );
}
var Oe = 'function' == typeof Symbol && Symbol.for,
  Me = Oe ? Symbol.for('react.memo') : 60115,
  Ye = Oe ? Symbol.for('react.forward_ref') : 60112,
  Re = {
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
  _e = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Fe = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  je =
    (((Te = {})[Ye] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Te[Me] = Fe),
    Te);
function Le(e) {
  return ('type' in (t = e) && t.type.$$typeof) === Me
    ? Fe
    : '$$typeof' in e
    ? je[e.$$typeof]
    : Re;
  var t;
}
var $e = Object.defineProperty,
  He = Object.getOwnPropertyNames,
  ze = Object.getOwnPropertySymbols,
  Ve = Object.getOwnPropertyDescriptor,
  We = Object.getPrototypeOf,
  Ue = Object.prototype;
function Be(e, t, n) {
  if ('string' != typeof t) {
    if (Ue) {
      var r = We(t);
      r && r !== Ue && Be(e, r, n);
    }
    var o = He(t);
    ze && (o = o.concat(ze(t)));
    for (var a = Le(e), i = Le(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in _e || (n && n[c]) || (i && c in i) || (a && c in a))) {
        var l = Ve(t, c);
        try {
          $e(e, c, l);
        } catch (e) {}
      }
    }
  }
  return e;
}
function Ge(e) {
  return 'function' == typeof e;
}
function qe(e) {
  return 'object' == typeof e && 'styledComponentId' in e;
}
function Xe(e, t) {
  return e && t ? ''.concat(e, ' ').concat(t) : e || t || '';
}
function Je(e, t) {
  if (0 === e.length) return '';
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Ke(e) {
  return (
    null !== e &&
    'object' == typeof e &&
    e.constructor.name === Object.name &&
    !('props' in e && e.$$typeof)
  );
}
function Ze(e, t, n) {
  if ((void 0 === n && (n = !1), !n && !Ke(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Ze(e[r], t[r]);
  else if (Ke(t)) for (var r in t) e[r] = Ze(e[r], t[r]);
  return e;
}
function Qe(e, t) {
  Object.defineProperty(e, 'toString', { value: t });
}
var et =
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
function tt() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, a = e.length; o < a; o += 1) r.push(e[o]);
  return (
    r.forEach(function (e) {
      n = n.replace(/%[a-z]/, e);
    }),
    n
  );
}
function nt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return 'production' === process.env.NODE_ENV
    ? new Error(
        'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
          .concat(e, ' for more information.')
          .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : '')
      )
    : new Error(tt.apply(void 0, c([et[e]], t, !1)).trim());
}
var rt = (function () {
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
            if ((o <<= 1) < 0) throw nt(16, ''.concat(e));
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
  ot = new Map(),
  at = new Map(),
  it = 1,
  st = function (e) {
    if (ot.has(e)) return ot.get(e);
    for (; at.has(it); ) it++;
    var t = it++;
    if (
      'production' !== process.env.NODE_ENV &&
      ((0 | t) < 0 || t > 1073741824)
    )
      throw nt(16, ''.concat(t));
    return ot.set(e, t), at.set(t, e), t;
  },
  ct = function (e, t) {
    ot.set(e, t), at.set(t, e);
  },
  lt = 'style['
    .concat(pe, '][')
    .concat('data-styled-version', '="')
    .concat('6.1.0', '"]'),
  ut = new RegExp(
    '^'.concat(pe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  dt = function (e, t, n) {
    for (var r, o = n.split(','), a = 0, i = o.length; a < i; a++)
      (r = o[a]) && e.registerName(t, r);
  },
  pt = function (e, t) {
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
        var c = s.match(ut);
        if (c) {
          var l = 0 | parseInt(c[1], 10),
            u = c[2];
          0 !== l && (ct(u, l), dt(e, u, c[3]), e.getTag().insertRules(l, o)),
            (o.length = 0);
        } else o.push(s);
      }
    }
  };
var ht = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      o = (function (e) {
        var t = Array.from(e.querySelectorAll('style['.concat(pe, ']')));
        return t[t.length - 1];
      })(n),
      a = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(pe, 'active'),
      r.setAttribute('data-styled-version', '6.1.0');
    var i = 'undefined' != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
    return i && r.setAttribute('nonce', i), n.insertBefore(r, a), r;
  },
  ft = (function () {
    function e(e) {
      (this.element = ht(e)),
        this.element.appendChild(document.createTextNode('')),
        (this.sheet = (function (e) {
          if (e.sheet) return e.sheet;
          for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
            var o = t[n];
            if (o.ownerNode === e) return o;
          }
          throw nt(17);
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
  mt = (function () {
    function e(e) {
      (this.element = ht(e)),
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
  gt = (function () {
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
  yt = he,
  vt = { isServer: !he, useCSSOMInjection: !fe },
  wt = (function () {
    function e(e, t, n) {
      void 0 === e && (e = we), void 0 === t && (t = {});
      var r = this;
      (this.options = s(s({}, vt), e)),
        (this.gs = t),
        (this.names = new Map(n)),
        (this.server = !!e.isServer),
        !this.server &&
          he &&
          yt &&
          ((yt = !1),
          (function (e) {
            for (
              var t = document.querySelectorAll(lt), n = 0, r = t.length;
              n < r;
              n++
            ) {
              var o = t[n];
              o &&
                'active' !== o.getAttribute(pe) &&
                (pt(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
          })(this)),
        Qe(this, function () {
          return (function (e) {
            for (
              var t = e.getTag(),
                n = t.length,
                r = '',
                o = function (n) {
                  var o = (function (e) {
                    return at.get(e);
                  })(n);
                  if (void 0 === o) return 'continue';
                  var a = e.names.get(o),
                    i = t.getGroup(n);
                  if (void 0 === a || 0 === i.length) return 'continue';
                  var s = ''
                      .concat(pe, '.g')
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
          })(r);
        });
    }
    return (
      (e.registerId = function (e) {
        return st(e);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          void 0 === n && (n = !0),
          new e(s(s({}, this.options), t), this.gs, (n && this.names) || void 0)
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
              return e.isServer ? new gt(n) : t ? new ft(n) : new mt(n);
            })(this.options)),
            new rt(e)))
        );
        var e;
      }),
      (e.prototype.hasNameForId = function (e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
      }),
      (e.prototype.registerName = function (e, t) {
        if ((st(e), this.names.has(e))) this.names.get(e).add(t);
        else {
          var n = new Set();
          n.add(t), this.names.set(e, n);
        }
      }),
      (e.prototype.insertRules = function (e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(st(e), n);
      }),
      (e.prototype.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (e.prototype.clearRules = function (e) {
        this.getTag().clearGroup(st(e)), this.clearNames(e);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  bt = /&/g,
  xt = /^\s*\/\/.*$/gm;
function St(e, t) {
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
        (e.children = St(e.children, t)),
      e
    );
  });
}
var kt = new wt(),
  Dt = (function (e) {
    var t,
      n,
      r,
      o = void 0 === e ? we : e,
      a = o.options,
      i = void 0 === a ? we : a,
      s = o.plugins,
      c = void 0 === s ? ve : s,
      l = function (e, r, o) {
        return o === n ||
          (o.startsWith(n) && o.endsWith(n) && o.replaceAll(n, '').length > 0)
          ? '.'.concat(t)
          : e;
      },
      u = c.slice();
    u.push(function (e) {
      e.type === y &&
        e.value.includes('&') &&
        (e.props[0] = e.props[0].replace(bt, n).replace(r, l));
    }),
      i.prefix && u.push(ue),
      u.push(le);
    var d = function (e, o, a, s) {
      void 0 === o && (o = ''),
        void 0 === a && (a = ''),
        void 0 === s && (s = '&'),
        (t = s),
        (n = o),
        (r = new RegExp('\\'.concat(n, '\\b'), 'g'));
      var c = e.replace(xt, ''),
        l = ne(a || o ? ''.concat(a, ' ').concat(o, ' { ').concat(c, ' }') : c);
      i.namespace && (l = St(l, i.namespace));
      var d,
        p = [];
      return (
        ce(
          l,
          (function (e) {
            var t = O(e);
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
      (d.hash = c.length
        ? c
            .reduce(function (e, t) {
              return t.name || nt(15), Ne(e, t.name);
            }, 5381)
            .toString()
        : ''),
      d
    );
  })(),
  Ct = e.createContext({
    shouldForwardProp: void 0,
    styleSheet: kt,
    stylis: Dt,
  });
function Et() {
  return o(Ct);
}
Ct.Consumer, e.createContext(void 0);
var Tt = (function () {
    function e(e, t) {
      var n = this;
      (this.inject = function (e, t) {
        void 0 === t && (t = Dt);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) ||
          e.insertRules(n.id, r, t(n.rules, r, '@keyframes'));
      }),
        (this.name = e),
        (this.id = 'sc-keyframes-'.concat(e)),
        (this.rules = t),
        Qe(this, function () {
          throw nt(12, String(n.name));
        });
    }
    return (
      (e.prototype.getName = function (e) {
        return void 0 === e && (e = Dt), this.name + e.hash;
      }),
      e
    );
  })(),
  Nt = function (e) {
    return e >= 'A' && e <= 'Z';
  };
function At(e) {
  for (var t = '', n = 0; n < e.length; n++) {
    var r = e[n];
    if (1 === n && '-' === r && '-' === e[0]) return e;
    Nt(r) ? (t += '-' + r.toLowerCase()) : (t += r);
  }
  return t.startsWith('ms-') ? '-' + t : t;
}
var Pt = function (e) {
    return null == e || !1 === e || '' === e;
  },
  It = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var a = e[o];
      e.hasOwnProperty(o) &&
        !Pt(a) &&
        ((Array.isArray(a) && a.isCss) || Ge(a)
          ? r.push(''.concat(At(o), ':'), a, ';')
          : Ke(a)
          ? r.push.apply(r, c(c([''.concat(o, ' {')], It(a), !1), ['}'], !1))
          : r.push(
              ''
                .concat(At(o), ': ')
                .concat(
                  ((t = o),
                  null == (n = a) || 'boolean' == typeof n || '' === n
                    ? ''
                    : 'number' != typeof n ||
                      0 === n ||
                      t in de ||
                      t.startsWith('--')
                    ? String(n).trim()
                    : ''.concat(n, 'px')),
                  ';'
                )
            ));
    }
    return r;
  };
function Ot(e, t, n, r) {
  if (Pt(e)) return [];
  if (qe(e)) return ['.'.concat(e.styledComponentId)];
  if (Ge(e)) {
    if (!Ge((a = e)) || (a.prototype && a.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return (
      'production' === process.env.NODE_ENV ||
        'object' != typeof o ||
        Array.isArray(o) ||
        o instanceof Tt ||
        Ke(o) ||
        null === o ||
        console.error(
          ''.concat(
            Pe(e),
            ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.'
          )
        ),
      Ot(o, t, n, r)
    );
  }
  var a;
  return e instanceof Tt
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Ke(e)
    ? It(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        ve,
        e.map(function (e) {
          return Ot(e, t, n, r);
        })
      )
    : [e.toString()];
}
var Mt = Ae('6.1.0'),
  Yt = (function () {
    function e(e, t, n) {
      (this.rules = e),
        (this.staticRulesId = ''),
        (this.isStatic =
          'production' === process.env.NODE_ENV &&
          (void 0 === n || n.isStatic) &&
          (function (e) {
            for (var t = 0; t < e.length; t += 1) {
              var n = e[t];
              if (Ge(n) && !qe(n)) return !1;
            }
            return !0;
          })(e)),
        (this.componentId = t),
        (this.baseHash = Ne(Mt, t)),
        (this.baseStyle = n),
        wt.registerId(t);
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
            r = Xe(r, this.staticRulesId);
          else {
            var o = Je(Ot(this.rules, e, t, n)),
              a = Ee(Ne(this.baseHash, o) >>> 0);
            if (!t.hasNameForId(this.componentId, a)) {
              var i = n(o, '.'.concat(a), void 0, this.componentId);
              t.insertRules(this.componentId, a, i);
            }
            (r = Xe(r, a)), (this.staticRulesId = a);
          }
        else {
          for (
            var s = Ne(this.baseHash, n.hash), c = '', l = 0;
            l < this.rules.length;
            l++
          ) {
            var u = this.rules[l];
            if ('string' == typeof u)
              (c += u), 'production' !== process.env.NODE_ENV && (s = Ne(s, u));
            else if (u) {
              var d = Je(Ot(u, e, t, n));
              (s = Ne(s, d + l)), (c += d);
            }
          }
          if (c) {
            var p = Ee(s >>> 0);
            t.hasNameForId(this.componentId, p) ||
              t.insertRules(
                this.componentId,
                p,
                n(c, '.'.concat(p), void 0, this.componentId)
              ),
              (r = Xe(r, p));
          }
        }
        return r;
      }),
      e
    );
  })(),
  Rt = e.createContext(void 0);
Rt.Consumer;
var _t = {},
  Ft = new Set();
function jt(t, o, a) {
  var i = qe(t),
    c = t,
    l = !Ie(t),
    u = o.attrs,
    d = void 0 === u ? ve : u,
    h = o.componentId,
    f =
      void 0 === h
        ? (function (e, t) {
            var n = 'string' != typeof e ? 'sc' : ke(e);
            _t[n] = (_t[n] || 0) + 1;
            var r = ''.concat(n, '-').concat(
              (function (e) {
                return Ee(Ae(e) >>> 0);
              })('6.1.0' + n + _t[n])
            );
            return t ? ''.concat(t, '-').concat(r) : r;
          })(o.displayName, o.parentComponentId)
        : h,
    m = o.displayName,
    g =
      void 0 === m
        ? (function (e) {
            return Ie(e) ? 'styled.'.concat(e) : 'Styled('.concat(Pe(e), ')');
          })(t)
        : m,
    y =
      o.displayName && o.componentId
        ? ''.concat(ke(o.displayName), '-').concat(o.componentId)
        : o.componentId || f,
    v = i && c.attrs ? c.attrs.concat(d).filter(Boolean) : d,
    w = o.shouldForwardProp;
  if (i && c.shouldForwardProp) {
    var b = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      var x = o.shouldForwardProp;
      w = function (e, t) {
        return b(e, t) && x(e, t);
      };
    } else w = b;
  }
  var S = new Yt(a, y, i ? c.componentStyle : void 0);
  function k(t, o) {
    return (function (t, o, a) {
      var i = t.attrs,
        c = t.componentStyle,
        l = t.defaultProps,
        u = t.foldedComponentIds,
        d = t.styledComponentId,
        h = t.target,
        f = e.useContext(Rt),
        m = Et(),
        g = t.shouldForwardProp || m.shouldForwardProp;
      'production' !== process.env.NODE_ENV && n(d);
      var y = (function (e, t, n) {
          for (
            var r, o = s(s({}, t), { className: void 0, theme: n }), a = 0;
            a < e.length;
            a += 1
          ) {
            var i = Ge((r = e[a])) ? r(o) : r;
            for (var c in i)
              o[c] =
                'className' === c
                  ? Xe(o[c], i[c])
                  : 'style' === c
                  ? s(s({}, o[c]), i[c])
                  : i[c];
          }
          return t.className && (o.className = Xe(o.className, t.className)), o;
        })(
          i,
          o,
          (function (e, t, n) {
            return (
              void 0 === n && (n = we),
              (e.theme !== n.theme && e.theme) || t || n.theme
            );
          })(o, f, l) || we
        ),
        v = y.as || h,
        w = {};
      for (var b in y)
        void 0 === y[b] ||
          '$' === b[0] ||
          'as' === b ||
          'theme' === b ||
          ('forwardedAs' === b
            ? (w.as = y.forwardedAs)
            : (g && !g(b, v)) ||
              ((w[b] = y[b]),
              g ||
                'development' !== process.env.NODE_ENV ||
                p(b) ||
                Ft.has(b) ||
                !be.has(v) ||
                (Ft.add(b),
                console.warn(
                  'styled-components: it looks like an unknown prop "'.concat(
                    b,
                    '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)'
                  )
                ))));
      var x = (function (e, t) {
        var r = Et(),
          o = e.generateAndInjectStyles(t, r.styleSheet, r.stylis);
        return 'production' !== process.env.NODE_ENV && n(o), o;
      })(c, y);
      'production' !== process.env.NODE_ENV &&
        t.warnTooManyClasses &&
        t.warnTooManyClasses(x);
      var S = Xe(u, d);
      return (
        x && (S += ' ' + x),
        y.className && (S += ' ' + y.className),
        (w[Ie(v) && !be.has(v) ? 'class' : 'className'] = S),
        (w.ref = a),
        r(v, w)
      );
    })(D, t, o);
  }
  'production' !== process.env.NODE_ENV && (k.displayName = g);
  var D = e.forwardRef(k);
  return (
    (D.attrs = v),
    (D.componentStyle = S),
    (D.shouldForwardProp = w),
    'production' !== process.env.NODE_ENV && (D.displayName = g),
    (D.foldedComponentIds = i
      ? Xe(c.foldedComponentIds, c.styledComponentId)
      : ''),
    (D.styledComponentId = y),
    (D.target = i ? c.target : t),
    Object.defineProperty(D, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (e) {
        this._foldedDefaultProps = i
          ? (function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              for (var r = 0, o = t; r < o.length; r++) Ze(e, o[r], !0);
              return e;
            })({}, c.defaultProps, e)
          : e;
      },
    }),
    'production' !== process.env.NODE_ENV &&
      (ye(g, y),
      (D.warnTooManyClasses = (function (e, t) {
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
      })(g, y))),
    Qe(D, function () {
      return '.'.concat(D.styledComponentId);
    }),
    l &&
      Be(D, t, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    D
  );
}
function Lt(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var $t = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Ht(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ge(e) || Ke(e)) return $t(Ot(Lt(ve, c([e], t, !0))));
  var r = e;
  return 0 === t.length && 1 === r.length && 'string' == typeof r[0]
    ? Ot(r)
    : $t(Ot(Lt(r, t)));
}
function zt(e, t, n) {
  if ((void 0 === n && (n = we), !t)) throw nt(1, t);
  var r = function (r) {
    for (var o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
    return e(t, n, Ht.apply(void 0, c([r], o, !1)));
  };
  return (
    (r.attrs = function (r) {
      return zt(
        e,
        t,
        s(s({}, n), {
          attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (r) {
      return zt(e, t, s(s({}, n), r));
    }),
    r
  );
}
var Vt = function (e) {
    return zt(jt, e);
  },
  Wt = Vt;
be.forEach(function (e) {
  Wt[e] = Vt(e);
}),
  'production' !== process.env.NODE_ENV &&
    'undefined' != typeof navigator &&
    'ReactNative' === navigator.product &&
    console.warn(
      "It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"
    );
var Ut = '__sc-'.concat(pe, '__');
function Bt(e, t, n) {
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
  (window[Ut] || (window[Ut] = 0),
  1 === window[Ut] &&
    console.warn(
      "It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."
    ),
  (window[Ut] += 1));
var Gt,
  qt,
  Xt,
  Jt,
  Kt,
  Zt,
  Qt,
  en,
  tn,
  nn,
  rn,
  on,
  an,
  sn = [
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
  cn = Wt.div(
    Gt ||
      (Gt = l(
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
  ln = function (t) {
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
      d = sn.some(function (e) {
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
      cn,
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
  un = function (t) {
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
      h = Bt(a, s, r);
    return e.createElement(
      'div',
      null,
      h.map(function (t) {
        return t.map(function (t) {
          var n = t.date,
            r = t.isCurrentMonth;
          return e.createElement(ln, {
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
  dn = [
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
  pn = Wt.div(
    qt ||
      (qt = l(
        [
          '\n  display: flex;\n  width: 100px;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 30px;\n  font-size: 15px;\n  cursor: pointer;\n  &:hover {\n    color: white;\n    background-color: #297aec;\n    border-radius: 7px;\n  }\n',
        ],
        [
          '\n  display: flex;\n  width: 100px;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 30px;\n  font-size: 15px;\n  cursor: pointer;\n  &:hover {\n    color: white;\n    background-color: #297aec;\n    border-radius: 7px;\n  }\n',
        ]
      ))
  ),
  hn = function (t) {
    var n = t.monthName,
      r = t.id,
      o = t.handleSelectMonth;
    return e.createElement(pn, { onClick: o, id: r }, n);
  },
  fn = function (t) {
    var n = t.handleSelectMonth;
    return e.createElement(
      'div',
      null,
      dn.map(function (t, r) {
        return e.createElement(hn, {
          handleSelectMonth: n,
          key: t,
          monthName: t,
          id: ''.concat(r),
        });
      })
    );
  },
  mn = Wt.div(
    Xt ||
      (Xt = l(
        [
          '\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 250px;\n  flex-wrap: nowrap;\n  margin-top: 10px;\n  p {\n    font-family: Arial, Helvetica, sans-serif;\n    width: 150px;\n    max-width: 250px;\n    word-break: break-all;\n  }\n  input {\n    width: 45px;\n  }\n  button {\n    border: none;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    border-radius: 7px;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #317cf0;\n    }\n  }\n  div {\n    width: 56px;\n    display: flex;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 250px;\n  flex-wrap: nowrap;\n  margin-top: 10px;\n  p {\n    font-family: Arial, Helvetica, sans-serif;\n    width: 150px;\n    max-width: 250px;\n    word-break: break-all;\n  }\n  input {\n    width: 45px;\n  }\n  button {\n    border: none;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    border-radius: 7px;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #317cf0;\n    }\n  }\n  div {\n    width: 56px;\n    display: flex;\n  }\n',
        ]
      ))
  ),
  gn = Wt.div(
    Jt ||
      (Jt = l(
        [
          '\n  align-items: center;\n  justify-content: center;\n  input {\n    margin-top: 10px;\n    width: 100px;\n  }\n  button {\n    border: none;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    width: 45px;\n    height: 32px;\n    border-radius: 7px;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #317cf0;\n    }\n  }\n',
        ],
        [
          '\n  align-items: center;\n  justify-content: center;\n  input {\n    margin-top: 10px;\n    width: 100px;\n  }\n  button {\n    border: none;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    width: 45px;\n    height: 32px;\n    border-radius: 7px;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #317cf0;\n    }\n  }\n',
        ]
      ))
  ),
  yn = function (n) {
    var r = n.selectedDay,
      o = t(null),
      s = a([]),
      l = s[0],
      u = s[1],
      d = a([]),
      p = d[0],
      h = d[1];
    i(
      function () {
        var e = localStorage.getItem('todoList'),
          t = e ? JSON.parse(e) : [];
        u(t);
      },
      [r]
    ),
      i(
        function () {
          r &&
            h(
              l.filter(function (e) {
                return e.day === r.toLocaleDateString();
              })
            );
        },
        [l, r]
      );
    return e.createElement(
      'div',
      null,
      e.createElement(
        gn,
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
                  JSON.stringify(c(c([], l, !0), [e], !1))
                ),
                  u(function (t) {
                    return c(c([], t, !0), [e], !1);
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
        p.map(function (t) {
          return e.createElement(
            mn,
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
                      (n = l.filter(function (t) {
                        return t.id !== e;
                      })),
                      localStorage.setItem('todoList', JSON.stringify(n)),
                      u(n);
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
  vn = function (t) {
    var n = t.startOnMonday,
      r = void 0 === n || n,
      o = t.month,
      a = void 0 === o ? new Date().getMonth() : o,
      s = t.year,
      c = void 0 === s ? new Date().getFullYear() : s,
      l = t.selectedDay,
      u = t.handleSelectDay,
      d = t.weekCounter,
      p = t.setIsLastWeek,
      h = t.setIsFirstWeek,
      f = t.selectedFirstDay,
      m = t.selectedSecondDay,
      g = t.toggleTodoList,
      y = Bt(a, c, r).filter(function (e) {
        return e.some(function (e) {
          return !0 === e.isCurrentMonth;
        });
      }),
      v = y.at(d % y.length);
    return (
      i(
        function () {
          d % y.length == 0
            ? (h(!0), p(!1))
            : d % y.length == y.length - 1 || d % y.length == -1
            ? (h(!1), p(!0))
            : (h(!1), p(!1));
        },
        [d, a, c]
      ),
      e.createElement(
        'div',
        null,
        null == v
          ? void 0
          : v.map(function (t) {
              var n = t.date,
                r = t.isCurrentMonth;
              return e.createElement(ln, {
                toggleTodoList: g,
                selectedFirstDay: f,
                selectedSecondDay: m,
                key: n.toLocaleDateString(),
                selectedDay: l,
                date: n,
                isCurrentMonth: r,
                handleSelectDay: u,
              });
            })
      )
    );
  },
  wn = Wt.div(
    Kt ||
      (Kt = l(
        [
          '\n  width: 100px;\n  height: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n  cursor: pointer;\n  border-radius: 7px;\n  &:hover {\n    color: white;\n    background-color: #297aed;\n  }\n',
        ],
        [
          '\n  width: 100px;\n  height: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n  cursor: pointer;\n  border-radius: 7px;\n  &:hover {\n    color: white;\n    background-color: #297aed;\n  }\n',
        ]
      ))
  ),
  bn = function (t) {
    var n = t.currentDecadeYears,
      r = t.handleSelectYear;
    return e.createElement(
      'div',
      null,
      n.map(function (t) {
        return e.createElement(wn, { onClick: r, key: t }, t);
      })
    );
  },
  xn = Wt.div(
    Zt ||
      (Zt = l(
        [
          '\n  width: 250px;\n  div {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n  }\n',
        ],
        [
          '\n  width: 250px;\n  div {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n  }\n',
        ]
      ))
  ),
  Sn = function (t) {
    var n = t.startOnMonday,
      r = void 0 === n || n,
      o = t.month,
      i = void 0 === o ? new Date().getMonth() : o,
      s = t.year,
      c = void 0 === s ? new Date().getFullYear() : s,
      l = t.selectedDay,
      u = t.handleSelectDay,
      d = t.calendarView,
      p = t.weekCounter,
      h = t.setIsLastWeek,
      f = t.setIsFirstWeek,
      m = t.handleSelectMonth,
      g = t.handleSelectYear,
      y = t.selectedFirstDay,
      v = t.selectedSecondDay,
      w = t.currentDecadeYears,
      b = t.withTodos,
      x = a(!0),
      S = x[0],
      k = x[1],
      D = function () {
        k(function (e) {
          return !e;
        });
      };
    switch (d) {
      case 'month':
        return e.createElement(
          xn,
          null,
          e.createElement(un, {
            selectedFirstDay: y,
            selectedSecondDay: v,
            startOnMonday: r,
            month: i,
            year: c,
            selectedDay: l,
            handleSelectDay: u,
            toggleTodoList: D,
          }),
          b && l && S ? e.createElement(yn, { selectedDay: l }) : null
        );
      case 'week':
        return e.createElement(
          xn,
          null,
          e.createElement(vn, {
            selectedFirstDay: y,
            selectedSecondDay: v,
            startOnMonday: r,
            month: i,
            year: c,
            selectedDay: l,
            handleSelectDay: u,
            weekCounter: p,
            setIsLastWeek: h,
            setIsFirstWeek: f,
            toggleTodoList: D,
          }),
          b && l && S ? e.createElement(yn, { selectedDay: l }) : null
        );
      case 'months':
        return e.createElement(
          xn,
          null,
          e.createElement(fn, { handleSelectMonth: m }),
          ';'
        );
      case 'years':
        return e.createElement(
          xn,
          null,
          e.createElement(bn, {
            year: c,
            currentDecadeYears: w,
            handleSelectYear: g,
          })
        );
    }
  },
  kn = Wt.button(
    Qt ||
      (Qt = l(
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
  Dn = function (t) {
    var n = t.isNext,
      r = t.callback;
    return e.createElement(
      kn,
      { isnext: n.toString(), onClick: r },
      n ? '»' : '«'
    );
  },
  Cn = function (t) {
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
        : e.createElement(Dn, { callback: i, isNext: !1 }),
      e.createElement(
        'h3',
        {
          onClick: function () {
            u('months');
          },
        },
        dn[r],
        ' ',
        a
      ),
      11 === r && a === l
        ? null
        : e.createElement(Dn, { callback: s, isNext: !0 })
    );
  },
  En = function (t) {
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
      r === i ? null : e.createElement(Dn, { callback: o, isNext: !1 }),
      e.createElement(
        'h3',
        {
          onClick: function () {
            c('years');
          },
        },
        r
      ),
      r === s ? null : e.createElement(Dn, { callback: a, isNext: !0 })
    );
  },
  Tn = function (t) {
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
        : e.createElement(Dn, { callback: i, isNext: !1 }),
      e.createElement('h3', null, dn[r], ' ', a),
      11 === r && a === l && d
        ? null
        : e.createElement(Dn, { callback: s, isNext: !0 })
    );
  },
  Nn = function (t) {
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
        : e.createElement(Dn, { callback: a, isNext: !1 }),
      e.createElement(
        'h3',
        null,
        ''
          .concat(null == o ? void 0 : o.at(0), ' - ')
          .concat(null == o ? void 0 : o.at(-1))
      ),
      r === (null == o ? void 0 : o.at(-1))
        ? null
        : e.createElement(Dn, { callback: i, isNext: !0 })
    );
  },
  An = Wt.div(
    en ||
      (en = l(
        [
          '\n  div {\n    display: flex;\n    align-items: center;\n  }\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  justify-content: space-evenly;\n\n  h3 {\n    width: 190px;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #297aec;\n      border-radius: 7px;\n    }\n  }\n',
        ],
        [
          '\n  div {\n    display: flex;\n    align-items: center;\n  }\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  justify-content: space-evenly;\n\n  h3 {\n    width: 190px;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    &:hover {\n      color: white;\n      background-color: #297aec;\n      border-radius: 7px;\n    }\n  }\n',
        ]
      ))
  ),
  Pn = function (t) {
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
          An,
          null,
          e.createElement(Cn, {
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
          An,
          null,
          e.createElement(Tn, {
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
          An,
          null,
          e.createElement(En, {
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
          An,
          null,
          e.createElement(Nn, {
            currentDecadeYears: m,
            minCalendarYear: g,
            maxCalendarYear: y,
            handleSetToPrevDecade: p,
            handleSetToNextDecade: h,
          })
        );
    }
  },
  In = Wt.div(
    tn ||
      (tn = l(
        [
          '\n  justify-content: center;\n  display: flex;\n  font-family: Arial, Helvetica, sans-serif;\n',
        ],
        [
          '\n  justify-content: center;\n  display: flex;\n  font-family: Arial, Helvetica, sans-serif;\n',
        ]
      ))
  ),
  On = Wt.div(
    nn ||
      (nn = l(
        [
          '\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ],
        [
          '\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ]
      ))
  ),
  Mn = function (t) {
    var n = t.startOnMonday,
      r = void 0 === n || n,
      o = t.calendarView,
      a = r
        ? ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
        : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return 'months' === o || 'years' === o
      ? null
      : e.createElement(
          In,
          null,
          a.map(function (t) {
            return e.createElement(On, { key: t }, t);
          })
        );
  },
  Yn = Wt.div(
    rn ||
      (rn = l(
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
  Rn = function (t) {
    var n = t.selectedDay,
      r = t.isInputHaveValue,
      o = void 0 !== r && r,
      s = t.handleSelectDay,
      c = t.startOnMonday,
      l = void 0 === c || c,
      u = t.maxCalendarYear,
      d = void 0 === u ? 3023 : u,
      p = t.minCalendarYear,
      h = void 0 === p ? 1020 : p,
      f = t.defaultMonth,
      m = void 0 === f ? new Date().getMonth() : f,
      g = t.defaultYear,
      y = void 0 === g ? new Date().getFullYear() : g,
      v = t.defaultCalendarView,
      w = void 0 === v ? 'month' : v,
      b = t.selectedFirstDay,
      x = t.selectedSecondDay,
      S = t.withTodos,
      k = void 0 !== S && S,
      D = a(m),
      C = D[0],
      E = D[1],
      T = a(y),
      N = T[0],
      A = T[1],
      P = a(w),
      I = P[0],
      O = P[1],
      M = a(!1),
      Y = M[0],
      R = M[1],
      _ = a(!0),
      F = _[0],
      j = _[1],
      L = a(0),
      $ = L[0],
      H = L[1];
    i(
      function () {
        n &&
          n.getFullYear() <= d &&
          n.getFullYear() >= h &&
          (E(n.getMonth()), A(n.getFullYear()));
      },
      [n]
    );
    var z = (function (e, t, n) {
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
    })(h, d, N);
    function V() {
      0 === C && N
        ? (A(function (e) {
            return e - 1;
          }),
          E(11))
        : E(function (e) {
            return e - 1;
          });
    }
    function W() {
      11 === C
        ? (A(function (e) {
            return e + 1;
          }),
          E(0))
        : E(function (e) {
            return e + 1;
          });
    }
    return e.createElement(
      Yn,
      { isclearbuttonvisible: o.toString() },
      e.createElement(Pn, {
        handleSetToPrevDecade: function () {
          A(function (e) {
            return e - 10;
          });
        },
        handleSetToNextDecade: function () {
          A(function (e) {
            return e + 10;
          });
        },
        currentDecadeYears: z,
        handleSetToPrevMonth: V,
        handleSetToNextMonth: W,
        handleSetToNextWeek: function () {
          H(function (e) {
            return e + 1;
          }),
            Y && (H(0), W());
        },
        handleSetToPrevWeek: function () {
          H(function (e) {
            return e - 1;
          }),
            F && V();
        },
        handleSetToNextYear: function () {
          A(function (e) {
            return e + 1;
          });
        },
        handleSetToPrevYear: function () {
          A(function (e) {
            return e - 1;
          });
        },
        setCalendarView: O,
        month: C,
        year: N,
        maxCalendarYear: d,
        minCalendarYear: h,
        calendarView: I,
        isLastWeek: Y,
        isFirstWeek: F,
      }),
      e.createElement(Mn, { startOnMonday: l, calendarView: I }),
      e.createElement(Sn, {
        withTodos: k,
        selectedFirstDay: b,
        selectedSecondDay: x,
        handleSelectYear: function (e) {
          var t = e.target;
          A(Number(t.textContent)), O('months');
        },
        handleSelectMonth: function (e) {
          var t = e.target;
          E(Number(t.id)), O('month');
        },
        startOnMonday: l,
        month: C,
        year: N,
        selectedDay: n,
        handleSelectDay: s,
        calendarView: I,
        setIsLastWeek: R,
        setIsFirstWeek: j,
        weekCounter: $,
        currentDecadeYears: z,
      })
    );
  },
  _n = Wt.button(
    on ||
      (on = l(
        [
          '\n  width: 100%;\n  height: 25px;\n  margin: 0;\n  border-radius: 0 0 7px 7px;\n  background-color: white;\n  border: 1px solid grey;\n  border-top: 0px;\n  height: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  &:hover {\n    color: white;\n    background-color: #277bec;\n  }\n',
        ],
        [
          '\n  width: 100%;\n  height: 25px;\n  margin: 0;\n  border-radius: 0 0 7px 7px;\n  background-color: white;\n  border: 1px solid grey;\n  border-top: 0px;\n  height: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  &:hover {\n    color: white;\n    background-color: #277bec;\n  }\n',
        ]
      ))
  ),
  Fn = Wt.div(
    an ||
      (an = l(
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
  jn = function (t) {
    return function (n) {
      var r = a(n.selectedDay || new Date()),
        o = r[0],
        i = r[1],
        c = a(''),
        l = c[0],
        u = c[1],
        d = a(!1),
        p = d[0],
        h = d[1],
        f = !!l;
      return e.createElement(
        Fn,
        { isnotvalid: p.toString() },
        e.createElement('input', {
          type: 'text',
          placeholder: 'dd-mm-yyyy',
          value: l,
          onChange: function (e) {
            !(function (e) {
              var t = e.target.value,
                n = t.split('-'),
                r = parseInt(n[0], 10),
                o = parseInt(n[1], 10) - 1,
                a = parseInt(n[2], 10),
                s = new Date(a, o, r);
              s.getDate() === r && s.getMonth() === o && s.getFullYear() === a
                ? (i(s), h(!1))
                : h(!0),
                u(t);
            })(e);
          },
        }),
        e.createElement(
          t,
          s({}, n, {
            handleSelectDay: function (e) {
              var t = ''
                .concat(e.getDate(), '-')
                .concat(e.getMonth() + 1, '-')
                .concat(e.getFullYear());
              i(e), u(t);
            },
            selectedDay: o,
            isInputHaveValue: f,
          })
        ),
        l &&
          e.createElement(
            _n,
            {
              onClick: function () {
                i(new Date()), u('');
              },
            },
            'Clear all'
          )
      );
    };
  },
  Ln = (function () {
    function t() {}
    return (
      (t.getDefaultCalendar = function () {
        return Rn;
      }),
      (t.withInput = function () {
        return jn(Rn);
      }),
      (t.withInputs = function () {
        return (
          (t = Rn),
          function (n) {
            var r,
              o,
              i = a(n.selectedFirstDay || new Date(0)),
              c = i[0],
              l = i[1],
              u = a(n.selectedSecondDay || new Date(0)),
              d = u[0],
              p = u[1],
              h = a(
                (null === (r = n.selectedFirstDay) || void 0 === r
                  ? void 0
                  : r.toLocaleDateString()) || ''
              ),
              f = h[0],
              m = h[1],
              g = a(
                (null === (o = n.selectedSecondDay) || void 0 === o
                  ? void 0
                  : o.toLocaleDateString()) || ''
              ),
              y = g[0],
              v = g[1],
              w = a(!1),
              b = w[0],
              x = w[1],
              S = function (e) {
                var t = e.target.value,
                  n = t.split('-'),
                  r = parseInt(n[0], 10),
                  o = parseInt(n[1], 10) - 1,
                  a = parseInt(n[2], 10),
                  i = new Date(a, o, r);
                i.getDate() === r && i.getMonth() === o && i.getFullYear() === a
                  ? ('firstInput' === e.target.id && (l(i), x(!0)),
                    'secondInput' === e.target.id && (p(i), x(!0)))
                  : x(!0),
                  'firstInput' === e.target.id && m(t),
                  'secondInput' === e.target.id && v(t);
              },
              k = !!f || !!y;
            return e.createElement(
              Fn,
              { isnotvalid: b.toString() },
              e.createElement('input', {
                type: 'text',
                id: 'firstInput',
                placeholder: 'dd-mm-yyyy',
                value: f,
                onChange: function (e) {
                  S(e);
                },
              }),
              e.createElement('input', {
                type: 'text',
                id: 'secondInput',
                placeholder: 'dd-mm-yyyy',
                value: y,
                onChange: function (e) {
                  S(e);
                },
              }),
              e.createElement(
                t,
                s({}, n, {
                  handleSelectDay: function (e) {
                    var t = ''
                      .concat(e.getDate(), '-')
                      .concat(e.getMonth() + 1, '-')
                      .concat(e.getFullYear());
                    '01.01.1970' === c.toLocaleDateString() ||
                    d.getTime() - e.getTime() > e.getTime() - c.getTime()
                      ? (l(e), m(t))
                      : (p(e), v(t));
                  },
                  selectedFirstDay: c,
                  selectedSecondDay: d,
                  isInputHaveValue: k,
                })
              ),
              (f || y) &&
                e.createElement(
                  _n,
                  {
                    onClick: function () {
                      l(new Date(0)), p(new Date(0)), v(''), m('');
                    },
                  },
                  'Clear all'
                )
            );
          }
        );
        var t;
      }),
      (t.withTodos = function (t) {
        return function (n) {
          e.createElement(t, s({}, n, { withTodos: !0 }));
        };
      }),
      t
    );
  })();
export { Ln as default };
//# sourceMappingURL=index.js.map
