// Respaldo embebido para carga local (file://) o sin servidor
const EMBEDDED_FALLBACK = {
  retos: [
  {
    "tag": "FÍSICA • CINEMÁTICA",
    "question": "Un móvil parte del origen en línea recta con velocidad $v_0 = +20\\text{ m/s}$ y aceleración constante $a = -4\\text{ m/s}^2$. ¿Cuál es el recorrido total (distancia recorrida) durante los primeros $8\\text{ s}$?",
    "options": [
      {
        "id": "A",
        "text": "$32\\text{ m}$"
      },
      {
        "id": "B",
        "text": "$68\\text{ m}$"
      },
      {
        "id": "C",
        "text": "$50\\text{ m}$"
      }
    ],
    "correct": "B",
    "explanation": "La trampa es calcular el desplazamiento ($d = 20(8) - 2(64) = +32\\text{ m}$). El móvil se detiene en $t = 5\\text{ s}$ avanzando $50\\text{ m}$, y en los $3\\text{ s}$ restantes retrocede $18\\text{ m}$. El recorrido total es $50 + 18 = 68\\text{ m}$."
  },
  {
    "tag": "FÍSICA • ESTÁTICA",
    "question": "Un bloque de $10\\text{ kg}$ reposa sobre un plano inclinado rugoso que forma $37^\\circ$ con la horizontal ($\\mu_s = 0.8$, $\\mu_k = 0.5$, $g = 10\\text{ m/s}^2$). ¿Cuál es el módulo de la fuerza de rozamiento que actúa sobre el bloque?",
    "options": [
      {
        "id": "A",
        "text": "$64\\text{ N}$"
      },
      {
        "id": "B",
        "text": "$40\\text{ N}$"
      },
      {
        "id": "C",
        "text": "$60\\text{ N}$"
      }
    ],
    "correct": "C",
    "explanation": "La fuerza que intenta deslizarlo es $mg\\sin 37^\\circ = 60\\text{ N}$, mientras que el rozamiento estático máximo es $f_{s,\\text{máx}} = 0.8(80) = 64\\text{ N}$. Como $60\\text{ N} < 64\\text{ N}$, el bloque no se mueve y el rozamiento estático iguala a la componente tangencial: $60\\text{ N}$."
  },
  {
    "tag": "FÍSICA • ELECTROSTÁTICA",
    "question": "Se tienen dos esferas conductoras idénticas con cargas $q_1 = +10\\text{ }\\mu\\text{C}$ y $q_2 = -4\\text{ }\\mu\\text{C}$ separadas cierta distancia. Si se ponen en contacto y luego se vuelven a separar la misma distancia inicial, ¿qué sucede con el módulo de la fuerza eléctrica entre ellas?",
    "options": [
      {
        "id": "A",
        "text": "Se reduce a la novena parte y pasa a ser repulsiva"
      },
      {
        "id": "B",
        "text": "Se reduce a $\\frac{9}{40}$ del valor inicial y sigue siendo atractiva"
      },
      {
        "id": "C",
        "text": "Se reduce a $\\frac{9}{40}$ del valor inicial y pasa a ser repulsiva"
      }
    ],
    "correct": "C",
    "explanation": "Al tocarse, la carga neta ($+6\\text{ }\\mu\\text{C}$) se reparte en partes iguales ($+3\\text{ }\\mu\\text{C}$ cada una), volviéndose repulsiva. El producto de cargas cambia de $|(+10)(-4)| = 40$ a $|(+3)(+3)| = 9$, reduciendo la fuerza a $\\frac{9}{40}$."
  },
  {
    "tag": "FÍSICA • HIDROSTÁTICA",
    "question": "Un bloque de madera de densidad $0.6\\text{ g/cm}^3$ flota en equilibrio dentro de un recipiente con agua ($\\rho_{\\text{agua}} = 1\\text{ g/cm}^3$) ubicado en un ascensor que sube con aceleración constante $a = 2\\text{ m/s}^2$. ¿Qué porcentaje del volumen del bloque permanece sumergido?",
    "options": [
      {
        "id": "A",
        "text": "$60\\%$"
      },
      {
        "id": "B",
        "text": "$72\\%$"
      },
      {
        "id": "C",
        "text": "$50\\%$"
      }
    ],
    "correct": "A",
    "explanation": "En un marco acelerado, tanto el peso aparente como el empuje dependen de la gravedad efectiva $g_{\\text{ef}} = g + a$. Al igualar $E = W_{\\text{ap}}$, $g_{\\text{ef}}$ se cancela en ambos miembros y la fracción sumergida sigue siendo $\\frac{\\rho_{\\text{cuerpo}}}{\\rho_{\\text{líquido}}} = 0.60$ ($60\\%$)."
  },
  {
    "tag": "ÁLGEBRA • ECUACIONES",
    "question": "Resuelva en $\\mathbb{R}$ la ecuación irracional $\\sqrt{x + 2} = -x$ e indique el producto de sus soluciones reales.",
    "options": [
      {
        "id": "A",
        "text": "$-2$"
      },
      {
        "id": "B",
        "text": "$-1$"
      },
      {
        "id": "C",
        "text": "$2$"
      }
    ],
    "correct": "B",
    "explanation": "La raíz cuadrada principal exige $-x \\ge 0 \\implies x \\le 0$. Al elevar al cuadrado se obtiene $x^2 - x - 2 = 0$, cuyas raíces son $x = 2$ y $x = -1$. Descartando $x = 2$ por restricción de signo, la única solución es $x = -1$."
  },
  {
    "tag": "ÁLGEBRA • INECUACIONES",
    "question": "Determine la suma de los valores enteros que verifican la inecuación $\\frac{(x - 2)^2 (x - 5)}{x - 1} \\le 0$.",
    "options": [
      {
        "id": "A",
        "text": "$14$"
      },
      {
        "id": "B",
        "text": "$15$"
      },
      {
        "id": "C",
        "text": "$12$"
      }
    ],
    "correct": "A",
    "explanation": "Por puntos críticos, $x \\in \\langle 1; 5]$. La trampa clásica es incluir $x = 1$ (anula el denominador) u olvidar $x = 2$ (aunque ya está dentro del intervalo $\\langle 1; 5]$). Los enteros válidos son $2, 3, 4, 5$, cuya suma es $14$."
  },
  {
    "tag": "ÁLGEBRA • LOGARITMOS",
    "question": "Halle el conjunto solución de la ecuación $\\log_2(x - 1) + \\log_2(x - 3) = 3$.",
    "options": [
      {
        "id": "A",
        "text": "$\\{5; -1\\}$"
      },
      {
        "id": "B",
        "text": "$\\{5\\}$"
      },
      {
        "id": "C",
        "text": "$\\emptyset$"
      }
    ],
    "correct": "B",
    "explanation": "El dominio de existencia exige $x - 1 > 0$ y $x - 3 > 0$, es decir, $x > 3$. Al resolver $(x - 1)(x - 3) = 2^3$ surgen $x = 5$ y $x = -1$, pero $x = -1$ queda fuera del dominio real del logaritmo."
  },
  {
    "tag": "ÁLGEBRA • VALOR ABSOLUTO",
    "question": "Si $x \\in \\langle -3; -1 \\rangle$, simplifique la expresión $M = \\frac{\\sqrt{x^2 + 6x + 9} + |2x + 1|}{x + 1}$.",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{2 - x}{x + 1}$"
      },
      {
        "id": "B",
        "text": "$\\frac{3x + 4}{x + 1}$"
      },
      {
        "id": "C",
        "text": "$-1$"
      }
    ],
    "correct": "A",
    "explanation": "Recuerda que $\\sqrt{(x+3)^2} = |x+3|$, no $x+3$. Como $-3 < x < -1$, se cumple $x + 3 > 0$ y $2x + 1 < 0$. Así, $|x+3| + |2x+1| = (x + 3) - (2x + 1) = 2 - x$."
  },
  {
    "tag": "ARITMÉTICA • TEORÍA DE CONJUNTOS",
    "question": "Dado el conjunto $A = \\{1; \\{2\\}; \\{1; 2\\}; 3\\}$, ¿cuántas de las siguientes proposiciones son verdaderas? I. $\\{2\\} \\subset A$  II. $\\{\\{2\\}\\} \\subset A$  III. $\\{1; 2\\} \\in A$  IV. $\\{1; 3\\} \\in A$",
    "options": [
      {
        "id": "A",
        "text": "$2$"
      },
      {
        "id": "B",
        "text": "$3$"
      },
      {
        "id": "C",
        "text": "$1$"
      }
    ],
    "correct": "A",
    "explanation": "La relación $\\in$ vincula elemento con conjunto, y $\\subset$ vincula subconjunto con conjunto. $\\{2\\}$ es elemento de $A$, por lo que $\\{\\{2\\}\\} \\subset A$ (II) es verdadera; además $\\{1; 2\\} \\in A$ (III) es verdadera. I y IV confunden pertenencia con inclusión."
  },
  {
    "tag": "ARITMÉTICA • DIVISIBILIDAD",
    "question": "¿Cuántos números enteros positivos de dos cifras son múltiplos de $4$ o múltiplos de $6$, pero no de ambos a la vez?",
    "options": [
      {
        "id": "A",
        "text": "$21$"
      },
      {
        "id": "B",
        "text": "$29$"
      },
      {
        "id": "C",
        "text": "$37$"
      }
    ],
    "correct": "A",
    "explanation": "Entre $10$ y $99$ hay $22$ múltiplos de $4$ ($12$ al $96$) y $15$ múltiplos de $6$ ($12$ al $96$). Los múltiplos de ambos son los de $\\text{MCM}(4,6) = 12$, que son $8$ ($12$ al $96$). La diferencia simétrica es $(22 - 8) + (15 - 8) = 21$."
  },
  {
    "tag": "ARITMÉTICA • PORCENTAJES",
    "question": "Un comerciante fija el precio de un artículo aumentando su costo en un $50\\%$, pero al venderlo realiza dos descuentos sucesivos del $20\\%$ y $20\\%$. ¿Qué porcentaje del costo gana o pierde al final?",
    "options": [
      {
        "id": "A",
        "text": "Gana el $10\\%$"
      },
      {
        "id": "B",
        "text": "Pierde el $4\\%$"
      },
      {
        "id": "C",
        "text": "No gana ni pierde ($0\\%$)"
      }
    ],
    "correct": "B",
    "explanation": "La trampa es sumar descuentos ($20\\% + 20\\% = 40\\%$) y restarlos al $150\\%$. El precio final es $150\\% \\times 0.8 \\times 0.8 = 96\\%$ del costo, lo que significa una pérdida neta del $4\\%$."
  },
  {
    "tag": "TRIGONOMETRÍA • IDENTIDADES",
    "question": "Si $\\sin x + \\cos x = \\sqrt{2}$, calcule el valor de $\\sin^3 x + \\cos^3 x$.",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{\\sqrt{2}}{2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{\\sqrt{2}}{4}$"
      },
      {
        "id": "C",
        "text": "$\\sqrt{2}$"
      }
    ],
    "correct": "A",
    "explanation": "Elevando al cuadrado $(\\sin x + \\cos x)^2 = 2 \\implies 1 + 2\\sin x\\cos x = 2 \\implies \\sin x\\cos x = \\frac{1}{2}$. Luego $\\sin^3 x + \\cos^3 x = (\\sin x + \\cos x)(1 - \\sin x\\cos x) = \\sqrt{2}\\left(1 - \\frac{1}{2}\\right) = \\frac{\\sqrt{2}}{2}$."
  },
  {
    "tag": "TRIGONOMETRÍA • FUNCIONES INVERSAS",
    "question": "Calcule el valor exacto de $E = \\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right) + \\arccos\\left(\\cos\\frac{7\\pi}{6}\\right)$.",
    "options": [
      {
        "id": "A",
        "text": "$2\\pi$"
      },
      {
        "id": "B",
        "text": "$\\pi$"
      },
      {
        "id": "C",
        "text": "$\\frac{4\\pi}{3}$"
      }
    ],
    "correct": "B",
    "explanation": "La trampa es cancelar directamente $\\arcsin(\\sin\\theta) = \\theta$. El rango de $\\arcsin$ es $\\left[-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right]$, por lo que $\\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right) = \\frac{\\pi}{6}$. El rango de $\\arccos$ es $[0; \\pi]$, por lo que $\\arccos\\left(\\cos\\frac{7\\pi}{6}\\right) = \\frac{5\\pi}{6}$. Su suma es $\\pi$."
  },
  {
    "tag": "TRIGONOMETRÍA • ECUACIONES",
    "question": "¿Cuántas soluciones tiene la ecuación $\\tan(2x) = 1$ en el intervalo $[0; \\pi]$?",
    "options": [
      {
        "id": "A",
        "text": "$1$"
      },
      {
        "id": "B",
        "text": "$2$"
      },
      {
        "id": "C",
        "text": "$4$"
      }
    ],
    "correct": "B",
    "explanation": "Si $x \\in [0; \\pi]$, entonces el argumento $2x \\in [0; 2\\pi]$. En una vuelta completa, la tangente toma el valor $1$ en dos ángulos: $2x = \\frac{\\pi}{4}$ y $2x = \\frac{5\\pi}{4}$, dando $x = \\frac{\\pi}{8}$ y $x = \\frac{5\\pi}{8}$."
  },
  {
    "tag": "GEOMETRÍA • TRIÁNGULOS",
    "question": "En un triángulo $ABC$, las longitudes de dos de sus lados son $AB = 5\\text{ cm}$ y $BC = 12\\text{ cm}$. Si el ángulo interior en $B$ es obtuso ($m\\angle ABC > 90^\\circ$), ¿cuántos valores enteros puede tomar la longitud del tercer lado $AC$?",
    "options": [
      {
        "id": "A",
        "text": "$9$"
      },
      {
        "id": "B",
        "text": "$3$"
      },
      {
        "id": "C",
        "text": "$4$"
      }
    ],
    "correct": "B",
    "explanation": "Por existencia triangular, $7 < AC < 17$ ($9$ enteros). Pero el dato de ángulo obtuso exige $AC^2 > 5^2 + 12^2 = 169 \\implies AC > 13$. Así, $13 < AC < 17$, dejando solo $3$ valores enteros ($14, 15, 16$)."
  },
  {
    "tag": "GEOMETRÍA • CIRCUNFERENCIA",
    "question": "Desde un punto exterior $P$ a una circunferencia se trazan dos tangentes $PA$ y $PB$ ($A$ y $B$ puntos de tangencia). Si el ángulo $APB$ mide $50^\\circ$ y $Q$ es un punto cualquiera del arco mayor $AB$, ¿cuánto mide el ángulo inscrito $AQB$?",
    "options": [
      {
        "id": "A",
        "text": "$65^\\circ$"
      },
      {
        "id": "B",
        "text": "$115^\\circ$"
      },
      {
        "id": "C",
        "text": "$130^\\circ$"
      }
    ],
    "correct": "A",
    "explanation": "El ángulo exterior $APB$ y el arco menor $AB$ suman $180^\\circ$, por lo que el arco menor $AB$ mide $130^\\circ$. El ángulo inscrito $AQB$ subtiende dicho arco menor $AB$, así que mide la mitad: $\\frac{130^\\circ}{2} = 65^\\circ$."
  },
  {
    "tag": "GEOMETRÍA • SÓLIDOS",
    "question": "Si el radio de una esfera sólida se incrementa en un $100\\%$ (se duplica), ¿en qué porcentaje aumenta su volumen?",
    "options": [
      {
        "id": "A",
        "text": "$700\\%$"
      },
      {
        "id": "B",
        "text": "$800\\%$"
      },
      {
        "id": "C",
        "text": "$300\\%$"
      }
    ],
    "correct": "A",
    "explanation": "Al duplicarse el radio ($R' = 2R$), el nuevo volumen es $V' = (2)^3 V = 8V$, es decir, el $800\\%$ del volumen inicial. La trampa de lectura es confundir 'en qué porcentaje se convierte' ($800\\%$) con 'en qué porcentaje aumenta' ($800\\% - 100\\% = 700\\%$)."
  },
  {
    "tag": "QUÍMICA • ESTEQUIOMETRÍA",
    "question": "Se hacen reaccionar $4\\text{ g}$ de $\\text{H}_2$ ($M = 2\\text{ g/mol}$) con $16\\text{ g}$ de $\\text{O}_2$ ($M = 32\\text{ g/mol}$) según $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$. ¿Cuántos gramos de agua ($M = 18\\text{ g/mol}$) se producen como máximo?",
    "options": [
      {
        "id": "A",
        "text": "$20\\text{ g}$"
      },
      {
        "id": "B",
        "text": "$36\\text{ g}$"
      },
      {
        "id": "C",
        "text": "$18\\text{ g}$"
      }
    ],
    "correct": "C",
    "explanation": "La trampa es sumar las masas ($4 + 16 = 20\\text{ g}$) sin hallar el reactivo limitante. Tenemos $2\\text{ mol}$ de $\\text{H}_2$ y $0.5\\text{ mol}$ de $\\text{O}_2$. El limitante es el $\\text{O}_2$ ($0.5\\text{ mol}$), que produce $1\\text{ mol}$ de $\\text{H}_2\\text{O} = 18\\text{ g}$ (sobran $2\\text{ g}$ de $\\text{H}_2$)."
  },
  {
    "tag": "QUÍMICA • ESTRUCTURA ATÓMICA",
    "question": "Determine el número de electrones desapareados que presenta el catión trivalente de hierro, $\\text{Fe}^{3+}$ ($Z = 26$), en su estado basal.",
    "options": [
      {
        "id": "A",
        "text": "$5$"
      },
      {
        "id": "B",
        "text": "$3$"
      },
      {
        "id": "C",
        "text": "$1$"
      }
    ],
    "correct": "A",
    "explanation": "El átomo neutro $\\text{Fe}$ ($Z=26$) termina en $[\\text{Ar}]\\,4s^2\\,3d^6$. La trampa es quitar los $3$ electrones del subnivel $3d$; al ionizarse un metal de transición, primero salen los electrones del nivel más externo ($4s^2$) y luego uno de $3d$, quedando $[\\text{Ar}]\\,3d^5$ con $5$ electrones desapareados."
  },
  {
    "tag": "QUÍMICA • SOLUCIONES",
    "question": "¿Cuál es la normalidad ($\\text{N}$) de una solución acuosa $0.5\\text{ M}$ de ácido fosforoso, $\\text{H}_3\\text{PO}_3$, en una reacción de neutralización completa?",
    "options": [
      {
        "id": "A",
        "text": "$1.5\\text{ N}$"
      },
      {
        "id": "B",
        "text": "$1.0\\text{ N}$"
      },
      {
        "id": "C",
        "text": "$0.5\\text{ N}$"
      }
    ],
    "correct": "B",
    "explanation": "Aunque la fórmula $\\text{H}_3\\text{PO}_3$ muestra tres hidrógenos, es una excepción clásica: solo dos están unidos a oxígeno (ionizables) y el tercero está unido directamente al fósforo. Por ello su parámetro $\\theta = 2$, y $N = M \\cdot \\theta = 0.5 \\times 2 = 1.0\\text{ N}$."
  }
],
  errores: [
  {
    "id": "ERR01",
    "tag": "PROBLEMA • ÁLGEBRA / INECUACIONES RACIONALES",
    "statement": "Resuelva en $\\mathbb{R}$ la siguiente inecuación racional: $$\\frac{x^2 - 4}{x - 2} > 0$$",
    "lines": [
      {
        "num": 1,
        "text": "Factorizamos el numerador usando diferencia de cuadrados: $$\\frac{(x + 2)(x - 2)}{x - 2} > 0$$"
      },
      {
        "num": 2,
        "text": "Simplificamos el factor común $(x - 2)$ en el numerador y denominador: $$x + 2 > 0$$"
      },
      {
        "num": 3,
        "text": "Despejamos $x$ y concluimos que el conjunto solución es: $$x \\in \\langle -2; +\\infty \\rangle$$"
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Al cancelar el factor $(x - 2)$ se pierde la restricción del Conjunto de Valores Admisibles (CVA), que exige $x - 2 \\neq 0 \\implies x \\neq 2$. El conjunto solución correcto debe excluir ese punto: $\\langle -2; +\\infty \\rangle - \\{2\\}$.",
    "hintBody": "Cuando simplificas una expresión algebraica que contiene la incógnita en el denominador, ¿qué ocurre con los valores que anulan dicho denominador?"
  },
  {
    "id": "ERR02",
    "tag": "PROBLEMA • FÍSICA / CINEMÁTICA VERTICAL",
    "statement": "Desde la azotea de un edificio de $45\\text{ m}$ de altura se lanza una piedra verticalmente hacia arriba con rapidez $v_0 = 20\\text{ m/s}$. Calcule el tiempo que tarda en llegar al suelo ($g = 10\\text{ m/s}^2$).",
    "lines": [
      {
        "num": 1,
        "text": "Tomamos como origen el punto de lanzamiento con eje $+Y$ hacia arriba, planteando: $$\\Delta y = v_0 t + \\frac{1}{2} g t^2 \\implies 45 = 20t - 5t^2$$"
      },
      {
        "num": 2,
        "text": "Reordenamos la ecuación cuadrática dividiendo entre $5$: $$t^2 - 4t + 9 = 0$$"
      },
      {
        "num": 3,
        "text": "Analizamos el discriminante $\\Delta = (-4)^2 - 4(1)(9) = -20 < 0$ y concluimos que el problema no tiene solución real."
      }
    ],
    "errorLine": 1,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 1.",
    "successBody": "Si el eje $+Y$ apunta hacia arriba y el origen está en la azotea, el suelo se ubica $45\\text{ m}$ por debajo, por lo que el desplazamiento vertical es $\\Delta y = -45\\text{ m}$, no $+45\\text{ m}$. Con $-45 = 20t - 5t^2$ se obtiene $t^2 - 4t - 9 = 0$, que sí tiene raíz positiva.",
    "hintBody": "Revisa cuidadosamente el sistema de referencia elegido en la primera línea: si el origen es el punto de lanzamiento y hacia arriba es positivo, ¿qué signo tiene la posición final en el suelo?"
  },
  {
    "id": "ERR03",
    "tag": "PROBLEMA • TRIGONOMETRÍA / IDENTIDADES",
    "statement": "Simplifique la expresión trigonométrica $E = \\sqrt{1 - \\sin^2 x} + \\cos x$, sabiendo que el ángulo $x$ pertenece al tercer cuadrante ($x \\in \\text{III C}$).",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos la identidad pitagórica fundamental $1 - \\sin^2 x = \\cos^2 x$: $$E = \\sqrt{\\cos^2 x} + \\cos x$$"
      },
      {
        "num": 2,
        "text": "Extraemos la raíz cuadrada del término cuadrático: $$E = \\cos x + \\cos x$$"
      },
      {
        "num": 3,
        "text": "Reducimos términos semejantes y obtenemos: $$E = 2\\cos x$$"
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Por definición algebraica, $\\sqrt{\\cos^2 x} = |\\cos x|$. Como $x \\in \\text{III C}$, el coseno es negativo ($\\cos x < 0$), así que $|\\cos x| = -\\cos x$. Por lo tanto, $E = -\\cos x + \\cos x = 0$.",
    "hintBody": "Recuerda que $\\sqrt{a^2} = |a|$ y presta atención al dato del cuadrante al que pertenece el ángulo $x$."
  },
  {
    "id": "ERR04",
    "tag": "PROBLEMA • GEOMETRÍA / TRIÁNGULOS",
    "statement": "En un triángulo $ABC$, las longitudes de dos lados son $AB = 6\\text{ cm}$ y $BC = 9\\text{ cm}$. Si el ángulo interior en $B$ es agudo ($m\\angle ABC < 90^\\circ$), halle el mayor valor entero posible para el lado $AC$.",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos el teorema de la existencia triangular para el lado $AC$: $$9 - 6 < AC < 9 + 6 \\implies 3 < AC < 15$$"
      },
      {
        "num": 2,
        "text": "Dado que el ángulo $ABC$ es agudo, aplicamos la naturaleza del triángulo: $$AC^2 < 6^2 + 9^2 \\implies AC^2 < 117$$"
      },
      {
        "num": 3,
        "text": "Intersectando $3 < AC < 15$ con $AC < \\sqrt{117} \\approx 10.81$, concluimos que el mayor valor entero es $AC = 14\\text{ cm}$."
      }
    ],
    "errorLine": 3,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 3.",
    "successBody": "Al intersectar los intervalos $3 < AC < 15$ y $AC < 10.81$, prevalece la cota superior más restrictiva: $3 < AC < 10.81$. Por lo tanto, el mayor valor entero para $AC$ es $10\\text{ cm}$, no $14\\text{ cm}$.",
    "hintBody": "Verifica la intersección de las dos desigualdades obtenidas en las líneas anteriores al elegir el máximo entero."
  },
  {
    "id": "ERR05",
    "tag": "PROBLEMA • ARITMÉTICA / TEORÍA DE CONJUNTOS",
    "statement": "Dado el conjunto $M = \\{2; \\{3\\}; \\{2; 3\\}; 4\\}$, determine el valor de verdad de la proposición: $\\{3\\} \\subset M$.",
    "lines": [
      {
        "num": 1,
        "text": "Identificamos los elementos explícitos del conjunto $M$: son $2$, $\\{3\\}$, $\\{2; 3\\}$ y $4$."
      },
      {
        "num": 2,
        "text": "Como $\\{3\\}$ aparece listado dentro de las llaves de $M$, afirmamos que $\\{3\\} \\subset M$ es verdadera."
      },
      {
        "num": 3,
        "text": "Por consiguiente, concluimos que el valor de verdad de la proposición dada es Verdadero (V)."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "El símbolo $\\subset$ representa inclusión (subconjunto), no pertenencia ($\\in$). Como $\\{3\\}$ es un elemento directo de $M$, lo correcto es $\\{3\\} \\in M$. Para que sea subconjunto debe llevar doble llave: $\\{\\{3\\}\\} \\subset M$.",
    "hintBody": "Distingue cuidadosamente entre la relación de pertenencia ($\\in$, elemento a conjunto) y la relación de inclusión ($\\subset$, conjunto a conjunto)."
  },
  {
    "id": "ERR06",
    "tag": "PROBLEMA • ÁLGEBRA / LOGARITMOS",
    "statement": "Resuelva la siguiente ecuación logarítmica en los reales: $$\\log_3(x - 2) + \\log_3(x + 4) = 3$$",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos la propiedad del logaritmo de un producto: $$\\log_3[(x - 2)(x + 4)] = 3$$"
      },
      {
        "num": 2,
        "text": "Convertimos a forma exponencial y desarrollamos: $$(x - 2)(x + 4) = 3^3 \\implies x^2 + 2x - 35 = 0$$"
      },
      {
        "num": 3,
        "text": "Factorizamos $(x + 7)(x - 5) = 0$ y concluimos que el conjunto solución es $CS = \\{-7; 5\\}$."
      }
    ],
    "errorLine": 3,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 3.",
    "successBody": "Se omitió verificar el dominio (CVA) de la ecuación original: $x - 2 > 0$ y $x + 4 > 0$, lo que exige $x > 2$. El valor $x = -7$ genera argumentos negativos en los logaritmos originales y debe descartarse. El conjunto solución es $CS = \\{5\\}$.",
    "hintBody": "Antes de aceptar todas las raíces de la ecuación cuadrática, reemplázalas en la ecuación logarítmica inicial."
  },
  {
    "id": "ERR07",
    "tag": "PROBLEMA • FÍSICA / DINÁMICA LINEAL",
    "statement": "Un bloque de $4\\text{ kg}$ reposa sobre una superficie horizontal rugosa ($\\mu_s = 0.6$, $\\mu_k = 0.4$, $g = 10\\text{ m/s}^2$). Si se le aplica una fuerza horizontal de $F = 20\\text{ N}$, determine el módulo de la fuerza de rozamiento que actúa sobre el bloque.",
    "lines": [
      {
        "num": 1,
        "text": "Calculamos la fuerza normal en el eje vertical: $$N = m \\cdot g = 4 \\cdot 10 = 40\\text{ N}$$"
      },
      {
        "num": 2,
        "text": "Calculamos la fuerza de rozamiento estático máximo: $$f_{s,\\text{máx}} = \\mu_s \\cdot N = 0.6 \\cdot 40 = 24\\text{ N}$$"
      },
      {
        "num": 3,
        "text": "Concluimos que la fuerza de rozamiento sobre el bloque tiene un módulo de $24\\text{ N}$."
      }
    ],
    "errorLine": 3,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 3.",
    "successBody": "Como la fuerza aplicada ($20\\text{ N}$) es menor que el rozamiento estático máximo ($24\\text{ N}$), el bloque permanece en reposo. En equilibrio estático, la fuerza de rozamiento se ajusta exactamente a la fuerza aplicada: $f_s = 20\\text{ N}$ (si fuera $24\\text{ N}$, el bloque aceleraría hacia atrás).",
    "hintBody": "Si el bloque no se mueve, la suma de fuerzas horizontales debe ser cero. Compara la fuerza aplicada con el límite estático."
  },
  {
    "id": "ERR08",
    "tag": "PROBLEMA • TRIGONOMETRÍA / ECUACIONES",
    "statement": "Halle el número de soluciones de la ecuación $\\sin(2x) = \\sin x$ en el intervalo $[0; \\pi]$.",
    "lines": [
      {
        "num": 1,
        "text": "Desarrollamos el seno del ángulo doble en el primer miembro: $$2\\sin x \\cos x = \\sin x$$"
      },
      {
        "num": 2,
        "text": "Cancelamos $\\sin x$ en ambos lados de la igualdad: $$2\\cos x = 1 \\implies \\cos x = \\frac{1}{2}$$"
      },
      {
        "num": 3,
        "text": "En el intervalo $[0; \\pi]$, $\\cos x = \\frac{1}{2}$ tiene una única solución ($x = \\frac{\\pi}{3}$), por lo que hay $1$ solución."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Al dividir ambos miembros entre $\\sin x$, se pierden las soluciones donde $\\sin x = 0$. En $[0; \\pi]$, $\\sin x = 0$ aporta dos soluciones adicionales ($x = 0$ y $x = \\pi$), dando un total de $3$ soluciones.",
    "hintBody": "Nunca canceles una función trigonométrica que contiene la incógnita sin igualarla primero a cero para rescatar sus raíces."
  },
  {
    "id": "ERR09",
    "tag": "PROBLEMA • ÁLGEBRA / NÚMEROS COMPLEJOS",
    "statement": "Simplifique y calcule el valor de la siguiente expresión en el campo de los complejos: $$K = \\sqrt{-4} \\cdot \\sqrt{-9} + i^{2026}$$",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos la propiedad del producto de radicales $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{a\\cdot b}$ al primer término: $$\\sqrt{-4} \\cdot \\sqrt{-9} = \\sqrt{(-4)(-9)} = \\sqrt{36} = 6$$"
      },
      {
        "num": 2,
        "text": "Reducimos la potencia de la unidad imaginaria dividiendo el exponente entre $4$: $$i^{2026} = i^{4(506) + 2} = i^2 = -1$$"
      },
      {
        "num": 3,
        "text": "Sumamos ambos resultados parciales y obtenemos: $$K = 6 + (-1) = 5$$"
      }
    ],
    "errorLine": 1,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 1.",
    "successBody": "La propiedad $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}$ solo es válida cuando al menos uno de los radicandos es no negativo ($a \\ge 0$ o $b \\ge 0$). En los complejos: $\\sqrt{-4}\\cdot\\sqrt{-9} = (2i)(3i) = 6i^2 = -6$. Así, $K = -6 - 1 = -7$.",
    "hintBody": "Revisa si la propiedad distributiva del radical respecto al producto se cumple cuando ambos radicandos son negativos."
  },
  {
    "id": "ERR10",
    "tag": "PROBLEMA • ARITMÉTICA / PORCENTAJES",
    "statement": "El precio de un artículo aumentó en un $25\\%$ en enero y luego disminuyó en un $20\\%$ en febrero. Determine la variación porcentual neta respecto al precio inicial.",
    "lines": [
      {
        "num": 1,
        "text": "Denotamos el precio inicial del artículo como $P_0 = 100\\%$."
      },
      {
        "num": 2,
        "text": "Calculamos la variación neta sumando algebraicamente los porcentajes: $$+25\\% - 20\\% = +5\\%$$"
      },
      {
        "num": 3,
        "text": "Concluimos que el precio final experimentó un aumento neto del $5\\%$ respecto al inicial."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Las variaciones porcentuales sucesivas no se suman directamente porque se aplican sobre bases distintas. Tras subir $25\\%$, el precio es $125\\%$; al bajar $20\\%$ de ese nuevo valor queda $125\\% \\times 0.80 = 100\\%$. La variación neta es $0\\%$.",
    "hintBody": "¿El descuento del $20\\%$ en febrero se aplica sobre el precio original o sobre el precio ya incrementado en enero?"
  },
  {
    "id": "ERR11",
    "tag": "PROBLEMA • GEOMETRÍA / ÁREAS Y SEMEJANZA",
    "statement": "Dos triángulos equiláteros $T_1$ y $T_2$ tienen lados de longitud $L_1 = 2\\text{ cm}$ y $L_2 = 6\\text{ cm}$, respectivamente. Calcule la razón entre sus áreas $\\frac{A_2}{A_1}$.",
    "lines": [
      {
        "num": 1,
        "text": "Observamos que todos los triángulos equiláteros son semejantes entre sí, con razón de semejanza: $$k = \\frac{L_2}{L_1} = \\frac{6}{2} = 3$$"
      },
      {
        "num": 2,
        "text": "Por proporcionalidad geométrica, la razón de sus áreas es igual a la razón de sus lados: $$\\frac{A_2}{A_1} = k = 3$$"
      },
      {
        "num": 3,
        "text": "Por lo tanto, el área del triángulo $T_2$ es el triple del área del triángulo $T_1$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "En figuras semejantes, la razón de sus áreas es igual al CUADRADO de la razón de semejanza, no a la razón lineal: $\\frac{A_2}{A_1} = k^2 = 3^2 = 9$.",
    "hintBody": "El área es una magnitud bidimensional; recuerda cómo escala el área cuando las dimensiones lineales se multiplican por un factor $k$."
  },
  {
    "id": "ERR12",
    "tag": "PROBLEMA • FÍSICA / TRABAJO Y ENERGÍA",
    "statement": "Un bloque de $2\\text{ kg}$ se desliza $5\\text{ m}$ sobre una superficie horizontal rugosa bajo la acción de una fuerza horizontal constante $F = 30\\text{ N}$ y una fuerza de rozamiento cinético $f_k = 10\\text{ N}$. Calcule el trabajo realizado por la fuerza de rozamiento.",
    "lines": [
      {
        "num": 1,
        "text": "Identificamos que la fuerza de rozamiento cinético tiene módulo $f_k = 10\\text{ N}$ y el desplazamiento es $d = 5\\text{ m}$."
      },
      {
        "num": 2,
        "text": "Aplicamos la fórmula del trabajo mecánico constante: $$W_{f_k} = f_k \\cdot d = 10 \\cdot 5 = +50\\text{ J}$$"
      },
      {
        "num": 3,
        "text": "Concluimos que la fuerza de rozamiento realiza un trabajo de $+50\\text{ J}$ sobre el bloque."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "La definición general de trabajo es $W = F \\cdot d \\cdot \\cos\\theta$. Como el rozamiento cinético se opone al desplazamiento ($\\theta = 180^\\circ$ y $\\cos 180^\\circ = -1$), su trabajo es negativo: $W_{f_k} = -50\\text{ J}$.",
    "hintBody": "Fíjate en el ángulo que forman el vector fuerza de rozamiento cinético y el vector desplazamiento."
  },
  {
    "id": "ERR13",
    "tag": "PROBLEMA • ÁLGEBRA / INECUACIONES CON RADICALES",
    "statement": "Determine el conjunto solución en $\\mathbb{R}$ de la inecuación irracional: $$\\sqrt{x - 1} > -3$$",
    "lines": [
      {
        "num": 1,
        "text": "Hallamos el Universo o Conjunto de Valores Admisibles (CVA) exigiendo que el radicando sea no negativo: $$x - 1 \\ge 0 \\implies x \\ge 1$$"
      },
      {
        "num": 2,
        "text": "Elevamos ambos miembros al cuadrado para eliminar el radical: $$(\\sqrt{x - 1})^2 > (-3)^2 \\implies x - 1 > 9 \\implies x > 10$$"
      },
      {
        "num": 3,
        "text": "Intersectamos $x \\ge 1$ con $x > 10$ y concluimos que $CS = \\langle 10; +\\infty \\rangle$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "No se puede elevar al cuadrado una desigualdad cuando un miembro es positivo y el otro negativo sin alterar el sentido o la equivalencia. Como $\\sqrt{x - 1} \\ge 0$ siempre que exista, automáticamente es mayor que $-3$ para todo $x$ en su CVA: $CS = [1; +\\infty \\rangle$.",
    "hintBody": "Evalúa el signo del primer miembro en todo su dominio: ¿puede una raíz cuadrada real ser menor o igual que $-3$?"
  },
  {
    "id": "ERR14",
    "tag": "PROBLEMA • TRIGONOMETRÍA / FUNCIONES INVERSAS",
    "statement": "Calcule el valor exacto de la expresión: $$M = \\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right)$$",
    "lines": [
      {
        "num": 1,
        "text": "Recordamos la propiedad inversa $\\arcsin(\\sin\\theta) = \\theta$."
      },
      {
        "num": 2,
        "text": "Aplicamos directamente dicha propiedad al argumento dado: $$M = \\frac{5\\pi}{6}$$"
      },
      {
        "num": 3,
        "text": "Concluimos que el valor exacto de $M$ es $\\frac{5\\pi}{6}\\text{ rad}$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "La identidad $\\arcsin(\\sin\\theta) = \\theta$ solo se cumple si $\\theta \\in \\left[-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right]$ (rango principal del arcoseno). Como $\\sin\\frac{5\\pi}{6} = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$, el valor correcto es $M = \\frac{\\pi}{6}$.",
    "hintBody": "Verifica si $\\frac{5\\pi}{6}$ pertenece al rango principal de la función $\\arcsin(x)$."
  },
  {
    "id": "ERR15",
    "tag": "PROBLEMA • ARITMÉTICA / DIVISIBILIDAD",
    "statement": "Si se cumple que $6N = \\overset{\\circ}{15}$ (es decir, $6N$ es múltiplo de $15$), donde $N \\in \\mathbb{Z}^+$, determine la forma general de $N$.",
    "lines": [
      {
        "num": 1,
        "text": "Planteamos la ecuación de divisibilidad dada en el enunciado: $$6N = \\overset{\\circ}{15}$$"
      },
      {
        "num": 2,
        "text": "Dividimos el coeficiente $6$ entre $3$ para aplicar el principio de Arquímedes sin alterar el módulo: $$2N = \\overset{\\circ}{15}$$"
      },
      {
        "num": 3,
        "text": "Como $2$ y $15$ son PESI, concluimos que $N = \\overset{\\circ}{15}$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Al dividir el primer miembro entre $3$, también debe dividirse el módulo $15$ entre $\\text{MCD}(3, 15) = 3$. Lo correcto es $2N = \\overset{\\circ}{5} \\implies N = \\overset{\\circ}{5}$. Por ejemplo, $N = 5$ cumple $6(5) = 30 = \\overset{\\circ}{15}$, aunque $5$ no es múltiplo de $15$.",
    "hintBody": "Cuando simplificas un factor común en una ecuación de divisibilidad, ¿qué debe ocurrir también con el módulo?"
  },
  {
    "id": "ERR16",
    "tag": "PROBLEMA • FÍSICA / ELECTROSTÁTICA",
    "statement": "Dos cargas puntuales $q_1 = +4\\text{ }\\mu\\text{C}$ y $q_2 = -9\\text{ }\\mu\\text{C}$ están separadas una distancia $d$ en el vacío. Halle el punto sobre la recta que las une donde el potencial eléctrico total es nulo ($V_{\\text{total}} = 0$).",
    "lines": [
      {
        "num": 1,
        "text": "Ubicamos un punto $P$ entre ambas cargas, a una distancia $x$ de $q_1$ y $(d - x)$ de $q_2$."
      },
      {
        "num": 2,
        "text": "Planteamos la suma de potenciales eléctricos tomando magnitudes positivas: $$\\frac{k |q_1|}{x} + \\frac{k |q_2|}{d - x} = 0 \\implies \\frac{4}{x} + \\frac{9}{d - x} = 0$$"
      },
      {
        "num": 3,
        "text": "Al ver que la suma de dos términos positivos no puede ser cero, concluimos que no existe ningún punto donde $V_{\\text{total}} = 0$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "El potencial eléctrico es una magnitud ESCALAR que conserva el signo algebraico de cada carga (no se toma valor absoluto). La ecuación correcta es $\\frac{4}{x} - \\frac{9}{d - x} = 0 \\implies x = \\frac{4}{13}d$.",
    "hintBody": "A diferencia del campo eléctrico (vector), el potencial eléctrico se suma algebraicamente respetando el signo de cada carga."
  },
  {
    "id": "ERR17",
    "tag": "PROBLEMA • GEOMETRÍA / CIRCUNFERENCIA",
    "statement": "En una circunferencia de centro $O$, desde un punto exterior $P$ se trazan una recta tangente $PT$ ($T$ punto de tangencia) y una recta secante que corta a la circunferencia en $A$ y $B$ ($PA < PB$). Si $PA = 4\\text{ cm}$ y $AB = 5\\text{ cm}$, calcule $PT$.",
    "lines": [
      {
        "num": 1,
        "text": "Identificamos los segmentos determinados por la secante: $PA = 4\\text{ cm}$ y $AB = 5\\text{ cm}$."
      },
      {
        "num": 2,
        "text": "Aplicamos el teorema de la tangente y la secante: $$PT^2 = PA \\cdot AB \\implies PT^2 = 4 \\cdot 5 = 20$$"
      },
      {
        "num": 3,
        "text": "Extraemos la raíz cuadrada y obtenemos $PT = 2\\sqrt{5}\\text{ cm}$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "El teorema de la tangente establece que $PT^2 = PB \\cdot PA$ (secante completa por su parte externa), no $PA \\cdot AB$. Como $PB = PA + AB = 4 + 5 = 9\\text{ cm}$, se tiene $PT^2 = 9 \\cdot 4 = 36 \\implies PT = 6\\text{ cm}$.",
    "hintBody": "Revisa exactamente cuáles son los dos segmentos que se multiplican en el teorema de la tangente y la secante."
  },
  {
    "id": "ERR18",
    "tag": "PROBLEMA • ÁLGEBRA / FUNCIONES",
    "statement": "Determine el dominio maximal en $\\mathbb{R}$ de la función real definida por: $$f(x) = \\frac{\\sqrt{x + 3}}{x^2 - 9}$$",
    "lines": [
      {
        "num": 1,
        "text": "Exigimos que el radicando del numerador sea no negativo: $$x + 3 \\ge 0 \\implies x \\ge -3$$"
      },
      {
        "num": 2,
        "text": "Exigimos que el denominador sea distinto de cero: $$x^2 - 9 \\neq 0 \\implies x \\neq 3$$"
      },
      {
        "num": 3,
        "text": "Intersectamos ambas condiciones y obtenemos $\\text{Dom}(f) = [-3; +\\infty \\rangle - \\{3\\}$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "La ecuación $x^2 - 9 = 0$ tiene DOS raíces reales: $x = 3$ y $x = -3$. Por lo tanto, el denominador exige $x \\neq 3$ y también $x \\neq -3$, convirtiendo el intervalo cerrado en abierto en $-3$: $\\text{Dom}(f) = \\langle -3; +\\infty \\rangle - \\{3\\}$.",
    "hintBody": "¿Cuántas soluciones reales tiene $x^2 = 9$? Asegúrate de excluir todas las raíces del denominador."
  },
  {
    "id": "ERR19",
    "tag": "PROBLEMA • TRIGONOMETRÍA / REDUCCIÓN AL PRIMER CUADRANTE",
    "statement": "Reduzca al primer cuadrante la expresión trigonométrica $\\tan(270^\\circ + \\alpha)$, donde $\\alpha$ es un ángulo agudo.",
    "lines": [
      {
        "num": 1,
        "text": "Ubicamos el ángulo $(270^\\circ + \\alpha)$ en el cuarto cuadrante ($\\text{IV C}$), donde la tangente es negativa."
      },
      {
        "num": 2,
        "text": "Como se usa el ángulo cuadrantal $270^\\circ$, mantenemos la misma razón trigonométrica y colocamos el signo negativo: $$\\tan(270^\\circ + \\alpha) = -\\tan\\alpha$$"
      },
      {
        "num": 3,
        "text": "Concluimos que la expresión reducida es $-\\tan\\alpha$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Cuando se reduce usando ángulos cuadrantales del eje vertical ($90^\\circ$ o $270^\\circ$), la razón trigonométrica cambia a su CO-RAZÓN. La co-razón de la tangente es la cotangente, por lo que $\\tan(270^\\circ + \\alpha) = -\\cot\\alpha$.",
    "hintBody": "Recuerda la regla de reducción al primer cuadrante cuando el ángulo de referencia es $90^\\circ$ o $270^\\circ$ (eje Y)."
  },
  {
    "id": "ERR20",
    "tag": "PROBLEMA • FÍSICA / MOVIMIENTO CIRCULAR",
    "statement": "Una partícula describe un Movimiento Circular Uniforme (MCU) con rapidez tangencial constante $v = 10\\text{ m/s}$ en una trayectoria de radio $R = 5\\text{ m}$. Calcule el módulo de su aceleración.",
    "lines": [
      {
        "num": 1,
        "text": "Identificamos que en un Movimiento Circular Uniforme (MCU) la rapidez tangencial es constante: $v = 10\\text{ m/s}$."
      },
      {
        "num": 2,
        "text": "Calculamos la aceleración tangencial derivando la rapidez respecto al tiempo: $$a_t = \\frac{dv}{dt} = 0$$"
      },
      {
        "num": 3,
        "text": "Concluimos que, al ser $a_t = 0$, la aceleración total de la partícula es $a = 0\\text{ m/s}^2$."
      }
    ],
    "errorLine": 3,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 3.",
    "successBody": "En el MCU la rapidez (módulo de la velocidad) es constante, pero la DIRECCIÓN del vector velocidad cambia continuamente. Por ello existe aceleración centrípeta: $a_c = \\frac{v^2}{R} = \\frac{10^2}{5} = 20\\text{ m/s}^2$.",
    "hintBody": "La velocidad es un vector: aunque su módulo no cambie, ¿qué ocurre con su dirección en una trayectoria circular?"
  }
],
  dudas: [
  {
    "curso": "Física • Dinámica",
    "alumno": "Consulta en grupo",
    "pregunta": "Si un bloque sube por un plano inclinado rugoso con velocidad constante, ¿la fuerza neta es cero o existe fuerza resultante hacia abajo?",
    "explicacion": "Si avanza con velocidad constante (MRU/traslación uniforme), su aceleración es cero ($a = 0$), por lo que por Segunda Ley de Newton $\\sum \\vec{F} = 0$. El rozamiento cinético se opone al deslizamiento (va hacia abajo), sumándose a la componente del peso paralela al plano, y ambas son equilibradas por la fuerza que impulsa el ascenso."
  },
  {
    "curso": "Álgebra • Funciones",
    "alumno": "Duda de práctica",
    "pregunta": "¿Para hallar el rango de $f(x) = \\frac{x^2 + 1}{x^2 + 2}$ basta despejar $x$ y analizar el discriminante?",
    "explicacion": "Sí, siempre que respetes que $x \\in \\text{Dom}(f)$. Como $x^2 \\ge 0$, el denominador $x^2 + 2 \\ge 2 > 0$, así que el dominio es todo $\\mathbb{R}$. Escribiendo $f(x) = 1 - \\frac{1}{x^2 + 2}$, al variar $x^2 \\in [0, +\\infty\\rangle$ se obtiene $f(x) \\in [\\frac{1}{2}, 1\\rangle$."
  }
],
  materiales: [
  {
    "titulo": "Solucionarios CEPRE-Villarreal (UNFV)",
    "curso": "Todos los cursos",
    "nivel": "Solucionarios",
    "universidad": "UNFV • CEPREVI",
    "descripcion": "Carpeta oficial con solucionarios del Libro Ceprevi y ciclos Ceprevi 2023 A / 2023 B.",
    "url": "https://drive.google.com/drive/folders/1km7dlbYKDLAQtcy-km9bVmYAvgLQHowx"
  },
  {
    "titulo": "Repositorio UNI (CEPREUNI + Boletines Vallejo)",
    "curso": "Todos los cursos",
    "nivel": "Tipo UNI",
    "universidad": "UNI",
    "descripcion": "Acceso directo a CepreUNI 2027-I, Vallejo 2026-2, Vallejo Antaño, libros y material virtual de práctica.",
    "url": "https://drive.google.com/drive/folders/167S3641bfG6OpE5ap5q5dDmmHnlIF4DZ"
  },
  {
    "titulo": "Repositorio San Marcos (PreSM 2026-II / 2026-I + DECO)",
    "curso": "Todos los cursos",
    "nivel": "DECO (UNMSM)",
    "universidad": "UNMSM",
    "descripcion": "Solucionarios PreSM 2026-II, 2026-I, Cepre-San Marcos y banco de problemas para practicar.",
    "url": "https://drive.google.com/drive/folders/1Ty7rl_24eN2UC1SeWdQmkIRheJQ1cGr0"
  }
]
};

/**
 * TioProject — Project Physics Pre
 * Arquitectura Serverless (GitHub Pages + JSON / Google Apps Script)
 */

// ==========================================
// 1. CONFIGURACIÓN GENERAL (Edita tus enlaces aquí)
// ==========================================
const CONFIG = {
  whatsappNumber: "51912138703",
  facebookUrl: "https://www.facebook.com/projectphysicspre/?locale=es_LA",
  youtubeUrl: "https://www.youtube.com/@johanprojectpre",
  // Pega aquí tu enlace exacto de TikTok cuando lo tengas:
  tiktokUrl: "https://www.tiktok.com/@comunidad_naosu?_r=1&_t=ZS-9BglBUeu6NN",

  // Carpetas de Google Drive
  driveFolders: {
    cepreuni2027I: "https://drive.google.com/drive/u/0/folders/1RKJBuVx7MuGxI5gec14qZ5EKNclPPibm",
    preSanMarcos2026II: "https://drive.google.com/drive/u/0/folders/1RQvCYoIfRmMTdJCiHnFtxDP8oRVAhM3l",
    cepreVillarreal: "https://drive.google.com/drive/folders/1km7dlbYKDLAQtcy-km9bVmYAvgLQHowx",
    escritosDeProject: "https://drive.google.com/drive/u/0/folders/1tmkMRWUrau6S8K9vbPQDmPHvncbUigza"
  },

  // Opcional: Pega aquí la URL de tu Google Apps Script publicado como Web App
  // para listar automáticamente los archivos nuevos que subas a tus carpetas de Drive:
  googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycbyHfjaTcmtge7FpVumgyhSnYwWb-TiIqZQyMOZFGZQf6AAhXhf4jwJPlmhAoSKmlFxR/exec",
  editorPin: "2026" // Clave para el editor independiente de preguntas
};

// ==========================================
// 2. MICRO-RETOS INTERACTIVOS
// ==========================================
const MICRO_CHALLENGES = [
  {
    "tag": "FÍSICA • CINEMÁTICA",
    "question": "Un móvil parte del origen en línea recta con velocidad $v_0 = +20\\text{ m/s}$ y aceleración constante $a = -4\\text{ m/s}^2$. ¿Cuál es el recorrido total (distancia recorrida) durante los primeros $8\\text{ s}$?",
    "options": [
      {
        "id": "A",
        "text": "$32\\text{ m}$"
      },
      {
        "id": "B",
        "text": "$68\\text{ m}$"
      },
      {
        "id": "C",
        "text": "$50\\text{ m}$"
      }
    ],
    "correct": "B",
    "explanation": "La trampa es calcular el desplazamiento ($d = 20(8) - 2(64) = +32\\text{ m}$). El móvil se detiene en $t = 5\\text{ s}$ avanzando $50\\text{ m}$, y en los $3\\text{ s}$ restantes retrocede $18\\text{ m}$. El recorrido total es $50 + 18 = 68\\text{ m}$."
  },
  {
    "tag": "FÍSICA • ESTÁTICA",
    "question": "Un bloque de $10\\text{ kg}$ reposa sobre un plano inclinado rugoso que forma $37^\\circ$ con la horizontal ($\\mu_s = 0.8$, $\\mu_k = 0.5$, $g = 10\\text{ m/s}^2$). ¿Cuál es el módulo de la fuerza de rozamiento que actúa sobre el bloque?",
    "options": [
      {
        "id": "A",
        "text": "$64\\text{ N}$"
      },
      {
        "id": "B",
        "text": "$40\\text{ N}$"
      },
      {
        "id": "C",
        "text": "$60\\text{ N}$"
      }
    ],
    "correct": "C",
    "explanation": "La fuerza que intenta deslizarlo es $mg\\sin 37^\\circ = 60\\text{ N}$, mientras que el rozamiento estático máximo es $f_{s,\\text{máx}} = 0.8(80) = 64\\text{ N}$. Como $60\\text{ N} < 64\\text{ N}$, el bloque no se mueve y el rozamiento estático iguala a la componente tangencial: $60\\text{ N}$."
  },
  {
    "tag": "FÍSICA • ELECTROSTÁTICA",
    "question": "Se tienen dos esferas conductoras idénticas con cargas $q_1 = +10\\text{ }\\mu\\text{C}$ y $q_2 = -4\\text{ }\\mu\\text{C}$ separadas cierta distancia. Si se ponen en contacto y luego se vuelven a separar la misma distancia inicial, ¿qué sucede con el módulo de la fuerza eléctrica entre ellas?",
    "options": [
      {
        "id": "A",
        "text": "Se reduce a la novena parte y pasa a ser repulsiva"
      },
      {
        "id": "B",
        "text": "Se reduce a $\\frac{9}{40}$ del valor inicial y sigue siendo atractiva"
      },
      {
        "id": "C",
        "text": "Se reduce a $\\frac{9}{40}$ del valor inicial y pasa a ser repulsiva"
      }
    ],
    "correct": "C",
    "explanation": "Al tocarse, la carga neta ($+6\\text{ }\\mu\\text{C}$) se reparte en partes iguales ($+3\\text{ }\\mu\\text{C}$ cada una), volviéndose repulsiva. El producto de cargas cambia de $|(+10)(-4)| = 40$ a $|(+3)(+3)| = 9$, reduciendo la fuerza a $\\frac{9}{40}$."
  },
  {
    "tag": "FÍSICA • HIDROSTÁTICA",
    "question": "Un bloque de madera de densidad $0.6\\text{ g/cm}^3$ flota en equilibrio dentro de un recipiente con agua ($\\rho_{\\text{agua}} = 1\\text{ g/cm}^3$) ubicado en un ascensor que sube con aceleración constante $a = 2\\text{ m/s}^2$. ¿Qué porcentaje del volumen del bloque permanece sumergido?",
    "options": [
      {
        "id": "A",
        "text": "$60\\%$"
      },
      {
        "id": "B",
        "text": "$72\\%$"
      },
      {
        "id": "C",
        "text": "$50\\%$"
      }
    ],
    "correct": "A",
    "explanation": "En un marco acelerado, tanto el peso aparente como el empuje dependen de la gravedad efectiva $g_{\\text{ef}} = g + a$. Al igualar $E = W_{\\text{ap}}$, $g_{\\text{ef}}$ se cancela en ambos miembros y la fracción sumergida sigue siendo $\\frac{\\rho_{\\text{cuerpo}}}{\\rho_{\\text{líquido}}} = 0.60$ ($60\\%$)."
  },
  {
    "tag": "ÁLGEBRA • ECUACIONES",
    "question": "Resuelva en $\\mathbb{R}$ la ecuación irracional $\\sqrt{x + 2} = -x$ e indique el producto de sus soluciones reales.",
    "options": [
      {
        "id": "A",
        "text": "$-2$"
      },
      {
        "id": "B",
        "text": "$-1$"
      },
      {
        "id": "C",
        "text": "$2$"
      }
    ],
    "correct": "B",
    "explanation": "La raíz cuadrada principal exige $-x \\ge 0 \\implies x \\le 0$. Al elevar al cuadrado se obtiene $x^2 - x - 2 = 0$, cuyas raíces son $x = 2$ y $x = -1$. Descartando $x = 2$ por restricción de signo, la única solución es $x = -1$."
  },
  {
    "tag": "ÁLGEBRA • INECUACIONES",
    "question": "Determine la suma de los valores enteros que verifican la inecuación $\\frac{(x - 2)^2 (x - 5)}{x - 1} \\le 0$.",
    "options": [
      {
        "id": "A",
        "text": "$14$"
      },
      {
        "id": "B",
        "text": "$15$"
      },
      {
        "id": "C",
        "text": "$12$"
      }
    ],
    "correct": "A",
    "explanation": "Por puntos críticos, $x \\in \\langle 1; 5]$. La trampa clásica es incluir $x = 1$ (anula el denominador) u olvidar $x = 2$ (aunque ya está dentro del intervalo $\\langle 1; 5]$). Los enteros válidos son $2, 3, 4, 5$, cuya suma es $14$."
  },
  {
    "tag": "ÁLGEBRA • LOGARITMOS",
    "question": "Halle el conjunto solución de la ecuación $\\log_2(x - 1) + \\log_2(x - 3) = 3$.",
    "options": [
      {
        "id": "A",
        "text": "$\\{5; -1\\}$"
      },
      {
        "id": "B",
        "text": "$\\{5\\}$"
      },
      {
        "id": "C",
        "text": "$\\emptyset$"
      }
    ],
    "correct": "B",
    "explanation": "El dominio de existencia exige $x - 1 > 0$ y $x - 3 > 0$, es decir, $x > 3$. Al resolver $(x - 1)(x - 3) = 2^3$ surgen $x = 5$ y $x = -1$, pero $x = -1$ queda fuera del dominio real del logaritmo."
  },
  {
    "tag": "ÁLGEBRA • VALOR ABSOLUTO",
    "question": "Si $x \\in \\langle -3; -1 \\rangle$, simplifique la expresión $M = \\frac{\\sqrt{x^2 + 6x + 9} + |2x + 1|}{x + 1}$.",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{2 - x}{x + 1}$"
      },
      {
        "id": "B",
        "text": "$\\frac{3x + 4}{x + 1}$"
      },
      {
        "id": "C",
        "text": "$-1$"
      }
    ],
    "correct": "A",
    "explanation": "Recuerda que $\\sqrt{(x+3)^2} = |x+3|$, no $x+3$. Como $-3 < x < -1$, se cumple $x + 3 > 0$ y $2x + 1 < 0$. Así, $|x+3| + |2x+1| = (x + 3) - (2x + 1) = 2 - x$."
  },
  {
    "tag": "ARITMÉTICA • TEORÍA DE CONJUNTOS",
    "question": "Dado el conjunto $A = \\{1; \\{2\\}; \\{1; 2\\}; 3\\}$, ¿cuántas de las siguientes proposiciones son verdaderas? I. $\\{2\\} \\subset A$  II. $\\{\\{2\\}\\} \\subset A$  III. $\\{1; 2\\} \\in A$  IV. $\\{1; 3\\} \\in A$",
    "options": [
      {
        "id": "A",
        "text": "$2$"
      },
      {
        "id": "B",
        "text": "$3$"
      },
      {
        "id": "C",
        "text": "$1$"
      }
    ],
    "correct": "A",
    "explanation": "La relación $\\in$ vincula elemento con conjunto, y $\\subset$ vincula subconjunto con conjunto. $\\{2\\}$ es elemento de $A$, por lo que $\\{\\{2\\}\\} \\subset A$ (II) es verdadera; además $\\{1; 2\\} \\in A$ (III) es verdadera. I y IV confunden pertenencia con inclusión."
  },
  {
    "tag": "ARITMÉTICA • DIVISIBILIDAD",
    "question": "¿Cuántos números enteros positivos de dos cifras son múltiplos de $4$ o múltiplos de $6$, pero no de ambos a la vez?",
    "options": [
      {
        "id": "A",
        "text": "$21$"
      },
      {
        "id": "B",
        "text": "$29$"
      },
      {
        "id": "C",
        "text": "$37$"
      }
    ],
    "correct": "A",
    "explanation": "Entre $10$ y $99$ hay $22$ múltiplos de $4$ ($12$ al $96$) y $15$ múltiplos de $6$ ($12$ al $96$). Los múltiplos de ambos son los de $\\text{MCM}(4,6) = 12$, que son $8$ ($12$ al $96$). La diferencia simétrica es $(22 - 8) + (15 - 8) = 21$."
  },
  {
    "tag": "ARITMÉTICA • PORCENTAJES",
    "question": "Un comerciante fija el precio de un artículo aumentando su costo en un $50\\%$, pero al venderlo realiza dos descuentos sucesivos del $20\\%$ y $20\\%$. ¿Qué porcentaje del costo gana o pierde al final?",
    "options": [
      {
        "id": "A",
        "text": "Gana el $10\\%$"
      },
      {
        "id": "B",
        "text": "Pierde el $4\\%$"
      },
      {
        "id": "C",
        "text": "No gana ni pierde ($0\\%$)"
      }
    ],
    "correct": "B",
    "explanation": "La trampa es sumar descuentos ($20\\% + 20\\% = 40\\%$) y restarlos al $150\\%$. El precio final es $150\\% \\times 0.8 \\times 0.8 = 96\\%$ del costo, lo que significa una pérdida neta del $4\\%$."
  },
  {
    "tag": "TRIGONOMETRÍA • IDENTIDADES",
    "question": "Si $\\sin x + \\cos x = \\sqrt{2}$, calcule el valor de $\\sin^3 x + \\cos^3 x$.",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{\\sqrt{2}}{2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{\\sqrt{2}}{4}$"
      },
      {
        "id": "C",
        "text": "$\\sqrt{2}$"
      }
    ],
    "correct": "A",
    "explanation": "Elevando al cuadrado $(\\sin x + \\cos x)^2 = 2 \\implies 1 + 2\\sin x\\cos x = 2 \\implies \\sin x\\cos x = \\frac{1}{2}$. Luego $\\sin^3 x + \\cos^3 x = (\\sin x + \\cos x)(1 - \\sin x\\cos x) = \\sqrt{2}\\left(1 - \\frac{1}{2}\\right) = \\frac{\\sqrt{2}}{2}$."
  },
  {
    "tag": "TRIGONOMETRÍA • FUNCIONES INVERSAS",
    "question": "Calcule el valor exacto de $E = \\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right) + \\arccos\\left(\\cos\\frac{7\\pi}{6}\\right)$.",
    "options": [
      {
        "id": "A",
        "text": "$2\\pi$"
      },
      {
        "id": "B",
        "text": "$\\pi$"
      },
      {
        "id": "C",
        "text": "$\\frac{4\\pi}{3}$"
      }
    ],
    "correct": "B",
    "explanation": "La trampa es cancelar directamente $\\arcsin(\\sin\\theta) = \\theta$. El rango de $\\arcsin$ es $\\left[-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right]$, por lo que $\\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right) = \\frac{\\pi}{6}$. El rango de $\\arccos$ es $[0; \\pi]$, por lo que $\\arccos\\left(\\cos\\frac{7\\pi}{6}\\right) = \\frac{5\\pi}{6}$. Su suma es $\\pi$."
  },
  {
    "tag": "TRIGONOMETRÍA • ECUACIONES",
    "question": "¿Cuántas soluciones tiene la ecuación $\\tan(2x) = 1$ en el intervalo $[0; \\pi]$?",
    "options": [
      {
        "id": "A",
        "text": "$1$"
      },
      {
        "id": "B",
        "text": "$2$"
      },
      {
        "id": "C",
        "text": "$4$"
      }
    ],
    "correct": "B",
    "explanation": "Si $x \\in [0; \\pi]$, entonces el argumento $2x \\in [0; 2\\pi]$. En una vuelta completa, la tangente toma el valor $1$ en dos ángulos: $2x = \\frac{\\pi}{4}$ y $2x = \\frac{5\\pi}{4}$, dando $x = \\frac{\\pi}{8}$ y $x = \\frac{5\\pi}{8}$."
  },
  {
    "tag": "GEOMETRÍA • TRIÁNGULOS",
    "question": "En un triángulo $ABC$, las longitudes de dos de sus lados son $AB = 5\\text{ cm}$ y $BC = 12\\text{ cm}$. Si el ángulo interior en $B$ es obtuso ($m\\angle ABC > 90^\\circ$), ¿cuántos valores enteros puede tomar la longitud del tercer lado $AC$?",
    "options": [
      {
        "id": "A",
        "text": "$9$"
      },
      {
        "id": "B",
        "text": "$3$"
      },
      {
        "id": "C",
        "text": "$4$"
      }
    ],
    "correct": "B",
    "explanation": "Por existencia triangular, $7 < AC < 17$ ($9$ enteros). Pero el dato de ángulo obtuso exige $AC^2 > 5^2 + 12^2 = 169 \\implies AC > 13$. Así, $13 < AC < 17$, dejando solo $3$ valores enteros ($14, 15, 16$)."
  },
  {
    "tag": "GEOMETRÍA • CIRCUNFERENCIA",
    "question": "Desde un punto exterior $P$ a una circunferencia se trazan dos tangentes $PA$ y $PB$ ($A$ y $B$ puntos de tangencia). Si el ángulo $APB$ mide $50^\\circ$ y $Q$ es un punto cualquiera del arco mayor $AB$, ¿cuánto mide el ángulo inscrito $AQB$?",
    "options": [
      {
        "id": "A",
        "text": "$65^\\circ$"
      },
      {
        "id": "B",
        "text": "$115^\\circ$"
      },
      {
        "id": "C",
        "text": "$130^\\circ$"
      }
    ],
    "correct": "A",
    "explanation": "El ángulo exterior $APB$ y el arco menor $AB$ suman $180^\\circ$, por lo que el arco menor $AB$ mide $130^\\circ$. El ángulo inscrito $AQB$ subtiende dicho arco menor $AB$, así que mide la mitad: $\\frac{130^\\circ}{2} = 65^\\circ$."
  },
  {
    "tag": "GEOMETRÍA • SÓLIDOS",
    "question": "Si el radio de una esfera sólida se incrementa en un $100\\%$ (se duplica), ¿en qué porcentaje aumenta su volumen?",
    "options": [
      {
        "id": "A",
        "text": "$700\\%$"
      },
      {
        "id": "B",
        "text": "$800\\%$"
      },
      {
        "id": "C",
        "text": "$300\\%$"
      }
    ],
    "correct": "A",
    "explanation": "Al duplicarse el radio ($R' = 2R$), el nuevo volumen es $V' = (2)^3 V = 8V$, es decir, el $800\\%$ del volumen inicial. La trampa de lectura es confundir 'en qué porcentaje se convierte' ($800\\%$) con 'en qué porcentaje aumenta' ($800\\% - 100\\% = 700\\%$)."
  },
  {
    "tag": "QUÍMICA • ESTEQUIOMETRÍA",
    "question": "Se hacen reaccionar $4\\text{ g}$ de $\\text{H}_2$ ($M = 2\\text{ g/mol}$) con $16\\text{ g}$ de $\\text{O}_2$ ($M = 32\\text{ g/mol}$) según $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$. ¿Cuántos gramos de agua ($M = 18\\text{ g/mol}$) se producen como máximo?",
    "options": [
      {
        "id": "A",
        "text": "$20\\text{ g}$"
      },
      {
        "id": "B",
        "text": "$36\\text{ g}$"
      },
      {
        "id": "C",
        "text": "$18\\text{ g}$"
      }
    ],
    "correct": "C",
    "explanation": "La trampa es sumar las masas ($4 + 16 = 20\\text{ g}$) sin hallar el reactivo limitante. Tenemos $2\\text{ mol}$ de $\\text{H}_2$ y $0.5\\text{ mol}$ de $\\text{O}_2$. El limitante es el $\\text{O}_2$ ($0.5\\text{ mol}$), que produce $1\\text{ mol}$ de $\\text{H}_2\\text{O} = 18\\text{ g}$ (sobran $2\\text{ g}$ de $\\text{H}_2$)."
  },
  {
    "tag": "QUÍMICA • ESTRUCTURA ATÓMICA",
    "question": "Determine el número de electrones desapareados que presenta el catión trivalente de hierro, $\\text{Fe}^{3+}$ ($Z = 26$), en su estado basal.",
    "options": [
      {
        "id": "A",
        "text": "$5$"
      },
      {
        "id": "B",
        "text": "$3$"
      },
      {
        "id": "C",
        "text": "$1$"
      }
    ],
    "correct": "A",
    "explanation": "El átomo neutro $\\text{Fe}$ ($Z=26$) termina en $[\\text{Ar}]\\,4s^2\\,3d^6$. La trampa es quitar los $3$ electrones del subnivel $3d$; al ionizarse un metal de transición, primero salen los electrones del nivel más externo ($4s^2$) y luego uno de $3d$, quedando $[\\text{Ar}]\\,3d^5$ con $5$ electrones desapareados."
  },
  {
    "tag": "QUÍMICA • SOLUCIONES",
    "question": "¿Cuál es la normalidad ($\\text{N}$) de una solución acuosa $0.5\\text{ M}$ de ácido fosforoso, $\\text{H}_3\\text{PO}_3$, en una reacción de neutralización completa?",
    "options": [
      {
        "id": "A",
        "text": "$1.5\\text{ N}$"
      },
      {
        "id": "B",
        "text": "$1.0\\text{ N}$"
      },
      {
        "id": "C",
        "text": "$0.5\\text{ N}$"
      }
    ],
    "correct": "B",
    "explanation": "Aunque la fórmula $\\text{H}_3\\text{PO}_3$ muestra tres hidrógenos, es una excepción clásica: solo dos están unidos a oxígeno (ionizables) y el tercero está unido directamente al fósforo. Por ello su parámetro $\\theta = 2$, y $N = M \\cdot \\theta = 0.5 \\times 2 = 1.0\\text{ N}$."
  }
];

// ==========================================
// 3. CURSOS INDEPENDIENTES (Temario Ordenado)
// ==========================================
function buildCourseTopics(prefix, list) {
  const nodes = {};
  list.forEach((title, idx) => {
    const id = `${prefix}${idx + 1}`;
    const numStr = String(idx + 1).padStart(2, "0");
    nodes[id] = {
      id,
      title: `${numStr}. ${title}`,
      badge: idx === 0 ? "FUNDAMENTO" : idx < 4 ? "BASE DEL CURSO" : "TEMA DE EXAMEN",
      weight: idx % 2 === 0 ? "Frecuente en UNI / UNMSM" : "Enfoque DECO y Admisión",
      prereq: idx === 0 ? "Base previa del nivel" : `${String(idx).padStart(2, "0")}. ${list[idx - 1]}`,
      desc: `Tema independiente #${idx + 1} del sílabo de ${title}. Domina la teoría esencial, deducciones clave y práctica graduada antes de avanzar al siguiente eslabón.`,
      escritosLabel: "Buscar en Los Escritos de Project",
      solucionarioLabel: "Ver Solucionarios CEPREUNI / PRE SM"
    };
  });
  return nodes;
}

function buildLinearMermaid(prefix, list) {
  const total = list.length;
  const numPhases = 4;
  const chunkSize = Math.ceil(total / numPhases);
  const phaseNames = ["Bloque I: Base", "Bloque II: Desarrollo", "Bloque III: Intermedio", "Bloque IV: Avanzado"];
  const lines = [
    "flowchart LR",
    "  classDef phase fill:#131317,stroke:#71717A,stroke-width:1.5px,color:#F4F4F6,rx:8,ry:8;"
  ];

  const phases = [];
  for (let p = 0; p < numPhases; p++) {
    const startIdx = p * chunkSize;
    if (startIdx >= total) break;
    const endIdx = Math.min(total - 1, (p + 1) * chunkSize - 1);
    const sNum = String(startIdx + 1).padStart(2, "0");
    const eNum = String(endIdx + 1).padStart(2, "0");
    const firstTopic = list[startIdx].split(":")[0].split("-")[0].trim();
    const phaseId = `${prefix}_B${p + 1}`;
    const label = `${phaseNames[p]}<br/>Temas ${sNum} al ${eNum}<br/>(${firstTopic}...)`;
    lines.push(`  ${phaseId}["${label}"]:::phase`);
    phases.push({ id: phaseId, firstTopicId: `${prefix}${startIdx + 1}` });
  }

  for (let j = 0; j < phases.length - 1; j++) {
    lines.push(`  ${phases[j].id} --> ${phases[j + 1].id}`);
  }
  return { graph: lines.join("\n"), phases };
}

const ALGEBRA_LIST = [
  "Potenciación y Radicación",
  "El Polinomio",
  "Productos Notables",
  "División de Polinomios",
  "Divisibilidad entre Polinomios",
  "Factorización de Polinomios",
  "Máximo Común Divisor - Mínimo Común Múltiplo",
  "Factorial - Análisis Combinatorio",
  "Racionalización",
  "Conjunto de los Números Complejos",
  "Teoría Elemental de las Ecuaciones",
  "Matrices y Determinantes",
  "Sistemas de Ecuaciones",
  "Desigualdades e Inecuaciones",
  "Programación Lineal",
  "Relaciones y Funciones",
  "Logaritmación",
  "Sucesiones y Series",
  "Progresiones"
];

const ARITMETICA_LIST = [
  "Razones - Proporciones",
  "Regla del Tanto por Ciento",
  "Magnitudes Proporcionales",
  "Regla de Tres",
  "Promedios o Medias",
  "Regla de Mezcla",
  "Regla de Interés",
  "Lógica Proposicional",
  "Teoría de Conjuntos",
  "Teoría de la Numeración",
  "Cuatro Operaciones en los Naturales",
  "Sucesiones - Series",
  "Teoría de la Divisibilidad",
  "Estudio de los Divisores Positivos de un Número",
  "Máximo Común Divisor - Mínimo Común Múltiplo",
  "El Conjunto de los Números Racionales",
  "Estadística",
  "Análisis Combinatorio",
  "Teoría de Probabilidades"
];

const TRIGONOMETRIA_LIST = [
  "Ángulo Trigonométrico - Sistema de Medición Angular",
  "Longitud de Arco de Circunferencia",
  "Razones Trigonométricas de Ángulos Agudos",
  "Ángulos Verticales - Horizontales",
  "Ángulos en Posición Estándar",
  "Reducción al Primer Cuadrante",
  "Circunferencia Trigonométrica",
  "Identidades Trigonométricas",
  "Identidades de los Arcos Compuestos",
  "Identidades de los Arcos Múltiples",
  "Identidades para Transformaciones Trigonométricas",
  "Funciones Trigonométricas",
  "Funciones Trigonométricas Inversas",
  "Ecuaciones Trigonométricas",
  "Resolución de Figuras Geométricas",
  "Geometría Analítica",
  "La Recta - Circunferencia - Parábola",
  "Elipse - Hipérbola"
];

const GEOMETRIA_PLANA_LIST = [
  "Representación Geométrica: Segmentos - Ángulos",
  "Triángulo",
  "Líneas Notables asociadas al Triángulo",
  "Congruencia de Triángulos",
  "Criterios para hacer trazos auxiliares en Triángulos",
  "Polígono",
  "Cuadrilátero",
  "Circunferencia",
  "Posiciones Relativas entre dos Circunferencias",
  "Posiciones Relativas entre un Polígono y una Circunferencia",
  "Puntos Notables",
  "Proporcionalidad de Segmentos",
  "Semejanza de Triángulos",
  "Relaciones Métricas en la Circunferencia",
  "Relaciones Métricas en el Triángulo Rectángulo",
  "Relaciones Métricas en Triángulos Oblicuángulos",
  "Relaciones Métricas en Cuadriláteros",
  "Áreas de Regiones Triangulares",
  "Áreas de Regiones Cuadrangulares",
  "Área del Círculo y sus Partes"
];

const GEOMETRIA_ESPACIO_LIST = [
  "Estereometría: Rectas y Planos",
  "Ángulo Diedro",
  "Ángulo Triedro",
  "Poliedros",
  "Poliedros Regulares",
  "Prisma",
  "Pirámide",
  "Cilindro Circular Recto",
  "Cono Circular Recto",
  "Esfera, Superficie Esférica y sus Partes"
];

const FISICA_LIST = [
  "Análisis Dimensional",
  "Análisis Vectorial",
  "Cinemática",
  "Estática",
  "Dinámica",
  "Trabajo Mecánico - Potencia",
  "Energía Mecánica",
  "Cantidad de Movimiento",
  "Gravitación Universal",
  "Movimiento Armónico Simple",
  "Mecánica de Fluidos",
  "Temperatura - Dilatación - Calorimetría",
  "Electrostática - Capacitancia Eléctrica",
  "Electrodinámica - Circuitos Eléctricos",
  "Magnetismo - Electromagnetismo",
  "Ondas Mecánicas - Sonido",
  "Ondas Electromagnéticas",
  "Óptica - Óptica Física",
  "Física Moderna - Relatividad"
];

const QUIMICA_LIST = [
  "Materia y Energía",
  "Estructura Atómica Actual",
  "Química Nuclear",
  "Teorías y Modelos Atómicos",
  "Números Cuánticos - Configuración Electrónica",
  "Tabla Periódica",
  "Enlaces Químicos",
  "Geometría y Fuerzas Intermoleculares",
  "Formulación y Nomenclatura Inorgánica",
  "Unidades Químicas de Masa",
  "Densidad, Presión y Temperatura",
  "Estados Sólido y Líquido",
  "Fundamentos Básicos del Comportamiento de los Gases",
  "Mezclas de Gases",
  "Reacciones Químicas",
  "Estequiometría de las Reacciones Químicas",
  "Sistemas Dispersos",
  "Cinética y Equilibrio Químico",
  "Ácidos y Bases",
  "Electroquímica",
  "Petróleo y los Hidrocarburos",
  "Compuestos Orgánicos Oxigenados",
  "Compuestos Orgánicos Nitrogenados",
  "Contaminación Ambiental"
];

const COURSES = {
  algebra: {
    name: "Álgebra",
    prefix: "ALG",
    mermaidData: buildLinearMermaid("ALG", ALGEBRA_LIST),
    nodes: buildCourseTopics("ALG", ALGEBRA_LIST)
  },
  aritmetica: {
    name: "Aritmética",
    prefix: "ARI",
    mermaidData: buildLinearMermaid("ARI", ARITMETICA_LIST),
    nodes: buildCourseTopics("ARI", ARITMETICA_LIST)
  },
  trigonometria: {
    name: "Trigonometría",
    prefix: "TRI",
    mermaidData: buildLinearMermaid("TRI", TRIGONOMETRIA_LIST),
    nodes: buildCourseTopics("TRI", TRIGONOMETRIA_LIST)
  },
  geometria_plana: {
    name: "Geometría Plana",
    prefix: "GPL",
    mermaidData: buildLinearMermaid("GPL", GEOMETRIA_PLANA_LIST),
    nodes: buildCourseTopics("GPL", GEOMETRIA_PLANA_LIST)
  },
  geometria_espacio: {
    name: "Geometría del Espacio",
    prefix: "GES",
    mermaidData: buildLinearMermaid("GES", GEOMETRIA_ESPACIO_LIST),
    nodes: buildCourseTopics("GES", GEOMETRIA_ESPACIO_LIST)
  },
  fisica: {
    name: "Física",
    prefix: "FIS",
    mermaidData: buildLinearMermaid("FIS", FISICA_LIST),
    nodes: buildCourseTopics("FIS", FISICA_LIST)
  },
  quimica: {
    name: "Química",
    prefix: "QUI",
    mermaidData: buildLinearMermaid("QUI", QUIMICA_LIST),
    nodes: buildCourseTopics("QUI", QUIMICA_LIST)
  }
};

// ==========================================
// 4. INICIALIZACIÓN DE LA APP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  setupLinks();

  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }


  const allSectionIds = ["inicio", "micro-reto", "ruta-estudio", "solucionarios", "boveda", "caza-errores", "clases"];
  const navTabLinks = document.querySelectorAll(".nav-tab-link");

  function switchTabImmediate(targetId, scrollToTop = true) {
    const activeTab = allSectionIds.includes(targetId) ? targetId : "inicio";

    // En "inicio" se muestra la presentación + Biblioteca (#boveda) + Clases (#clases)
    // En cualquier otra pestaña se muestra únicamente esa sección arriba de inmediato
    const visibleSections = activeTab === "inicio"
      ? ["inicio", "boveda", "clases"]
      : [activeTab];

    allSectionIds.forEach(id => {
      const sec = document.getElementById(id);
      if (!sec) return;
      if (visibleSections.includes(id)) {
        sec.classList.remove("hidden");
        sec.style.display = "";
      } else {
        sec.classList.add("hidden");
        sec.style.display = "none";
      }
    });

    navTabLinks.forEach(link => {
      const linkTab = link.getAttribute("data-tab-link") || (link.getAttribute("href") || "").replace(/^#/, "");
      const isSelected = linkTab === activeTab;
      link.classList.toggle("active", isSelected);
      if (isSelected) {
        link.classList.add("text-white", "font-semibold");
      } else {
        link.classList.remove("text-white", "font-semibold");
      }
    });

    if (activeTab === "micro-reto" && typeof renderChallenge === "function") {
      const c = document.getElementById("challenge-container");
      if (c && c.innerHTML.trim() === "" && Array.isArray(activeChallenges) && activeChallenges.length > 0) {
        renderChallenge();
      }
    }

    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const href = anchor.getAttribute("href");
    const targetId = href ? href.slice(1) : "";
    if (allSectionIds.includes(targetId)) {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        if (mobileMenu) mobileMenu.classList.add("hidden");
        try {
          history.replaceState(null, "", targetId === "inicio" ? window.location.pathname : `#${targetId}`);
        } catch (_) {}
        switchTabImmediate(targetId, true);
      });
    }
  });

  const startHash = (window.location.hash || "").replace(/^#/, "");
  switchTabImmediate(allSectionIds.includes(startHash) ? startHash : "inicio", false);

  initMicroChallenges();
  initCourseExplorer();
  initSolucionariosAndVault();
  initErrorHunt();
  initSolvedDoubts();
  renderMath();
});

function renderMath(target = document.body) {
  if (window.renderMathInElement) {
    renderMathInElement(target, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}

function setupLinks() {
  if (CONFIG.tiktokUrl && CONFIG.tiktokUrl.trim() !== "") {
    document.querySelectorAll("[data-tiktok-link]").forEach(el => el.setAttribute("href", CONFIG.tiktokUrl));
  }
  if (CONFIG.youtubeUrl) {
    document.querySelectorAll("[data-youtube-link]").forEach(el => el.setAttribute("href", CONFIG.youtubeUrl));
  }
  if (CONFIG.facebookUrl) {
    document.querySelectorAll("[data-facebook-link]").forEach(el => el.setAttribute("href", CONFIG.facebookUrl));
  }
  if (CONFIG.driveFolders.escritosDeProject) {
    document.querySelectorAll("[data-escritos-link]").forEach(el => el.setAttribute("href", CONFIG.driveFolders.escritosDeProject));
  }
  if (CONFIG.driveFolders.cepreuni2027I) {
    document.querySelectorAll("[data-cepreuni-link]").forEach(el => el.setAttribute("href", CONFIG.driveFolders.cepreuni2027I));
  }
  if (CONFIG.driveFolders.preSanMarcos2026II) {
    document.querySelectorAll("[data-presm-link]").forEach(el => el.setAttribute("href", CONFIG.driveFolders.preSanMarcos2026II));
  }
  if (CONFIG.driveFolders.cepreVillarreal) {
    document.querySelectorAll("[data-ceprevi-link]").forEach(el => el.setAttribute("href", CONFIG.driveFolders.cepreVillarreal));
  }
}

// Utilidad de selección determinística diaria fijada a hora de Perú (America/Lima, UTC-5)
function getPeruDateParts() {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Lima",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  const parts = formatter.formatToParts(new Date());
  const year = parseInt(parts.find(p => p.type === "year").value, 10);
  const month = parseInt(parts.find(p => p.type === "month").value, 10);
  const day = parseInt(parts.find(p => p.type === "day").value, 10);
  return { year, month, day };
}

function getDailyIndex(totalItems, offset = 0) {
  if (!totalItems || totalItems <= 0) return 0;
  const { year, month, day } = getPeruDateParts();
  const daysSinceEpoch = Math.floor(Date.UTC(year, month - 1, day) / 86400000);
  return ((daysSinceEpoch + offset) % totalItems + totalItems) % totalItems;
}

function getFormattedToday() {
  return new Date().toLocaleDateString("es-PE", {
    timeZone: "America/Lima",
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

// ==========================================
// MÓDULO: MICRO-RETOS
// ==========================================
let currentChallengeIdx = 0;
let activeChallenges = [...MICRO_CHALLENGES];
const CUSTOM_CHALLENGES_KEY = "tioproject_custom_retos_v1";

async function initMicroChallenges() {
  try {
    const saved = localStorage.getItem(CUSTOM_CHALLENGES_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        activeChallenges = parsed;
      }
    } else {
      const res = await fetch("data/retos.json");
      if (res.ok) {
        const jsonRetos = await res.json();
        if (Array.isArray(jsonRetos) && jsonRetos.length > 0) {
          activeChallenges = jsonRetos;
        }
      }
    }
  } catch (e) {
    console.warn("Usando retos por defecto:", e);
  }

  initChallengeEditor();
  if (!Array.isArray(activeChallenges) || activeChallenges.length === 0) activeChallenges = EMBEDDED_FALLBACK.retos;
  currentChallengeIdx = getDailyIndex(activeChallenges.length, 0);
  const dailyBadge = document.getElementById("challenge-daily-badge");
  if (dailyBadge) dailyBadge.textContent = `Reto del Día • ${getFormattedToday()}`;
  renderChallenge();
}

function initChallengeEditor() {
  const modal = document.getElementById("challenge-editor-modal");
  const openBtn = document.getElementById("open-editor-btn");
  const closeBtn = document.getElementById("close-editor-btn");
  const authBox = document.getElementById("editor-auth-box");
  const formBox = document.getElementById("editor-form-box");
  const pinInput = document.getElementById("editor-pin-input");
  const loginBtn = document.getElementById("editor-login-btn");
  const authError = document.getElementById("editor-auth-error");
  const selectEl = document.getElementById("editor-question-select");
  const addBtn = document.getElementById("editor-add-question-btn");
  const saveBtn = document.getElementById("editor-save-btn");
  const exportBtn = document.getElementById("editor-export-json-btn");
  const resetBtn = document.getElementById("editor-reset-btn");

  if (!modal || !openBtn) return;

  let editingIdx = 0;

  const populateSelect = () => {
    if (!selectEl) return;
    selectEl.innerHTML = activeChallenges.map((c, i) => `<option value="${i}">Reto ${i + 1}: ${c.tag}</option>`).join("");
    selectEl.value = String(Math.min(editingIdx, activeChallenges.length - 1));
  };

  const loadFormFromIndex = (idx) => {
    editingIdx = Math.max(0, Math.min(idx, activeChallenges.length - 1));
    const item = activeChallenges[editingIdx];
    document.getElementById("edit-tag").value = item.tag || "";
    document.getElementById("edit-question").value = item.question || "";
    document.getElementById("edit-opt-a").value = item.options?.[0]?.text || "";
    document.getElementById("edit-opt-b").value = item.options?.[1]?.text || "";
    document.getElementById("edit-opt-c").value = item.options?.[2]?.text || "";
    document.getElementById("edit-correct").value = item.correct || "A";
    document.getElementById("edit-explanation").value = item.explanation || "";
  };

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    authError?.classList.add("hidden");
    populateSelect();
    loadFormFromIndex(currentChallengeIdx);
  });

  closeBtn?.addEventListener("click", () => modal.classList.add("hidden"));

  loginBtn?.addEventListener("click", () => {
    if ((pinInput?.value || "").trim() === CONFIG.editorPin) {
      authBox?.classList.add("hidden");
      formBox?.classList.remove("hidden");
      authError?.classList.add("hidden");
    } else {
      authError?.classList.remove("hidden");
    }
  });

  selectEl?.addEventListener("change", (e) => {
    loadFormFromIndex(parseInt(e.target.value, 10) || 0);
  });

  addBtn?.addEventListener("click", () => {
    activeChallenges.push({
      tag: "NUEVO RETO • CIENCIAS",
      question: "Escribe aquí tu nueva pregunta con LaTeX ($...$)",
      options: [
        { id: "A", text: "Alternativa A" },
        { id: "B", text: "Alternativa B" },
        { id: "C", text: "Alternativa C" }
      ],
      correct: "A",
      explanation: "Escribe aquí la explicación paso a paso."
    });
    editingIdx = activeChallenges.length - 1;
    populateSelect();
    loadFormFromIndex(editingIdx);
  });

  saveBtn?.addEventListener("click", () => {
    activeChallenges[editingIdx] = {
      tag: document.getElementById("edit-tag").value.trim() || "RETO",
      question: document.getElementById("edit-question").value.trim(),
      options: [
        { id: "A", text: document.getElementById("edit-opt-a").value.trim() },
        { id: "B", text: document.getElementById("edit-opt-b").value.trim() },
        { id: "C", text: document.getElementById("edit-opt-c").value.trim() }
      ],
      correct: document.getElementById("edit-correct").value,
      explanation: document.getElementById("edit-explanation").value.trim()
    };
    localStorage.setItem(CUSTOM_CHALLENGES_KEY, JSON.stringify(activeChallenges));
    currentChallengeIdx = editingIdx;
    renderChallenge();
    modal.classList.add("hidden");
  });

  exportBtn?.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(activeChallenges, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "retos.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  resetBtn?.addEventListener("click", () => {
    localStorage.removeItem(CUSTOM_CHALLENGES_KEY);
    activeChallenges = [...MICRO_CHALLENGES];
    currentChallengeIdx = 0;
    populateSelect();
    loadFormFromIndex(0);
    renderChallenge();
  });
}

function renderChallenge() {
  const container = document.getElementById("challenge-container");
  const counter = document.getElementById("challenge-counter");
  if (!container) return;

  const ch = activeChallenges[currentChallengeIdx];
  if (counter) counter.textContent = `Reto del Día`;

  container.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-4">
      <span class="px-2.5 py-1 rounded bg-obsidian-800 border border-obsidian-700 font-mono text-xs text-silver-300">${ch.tag}</span>
      <span class="font-mono text-xs text-silver-500">Elige una alternativa</span>
    </div>
    <p class="text-base sm:text-lg font-medium text-white leading-relaxed mb-6">${ch.question}</p>
    <div class="space-y-3" id="challenge-options">
      ${ch.options.map(opt => `
        <button data-opt="${opt.id}" class="challenge-opt w-full text-left p-4 rounded-xl border border-obsidian-700 bg-obsidian-950/70 hover:border-silver-400 transition flex items-center gap-3.5">
          <span class="w-7 h-7 rounded-lg bg-obsidian-800 border border-obsidian-700 flex items-center justify-center font-mono text-xs font-bold text-silver-200 shrink-0">${opt.id}</span>
          <span class="text-sm text-silver-200">${opt.text}</span>
        </button>
      `).join("")}
    </div>
    <div id="challenge-feedback" class="hidden mt-6 p-4 rounded-xl border text-sm leading-relaxed"></div>
  `;

  renderMath(container);

  const buttons = container.querySelectorAll(".challenge-opt");
  const feedbackEl = document.getElementById("challenge-feedback");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-opt");
      const isCorrect = chosen === ch.correct;

      buttons.forEach(b => {
        b.disabled = true;
        const optId = b.getAttribute("data-opt");
        b.classList.remove("hover:border-silver-400");
        if (optId === ch.correct) {
          b.classList.add("border-emerald-500", "bg-emerald-950/30");
        } else if (optId === chosen && !isCorrect) {
          b.classList.add("border-rose-500", "bg-rose-950/30");
        } else {
          b.classList.add("opacity-50");
        }
      });

      feedbackEl.classList.remove("hidden");
      if (isCorrect) {
        feedbackEl.className = "mt-6 p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/25 text-emerald-100 text-sm leading-relaxed";
        feedbackEl.innerHTML = `<p class="font-bold text-emerald-300 mb-1">✓ ¡Excelente criterio! No caíste en la trampa.</p><p>${ch.explanation}</p>`;
      } else {
        feedbackEl.className = "mt-6 p-4 rounded-xl border border-rose-500/40 bg-rose-950/25 text-rose-100 text-sm leading-relaxed";
        feedbackEl.innerHTML = `<p class="font-bold text-rose-300 mb-1">✕ ¡Cuidado! Caíste en la trampa clásica.</p><p>${ch.explanation}</p>`;
      }
      renderMath(feedbackEl);
    });
  });
}

// ==========================================
// MÓDULO: CURSOS INDEPENDIENTES Y TEMARIO
// ==========================================
let currentCourse = "algebra";
let selectedNodeId = "ALG1";

function getCompletedNodes() {
  try {
    return JSON.parse(localStorage.getItem("tioproject_completed_topics_v3") || "[]");
  } catch {
    return [];
  }
}

function toggleNodeComplete(nodeId) {
  const completed = getCompletedNodes();
  const idx = completed.indexOf(nodeId);
  if (idx >= 0) {
    completed.splice(idx, 1);
  } else {
    completed.push(nodeId);
  }
  localStorage.setItem("tioproject_completed_topics_v3", JSON.stringify(completed));
  updateProgressUI();
  renderTopicList(currentCourse);
  renderNodeInspector(currentCourse, nodeId);
  
}

function updateProgressUI() {
  const completed = getCompletedNodes();
  const allNodeIds = Object.values(COURSES).flatMap(c => Object.keys(c.nodes));
  const total = allNodeIds.length;
  const count = completed.filter(id => allNodeIds.includes(id)).length;
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  const textEl = document.getElementById("roadmap-progress-text");
  const barEl = document.getElementById("roadmap-progress-bar");
  if (textEl) textEl.textContent = `${count} de ${total} temas dominados`;
  if (barEl) barEl.style.width = `${pct}%`;
}

function initCourseExplorer() {
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
      flowchart: { curve: "basis", padding: 12 }
    });
  }

  const tabs = document.querySelectorAll(".roadmap-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCourse = tab.getAttribute("data-course");
      const firstNode = Object.keys(COURSES[currentCourse].nodes)[0];
      selectedNodeId = firstNode;

      const labelEl = document.getElementById("current-course-label");
      if (labelEl) labelEl.textContent = `CURSO: ${COURSES[currentCourse].name.toUpperCase()}`;

      renderTopicList(currentCourse);
      
      renderNodeInspector(currentCourse, firstNode);
    });
  });

  updateProgressUI();
  renderTopicList(currentCourse);
  
  renderNodeInspector(currentCourse, selectedNodeId);
}

function renderTopicList(courseKey) {
  const listEl = document.getElementById("course-topic-list");
  const countEl = document.getElementById("course-topic-count");
  if (!listEl) return;

  const course = COURSES[courseKey];
  const entries = Object.values(course.nodes);
  const completed = getCompletedNodes();

  if (countEl) countEl.textContent = `${entries.length} temas`;

  listEl.innerHTML = entries.map(item => {
    const isSelected = item.id === selectedNodeId;
    const isDone = completed.includes(item.id);
    return `
      <button data-topic-id="${item.id}" class="topic-item-btn text-left px-3 py-2 rounded-lg border text-xs transition flex items-center justify-between gap-2 ${
        isSelected
          ? "bg-white text-obsidian-950 border-white font-bold"
          : isDone
          ? "bg-emerald-950/30 border-emerald-700/60 text-emerald-200 hover:border-emerald-400"
          : "bg-obsidian-950/70 border-obsidian-800 text-silver-300 hover:border-silver-500 hover:text-white"
      }">
        <span class="truncate">${item.title}</span>
        ${isDone ? `<span class="shrink-0 font-mono text-[10px]">✓</span>` : ""}
      </button>
    `;
  }).join("");

  listEl.querySelectorAll(".topic-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedNodeId = btn.getAttribute("data-topic-id");
      renderTopicList(courseKey);
      renderNodeInspector(courseKey, selectedNodeId);
      
    });
  });
}

async function renderMermaidCourse(courseKey) {
  const wrapper = document.getElementById("mermaid-diagram-wrapper");
  if (!wrapper || !window.mermaid) return;

  const courseData = COURSES[courseKey];
  const { graph, phases } = courseData.mermaidData;
  const selectedNum = parseInt(selectedNodeId.replace(courseData.prefix, ""), 10) || 1;
  const totalTopics = Object.keys(courseData.nodes).length;
  const chunkSize = Math.ceil(totalTopics / phases.length);
  const activePhaseIdx = Math.min(phases.length - 1, Math.floor((selectedNum - 1) / chunkSize));

  let extraStyles = "";
  phases.forEach((ph, idx) => {
    if (idx === activePhaseIdx) {
      extraStyles += `\nstyle ${ph.id} fill:#38BDF8,stroke:#7DD3FC,stroke-width:2px,color:#080A0F`;
    }
  });

  const graphDefinition = graph + extraStyles;
  const uniqueId = `mermaid-${courseKey}-${Date.now()}`;

  try {
    const { svg } = await mermaid.render(uniqueId, graphDefinition);
    wrapper.innerHTML = svg;

    phases.forEach((ph) => {
      const nodeEl = wrapper.querySelector(`[id*="flowchart-${ph.id}-"]`);
      if (nodeEl) {
        nodeEl.style.cursor = "pointer";
        nodeEl.addEventListener("click", () => {
          selectedNodeId = ph.firstTopicId;
          renderTopicList(courseKey);
          renderNodeInspector(courseKey, ph.firstTopicId);
          
          const targetBtn = document.querySelector(`[data-topic-id="${ph.firstTopicId}"]`);
          targetBtn?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }
    });
  } catch (err) {
    console.error("Error rendering Mermaid diagram:", err);
  }
}

function renderNodeInspector(courseKey, nodeId) {
  const inspector = document.getElementById("node-inspector");
  if (!inspector) return;

  const course = COURSES[courseKey];
  const node = course.nodes[nodeId];
  if (!node) return;

  const isDone = getCompletedNodes().includes(nodeId);
  const waMsg = encodeURIComponent(`Hola TioProject, quisiera orientación o material sobre "${course.name} - ${node.title}".`);

  inspector.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-3">
      <span class="px-2.5 py-1 rounded bg-obsidian-800 border border-obsidian-700 font-mono text-[11px] text-silver-300">${course.name.toUpperCase()} • ${node.badge}</span>
      <span class="font-mono text-xs text-silver-400">${node.weight}</span>
    </div>
    <h3 class="text-xl font-bold text-white leading-snug">${node.title}</h3>
    <p class="text-xs font-mono text-silver-400 mt-2">Eslabón previo: <span class="text-silver-200">${node.prereq}</span></p>
    <p class="text-sm text-silver-300 mt-4 leading-relaxed">${node.desc}</p>

    <div class="mt-6 space-y-2.5">
      <a href="https://drive.google.com/drive/u/0/folders/13Vw6TwtbdJgRt28Cy5Y_6-fK3_nk5BhM" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-obsidian-950 border border-obsidian-700 hover:border-white transition group">
        <div class="flex items-center gap-3">
          <i data-lucide="book-marked" class="w-4 h-4 text-silver-300"></i>
          <div>
            <p class="text-xs font-mono text-silver-400">LOS ESCRITOS DE PROJECT</p>
            <p class="text-sm font-semibold text-white">Abrir Resúmenes del TioProject</p>
          </div>
        </div>
        <i data-lucide="arrow-up-right" class="w-4 h-4 text-silver-400 group-hover:text-white"></i>
      </a>

      <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-obsidian-950 border border-obsidian-700 hover:border-white transition group">
        <div class="flex items-center gap-3">
          <i data-lucide="message-circle" class="w-4 h-4 text-silver-300"></i>
          <div>
            <p class="text-xs font-mono text-silver-400">CONSULTA DIRECTA</p>
            <p class="text-sm font-semibold text-white">Pedir guía o clase de este tema</p>
          </div>
        </div>
        <i data-lucide="arrow-up-right" class="w-4 h-4 text-silver-400 group-hover:text-white"></i>
      </a>
    </div>

    <div class="mt-6 pt-5 border-t border-obsidian-800">
      <button id="toggle-complete-btn" class="w-full py-3 px-4 rounded-xl font-semibold text-xs font-mono uppercase tracking-wider transition flex items-center justify-center gap-2 ${
        isDone
          ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/30"
          : "bg-white text-obsidian-950 hover:bg-silver-200"
      }">
        <i data-lucide="${isDone ? "check-circle-2" : "circle"}" class="w-4 h-4"></i>
        <span>${isDone ? "Tema Dominado (Clic para desmarcar)" : "Marcar tema como dominado"}</span>
      </button>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  document.getElementById("toggle-complete-btn")?.addEventListener("click", () => toggleNodeComplete(nodeId));
}

// ==========================================
// MÓDULO: SOLUCIONARIOS EN VIVO + BÓVEDA
// ==========================================
let allMaterials = [];

async function initSolucionariosAndVault() {
  // Si el usuario configura googleAppsScriptUrl, intenta cargar archivos recientes en vivo
  if (CONFIG.googleAppsScriptUrl && CONFIG.googleAppsScriptUrl.trim() !== "") {
    try {
      const liveRes = await fetch(CONFIG.googleAppsScriptUrl);
      const liveData = await liveRes.json();
      if (liveData.cepreuni && Array.isArray(liveData.cepreuni)) {
        renderFolderFeed("cepreuni-feed", liveData.cepreuni);
      }
      if (liveData.presm && Array.isArray(liveData.presm)) {
        renderFolderFeed("presm-feed", liveData.presm);
      }
      if (liveData.escritos && Array.isArray(liveData.escritos)) {
        allMaterials = liveData.escritos;
        if (!Array.isArray(allMaterials) || allMaterials.length === 0) allMaterials = EMBEDDED_FALLBACK.materiales;
  renderVault(allMaterials);
      }
      const badge = document.getElementById("solucionarios-sync-badge");
      if (badge) {
        badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span>Conectado en vivo a Google Drive</span>`;
      }
    } catch (err) {
      console.warn("No se pudo leer Google Apps Script aún, usando catálogo local:", err);
    }
  }

  // Catálogo local de respaldo
  if (allMaterials.length === 0) {
    try {
      const res = await fetch("data/materiales.json");
      allMaterials = await res.json();
    } catch (err) {
      console.error("Error cargando data/materiales.json:", err);
    }
  }

  if (!Array.isArray(allMaterials) || allMaterials.length === 0) allMaterials = EMBEDDED_FALLBACK.materiales;
  renderVault(allMaterials);

  const searchInput = document.getElementById("vault-search");
  const courseSelect = document.getElementById("vault-course-filter");
  const levelSelect = document.getElementById("vault-level-filter");

  const applyFilters = () => {
    const q = (searchInput?.value || "").toLowerCase().trim();
    const course = courseSelect?.value || "ALL";
    const level = levelSelect?.value || "ALL";

    const filtered = allMaterials.filter(item => {
      const matchesQuery =
        item.titulo.toLowerCase().includes(q) ||
        item.descripcion.toLowerCase().includes(q) ||
        item.curso.toLowerCase().includes(q);
      const matchesCourse = course === "ALL" || item.curso === course;
      const matchesLevel = level === "ALL" || item.nivel === level;
      return matchesQuery && matchesCourse && matchesLevel;
    });

    renderVault(filtered);
  };

  searchInput?.addEventListener("input", applyFilters);
  courseSelect?.addEventListener("change", applyFilters);
  levelSelect?.addEventListener("change", applyFilters);
}

function renderFolderFeed(containerId, files) {
  const el = document.getElementById(containerId);
  if (!el || !files.length) return;
  el.innerHTML = files.slice(0, 5).map(f => `
    <a href="${f.url}" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-obsidian-950 border border-obsidian-800 hover:border-silver-400 flex items-center justify-between gap-2 transition">
      <span class="truncate text-silver-200">${f.name}</span>
      <span class="shrink-0 text-[11px] text-silver-400">Abrir →</span>
    </a>
  `).join("");
}

function renderVault(items) {
  const grid = document.getElementById("vault-grid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 rounded-2xl border border-obsidian-700 bg-obsidian-900">
        <p class="text-silver-300 font-medium">No se encontraron separatas con ese filtro.</p>
        <p class="text-xs text-silver-500 mt-1">Revisa también la carpeta completa de Los Escritos de Project en Drive.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => `
    <article class="rounded-2xl border border-obsidian-700 bg-obsidian-900 p-5 flex flex-col justify-between hover:border-silver-400 transition group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 rounded bg-obsidian-800 border border-obsidian-700 font-mono text-[11px] font-semibold text-white">${item.curso}</span>
          <span class="font-mono text-[11px] text-silver-400">${item.nivel}</span>
        </div>
        <h4 class="text-base font-bold text-white group-hover:text-silver-200 transition">${item.titulo}</h4>
        <p class="text-xs text-silver-400 mt-2 leading-relaxed">${item.descripcion}</p>
      </div>

      <div class="mt-5 pt-4 border-t border-obsidian-800 flex items-center justify-between gap-3">
        <span class="font-mono text-[11px] text-silver-500">${item.universidad}</span>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white text-obsidian-950 font-bold text-xs hover:bg-silver-200 transition">
          <i data-lucide="folder-open" class="w-3.5 h-3.5"></i>
          <span>Abrir en Drive</span>
        </a>
      </div>
    </article>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

// ==========================================
// MÓDULO: CLUB CAZA-ERRORES (Rotación por Conexión / IP)
// ==========================================
const DEFAULT_ERROR_CASES = [
  {
    "id": "ERR01",
    "tag": "PROBLEMA • ÁLGEBRA / INECUACIONES RACIONALES",
    "statement": "Resuelva en $\\mathbb{R}$ la siguiente inecuación racional: $$\\frac{x^2 - 4}{x - 2} > 0$$",
    "lines": [
      {
        "num": 1,
        "text": "Factorizamos el numerador usando diferencia de cuadrados: $$\\frac{(x + 2)(x - 2)}{x - 2} > 0$$"
      },
      {
        "num": 2,
        "text": "Simplificamos el factor común $(x - 2)$ en el numerador y denominador: $$x + 2 > 0$$"
      },
      {
        "num": 3,
        "text": "Despejamos $x$ y concluimos que el conjunto solución es: $$x \\in \\langle -2; +\\infty \\rangle$$"
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Al cancelar el factor $(x - 2)$ se pierde la restricción del Conjunto de Valores Admisibles (CVA), que exige $x - 2 \\neq 0 \\implies x \\neq 2$. El conjunto solución correcto debe excluir ese punto: $\\langle -2; +\\infty \\rangle - \\{2\\}$.",
    "hintBody": "Cuando simplificas una expresión algebraica que contiene la incógnita en el denominador, ¿qué ocurre con los valores que anulan dicho denominador?"
  },
  {
    "id": "ERR02",
    "tag": "PROBLEMA • FÍSICA / CINEMÁTICA VERTICAL",
    "statement": "Desde la azotea de un edificio de $45\\text{ m}$ de altura se lanza una piedra verticalmente hacia arriba con rapidez $v_0 = 20\\text{ m/s}$. Calcule el tiempo que tarda en llegar al suelo ($g = 10\\text{ m/s}^2$).",
    "lines": [
      {
        "num": 1,
        "text": "Tomamos como origen el punto de lanzamiento con eje $+Y$ hacia arriba, planteando: $$\\Delta y = v_0 t + \\frac{1}{2} g t^2 \\implies 45 = 20t - 5t^2$$"
      },
      {
        "num": 2,
        "text": "Reordenamos la ecuación cuadrática dividiendo entre $5$: $$t^2 - 4t + 9 = 0$$"
      },
      {
        "num": 3,
        "text": "Analizamos el discriminante $\\Delta = (-4)^2 - 4(1)(9) = -20 < 0$ y concluimos que el problema no tiene solución real."
      }
    ],
    "errorLine": 1,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 1.",
    "successBody": "Si el eje $+Y$ apunta hacia arriba y el origen está en la azotea, el suelo se ubica $45\\text{ m}$ por debajo, por lo que el desplazamiento vertical es $\\Delta y = -45\\text{ m}$, no $+45\\text{ m}$. Con $-45 = 20t - 5t^2$ se obtiene $t^2 - 4t - 9 = 0$, que sí tiene raíz positiva.",
    "hintBody": "Revisa cuidadosamente el sistema de referencia elegido en la primera línea: si el origen es el punto de lanzamiento y hacia arriba es positivo, ¿qué signo tiene la posición final en el suelo?"
  },
  {
    "id": "ERR03",
    "tag": "PROBLEMA • TRIGONOMETRÍA / IDENTIDADES",
    "statement": "Simplifique la expresión trigonométrica $E = \\sqrt{1 - \\sin^2 x} + \\cos x$, sabiendo que el ángulo $x$ pertenece al tercer cuadrante ($x \\in \\text{III C}$).",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos la identidad pitagórica fundamental $1 - \\sin^2 x = \\cos^2 x$: $$E = \\sqrt{\\cos^2 x} + \\cos x$$"
      },
      {
        "num": 2,
        "text": "Extraemos la raíz cuadrada del término cuadrático: $$E = \\cos x + \\cos x$$"
      },
      {
        "num": 3,
        "text": "Reducimos términos semejantes y obtenemos: $$E = 2\\cos x$$"
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Por definición algebraica, $\\sqrt{\\cos^2 x} = |\\cos x|$. Como $x \\in \\text{III C}$, el coseno es negativo ($\\cos x < 0$), así que $|\\cos x| = -\\cos x$. Por lo tanto, $E = -\\cos x + \\cos x = 0$.",
    "hintBody": "Recuerda que $\\sqrt{a^2} = |a|$ y presta atención al dato del cuadrante al que pertenece el ángulo $x$."
  },
  {
    "id": "ERR04",
    "tag": "PROBLEMA • GEOMETRÍA / TRIÁNGULOS",
    "statement": "En un triángulo $ABC$, las longitudes de dos lados son $AB = 6\\text{ cm}$ y $BC = 9\\text{ cm}$. Si el ángulo interior en $B$ es agudo ($m\\angle ABC < 90^\\circ$), halle el mayor valor entero posible para el lado $AC$.",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos el teorema de la existencia triangular para el lado $AC$: $$9 - 6 < AC < 9 + 6 \\implies 3 < AC < 15$$"
      },
      {
        "num": 2,
        "text": "Dado que el ángulo $ABC$ es agudo, aplicamos la naturaleza del triángulo: $$AC^2 < 6^2 + 9^2 \\implies AC^2 < 117$$"
      },
      {
        "num": 3,
        "text": "Intersectando $3 < AC < 15$ con $AC < \\sqrt{117} \\approx 10.81$, concluimos que el mayor valor entero es $AC = 14\\text{ cm}$."
      }
    ],
    "errorLine": 3,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 3.",
    "successBody": "Al intersectar los intervalos $3 < AC < 15$ y $AC < 10.81$, prevalece la cota superior más restrictiva: $3 < AC < 10.81$. Por lo tanto, el mayor valor entero para $AC$ es $10\\text{ cm}$, no $14\\text{ cm}$.",
    "hintBody": "Verifica la intersección de las dos desigualdades obtenidas en las líneas anteriores al elegir el máximo entero."
  },
  {
    "id": "ERR05",
    "tag": "PROBLEMA • ARITMÉTICA / TEORÍA DE CONJUNTOS",
    "statement": "Dado el conjunto $M = \\{2; \\{3\\}; \\{2; 3\\}; 4\\}$, determine el valor de verdad de la proposición: $\\{3\\} \\subset M$.",
    "lines": [
      {
        "num": 1,
        "text": "Identificamos los elementos explícitos del conjunto $M$: son $2$, $\\{3\\}$, $\\{2; 3\\}$ y $4$."
      },
      {
        "num": 2,
        "text": "Como $\\{3\\}$ aparece listado dentro de las llaves de $M$, afirmamos que $\\{3\\} \\subset M$ es verdadera."
      },
      {
        "num": 3,
        "text": "Por consiguiente, concluimos que el valor de verdad de la proposición dada es Verdadero (V)."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "El símbolo $\\subset$ representa inclusión (subconjunto), no pertenencia ($\\in$). Como $\\{3\\}$ es un elemento directo de $M$, lo correcto es $\\{3\\} \\in M$. Para que sea subconjunto debe llevar doble llave: $\\{\\{3\\}\\} \\subset M$.",
    "hintBody": "Distingue cuidadosamente entre la relación de pertenencia ($\\in$, elemento a conjunto) y la relación de inclusión ($\\subset$, conjunto a conjunto)."
  },
  {
    "id": "ERR06",
    "tag": "PROBLEMA • ÁLGEBRA / LOGARITMOS",
    "statement": "Resuelva la siguiente ecuación logarítmica en los reales: $$\\log_3(x - 2) + \\log_3(x + 4) = 3$$",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos la propiedad del logaritmo de un producto: $$\\log_3[(x - 2)(x + 4)] = 3$$"
      },
      {
        "num": 2,
        "text": "Convertimos a forma exponencial y desarrollamos: $$(x - 2)(x + 4) = 3^3 \\implies x^2 + 2x - 35 = 0$$"
      },
      {
        "num": 3,
        "text": "Factorizamos $(x + 7)(x - 5) = 0$ y concluimos que el conjunto solución es $CS = \\{-7; 5\\}$."
      }
    ],
    "errorLine": 3,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 3.",
    "successBody": "Se omitió verificar el dominio (CVA) de la ecuación original: $x - 2 > 0$ y $x + 4 > 0$, lo que exige $x > 2$. El valor $x = -7$ genera argumentos negativos en los logaritmos originales y debe descartarse. El conjunto solución es $CS = \\{5\\}$.",
    "hintBody": "Antes de aceptar todas las raíces de la ecuación cuadrática, reemplázalas en la ecuación logarítmica inicial."
  },
  {
    "id": "ERR07",
    "tag": "PROBLEMA • FÍSICA / DINÁMICA LINEAL",
    "statement": "Un bloque de $4\\text{ kg}$ reposa sobre una superficie horizontal rugosa ($\\mu_s = 0.6$, $\\mu_k = 0.4$, $g = 10\\text{ m/s}^2$). Si se le aplica una fuerza horizontal de $F = 20\\text{ N}$, determine el módulo de la fuerza de rozamiento que actúa sobre el bloque.",
    "lines": [
      {
        "num": 1,
        "text": "Calculamos la fuerza normal en el eje vertical: $$N = m \\cdot g = 4 \\cdot 10 = 40\\text{ N}$$"
      },
      {
        "num": 2,
        "text": "Calculamos la fuerza de rozamiento estático máximo: $$f_{s,\\text{máx}} = \\mu_s \\cdot N = 0.6 \\cdot 40 = 24\\text{ N}$$"
      },
      {
        "num": 3,
        "text": "Concluimos que la fuerza de rozamiento sobre el bloque tiene un módulo de $24\\text{ N}$."
      }
    ],
    "errorLine": 3,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 3.",
    "successBody": "Como la fuerza aplicada ($20\\text{ N}$) es menor que el rozamiento estático máximo ($24\\text{ N}$), el bloque permanece en reposo. En equilibrio estático, la fuerza de rozamiento se ajusta exactamente a la fuerza aplicada: $f_s = 20\\text{ N}$ (si fuera $24\\text{ N}$, el bloque aceleraría hacia atrás).",
    "hintBody": "Si el bloque no se mueve, la suma de fuerzas horizontales debe ser cero. Compara la fuerza aplicada con el límite estático."
  },
  {
    "id": "ERR08",
    "tag": "PROBLEMA • TRIGONOMETRÍA / ECUACIONES",
    "statement": "Halle el número de soluciones de la ecuación $\\sin(2x) = \\sin x$ en el intervalo $[0; \\pi]$.",
    "lines": [
      {
        "num": 1,
        "text": "Desarrollamos el seno del ángulo doble en el primer miembro: $$2\\sin x \\cos x = \\sin x$$"
      },
      {
        "num": 2,
        "text": "Cancelamos $\\sin x$ en ambos lados de la igualdad: $$2\\cos x = 1 \\implies \\cos x = \\frac{1}{2}$$"
      },
      {
        "num": 3,
        "text": "En el intervalo $[0; \\pi]$, $\\cos x = \\frac{1}{2}$ tiene una única solución ($x = \\frac{\\pi}{3}$), por lo que hay $1$ solución."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Al dividir ambos miembros entre $\\sin x$, se pierden las soluciones donde $\\sin x = 0$. En $[0; \\pi]$, $\\sin x = 0$ aporta dos soluciones adicionales ($x = 0$ y $x = \\pi$), dando un total de $3$ soluciones.",
    "hintBody": "Nunca canceles una función trigonométrica que contiene la incógnita sin igualarla primero a cero para rescatar sus raíces."
  },
  {
    "id": "ERR09",
    "tag": "PROBLEMA • ÁLGEBRA / NÚMEROS COMPLEJOS",
    "statement": "Simplifique y calcule el valor de la siguiente expresión en el campo de los complejos: $$K = \\sqrt{-4} \\cdot \\sqrt{-9} + i^{2026}$$",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos la propiedad del producto de radicales $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{a\\cdot b}$ al primer término: $$\\sqrt{-4} \\cdot \\sqrt{-9} = \\sqrt{(-4)(-9)} = \\sqrt{36} = 6$$"
      },
      {
        "num": 2,
        "text": "Reducimos la potencia de la unidad imaginaria dividiendo el exponente entre $4$: $$i^{2026} = i^{4(506) + 2} = i^2 = -1$$"
      },
      {
        "num": 3,
        "text": "Sumamos ambos resultados parciales y obtenemos: $$K = 6 + (-1) = 5$$"
      }
    ],
    "errorLine": 1,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 1.",
    "successBody": "La propiedad $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}$ solo es válida cuando al menos uno de los radicandos es no negativo ($a \\ge 0$ o $b \\ge 0$). En los complejos: $\\sqrt{-4}\\cdot\\sqrt{-9} = (2i)(3i) = 6i^2 = -6$. Así, $K = -6 - 1 = -7$.",
    "hintBody": "Revisa si la propiedad distributiva del radical respecto al producto se cumple cuando ambos radicandos son negativos."
  },
  {
    "id": "ERR10",
    "tag": "PROBLEMA • ARITMÉTICA / PORCENTAJES",
    "statement": "El precio de un artículo aumentó en un $25\\%$ en enero y luego disminuyó en un $20\\%$ en febrero. Determine la variación porcentual neta respecto al precio inicial.",
    "lines": [
      {
        "num": 1,
        "text": "Denotamos el precio inicial del artículo como $P_0 = 100\\%$."
      },
      {
        "num": 2,
        "text": "Calculamos la variación neta sumando algebraicamente los porcentajes: $$+25\\% - 20\\% = +5\\%$$"
      },
      {
        "num": 3,
        "text": "Concluimos que el precio final experimentó un aumento neto del $5\\%$ respecto al inicial."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Las variaciones porcentuales sucesivas no se suman directamente porque se aplican sobre bases distintas. Tras subir $25\\%$, el precio es $125\\%$; al bajar $20\\%$ de ese nuevo valor queda $125\\% \\times 0.80 = 100\\%$. La variación neta es $0\\%$.",
    "hintBody": "¿El descuento del $20\\%$ en febrero se aplica sobre el precio original o sobre el precio ya incrementado en enero?"
  },
  {
    "id": "ERR11",
    "tag": "PROBLEMA • GEOMETRÍA / ÁREAS Y SEMEJANZA",
    "statement": "Dos triángulos equiláteros $T_1$ y $T_2$ tienen lados de longitud $L_1 = 2\\text{ cm}$ y $L_2 = 6\\text{ cm}$, respectivamente. Calcule la razón entre sus áreas $\\frac{A_2}{A_1}$.",
    "lines": [
      {
        "num": 1,
        "text": "Observamos que todos los triángulos equiláteros son semejantes entre sí, con razón de semejanza: $$k = \\frac{L_2}{L_1} = \\frac{6}{2} = 3$$"
      },
      {
        "num": 2,
        "text": "Por proporcionalidad geométrica, la razón de sus áreas es igual a la razón de sus lados: $$\\frac{A_2}{A_1} = k = 3$$"
      },
      {
        "num": 3,
        "text": "Por lo tanto, el área del triángulo $T_2$ es el triple del área del triángulo $T_1$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "En figuras semejantes, la razón de sus áreas es igual al CUADRADO de la razón de semejanza, no a la razón lineal: $\\frac{A_2}{A_1} = k^2 = 3^2 = 9$.",
    "hintBody": "El área es una magnitud bidimensional; recuerda cómo escala el área cuando las dimensiones lineales se multiplican por un factor $k$."
  },
  {
    "id": "ERR12",
    "tag": "PROBLEMA • FÍSICA / TRABAJO Y ENERGÍA",
    "statement": "Un bloque de $2\\text{ kg}$ se desliza $5\\text{ m}$ sobre una superficie horizontal rugosa bajo la acción de una fuerza horizontal constante $F = 30\\text{ N}$ y una fuerza de rozamiento cinético $f_k = 10\\text{ N}$. Calcule el trabajo realizado por la fuerza de rozamiento.",
    "lines": [
      {
        "num": 1,
        "text": "Identificamos que la fuerza de rozamiento cinético tiene módulo $f_k = 10\\text{ N}$ y el desplazamiento es $d = 5\\text{ m}$."
      },
      {
        "num": 2,
        "text": "Aplicamos la fórmula del trabajo mecánico constante: $$W_{f_k} = f_k \\cdot d = 10 \\cdot 5 = +50\\text{ J}$$"
      },
      {
        "num": 3,
        "text": "Concluimos que la fuerza de rozamiento realiza un trabajo de $+50\\text{ J}$ sobre el bloque."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "La definición general de trabajo es $W = F \\cdot d \\cdot \\cos\\theta$. Como el rozamiento cinético se opone al desplazamiento ($\\theta = 180^\\circ$ y $\\cos 180^\\circ = -1$), su trabajo es negativo: $W_{f_k} = -50\\text{ J}$.",
    "hintBody": "Fíjate en el ángulo que forman el vector fuerza de rozamiento cinético y el vector desplazamiento."
  },
  {
    "id": "ERR13",
    "tag": "PROBLEMA • ÁLGEBRA / INECUACIONES CON RADICALES",
    "statement": "Determine el conjunto solución en $\\mathbb{R}$ de la inecuación irracional: $$\\sqrt{x - 1} > -3$$",
    "lines": [
      {
        "num": 1,
        "text": "Hallamos el Universo o Conjunto de Valores Admisibles (CVA) exigiendo que el radicando sea no negativo: $$x - 1 \\ge 0 \\implies x \\ge 1$$"
      },
      {
        "num": 2,
        "text": "Elevamos ambos miembros al cuadrado para eliminar el radical: $$(\\sqrt{x - 1})^2 > (-3)^2 \\implies x - 1 > 9 \\implies x > 10$$"
      },
      {
        "num": 3,
        "text": "Intersectamos $x \\ge 1$ con $x > 10$ y concluimos que $CS = \\langle 10; +\\infty \\rangle$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "No se puede elevar al cuadrado una desigualdad cuando un miembro es positivo y el otro negativo sin alterar el sentido o la equivalencia. Como $\\sqrt{x - 1} \\ge 0$ siempre que exista, automáticamente es mayor que $-3$ para todo $x$ en su CVA: $CS = [1; +\\infty \\rangle$.",
    "hintBody": "Evalúa el signo del primer miembro en todo su dominio: ¿puede una raíz cuadrada real ser menor o igual que $-3$?"
  },
  {
    "id": "ERR14",
    "tag": "PROBLEMA • TRIGONOMETRÍA / FUNCIONES INVERSAS",
    "statement": "Calcule el valor exacto de la expresión: $$M = \\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right)$$",
    "lines": [
      {
        "num": 1,
        "text": "Recordamos la propiedad inversa $\\arcsin(\\sin\\theta) = \\theta$."
      },
      {
        "num": 2,
        "text": "Aplicamos directamente dicha propiedad al argumento dado: $$M = \\frac{5\\pi}{6}$$"
      },
      {
        "num": 3,
        "text": "Concluimos que el valor exacto de $M$ es $\\frac{5\\pi}{6}\\text{ rad}$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "La identidad $\\arcsin(\\sin\\theta) = \\theta$ solo se cumple si $\\theta \\in \\left[-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right]$ (rango principal del arcoseno). Como $\\sin\\frac{5\\pi}{6} = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$, el valor correcto es $M = \\frac{\\pi}{6}$.",
    "hintBody": "Verifica si $\\frac{5\\pi}{6}$ pertenece al rango principal de la función $\\arcsin(x)$."
  },
  {
    "id": "ERR15",
    "tag": "PROBLEMA • ARITMÉTICA / DIVISIBILIDAD",
    "statement": "Si se cumple que $6N = \\overset{\\circ}{15}$ (es decir, $6N$ es múltiplo de $15$), donde $N \\in \\mathbb{Z}^+$, determine la forma general de $N$.",
    "lines": [
      {
        "num": 1,
        "text": "Planteamos la ecuación de divisibilidad dada en el enunciado: $$6N = \\overset{\\circ}{15}$$"
      },
      {
        "num": 2,
        "text": "Dividimos el coeficiente $6$ entre $3$ para aplicar el principio de Arquímedes sin alterar el módulo: $$2N = \\overset{\\circ}{15}$$"
      },
      {
        "num": 3,
        "text": "Como $2$ y $15$ son PESI, concluimos que $N = \\overset{\\circ}{15}$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Al dividir el primer miembro entre $3$, también debe dividirse el módulo $15$ entre $\\text{MCD}(3, 15) = 3$. Lo correcto es $2N = \\overset{\\circ}{5} \\implies N = \\overset{\\circ}{5}$. Por ejemplo, $N = 5$ cumple $6(5) = 30 = \\overset{\\circ}{15}$, aunque $5$ no es múltiplo de $15$.",
    "hintBody": "Cuando simplificas un factor común en una ecuación de divisibilidad, ¿qué debe ocurrir también con el módulo?"
  },
  {
    "id": "ERR16",
    "tag": "PROBLEMA • FÍSICA / ELECTROSTÁTICA",
    "statement": "Dos cargas puntuales $q_1 = +4\\text{ }\\mu\\text{C}$ y $q_2 = -9\\text{ }\\mu\\text{C}$ están separadas una distancia $d$ en el vacío. Halle el punto sobre la recta que las une donde el potencial eléctrico total es nulo ($V_{\\text{total}} = 0$).",
    "lines": [
      {
        "num": 1,
        "text": "Ubicamos un punto $P$ entre ambas cargas, a una distancia $x$ de $q_1$ y $(d - x)$ de $q_2$."
      },
      {
        "num": 2,
        "text": "Planteamos la suma de potenciales eléctricos tomando magnitudes positivas: $$\\frac{k |q_1|}{x} + \\frac{k |q_2|}{d - x} = 0 \\implies \\frac{4}{x} + \\frac{9}{d - x} = 0$$"
      },
      {
        "num": 3,
        "text": "Al ver que la suma de dos términos positivos no puede ser cero, concluimos que no existe ningún punto donde $V_{\\text{total}} = 0$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "El potencial eléctrico es una magnitud ESCALAR que conserva el signo algebraico de cada carga (no se toma valor absoluto). La ecuación correcta es $\\frac{4}{x} - \\frac{9}{d - x} = 0 \\implies x = \\frac{4}{13}d$.",
    "hintBody": "A diferencia del campo eléctrico (vector), el potencial eléctrico se suma algebraicamente respetando el signo de cada carga."
  },
  {
    "id": "ERR17",
    "tag": "PROBLEMA • GEOMETRÍA / CIRCUNFERENCIA",
    "statement": "En una circunferencia de centro $O$, desde un punto exterior $P$ se trazan una recta tangente $PT$ ($T$ punto de tangencia) y una recta secante que corta a la circunferencia en $A$ y $B$ ($PA < PB$). Si $PA = 4\\text{ cm}$ y $AB = 5\\text{ cm}$, calcule $PT$.",
    "lines": [
      {
        "num": 1,
        "text": "Identificamos los segmentos determinados por la secante: $PA = 4\\text{ cm}$ y $AB = 5\\text{ cm}$."
      },
      {
        "num": 2,
        "text": "Aplicamos el teorema de la tangente y la secante: $$PT^2 = PA \\cdot AB \\implies PT^2 = 4 \\cdot 5 = 20$$"
      },
      {
        "num": 3,
        "text": "Extraemos la raíz cuadrada y obtenemos $PT = 2\\sqrt{5}\\text{ cm}$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "El teorema de la tangente establece que $PT^2 = PB \\cdot PA$ (secante completa por su parte externa), no $PA \\cdot AB$. Como $PB = PA + AB = 4 + 5 = 9\\text{ cm}$, se tiene $PT^2 = 9 \\cdot 4 = 36 \\implies PT = 6\\text{ cm}$.",
    "hintBody": "Revisa exactamente cuáles son los dos segmentos que se multiplican en el teorema de la tangente y la secante."
  },
  {
    "id": "ERR18",
    "tag": "PROBLEMA • ÁLGEBRA / FUNCIONES",
    "statement": "Determine el dominio maximal en $\\mathbb{R}$ de la función real definida por: $$f(x) = \\frac{\\sqrt{x + 3}}{x^2 - 9}$$",
    "lines": [
      {
        "num": 1,
        "text": "Exigimos que el radicando del numerador sea no negativo: $$x + 3 \\ge 0 \\implies x \\ge -3$$"
      },
      {
        "num": 2,
        "text": "Exigimos que el denominador sea distinto de cero: $$x^2 - 9 \\neq 0 \\implies x \\neq 3$$"
      },
      {
        "num": 3,
        "text": "Intersectamos ambas condiciones y obtenemos $\\text{Dom}(f) = [-3; +\\infty \\rangle - \\{3\\}$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "La ecuación $x^2 - 9 = 0$ tiene DOS raíces reales: $x = 3$ y $x = -3$. Por lo tanto, el denominador exige $x \\neq 3$ y también $x \\neq -3$, convirtiendo el intervalo cerrado en abierto en $-3$: $\\text{Dom}(f) = \\langle -3; +\\infty \\rangle - \\{3\\}$.",
    "hintBody": "¿Cuántas soluciones reales tiene $x^2 = 9$? Asegúrate de excluir todas las raíces del denominador."
  },
  {
    "id": "ERR19",
    "tag": "PROBLEMA • TRIGONOMETRÍA / REDUCCIÓN AL PRIMER CUADRANTE",
    "statement": "Reduzca al primer cuadrante la expresión trigonométrica $\\tan(270^\\circ + \\alpha)$, donde $\\alpha$ es un ángulo agudo.",
    "lines": [
      {
        "num": 1,
        "text": "Ubicamos el ángulo $(270^\\circ + \\alpha)$ en el cuarto cuadrante ($\\text{IV C}$), donde la tangente es negativa."
      },
      {
        "num": 2,
        "text": "Como se usa el ángulo cuadrantal $270^\\circ$, mantenemos la misma razón trigonométrica y colocamos el signo negativo: $$\\tan(270^\\circ + \\alpha) = -\\tan\\alpha$$"
      },
      {
        "num": 3,
        "text": "Concluimos que la expresión reducida es $-\\tan\\alpha$."
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 2.",
    "successBody": "Cuando se reduce usando ángulos cuadrantales del eje vertical ($90^\\circ$ o $270^\\circ$), la razón trigonométrica cambia a su CO-RAZÓN. La co-razón de la tangente es la cotangente, por lo que $\\tan(270^\\circ + \\alpha) = -\\cot\\alpha$.",
    "hintBody": "Recuerda la regla de reducción al primer cuadrante cuando el ángulo de referencia es $90^\\circ$ o $270^\\circ$ (eje Y)."
  },
  {
    "id": "ERR20",
    "tag": "PROBLEMA • FÍSICA / MOVIMIENTO CIRCULAR",
    "statement": "Una partícula describe un Movimiento Circular Uniforme (MCU) con rapidez tangencial constante $v = 10\\text{ m/s}$ en una trayectoria de radio $R = 5\\text{ m}$. Calcule el módulo de su aceleración.",
    "lines": [
      {
        "num": 1,
        "text": "Identificamos que en un Movimiento Circular Uniforme (MCU) la rapidez tangencial es constante: $v = 10\\text{ m/s}$."
      },
      {
        "num": 2,
        "text": "Calculamos la aceleración tangencial derivando la rapidez respecto al tiempo: $$a_t = \\frac{dv}{dt} = 0$$"
      },
      {
        "num": 3,
        "text": "Concluimos que, al ser $a_t = 0$, la aceleración total de la partícula es $a = 0\\text{ m/s}^2$."
      }
    ],
    "errorLine": 3,
    "successTitle": "✓ ¡Buen ojo! El error está en la Línea 3.",
    "successBody": "En el MCU la rapidez (módulo de la velocidad) es constante, pero la DIRECCIÓN del vector velocidad cambia continuamente. Por ello existe aceleración centrípeta: $a_c = \\frac{v^2}{R} = \\frac{10^2}{5} = 20\\text{ m/s}^2$.",
    "hintBody": "La velocidad es un vector: aunque su módulo no cambie, ¿qué ocurre con su dirección en una trayectoria circular?"
  }
];

let activeErrorCases = [...DEFAULT_ERROR_CASES];
let currentErrorIdx = 0;

async function initErrorHunt() {
  const card = document.getElementById("error-hunt-card");
  if (!card) return;

  try {
    const res = await fetch("data/errores.json");
    if (res.ok) {
      const jsonErrors = await res.json();
      if (Array.isArray(jsonErrors) && jsonErrors.length > 0) {
        activeErrorCases = jsonErrors;
      }
    }
  } catch (e) {
    console.warn("Usando caso por defecto de caza-errores:", e);
  }

  if (!Array.isArray(activeErrorCases) || activeErrorCases.length === 0) activeErrorCases = EMBEDDED_FALLBACK.errores;
  currentErrorIdx = getDailyIndex(activeErrorCases.length, 7);
  const errDailyBadge = document.getElementById("error-daily-badge");
  if (errDailyBadge) errDailyBadge.textContent = getFormattedToday();
  renderErrorHuntCard();
}

function renderErrorHuntCard() {
  const card = document.getElementById("error-hunt-card");
  if (!card) return;

  const item = activeErrorCases[currentErrorIdx];
  card.innerHTML = `
    <div class="pb-3 border-b border-obsidian-800 flex items-center justify-between gap-2">
      <div>
        <span class="font-mono text-xs text-silver-400">${item.tag}</span>
        <p class="text-sm text-silver-200 mt-1">${item.statement}</p>
      </div>
      <span class="font-mono text-[11px] text-silver-400 shrink-0">CASO DEL DÍA</span>
    </div>

    <div id="error-hunt-lines" class="space-y-2.5">
      ${item.lines.map(l => `
        <button data-line="${l.num}" type="button" class="error-line w-full text-left p-3 rounded-xl border border-obsidian-700 bg-obsidian-950/60 hover:border-silver-400 transition flex items-start gap-3">
          <span class="font-mono text-xs text-silver-500 mt-0.5">L${l.num}</span>
          <span class="text-sm text-silver-200">${l.text}</span>
        </button>
      `).join("")}
    </div>

    <div id="error-hunt-feedback" class="hidden rounded-xl p-4 text-sm border"></div>
  `;

  renderMath(card);

  const lines = card.querySelectorAll(".error-line");
  const feedback = document.getElementById("error-hunt-feedback");

  lines.forEach(lineBtn => {
    lineBtn.addEventListener("click", () => {
      const lineNum = parseInt(lineBtn.getAttribute("data-line"), 10);
      lines.forEach(b => {
        b.classList.remove("border-emerald-500", "bg-emerald-950/25", "border-rose-500", "bg-rose-950/25");
      });

      feedback.classList.remove("hidden");

      if (lineNum === item.errorLine) {
        lineBtn.classList.add("border-emerald-500", "bg-emerald-950/25");
        feedback.className = "rounded-xl p-4 text-sm border border-emerald-500/40 bg-emerald-950/25 text-emerald-100 leading-relaxed";
        feedback.innerHTML = `
          <p class="font-bold text-emerald-300 mb-1">${item.successTitle}</p>
          <p>${item.successBody}</p>
        `;
      } else {
        lineBtn.classList.add("border-rose-500", "bg-rose-950/25");
        feedback.className = "rounded-xl p-4 text-sm border border-rose-500/40 bg-rose-950/25 text-rose-100 leading-relaxed";
        feedback.innerHTML = `
          <p class="font-bold text-rose-300 mb-1">✕ Esa línea es válida. Revisa el razonamiento.</p>
          <p>Pista: ${item.hintBody}</p>
        `;
      }
      renderMath(feedback);
    });
  });
}

// ==========================================
// MÓDULO: MURO DE DUDAS RESUELTAS
// ==========================================
async function initSolvedDoubts() {
  const container = document.getElementById("solved-doubts-list");
  if (!container) return;

  try {
    const res = await fetch("data/dudas.json");
    const doubts = await res.json();

    container.innerHTML = doubts.map(d => `
      <div class="rounded-2xl border border-obsidian-700 bg-obsidian-900 p-5 space-y-3">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="text-white font-semibold">${d.curso}</span>
          <span class="text-silver-500">${d.alumno}</span>
        </div>
        <p class="text-sm font-medium text-silver-200">"${d.pregunta}"</p>
        <div class="p-3.5 rounded-xl bg-obsidian-950 border border-obsidian-800 text-xs sm:text-sm text-silver-300 leading-relaxed">
          <span class="font-mono text-[11px] uppercase text-silver-400 block mb-1">Respuesta TioProject:</span>
          ${d.explicacion}
        </div>
      </div>
    `).join("");

    renderMath(container);
  } catch (err) {
    console.error("Error cargando dudas:", err);
  }
}
