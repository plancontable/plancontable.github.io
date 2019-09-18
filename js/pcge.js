const PCGE = [
  {
    code: '10',
    name: `EFECTIVO Y EQUIVALENTES DE EFECTIVO`,
    description: `Agrupa las subcuentas que representan medios de pago como dinero en efectivo,
      cheques, giros, transferencias electrónicas, entre otros, así como los depósitos en
      instituciones financieras, y otros equivalentes de efectivo disponibles a requerimiento
      del titular. Por su naturaleza corresponden a partidas del activo disponible; sin embargo,
      algunas de ellas podrían estar sujetas a restricción en su disposición o uso.`,
    subAccounts: [
      {
        code: '101',
        name: 'Caja',
        description: `Efectivo en caja`
      },
      {
        code: '102',
        name: 'Fondos fijos',
        description: `Efectivo establecido en un monto fijo o determinado.`
      },
      {
        code: '103',
        name: 'Efectivo en tránsito',
        description: `Fondos en movimiento entre los distintos establecimientos de la entidad, así como los que se encuentren en poder de las entidades transportadoras de caudales. Incluye los cheques girados no entregados a los beneficiarios.`
      },
    ],
    recognitionAndMeasurement: [
      `Las transacciones se reconocen al valor nominal. Los saldos de moneda extranjera se
        expresarán en moneda nacional al tipo de cambio al que se liquidarían las transacciones
        a la fecha de los estados financieros que se preparan.`,
    ],
    debited: [
      'Las entradas de efectivo a caja y por reembolsos de fondos fijos.',
      'Los depósitos de cheques en instituciones financieras, las entradas de efectivo por medios electrónicos y otras formas de ingreso de efectivo.',
      'La diferencia de cambio, si se incrementa el tipo de cambio de la moneda extranjera.',
      'Las notas de abono emitidas por instituciones financieras.'
    ],
    accredited: [
      'Las salidas de efectivo por pagos a través de caja de fondos fijos.',
      'Los pagos por medio de cheques, medios electrónicos u otras formas de transferencia de efectivo.',
      'La diferencia de cambio, si disminuye el tipo de cambio de la moneda extranjera.',
      'Las notas de cargo emitidas por instituciones financieras.'
    ],
    comments: [
      'Los fondos fijos son montos de cuantía determinada, y son reembolsados para mantener el saldo autorizado, mientras que los saldos en caja son variables',
      'Para propósitos del estado de flujos de efectivo, los saldos de efectivo y equivalentes de efectivo, contienen el saldo de esta cuenta, excepto los fondos sujetos a restricción, pero sin limitarse necesariamente a esta cuenta. Los equivalentes de efectivo también pueden encontrar contenidos en la cuenta 11 Inversiones financieras.',
      'Los cheques girados no entregados a los beneficiarios no dan lugar a la cancelación del pasivo correspondiente hasta su entrega.'
    ]
  },
  {
    code: '11',
    name: 'INVERSIONES FINANCIERAS',
    description: `Incluye inversiones en instrumentos financieros clasificados de acuerdo con un modelo
      de negocio dirigido a la venta de los instrumentos y a la obtención de los flujos de
      efectivo contractuales mientras dure su tenencia. También incluye otras inversiones
      financieras distintas de las mantenidas para negociación, como los instrumentos
      patrimoniales. Las inversiones en instrumentos financieros cuyo modelo de negocio
      responde a la obtención de los flujos de efectivo contractuales y no a su venta, se
      registran en la cuenta 30. Además, esta cuenta contiene los instrumentos financieros
      primarios acordados para su compra futura, cuando son reconocidos en la fecha de
      contratación del instrumento. `,
    subAccounts: [
      {
        code: '111',
        name: 'Inversiones mantenidas para negociación',
        description: `Corresponde a las que se
          adquieren con el objetivo de venderlas en el futuro cercano, y de obtener los
          flujos de efectivo contractuales exclusivamente sobre pagos del principal e
          intereses, en fechas específicas, hasta su venta. Los cambios en el valor
          razonable se reconocen en el otro resultado integral (NIIF 9, 4.1.2A) – cuenta 56
          en el patrimonio para efectos de reconocimiento-, o en el resultado del período,
          cuando así se elimina una incongruencia de medición o reconocimiento (NIIF 9,
          4.1.5).`
      },
      {
        code: '112',
        name: 'Otras inversiones financieras',
        description: `Acumula los instrumentos financieros no
          derivados distintos de las inversiones mantenidas para negociación y de las
          mantenidas hasta el vencimiento, tales como inversiones en instrumentos
          patrimoniales. Los cambios en el valor razonable de los instrumentos
          patrimoniales se reconocen en resultados, o en el otro resultado integral - cuenta
          56 del patrimonio – cuando la elección se efectúa en el reconocimiento inicial
          (NIIF 9, 4.1.4).`
      },
      {
        code: '113',
        name: 'Activos financieros – Acuerdo de compra',
        description: `Incluye los activos financieros para
          los que existe un acuerdo de compra que se liquidará en el futuro, cuando se
          reconocen en la fecha de contratación.`
      },
    ],
    recognitionAndMeasurement: [
      `Las inversiones mantenidas para negociación y otras inversiones financieras, y las
        transacciones relacionadas con compromisos de compra, se reconocen inicialmente al
        valor razonable generalmente igual al costo de adquisición.`,
      `Con posterioridad a su reconocimiento inicial, las inversiones se medirán al costo
        amortizado, si el modelo de negocio es el de obtener los flujos de efectivo contractuales
        y no vender, o al valor razonable, con cambios en el patrimonio neto – otro resultado
        integral–, cuando adicionalmente a la obtención de los flujos contractuales se espera
        realizar el instrumento mediante su venta. Para los instrumentos de patrimonio puede
        optarse desde su reconocimiento inicial, por su medición al valor razonable con cambios
        en el patrimonio neto (NIIF 9, párrafo 4.1.4). El valor razonable se determina de acuerdo
        con la NIIF 13.`,
      `Cuando se trata de inversiones mantenidas para negociación, la pérdida o ganancia
        resultante se reconocerá en la subcuenta 563 y en el caso de las otras inversiones
        financieras en la subcuenta 564, hasta el vencimiento del instrumento si lo hubiera, o
        hasta su venta, en que los saldos de esas subcuentas se reconocen en los resultados
        del periodo, cuentas 677 y 777. En el caso de los cambios por medición a valor
        razonable de los activos financieros incorporados en la subcuenta 113, el
        reconocimiento se efectúa de manera consistente con el tipo de instrumento de pasivo.`,
      `Se debe reconocer la inversión en instrumentos financieros bajo acuerdo de compra
        según (NIIF 9, B3.1.3 y siguientes):`,
      `- La fecha de contratación, que es la fecha en la que se compromete a comprar o
        vender un activo; o,`,
      `- La fecha de liquidación, que es aquella en la que se termina la transacción.`,
      `Cuando el reconocimiento es en la fecha de liquidación, no se utiliza la subcuenta 113,
        sino las cuentas de orden 02 y 07.`,
      `NIIF PYMES: Se miden al costo amortizado todas las inversiones financieras, excepto aquellas que
        corresponden a inversiones en acciones preferentes no convertibles, y en acciones
        ordinarias o preferentes sin opción de venta que cotizan en bolsa o cuyo valor razonable
        puede medirse confiablemente sin costo desproporcionado (Sección 11.4)`,
    ],
    debited: [
      'El costo de adquisición de las inversiones.',
      'Los dividendos en acciones.',
      'La diferencia de cambo si se incrementa el tipo de cambio.',
      'El incremento del valor por la aplicación del valor razonable.',
    ],
    accredited: [
      'El costo y los cambios por medición a valor razonable de las inversiones vendidas o redimidas.',
      'La diferencia de cambio si disminuye el tipo de cambio.',
      'La reducción de valor por la aplicación del valor razonable.',
    ],
    comments: [
      'Las inversiones mantenidas para negociación y las otras inversiones financieras cuyo valor esté expresado en moneda extranjera se traducirán al tipo de cambio al que se liquidarían las transacciones a la fecha de los estados financieros.',
      'Para las inversiones a ser mantenidas hasta el vencimiento, véase la cuenta 30 Inversiones mobiliarias.'
    ]
  },
  {
    code: '12',
    name: 'CUENTAS POR COBRAR COMERCIALES – TERCEROS',
    description: `Agrupa las subcuentas que representan los derechos de cobro a terceros que se derivan
      de las ventas de bienes y/o servicios que realiza la entidad en razón de su objeto de
      negocio.`,
    subAccounts: [
      {
        code: '121',
        name: 'Facturas, boletas y otros comprobantes por cobrar',
        description: `Créditos otorgados por
          venta de bienes o prestación de servicios. En caso no se haya emitido el
          documento, pero sí devengado el ingreso y la cuenta por cobrar correspondiente,
          se debe registrar el derecho exigible en esta subcuenta.`
      },
      {
        code: '122',
        name: 'Anticipos de clientes',
        description: `Montos anticipados por clientes a cuenta de ventas
          posteriores. Es de naturaleza acreedora.`
      },
      {
        code: '123',
        name: 'Letras por cobrar',
        description: `Créditos que se formalizan con letras aceptadas en canje de
          facturas, boletas u otros comprobantes por cobrar.`
      },
    ],
    recognitionAndMeasurement: [
      `Las cuentas por cobrar se reconocerán inicialmente a su valor razonable, que es
        generalmente igual al costo. Después de su reconocimiento inicial se medirán al costo
        amortizado.`,
      `Cuando exista evidencia de deterioro de la cuenta por cobrar, el importe de esa cuenta
        se reducirá mediante una cuenta de valuación (estimación de cobranza dudosa), para
        efectos de su presentación en estados financieros.`,
      `Las cuentas por cobrar en moneda extranjera pendientes de cobro a la fecha de los
        estados financieros, se expresarán al tipo de cambio aplicable a las transacciones a
        dicha fecha.`,
    ],
    debited: [
      'Los derechos de cobro a que dan lugar la venta de bienes o la prestación de servicios.',
      'El traslado entre cuentas internas, como es el caso del canje de facturas con letras, o el cambio de condición de letras emitidas, a cobranza o descuento.',
      'La disminución o aplicación de los anticipos recibidos.',
      'La diferencia de cambio, si se incrementa el tipo de cambio de la moneda extranjera.',
    ],
    accredited: [
      'El cobro parcial o total de los derechos.',
      'El traslado entre cuentas internas, como es el caso del canje de facturas con letras, o el cambio de condición de letras emitidas a cobranza o descuento.',
      'Los anticipos recibidos por ventas futuras.',
      'La disminución del derecho de cobro por las devoluciones de mercaderías o ajustes de precios en el caso de bienes o servicios.',
      'Los descuentos, bonificaciones y rebajas concedidas, posteriores a la venta.',
      'La eliminación (castigo o baja en cuenta) de la contabilidad de las cuentas y documentos considerados incobrables.',
      'La diferencia de cambio, si disminuye el tipo de cambio de la moneda extranjera.',
    ],
    comments: [
      'Los saldos que resulten acreedores deben ser presentados como parte del pasivo.',
      'La subcuenta 191 Cuentas por cobrar comerciales – Terceros acumula la estimación de los saldos de cobranza dudosa, actuando como cuenta de valuación para los componentes de esta cuenta.',
      'Para efectos de presentación, los saldos de esta cuenta deberán clasificarse como corrientes si vencen hasta un año después de la fecha del estado de situación financiera y no corrientes si exceden de dicho plazo.',
    ]
  },
  {
    code: '13',
    name: 'CUENTAS POR COBRAR COMERCIALES – RELACIONADAS',
    description: `Agrupa las subcuentas que representan los derechos de cobro a entidades
      relacionadas, que se derivan de las ventas de bienes y/o servicios que realiza la entidad
      en razón de su actividad económica.`,
    subAccounts: [
      {
        code: '131',
        name: 'Facturas, boletas y otros comprobantes por cobrar',
        description: `Créditos otorgados por venta de bienes o prestación de servicios. En caso no se haya emitido el documento pero se haya devengado el ingreso y la cuenta por cobrar, se debe registrar el derecho exigible en esta cuenta.`
      },
      {
        code: '132',
        name: 'Anticipos recibidos',
        description: `Montos anticipados por clientes a cuenta de ventas posteriores. Es de naturaleza acreedora.`
      },
      {
        code: '133',
        name: 'Letras por cobrar',
        description: `Créditos que se formalizan con letras aceptadas en canje de facturas, boletas u otros comprobantes por pagar.`
      },
    ],
    recognitionAndMeasurement: [
      `Las cuentas por cobrar se reconocerán inicialmente a su valor razonable, que es
        generalmente igual al costo. Después de su reconocimiento inicial, las cuentas por
        cobrar se medirán al costo amortizado.`,
      `Cuando exista evidencia de deterioro de la cuenta por cobrar, el importe de esa cuenta
        se reducirá mediante una cuenta de valuación (estimación de cobranza dudosa), para
        efectos de su presentación en estados financieros. Las cuentas por cobrar en moneda
        extranjera, pendientes de cobro a la fecha de los estados financieros, se expresarán al
        tipo de cambio aplicable a las transacciones a dicha fecha.`,
    ],
    debited: [
      'Los derechos de cobro a que da lugar la venta de bienes o la prestación de servicios',
      'El traslado entre cuentas internas, como es el caso del canje de facturas con letras, o el cambio de condición de letras emitidas a cobranza o descuento.',
      'La disminución o aplicación de los anticipos recibidos.',
      'La diferencia de cambio, si se incrementa el tipo de cambio de la moneda extranjera.',
    ],
    accredited: [
      'El cobro parcial o total de los derechos.',
      'El traslado entre cuentas internas, como es el caso del canje de facturas con letras, o el cambio de condición de letras emitidas, a cobranza o descuento.',
      'Los anticipos recibidos por ventas futuras.',
      'La disminución de los derechos de cobro por las devoluciones de mercaderías.',
      'Los descuentos, bonificaciones y rebajas concedidas, posteriores a la venta.',
      'La eliminación (castigo o baja en cuenta) de la contabilidad de las cuentas y documentos considerados incobrables.',
      'La diferencia de cambio, si disminuye el tipo de cambio de la moneda extranjera',
    ],
    comments: [
      'Los saldos que resulten acreedores deben ser presentados como parte del pasivo.',
      'La subcuenta 192 Cuentas por cobrar comerciales – Relacionadas, acumula la estimación de los saldos de cobranza dudosa, actuando como cuenta de valuación para los componentes de esta cuenta.',
      'Para efectos de presentación, los saldos de esta cuenta deberán clasificarse como corrientes si vencen hasta un año después de la fecha del estado de situación financiera y no corrientes si exceden de dicho plazo.',
    ]
  },
  {
    code: '14',
    name: 'CUENTAS POR COBRAR AL PERSONAL, A LOS ACCIONISTAS (SOCIOS) Y DIRECTORES',
    description: `Agrupa las subcuentas que representan las sumas adeudadas por el personal,
      accionistas (o socios) y directores, diferentes de las cuentas por cobrar comerciales, así
      como las suscripciones de capital pendientes de pago.`,
    subAccounts: [
      {
        code: '141',
        name: 'Personal',
        description: `Cuentas por cobrar al personal por préstamos, adelantos o entregas a rendir cuenta, incluyendo al personal de gerencia.`
      },
      {
        code: '142',
        name: 'Accionistas (o socios)',
        description: `Cuentas por cobrar por acciones suscritas y no pagadas, o préstamos que se les haya otorgado.`
      },
      {
        code: '143',
        name: 'Directores',
        description: `Cuentas por cobrar por préstamos, adelanto de dietas, o entregas a rendir cuenta.`
      },
      {
        code: '149',
        name: 'Diversas',
        description: `Cualquier otra cuenta por cobrar no señalada en las divisionarias anteriores.`
      },
    ],
    recognitionAndMeasurement: [
      `Las cuentas por cobrar se reconocerán inicialmente a su valor razonable, que es
        generalmente igual al costo. Después de su reconocimiento inicial se medirán al costo
        amortizado.`,
      `Cuando exista evidencia de deterioro de la cuenta por cobrar, el importe se reducirá
        mediante una cuenta de valuación para efectos de su presentación en estados
        financieros`,
      `Las cuentas en moneda extranjera pendientes de cobro a la fecha de los estados
        financieros, se expresarán al tipo de cambio aplicable a las transacciones a dicha fecha.`,
    ],
    debited: [
      'Los préstamos al personal, directores y accionistas.',
      'Los aportes pendientes de cobro en la suscripción de acciones.',
      'La diferencia de cambio en caso se incremente el tipo de cambio.',
    ],
    accredited: [
      'Los pagos recibidos del personal, directores y accionistas.',
      'La diferencia de cambio si disminuye el tipo de cambio.',
    ],
    comments: [
      'El saldo correspondiente a suscripciones por cobrar a socios o accionistas, se presentará en el balance general, deduciéndolo de la cuenta 52 Capital adicional.',
      'La subcuenta 193 Cuentas por cobrar al personal, a los accionistas (socios), y directores, acumula la estimación de los saldos de cobranza dudosa, actuando como cuenta de valuación para los componentes de esta cuenta.',
      'Para efectos de presentación, los saldos de esta cuenta deberán clasificarse como corrientes si vencen hasta un año después de la fecha del estado de situación financiera, y no corrientes si exceden de dicho plazo.',
    ]
  },
  {
    code: '16',
    name: 'CUENTAS POR COBRAR DIVERSAS – TERCEROS',
    description: `Agrupa las subcuentas que representan derechos de cobro a terceros por transacciones distintas a las del objeto del negocio.`,
    subAccounts: [
      {
        code: '161',
        name: 'Préstamos',
        description: `Comprende los créditos no comerciales entregados a terceros.`
      },
      {
        code: '162',
        name: 'Reclamaciones a terceros',
        description: `Incluye los efectos de las transacciones
          relacionadas con reclamos de actividades comerciales y no comerciales, tales
          como compensaciones por bienes o seguros por siniestros, tributos, entre otros.`
      },
      {
        code: '163',
        name: 'Intereses, regalías y dividendos',
        description: `Incluye los derechos de cobro por intereses
          y regalías devengados, y por dividendos en efectivo declarados por las entidades
          donde se mantiene inversiones.`
      },
      {
        code: '164',
        name: 'Depósitos otorgados en garantía',
        description: `Comprende los montos entregados en
          garantía, tales como depósitos por arrendamiento de bienes muebles e
          inmuebles, depósitos por cartas fianza u otras garantías entregadas.`
      },
      {
        code: '165',
        name: 'Venta de activo inmovilizado',
        description: `Derechos de cobro por venta de inversión
          mobiliaria; propiedades de inversión; propiedad, planta y equipo ; y otros activos
          de largo plazo.`
      },
      {
        code: '166',
        name: 'Activos por instrumentos financieros',
        description: `Incluye los efectos favorables
          relacionados con la medición a valor razonable de los instrumentos financieros
          primarios cuando se adquieren en una compra no convencional y se elige para
          su reconocimiento la fecha de liquidación, así como los efectos favorables en el
          caso de los instrumentos financieros derivados, tales como contratos a plazo,
          intercambios, entre otros.`
      },
      {
        code: '167',
        name: 'Tributos por acreditar',
        description: `Comprende la acumulación de pagos a cuenta por
          impuesto a la renta e ITAN, el IGV por acreditar en compras y no domiciliados,
          así como el impuesto a la renta por aplicar en obras por impuestos mientras se
          desarrolla la obra y hasta la obtención del certificado correspondiente.`
      },
      {
        code: '169',
        name: 'Otras cuentas por cobrar diversas',
        description: `Incluye las entregas a rendir cuenta
          efectuadas a terceros y cualquier cuenta por cobrar no incluida en las
          subcuentas anteriores`
      },
    ],
    recognitionAndMeasurement: [
      `Las cuentas por cobrar se reconocerán por el valor razonable de la transacción,
        generalmente igual al costo. Después de su reconocimiento inicial se medirán al costo
        amortizado, excepto por los activos por instrumentos financieros que, se miden a su
        valor razonable; cuando esta medición es impracticable, tales activos se medirán al
        costo amortizado.`,
      `Cuando exista evidencia de deterioro de la cuenta por cobrar medida al costo
        amortizado, el importe de esa cuenta se reducirá mediante una cuenta de valuación,
        para efectos de su presentación en estados financieros (estimación de cobranza
        dudosa).`,
      `Las cuentas en moneda extranjera pendientes de cobro a la fecha de los estados
        financieros, se expresarán al tipo de cambio aplicable a las transacciones a dicha fecha.`,
    ],
    debited: [
      'Los préstamos otorgados.',
      'Las reclamaciones',
      'Los intereses, las regalías y los dividendos por cobrar.',
      'Los depósitos otorgados en garantía.',
      'La venta de activo inmovilizado.',
      'Los efectos favorables en la medición al valor razonable de los activos por instrumentos financieros.',
      'El reconocimiento del IGV no acreditado en compras y el que corresponde pagar por los servicios de sujetos no domiciliados para fines del impuesto a la renta.',
      'La acumulación de los montos ejecutados en obras por impuestos.',
      'La diferencia de cambio, cuando el tipo de cambio se incrementa.',
    ],
    accredited: [
      'Las cobranzas efectuadas',
      'La eliminación (castigo) de las cuentas por cobrar diversas de las deudas incobrables.',
      'La disminución de los efectos favorables en la medición al valor razonable de los activos por instrumentos financieros.',
      'La compensación del IGV pagado en compras y el pagado por cuenta de no domiciliados.',
      'La obtención del certificado de obras por impuestos, el que se acumula en la subcuenta 105.',
      'La diferencia de cambio, cuando disminuye el tipo de cambio.',
    ],
    comments: [
      `La subcuenta Intereses, regalías y dividendos, registra los intereses sobre la base de
        tiempo, las regalías en concordancia con los términos del contrato que les dio origen,
        y los dividendos en la fecha que es reconocido el derecho del accionista a recibir el
        pago, respectivamente.`,
      `La subcuenta 194 Cuentas por cobrar diversas – Terceros, acumula la estimación de
        los saldos de cobranza dudosa, actuando como cuenta de valuación para los
        componentes de esta cuenta.`,
      `Los pagos a cuenta del impuesto a la renta y del ITAN se aplican contra el impuesto
        calculado reconocido en la sub divisionaria 40171. El IGV por acreditar en compras
        se traslada a la 4011 cuando se compensa, y el IGV no domiciliados corresponde al
        que se debe pagar por cuenta del sujeto no domiciliado en la recepción de servicios,
        el que luego es acreditado en la sub divisionaria 40111.`,
      `Para efectos de presentación, los saldos de esta cuenta deberán clasificarse como
        corrientes si vencen hasta un año después de la fecha del estado de situación
        financiera y no corrientes si exceden de dicho plazo.`,
    ]
  },
  {
    code: '17',
    name: 'CUENTAS POR COBRAR DIVERSAS – RELACIONADAS',
    description: `Agrupa las subcuentas que representan derechos de cobro a entidades relacionadas por transacciones distintas a las de ventas en razón de su actividad principal.`,
    subAccounts: [
      {
        code: '171',
        name: 'Préstamos',
        description: `Comprende los créditos no comerciales.`
      },
      {
        code: '173',
        name: 'Intereses, regalías y dividendos',
        description: `Incluye los derechos de cobro por intereses y regalías devengados, y por dividendos en efectivo declarados.`
      },
      {
        code: '174',
        name: 'Depósitos otorgados en garantía',
        description: `Comprende los montos entregados en
          garantía, tales como depósitos por arrendamiento de bienes muebles e
          inmuebles, depósitos por cartas fianza u otras garantías entregadas.`
      },
      {
        code: '175',
        name: 'Venta de activo inmovilizado',
        description: `Derechos de cobro por venta de inversión
          mobiliaria; propiedades de inversión; propiedad, planta y equipo; y otros activos
          a largo plazo.`
      },
      {
        code: '176',
        name: 'Activos por instrumentos financieros',
        description: `Incluye los efectos favorables
          relacionados con la medición a valor razonable de los instrumentos financieros
          primarios cuando se adquieren en una compra no convencional y se elige para
          su reconocimiento la fecha de liquidación, así como los efectos favorables en el
          caso de los instrumentos financieros derivados, tales como contratos a plazo,
          intercambios, entre otros.`
      },
      {
        code: '178',
        name: 'Otras cuentas por cobrar diversas',
        description: `Incluye las entregas a rendir cuenta y
          cualquier cuenta por cobrar no incluida en las subcuentas anteriores.`
      },
    ],
    recognitionAndMeasurement: [
      `Las cuentas por cobrar se reconocerán por el valor razonable de la transacción,
        generalmente igual al costo. Después de su reconocimiento inicial se medirán al costo
        amortizado, excepto por los activos por instrumentos financieros, que se miden a su
        valor razonable; cuando esta medición es impracticable, tales activos se medirán al
        costo amortizado.`,
      `Cuando exista evidencia de deterioro de la cuenta por cobrar medida al costo
        amortizado, el importe de esa cuenta se reducirá mediante una cuenta de valuación,
        para efectos de su presentación en estados financieros (estimación de cobranza dudosa
        – cuenta 19).`,
      `Las cuentas en moneda extranjera pendientes de cobro a la fecha de los estados
        financieros, se expresarán al tipo de cambio aplicable a las transacciones a dicha fecha`,
    ],
    debited: [
      'Los préstamos otorgados.',
      'Los intereses, regalías y los dividendos por cobrar.',
      'Los efectos favorables en la medición al valor razonable de los activos por instrumentos financieros.',
      'Los depósitos otorgados en garantía.',
      'La venta de activo inmovilizado.',
      'La diferencia de cambio si el tipo de cambio se incrementa.',
    ],
    accredited: [
      'Las cobranzas efectuadas.',
      'La eliminación (castigo o baja en cuentas) de las cuentas por cobrar diversas de las deudas incobrables.',
      'La disminución de los efectos favorables en la medición al valor razonable de los activos por instrumentos financieros.',
      'La diferencia de cambio si disminuye el tipo de cambio.',
    ],
    comments: [
      `La subcuenta Intereses, regalías y dividendos, registra los intereses sobre la base de
        tiempo; las regalías en concordancia con los términos del contrato que les dio origen;
        y los dividendos en la fecha que es reconocido el derecho del accionista a recibir el
        pago, respectivamente.`,
      `La subcuenta 195 Cuentas por cobrar diversas - Relacionadas, acumula la estimación
        de los saldos de cobranza dudosa, actuando como cuenta de valuación para los
        componentes de esta cuenta`,
      `Para efectos de presentación, los saldos de esta cuenta deberán clasificarse como
        corrientes si vencen hasta un año después de la fecha del estado de situación
        financiera y no corrientes si exceden de dicho plazo.`,
    ]
  },
  {
    code: 'x',
    name: '',
    description: ``,
    subAccounts: [
      {
        code: '',
        name: '',
        description: ``
      },
    ],
    recognitionAndMeasurement: [
      ``,
    ],
    debited: [
      '',
    ],
    accredited: [
      '',
    ],
    comments: [
      ``,
    ]
  },
]
