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
        description: `Efectivo en caja.`
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
      {
        code: '104',
        name: 'Cuentas corrientes en instituciones financieras',
        description: `Saldos de efectivo de la
          entidad en cuentas corrientes de disponibilidad inmediata. Las cuentas
          corrientes son de naturaleza operativa general o para fines específicos, como
          los depósitos en fideicomisos o cuentas específicas para el pago de
          detracciones.`
      },
      {
        code: '105',
        name: 'Otros equivalentes de efectivo',
        description: `Incluye instrumentos financieros equivalentes
          de efectivo, emitidos por instituciones financieras, y de naturaleza disponible a
          requerimiento del tenedor del instrumento. Los certificados de obras por
          impuestos se reconocen en esta cuenta.`
      },
      {
        code: '106',
        name: 'Depósitos en instituciones financieras',
        description: `Depósitos en ahorros y a plazo
          determinado, así como los intereses capitalizados.`
      },
      {
        code: '107',
        name: 'Fondos sujetos a restricción',
        description: `Efectivo que no puede utilizarse libremente, ya
          sea por corresponder a fondos en garantía, por disposición de alguna autoridad
          competente, o por mandato judicial.`
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
      'Los fondos fijos son montos de cuantía determinada, y son reembolsados para mantener el saldo autorizado, mientras que los saldos en caja son variables.',
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
      contratación del instrumento.`,
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
      'Los derechos de cobro a que da lugar la venta de bienes o la prestación de servicios.',
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
      'La diferencia de cambio, si disminuye el tipo de cambio de la moneda extranjera.',
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
        financieros.`,
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
          subcuentas anteriores.`
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
        financieros, se expresarán al tipo de cambio aplicable a las transacciones a dicha fecha.`,
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
        componentes de esta cuenta.`,
      `Para efectos de presentación, los saldos de esta cuenta deberán clasificarse como
        corrientes si vencen hasta un año después de la fecha del estado de situación
        financiera y no corrientes si exceden de dicho plazo.`,
    ]
  },
  {
    code: '18',
    name: 'SERVICIOS Y OTROS CONTRATADOS POR ANTICIPADO',
    description: `Agrupa las subcuentas que representan los servicios contratados a recibir en el futuro,
      o que habiendo sido recibidos, incluyen beneficios que se extienden más allá de un
      periodo económico, así como las primas pagadas por opciones financieras.`,
    subAccounts: [
      {
        code: '181',
        name: 'Costos financieros',
        description: `Incluye los costos financieros descontados por anticipado
          por los acreedores, en financiamientos recibidos. Los costos financieros incluyen
          intereses, comisiones, y cualquier otro costo en el que se incurre relacionado
          con el financiamiento recibido.`
      },
      {
        code: '182',
        name: 'Seguros',
        description: `Comprende el monto contratado con las compañías aseguradoras por
          las primas de seguros y otros costos marginales, por coberturas a recibir en el
          futuro.`
      },
      {
        code: '183',
        name: 'Alquileres',
        description: `Comprende el alquiler de bienes muebles e inmuebles, cuya
          utilización se efectuará en el futuro, no clasificados como activos por derechos
          de uso los que se reconocen en la cuenta 32.`
      },
      {
        code: '184',
        name: 'Primas pagadas por opciones',
        description: `Corresponde al pago de primas en opciones de
          compra o venta futuras.`
      },
      {
        code: '185',
        name: 'Mantenimiento de activos inmovilizados',
        description: `Incluye todos los gastos de
          mantenimiento cuyo beneficio excede un período y que no reúnen las
          condiciones para ser incorporados en el valor del activo inmovilizado objeto de
          mantenimiento.`
      },
      {
        code: '189',
        name: 'Otros gastos contratados por anticipado',
        description: `Se contabilizará cualquier servicio
          a ser devengado luego de la fecha de los estados financieros, cuyo registro no
          corresponde incluirse en las subcuentas anteriores.`
      },
    ],
    recognitionAndMeasurement: [
      `Estas transacciones se registran al costo menos el consumo de los beneficios
        económicos incorporados, excepto en el caso de las primas pagadas por opciones, que
        se miden al valor razonable con cambios en los resultados del período.`,
    ],
    debited: [
      'Los intereses descontados por anticipado en operación de financiamiento recibido.',
      'Los montos por servicios contratados asociados a beneficios económicos futuros.',
      'Incremento en la medición a valor razonable de las primas pagadas.',
    ],
    accredited: [
      'Devengo de intereses.',
      'Consumo de los servicios contratados.',
      'Liquidación de las opciones contratadas o disminución por medición al valor razonable.',
    ],
    comments: [
      `Las primas pagadas por opciones reconocidas en la subcuenta 184, corresponden a
        los derechos pagados comprometidos, al contratar una opción de compra o venta.`,
      `Las variaciones en el valor razonable del bien objeto de la opción subyacente se
        reconocen en las subcuentas 166 y 464, según las variaciones representen resultados
        favorables o desfavorables, respectivamente.`,
      `La subcuenta 185 Mantenimiento de activos inmovilizados revierte incrementando la
        subcuenta 634 Mantenimiento y reparaciones, cuando se devenga.`,
    ]
  },
  {
    code: '19',
    name: 'ESTIMACIÓN DE CUENTAS DE COBRANZA DUDOSA',
    description: `Agrupa las subcuentas que acumulan las estimaciones por deterioro de las cuentas por
      cobrar.`,
    subAccounts: [
      {
        code: '191',
        name: 'Cuentas por cobrar comerciales – Terceros',
        description: `Incorpora la estimación de cobro
          dudoso de las cuentas por cobrar a clientes.`
      },
      {
        code: '192',
        name: 'Cuentas por cobrar comerciales – Relacionadas',
        description: `Comprende la estimación
          de cobro dudoso de las compañías relacionadas en transacciones comerciales.`
      },
      {
        code: '193',
        name: 'Cuentas por cobrar al personal, a los accionistas (socios) y directores',
        description: `Incluye la estimación de cobro dudoso de las cuentas por cobrar al personal,
          accionistas y directores.`
      },
      {
        code: '194',
        name: 'Cuentas por cobrar diversas – Terceros',
        description: `Comprende la estimación de cobro
          dudoso de las cuentas por cobrar diversas con terceros.`
      },
      {
        code: '195',
        name: 'Cuentas por cobrar diversas – Relacionadas',
        description: `Comprende la estimación de
          cobro dudoso de las cuentas por cobrar diversas a relacionadas.`
      },
    ],
    recognitionAndMeasurement: [
      `Se reconoce la estimación de cobranza dudosa (NIIF 9, párrafo 5.5), discriminándola
        por la naturaleza de la cuenta por cobrar, y paralelamente la cuenta de gasto
        correspondiente – divisionaria 6841.`,
      `Las cuentas en moneda extranjera a la fecha de los estados financieros se expresarán
        al tipo de cambio aplicable a las cuentas por cobrar relacionadas.`,
    ],
    debited: [
      'La recuperación total o parcial de los derechos de cobro.',
      'La eliminación (castigo o baja en cuentas) de las cuentas cuya incobrabilidad se confirma.',
      'La diferencia de cambio para igualar la estimación de cobranza dudosa a la cuenta por cobrar relacionada.',
    ],
    accredited: [
      'El deterioro estimado según evaluación.',
      'La diferencia de cambio para igualar la estimación de cobranza dudosa a la cuenta por cobrar relacionada',
    ],
    comments: [
      `Aquellas cuentas, cuya estimación de incobrabilidad se confirma, son retiradas de la
        contabilidad, eliminando las cuentas que acumulan el derecho de cobro y aquellas de
        valuación que acumulan la estimación de incobrabilidad.`,
      `Esta cuenta se relaciona directamente con las cuentas 12, 13, 14, 16 y 17.`,
    ]
  },
  {
    code: '20',
    name: 'MERCADERÍAS',
    description: `Agrupa las subcuentas que representan los bienes adquiridos por la entidad para ser
      destinados a la venta, sin someterlos a proceso de transformación.`,
    subAccounts: [
      {
        code: '201',
        name: 'Mercaderías',
        description: `Productos adquiridos, ya elaborados y listos para su venta. Se
          distinguen los componentes de costo y de valor razonable (NIC 2, párrafo 3).`
      },
    ],
    recognitionAndMeasurement: [
      `Las mercaderías se registrarán a su costo de adquisición, incluyendo todos los costos
        necesarios para que las mercaderías tengan su condición y ubicación actuales.
        Las salidas de existencias de mercaderías se reconocen de acuerdo con las fórmulas
        de costeo: PEPS, promedio ponderado o costo identificado.`,
      `Para los efectos de la medición al cierre del período, se aplica la regla de valuación de
        costo de adquisición o valor neto de realización, el menor. La excepción a esta regla
        corresponde a los productos agrícolas y forestales en la oportunidad de su cosecha o
        recolección, y a las materias primas que los intermediarios miden de acuerdo con su
        cotización internacional; mercaderías en ambos casos, que se miden a su valor
        razonable.`,
      `El valor neto de realización es el precio de venta menos los costos de terminación y
        ventas asociados.`,
    ],
    debited: [
      'El costo de las mercaderías adquiridas con abono a la subcuenta 611 – Variación de inventarios - Mercaderías.',
      'El costo de las mercaderías devueltas por los clientes, con abono a la subcuenta 691 - Costo de ventas - Mercaderías.',
      'El incremento de valor de las mercaderías que se miden al valor razonable.',
      'Los sobrantes de mercaderías.',
    ],
    accredited: [
      'El costo de las mercaderías vendidas, con cargo a la subcuenta 691 – Costo de ventas – Mercaderías.',
      'El costo de las mercaderías devueltas a proveedores con cargo a la subcuenta 611 – Variación de inventarios – Mercaderías.',
      'La disminución de valor de las mercaderías que se miden al valor razonable.',
      'Los faltantes de mercaderías, determinados por referencia a inventarios físicos.',
      'El castigo de mercaderías.',
    ],
    comments: [
      `Las mercaderías remitidas en consignación se deben considerar como existencias
        para el consignador, las que se controlarán en cuentas de orden deudoras.`,
      `En el caso de las mercaderías recibidas en consignación, depósitos, demostración o
        exhibición que pertenecen a terceros, no se deben incluir en este rubro, debiendo ser
        registradas en cuenta de orden 01.`,
      `El castigo de inventarios de mercaderías se reconoce eliminando el monto
        correspondiente de esta cuenta, conjuntamente con la subcuenta 291 que acumula
        las estimaciones de la desvalorización.`,
      `De existir mercaderías que se esperan realizar en un periodo mayor al corriente,
        deberán presentarse en el activo no corriente.`,
    ]
  },
  {
    code: '21',
    name: 'PRODUCTOS TERMINADOS',
    description: `Agrupa las subcuentas que representan los bienes fabricados o producidos por la
      entidad, destinados a la venta. Asimismo, se incluye el costo de los servicios prestados
      por la entidad, que se relacionan con ingresos que serán reconocidos en el futuro, y los
      costos de financiación incorporados al valor de los bienes.`,
    subAccounts: [
      {
        code: '211',
        name: 'Productos terminados',
        description: `Productos que resultan de procesos de fabricación.
          Pueden incorporar costos de adquisición y/o manufactura, costos de
          financiación, y ajustes por valor razonable como en el caso de productos con
          cotización internacional.`
      },
      {
        code: '215',
        name: 'Inventario de servicios terminados',
        description: `Se compone principalmente de la mano
          de obra y otros costos incurridos en la prestación del servicio concluido, cuando
          no se ha reconocido el ingreso asociado.`
      },
    ],
    recognitionAndMeasurement: [
      `El ingreso de productos terminados se mide al costo de fabricación y otros costos que
        fueran necesarios para tener los inventarios de productos terminados en su condición y
        ubicación actuales. Los costos indirectos fijos se distribuyen considerando la producción
        normal. La salida de productos terminados se reconoce de acuerdo con las fórmulas de
        costeo: PEPS, promedio ponderado, o costo identificado.`,
      `Cuando se produce conjuntamente más de un producto, y los costos de transformación
        no puedan identificarse por separado (por cada tipo de producto), se distribuye el costo
        total entre los productos, utilizando bases uniformes y racionales, como los valores de
        venta relativos.`,
      `Los costos de financiación son incorporados en el costo de los inventarios identificados
        como aptos (inventarios aptos), según se prescribe en la NIC 23. Con la venta del
        producto terminado, los costos de financiación se reconocen en la divisionaria 6923.`,
      `Los productos agrícolas cosechados corresponden a productos terminados y se miden
        a su valor razonable menos los costos estimados de venta en el punto de cosecha. Ese
        valor razonable no se actualiza hasta su venta (NIC 41).`,
      `NIIF PYMES: no se permite la capitalización de costos de financiación según lo dispone
        la sección 25.`,
    ],
    debited: [
      'El costo de producción de los productos para la venta.',
      'El costo de los productos devueltos por los clientes.',
      'El costo de los inventarios de servicios.',
      'La variación de productos terminados con abono a la subcuenta 711, al cierre del periodo.',
      'Costos de financiación, cuando la existencia corresponde a un activo apto.',
      'Los sobrantes de productos terminados.',
      'La transferencia de productos y servicios recibidos de productos en proceso.',
    ],
    accredited: [
      'El costo de los productos vendidos.',
      'El costo de los servicios prestados y vendidos.',
      'Los faltantes de productos terminados.',
      'El castigo de productos terminados.',
    ],
    comments: [
      `Los subproductos y desechos originados en los procesos de producción, en cuanto
        tengan valor de recuperación, se controlan en la cuenta 22.`,
      `Los inventarios de servicios terminados están relacionados con ingresos aún no
        reconocidos por la prestación de dichos servicios (NIIF 15, párrafos 91 a 98). El
        ingreso y el costo de la prestación del servicio se reconocen conjuntamente en los
        resultados del periodo en que se devenga el ingreso. Véase el comentario para NIIF
        PYMES al final de esta sección.`,
      `El castigo de inventarios de productos terminados se reconoce eliminando el monto
        correspondiente de la subcuenta, conjuntamente con la subcuenta 292 que acumula
        la estimación de desvalorización.`,
      `La acumulación por separado de los costos de producción, de aquellos que
        corresponden a financiación, en productos terminados, cuando resulte aplicable,
        permite mantener un registro de inventarios (kardex) valorizado solamente al costo.`,
      `Los componentes de costo y de valor razonable en los productos biológicos
        cosechados, deben distinguirse hasta su baja en cuentas dentro del costo de ventas.`,
      `La desvalorización de inventarios de productos terminados, en tanto contengan
        costos de financiación, para su adecuado tratamiento contable, plantea la
        consideración de si tal desvalorización alcanza al costo de manufactura invertido en
        el producto, o al costo de financiación relacionado, o a una distribución entre ambos
        componentes, para efectos de la presentación en los estados financieros. En tanto el
        costo del producto terminado es uno solo, la desvalorización afecta al total de esos
        inventarios mediante cuenta de valuación (cuenta 29), no siendo necesario distinguir
        el componente de valor desvalorizado. `,
      `El costo de los productos terminados corresponde al costeo por absorción, incluyendo
        los costos fijos y variables, y dentro de ellos, los directos y los indirectos.`,
      `Cuando el proceso de producción da lugar a la producción simultánea de más de un
        producto (productos conjuntos), el costo de producción puede ser a ellos distribuido
        sobre la base de los valores de venta normales o los volúmenes producidos, el que
        resulte más adecuado y racional.`,
      `NIIF PYMES: la prescripción para inventarios de servicios terminados se incluye en
        la sección 13.14.`,
    ]
  },
  {
    code: '22',
    name: 'SUBPRODUCTOS, DESECHOS Y DESPERDICIOS',
    description: `Agrupa las subcuentas que representan los productos accesorios obtenidos en la
      producción (subproductos) y los residuos de producción de toda naturaleza, originadas
      en los procesos productivos, cuando mantienen algún valor en su realización.`,
    subAccounts: [
      {
        code: '221',
        name: 'Subproductos',
        description: `Productos obtenidos accesoriamente en el proceso de
          producción. Resultan de la producción donde el subproducto tiene un valor
          reducido respecto del producto o de los productos principales.`
      },
      {
        code: '222',
        name: 'Desechos y desperdicios',
        description: `Materiales desechados por presentar defectos o
          residuos que resultan no utilizables en procesos de transformación.`
      },
    ],
    recognitionAndMeasurement: [
      `Los subproductos, desechos y desperdicios se registran generalmente al valor neto de
        realización, monto que es acreditado al costo de producción medido al costo.
        Periódicamente se compara con el valor neto de realización estimado vigente,
        manteniéndose en libros al menor valor a través de una cuenta de valuación. La salida
        de este tipo de existencias se mide utilizando las fórmulas de: PEPS, promedio
        ponderado, o costo identificado.`,
      `Cuando su costo puede ser medido confiablemente, sin incurrir en costos que superan
        el beneficio de esa medición confiable, se utiliza esa base de medición.`,
    ],
    debited: [
      'El costo o valor neto de realización de los subproductos, desechos y desperdicios, en la oportunidad de su reconocimiento inicial.',
      'La variación de subproductos, desechos y desperdicios con abono a la subcuenta 712, al cierre del periodo.',
      'Los sobrantes de este tipo de inventarios.',
    ],
    accredited: [
      'El valor en libros de los subproductos, desechos y desperdicios vendidos.',
      'Los faltantes de este tipo de inventarios.',
      'El castigo de este tipo de inventarios.',
    ],
    comments: [
      `Los desechos y desperdicios acumulados deben tener valor económico para su
        clasificación como activos en esta cuenta. De no ser así, el costo de los desechos y
        desperdicios debe ser absorbido por el costo de producción.`,
      `El monto con el que se incorporan todos estos inventarios, es acreditado al costo de
        producción que valoriza el proceso productivo en el cual se originan. El costo de
        producción puede ser acumulado en una cuenta del elemento 9, de acuerdo con la
        naturaleza de las operaciones de cada entidad.`,
    ]
  },
  {
    code: '23',
    name: 'PRODUCTOS EN PROCESO',
    description: `Agrupa las subcuentas que representan aquellos bienes que se encuentran en proceso
      de producción.`,
    subAccounts: [
      {
        code: '231',
        name: 'Productos en proceso',
        description: `Productos que se encuentran en proceso de
          manufactura, medidos al costo.`
      },
      {
        code: '235',
        name: 'Inventario de servicios en proceso',
        description: `Se compone de la mano de obra y otros
          costos involucrados en la prestación del servicio mientras éste no se ha
          concluido.`
      },
    ],
    recognitionAndMeasurement: [
      `Los costos de producción o transformación de los inventarios comprenden los costos
        directamente relacionados con las unidades en producción y los costos indirectos
        atribuibles, fijos o variables (NIC 2, párrafo 12).`,
      `En el caso de inventarios de servicios, también se acumulan los costos utilizando un
        sistema de costeo por absorción, clasificando los costos en fijos y variables, a su vez
        que directos e indirectos.`,
      `Los costos de financiación (NIC 23) cuando son incorporados en el costo de inventarios
        identificados como aptos (inventarios aptos), deben ser acumulados por separado en la
        subcuenta 238.`,
    ],
    debited: [
      'El costo de los productos en proceso, calculado hasta la etapa en que se encuentran, con abono a la cuenta 71 Variación de la producción almacenada, subcuenta 713, al cierre del periodo.',
      'El costo de los inventarios de servicio en proceso.',
      'El incremento de valor de los productos en proceso que se miden al valor razonable.',
      'Costos de financiación, cuando la existencia corresponde a un activo apto.',
      'Los sobrantes de productos en proceso.',
    ],
    accredited: [
      'La transferencia de saldos al inicio del periodo con cargo a la cuenta 71 Variación de la producción almacenada, subcuenta 713.',
      'La transferencia a las subcuentas correspondientes de productos terminados y de inventarios de servicios terminados.',
      'La disminución de valor de los productos en proceso que se miden al valor razonable.',
      'Los faltantes de productos en proceso.',
      'Los castigos de productos en proceso.',
    ],
    comments: [
      `El costo de los productos terminados corresponde al costeo por absorción, incluyendo
        los costos fijos y variables, y dentro de ellos, los directos y los indirectos. Los
        inventarios de servicios en proceso están relacionados con los costos incurridos, los
        que están asociados a ingresos no devengados. Conforme se devenga el derecho a
        percibir el ingreso, el costo asociado se transfiere al inventario de servicios
        terminados, y luego al costo de servicios prestados en el estado de resultados (estado
        de resultado integral) del periodo.`,
      `La desvalorización de inventarios de productos en proceso, en tanto contengan costos
        de financiación, para su adecuado tratamiento contable, plantea la consideración de
        si tal desvalorización alcanza al costo de manufactura invertido en el producto en
        proceso, o al costo de financiación relacionado, o a una distribución entre ambos
        componentes, para efectos de la presentación en los estados financieros. En tanto el
        costo del producto en proceso es uno solo, la desvalorización afecta al total de esos
        inventarios mediante cuenta de valuación (cuenta 29), no siendo necesario distinguir
        el componente de valor desvalorizado.`,
      `NIIF PYMES: Los costos de inventarios para un prestador de servicios se discuten en la sección 13.14.`,
    ]
  },
  {
    code: '24',
    name: 'MATERIAS PRIMAS',
    description: `Agrupa las subcuentas que representan los insumos que intervienen directamente en
      los procesos de fabricación, para la obtención de los productos terminados, y que
      quedan incorporados en estos últimos.`,
    subAccounts: [
      {
        code: '241',
        name: 'Materias primas',
        description: `Adquiridas para su posterior ingreso al proceso productivo.`
      },
    ],
    recognitionAndMeasurement: [
      `Las materias primas se registrarán al costo, el mismo que incluye todo costo atribuible
        a la adquisición, hasta que estén disponibles para ser utilizadas en el objeto del negocio
        relacionado. Los descuentos comerciales, las rebajas y otras partidas similares, distintas
        de las financieras, se deducirán para determinar el costo de adquisición (NIC 2, párrafo
        11).`,
      `Para los efectos de la medición al cierre del ejercicio, se tomará en cuenta el costo de
        adquisición o valor neto de realización, el más bajo. Cuando una reducción en el costo
        de adquisición de las materias primas indique que el costo de los productos terminados
        excederá su valor neto realizable, el costo de reposición de las materias primas puede
        ser la medida adecuada de su valor neto realizable (NIC 2, párrafo 32).`,
      `Las salidas de materias primas se reconocen de acuerdo con las fórmulas de costeo de
        PEPS, o promedio ponderado, o costo identificado.`,
    ],
    debited: [
      'El costo de las materias primas.',
      'El costo de las materias primas devueltas por el centro de producción.',
      'Los sobrantes de materias primas.',
    ],
    accredited: [
      'El valor en libros de las materias primas utilizadas en la producción.',
      'El costo de las devoluciones de materias primas a proveedores.',
      'Los faltantes de materias primas.',
      'El castigo de materias primas.',
    ],
    comments: [
      `El castigo de inventarios de materias primas se reconoce conjuntamente con la
        subcuenta 295 que acumula la estimación de desvalorización.`,
      `Para efectos de presentación, las materias primas que se espere utilizar luego del
        periodo corriente (12 meses), deberán presentarse como parte del activo no corriente.`,
    ]
  },
  {
    code: '25',
    name: 'MATERIALES AUXILIARES, SUMINISTROS Y REPUESTOS',
    description: `Agrupa las cuentas divisionarias que representan los materiales diferentes de los
      insumos principales (materias primas), y los suministros que intervienen indirectamente
      por relación al producto en el proceso de fabricación. Asimismo, incluye los repuestos
      que no califican como bienes inmovilizados.`,
    subAccounts: [
      {
        code: '251',
        name: 'Materiales auxiliares',
        description: `Materiales destinados para el proceso de fabricación,
          complementarios a las materias primas.`
      },
      {
        code: '252',
        name: 'Suministros',
        description: `Insumos que intervienen indirectamente por relación al producto
          en los procesos de producción o comercialización, o procesos complementarios,
          como el de mantenimiento.`
      },
      {
        code: '253',
        name: 'Repuestos',
        description: ` Partes y piezas a ser destinadas a su montaje en instalaciones,
          equipos o máquinas en sustitución de otras semejantes.`
      },
    ],
    recognitionAndMeasurement: [
      `Los materiales auxiliares, suministros y repuestos se registrarán a su costo de
        adquisición, el mismo que incluye todos los costos necesarios para darle su condición y
        ubicación actual (NIC 2, párrafo 11).`,
      `Para los efectos de la medición al cierre del ejercicio, se tomará en cuenta el costo de
        adquisición o producción o valor neto de realización, él más bajo. Cuando una reducción
        en el costo de adquisición de los materiales auxiliares, suministros y repuestos indique
        que el costo de los productos terminados excederá su valor neto realizable, el costo de
        reposición de los materiales auxiliares, suministros y repuestos puede ser la medida
        adecuada de su valor neto realizable (NIC 2, párrafo 32).`,
      `Las salidas de materiales auxiliares, suministros y repuestos se reconocen de acuerdo
        con las fórmulas de costeo de PEPS, o promedio ponderado, o costo identificado.`,
    ],
    debited: [
      'El costo de los materiales y suministros adquiridos o fabricados.',
      'El costo de los materiales y suministros devueltos por el centro de producción.',
      'Los sobrantes de este tipo de inventarios.',
    ],
    accredited: [
      'El valor en libros de los materiales y suministros utilizados en la producción.',
      'El costo de las devoluciones de materiales y suministros a proveedores.',
      'Los faltantes de este tipo de inventarios.',
      'El castigo de esta clase de inventarios.',
    ],
    comments: [
      `Las piezas de repuesto importantes corresponden a bienes de propiedad, planta y
        equipo (que se espera utilizar por más de un periodo), y deben registrarse en la
        subcuenta 337 Herramientas y unidades de reemplazo.`,
    ]
  },
  {
    code: '26',
    name: 'ENVASES Y EMBALAJES',
    description: `Agrupa las subcuentas que representan los bienes complementarios para la
      presentación y comercialización del producto.`,
    subAccounts: [
      {
        code: '261',
        name: 'Envases',
        description: `Recipientes o vasijas, destinados a contener el producto que se
          comercializa.`
      },
      {
        code: '262',
        name: 'Embalajes',
        description: `Cubiertas o envolturas, destinadas a guardar productos o
          mercaderías al momento de transportarlas o almacenarlas.`
      },
    ],
    recognitionAndMeasurement: [
      `Los envases y embalajes se registrarán al costo de adquisición, el mismo que incluye
        los costos necesarios para darles su condición y ubicación actual.`,
      `Para los efectos de la medición al cierre del ejercicio, se tomará en cuenta el costo de
        adquisición o valor neto de realización, el más bajo. Las salidas de envases y embalajes
        se reconocen de acuerdo con las fórmulas de costeo de PEPS, o promedio ponderado,
        o costo identificado.`,
      `Cuando una reducción en el costo de adquisición de los envases y embalajes indique
        que el costo de los productos terminados excederá su valor neto realizable, el costo de
        reposición de los envases y embalajes puede ser la medida adecuada de su valor neto
        realizable.`,
    ],
    debited: [
      'El costo de los envases y embalajes adquiridos.',
      'El costo de envases y embalajes devueltos por los centros de producción.',
      'Los sobrantes de envases y embalajes.',
    ],
    accredited: [
      'El valor en libros de los envases y embalajes utilizados.',
      'El costo de los envases y embalajes devueltos a los proveedores.',
      'Los faltantes de envases y embalajes.',
      'El castigo de esta clase de inventarios.',
    ],
    comments: [
      `El castigo de inventarios de envases y embalajes se reconoce eliminando el monto
        correspondiente en esta cuenta, conjuntamente con la subcuenta 297 que acumula la
        estimación de desvalorización.`,
    ]
  },
  {
    code: '27',
    name: 'ACTIVOS NO CORRIENTES MANTENIDOS PARA LA VENTA',
    description: `Agrupa los activos inmovilizados cuya recuperación se espera realizar,
      fundamentalmente, a través de su venta en lugar de su uso continuo. Las características
      que deben cumplir los activos son: que se encuentren disponibles en las condiciones
      actuales para su venta inmediata, sujeto a los términos usuales y habituales para la
      venta de estos activos, y su venta debe ser altamente probable.`,
    subAccounts: [
      {
        code: '271',
        name: 'Propiedades de inversión',
        description: `Comprende los activos previamente registrados en
          la cuenta 31.`
      },
      {
        code: '272',
        name: 'Propiedad, planta y equipo',
        description: `Comprende los activos previamente registrados
          en la cuenta 33, o en la cuenta 32 cuando se adquiere la propiedad legal de los
          activos. Incluye las plantas productoras en producción y en desarrollo.`
      },
      {
        code: '273',
        name: 'Intangibles',
        description: `Comprende los activos previamente registrados en la cuenta 34.`
      },
      {
        code: '274',
        name: 'Activos biológicos',
        description: `Incluye los activos previamente registrados en la cuenta 35.`
      },
      {
        code: '275',
        name: 'Depreciación acumulada – Propiedades de inversión',
        description: `Recibe por
          transferencia la depreciación acumulada de las propiedades de inversión cuando
          se siguió el método del costo en esa categoría de activo.`
      },
      {
        code: '276',
        name: 'Depreciación acumulada – Propiedad, planta y equipo',
        description: `Recibe por
          transferencia la depreciación acumulada de los bienes de propiedad, planta y
          equipo, tanto para el costo como para la revaluación y el costo de financiación
          activado.`
      },
      {
        code: '277',
        name: 'Amortización acumulada – Intangibles',
        description: `Recibe por transferencia la
          amortización acumulada de los bienes de intangibles, tanto para el costo como
          para la revaluación.`
      },
      {
        code: '278',
        name: 'Depreciación acumulada – Activos biológicos',
        description: `Recibe por transferencia la
          depreciación acumulada de los activos biológicos cuando se siguió el método
          del costo. Estos activos biológicos son distintos a las plantas productoras en
          producción o desarrollo que forman parte de propiedad, planta y equipo.`
      },
      {
        code: '279',
        name: 'Desvalorización acumulada',
        description: `Recibe la desvalorización acumulada para cada
          categoría de activo inmovilizado transferido a esta cuenta.`
      },
    ],
    recognitionAndMeasurement: [
      `Los activos no corrientes mantenidos para la venta se medirán al importe en libros o a
        su valor razonable menos los costos de venta, el que sea menor (NIIF 5, párrafo 15). El
        importe en libros corresponde al monto trasladado de la cuenta de origen, el que puede
        tener varios componentes de medición, y el valor razonable es determinado mediante
        su valor de realización estimado en cada periodo posterior, luego del reconocimiento en
        esta cuenta. Las pérdidas por deterioro que se revierten o incrementan en esta cuenta,
        se reconocen en la subcuenta 279.`,
    ],
    debited: [
      'La transferencia de la cuenta de activo de la que procede.',
      'Recuperación de la pérdida por deterioro.',
    ],
    accredited: [
      'La venta del activo.',
      'Pérdida de valor por deterioro.',
    ],
    comments: [
      `Si el activo se adquiere como parte de una combinación de negocios, se medirá por
        su valor razonable menos los costos de venta.`,
      `Las propiedades de inversión se miden al valor razonable salvo que se adopte el
        modelo del costo descrito para los bienes de propiedad, planta y equipo. Sin embargo,
        en tanto podrían corresponder a activos que previamente calificaron como propiedad,
        planta y equipo, se contempla una subcuenta de revaluación para acumular dicho
        componente.`,
      `No se deprecian o amortizan los activos mientras se encuentren clasificados como
        mantenidos para la venta.`,
      `NIIF PYMES:
        No existe prescripción específica para el tratamiento de activos no corrientes
        mantenidos para la venta, por lo que se debe seguir las prescripciones de la NIIF 5.
        La mención a los activos no corrientes mantenidos para la venta en la NIIF PYMES,
        está en relación con la identificación de deterioro (17.26).`,
    ]
  },
  {
    code: '28',
    name: 'INVENTARIOS POR RECIBIR',
    description: `Agrupa las subcuentas que representan bienes aun no ingresados al lugar de
      almacenamiento de la entidad, y que serán destinados a la fabricación de productos, al
      consumo, mantenimiento de sus servicios, o a la venta cuando se encuentren
      disponibles.`,
    subAccounts: [
      {
        code: '281',
        name: 'Mercaderías',
        description: `Comprende los bienes adquiridos para su venta, sin someterlos a
          procesos de transformación.`
      },
      {
        code: '284',
        name: 'Materias primas',
        description: `Comprende los insumos principales que luego ingresarán al
          proceso de transformación.`
      },
      {
        code: '285',
        name: 'Materiales auxiliares, suministros y repuestos',
        description: `Incluye los materiales,
          diferentes de las materias primas, que intervienen en el proceso productivo así
          como los repuestos y suministros que no se incorporan en aquel.`
      },
      {
        code: '286',
        name: 'Envases y embalajes',
        description: `Incluye los bienes complementarios para la presentación
          y comercialización de productos.`
      },
    ],
    recognitionAndMeasurement: [
      `El costo de adquisición de los inventarios incluye todos los costos derivados de su
        adquisición y otros costos en los que se incurre para darles su condición y ubicación
        actuales Tales costos comprenden el valor de compra, aranceles de importación,
        impuestos no recuperables, transporte, manipuleo y otros costos directamente
        atribuibles, y no incluyen descuentos comerciales, rebajas, bonificaciones y partidas
        similares (NIC 2, párrafos 10 y 11).`,
      `Los inventarios por recibir se reconocen cuando se produce la transferencia de control
        de los bienes, de acuerdo con los términos del contrato o pedido. Un criterio para
        identificar la existencia de control, es la oportunidad en que se transfieren los riesgos
        asociados a los bienes.`,
      `La medición es al costo de adquisición o valor neto de realización, el que sea menor.
        Cuando una reducción en el costo de adquisición de los inventarios por recibir
        adquiridas, indique que excederá su valor neto realizable, el costo de reposición de tales
        inventarios puede ser la medida adecuada de su valor neto realizable.`,
    ],
    debited: [
      'El valor de los inventarios por recibir y los otros desembolsos y compromisos de pago motivados por su adquisición, cuyo ingreso a los almacenes de la entidad no se ha efectuado con abono a la cuenta 61.',
    ],
    accredited: [
      'La transferencia de inventarios recibidos a las cuentas de inventarios de acuerdo con su naturaleza (cuentas 20 a 26).',
    ],
    comments: [
      `No todas las adquisiciones de inventarios son reconocidas utilizando la cuenta 28.
        Solamente en aquellos casos, en que se incurre en costos de adquisición antes de la
        recepción de los bienes, debe utilizarse esta cuenta.`,
      `Los anticipos a proveedores se reconocen en las subcuentas 422 y 432. Cuando los
        anticipos están relacionados a compras de inventarios ya pactados, tales anticipos se
        reclasifican para efectos de presentación a Inventarios por recibir.`,
      `Por su naturaleza, la transferencia de inventarios por recibir se reconocen al costo
        identificado.`,
    ]
  },
  {
    code: '29',
    name: 'DESVALORIZACIÓN DE INVENTARIOS',
    description: `Agrupa las subcuentas que acumulan las estimaciones para cubrir la desvalorización de
      cada clase de inventarios. La desvalorización que se acumula en esta cuenta
      corresponde a una pérdida de valor de inventarios existentes, cualquiera sea el origen
      de dicha desvalorización.`,
    subAccounts: [
      {
        code: '291',
        name: 'Mercaderías',
        description: ``
      },
      {
        code: '292',
        name: 'Productos terminados',
        description: ``
      },
      {
        code: '293',
        name: 'Subproductos, desechos y desperdicios',
        description: ``
      },
      {
        code: '294',
        name: 'Productos en proceso',
        description: ``
      },
      {
        code: '295',
        name: 'Materias primas',
        description: ``
      },
      {
        code: '296',
        name: 'Materiales auxiliares, suministros y repuestos',
        description: ``
      },
      {
        code: '297',
        name: 'Envases y embalajes',
        description: ``
      },
      {
        code: '298',
        name: 'Existencias por recibir',
        description: ``
      },
    ],
    recognitionAndMeasurement: [
      `Se reconoce la pérdida de valor en los inventarios cuando el monto esperado a recibir
        por su venta, neto de los gastos en que se incurre por realizar la venta (el valor neto de
        realización), es menor que el costo en libros de los inventarios, para las mercaderías,
        productos terminados, y productos en proceso luego de considerar los costos de
        terminación para convertirlos en productos terminados.`,
      `En el caso de inventarios que ingresaran al proceso productivo, el costo de reposición
        es la medida adecuada para determinar la existencia de pérdidas por desvalorización
        NIC 2, párrafos 28 al 33), cuando se espere que el costo de los productos terminados
        excederá al valor neto realizable.`,
      `NIIF PYMES:
        No se prescribe el uso del costo de reposición para medir el deterioro de existencias sin
        transformación.`,
    ],
    debited: [
      'Los retiros de la contabilidad de los inventarios sin valor, que no se puedan realizar mediante su venta.',
      'La reversión de las desvalorizaciones reconocidas previamente.',
    ],
    accredited: [
      'El monto estimado por desvalorización.',
    ],
    comments: [
      `Cuando los inventarios destinados para la venta o para ser utilizados directa o
        indirectamente en la producción pierden valor, se reconoce la desvalorización
        correspondiente. Esa desvalorización puede corresponder al valor total o a un valor
        parcial del inventario.`,
      `La desvalorización de inventarios puede originarse: en la obsolescencia, en la
        disminución del valor de mercado, o en daños físicos o pérdida de su calidad de ser
        utilizado en el propósito de negocio. El efecto financiero de dicha desvalorización, es
        que el monto invertido en las existencias no podrá ser recuperado a través de la venta
        de la mercadería o producto terminado.`,
      `En el caso de existencias que serán incorporadas directa o indirectamente en los
        proceso productivos, para la elaboración de productos terminados, la disminución de
        su costo de adquisición puede indicar que el costo de esos productos terminados (en
        los que se incorporarán) exceden su valor neto realizable, en cuyo caso, el costo de
        reposición puede ser la medida adecuada para determinar el importe recuperable.`,
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
