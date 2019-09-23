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
    code: '30',
    name: 'INVERSIONES MOBILIARIAS',
    description: `Comprende las inversiones financieras cuyo propósito es obtener rendimientos, en
      adición a la devolución del capital invertido. Incluye inversiones en instrumentos de
      deuda que se espera y se tiene la capacidad de mantener hasta el vencimiento;
      instrumentos representativos de derechos patrimoniales; participaciones en fondos y en
      acuerdos conjuntos, incluyendo activos por derechos de compra adquiridos.`,
    subAccounts: [
      {
        code: '301',
        name: 'Inversiones a ser mantenidas hasta el vencimiento',
        description: `Instrumentos financieros
          representativos de deuda adquiridos. Entre ellos están los valores emitidos o
          garantizados, por el Estado, por el sistema financiero, u otras entidades. Su
          propósito es obtener los rendimientos pactados en fechas establecidas, así
          como la devolución del monto invertido.`
      },
      {
        code: '302',
        name: 'Instrumentos financieros representativos de derecho patrimonial',
        description: `Inversiones en acciones o participaciones, incluyendo a las entidades
          relacionadas, cuyo propósito es obtener rendimientos, por su naturaleza
          variable, y que no se mantienen para su venta. Incluyen las acciones
          representativas del capital social, acciones de inversión y otras formas
          societarias, sea que se ejerza control, influencia significativa o ninguna de ellos.`
      },
      {
        code: '303',
        name: 'Certificados de participación en fondos – cuotas',
        description: `Comprende la participación
          en fondos mutuos y en fondos de inversión, regulados y supervisados.`
      },
      {
        code: '304',
        name: 'Participaciones en acuerdos conjuntos',
        description: `Incluye inversiones en operaciones
          conjuntas y en negocios conjuntos, cuya distinción depende de los derechos y
          obligaciones de las partes establecidas en el acuerdo. Si el acuerdo establece
          derechos sobre los activos y obligaciones respecto de los pasivos, se identifica
          una operación conjunta, mientras que si se establecen acuerdos respecto del
          activo neto (valor residual de activos menos pasivos), se trata como un negocio
          conjunto.`
      },
      {
        code: '308',
        name: 'Inversiones mobiliarias – Acuerdo de compra',
        description: `Incluye los acuerdos de
          compra por las inversiones a ser mantenidas hasta el vencimiento, así como los
          instrumentos financieros representativos de derecho patrimonial, cuando son
          liquidados en una base convencional.`
      },
    ],
    recognitionAndMeasurement: [
      `Se reconoce la inversión a ser mantenida hasta el vencimiento a su valor razonable,
        más los costos de transacción directamente atribuibles a la compra o a su emisión. Con
        posterioridad a su reconocimiento inicial, las inversiones a ser mantenidas hasta el
        vencimiento serán medidas al costo amortizado utilizando el método de la tasa de
        interés efectiva (NIIF 9, párrafo 4.1.2).`,
      `Los instrumentos financieros representativos de deuda se registrarán al costo de
        adquisición, el que incluye todos los costos de transacción. Posteriormente pueden ser
        medidos al costo amortizado o al valor razonable (NIIF 9, párrafo 4.1.4)`,
      `En el caso de inversiones en acciones y/o participaciones en subsidiarias y asociadas,
        éstas se pueden medir al costo, al valor de participación patrimonial, o al valor
        razonable, con posterioridad a su reconocimiento inicial (NIC 27, párrafo 10). En la
        oportunidad del reconocimiento inicial, debe medirse y registrarse, si existiese, cualquier
        plusvalía mercantil contenida en el costo de adquisición cuando se trata de una
        combinación de negocios (NIIF 3, párrafo 32).`,
      `Cuando exista evidencia de deterioro del valor de la inversión, en tanto la inversión se
        mida al costo, el importe en libros del valor del activo se reducirá mediante una cuenta
        de valuación, cuando no se sigue el método de participación patrimonial.`,
      `Las participaciones en acuerdos conjuntos se miden en los estados financieros
        separador del inversor, dependiendo del tipo de acuerdo conjunto. Cuando se trata de
        una operación conjunta, la medición es inicialmente al costo, y posteriormente se
        incrementa o disminuye por los cambios netos en el acuerdo. Para efectos de
        presentación, se reconoce la participación proporcional en el acuerdo para cada activo,
        pasivo, ingreso y gasto, los que a su vez son medidos considerando cada NIIF que les
        resulte aplicable (NIIF 11, párrafos 20 y 21).`,
      `Este PCGE no contempla cuentas de reconocimiento para cada uno de esos activos,
        pasivos, ingresos y gastos, incorporados en una operación conjunta. Sin embargo, las
        entidades podrán adicionar los códigos contables, en lo no regulado por este Plan, para
        efectuar el registro contable de la participación en dichos elementos y sus cambios.
        Cuando la naturaleza el acuerdo conjunto es un negocio conjunto, se mide inicialmente
        al costo y luego se utiliza el método de participación patrimonial, a menos que no ejerza
        influencia significativa o control, en cuyo caso deberá medirse al valor razonable (NIIF
        11, párrafos 24 y 25).`,
      `NIIF PYMES:
        Los instrumentos financieros se miden al costo amortizado, excepto para las inversiones
        en acciones preferentes no convertibles (en acciones ordinarias), y en acciones
        ordinarias y preferentes sin opción de venta que cotizan en bolsa o cuyo valor razonable
        pueda ser medido confiablemente sin incurrir en costos desproporcionados (11.4).`,
    ],
    debited: [
      'El costo de adquisición de los instrumentos financieros.',
      'El valor de las acciones recibidas por distribución de utilidades como pago de deudores.',
      'La diferencia de cambio en caso se incremente el tipo de cambio, cuando se trate de instrumentos financieros representativos de deuda.',
      'La recuperación de valor por la aplicación del costo amortizado bajo el método de la tasa de interés efectiva, o por la aplicación del método de participación patrimonial.',
    ],
    accredited: [
      'El costo de los instrumentos financieros vendidos o redimidos.',
      'La diferencia de cambio si disminuye el tipo de cambio, en el caso de instrumentos financieros representativos de deuda.',
      'La reducción del valor por la aplicación del costo amortizado bajo el método de la tasa de interés efectiva, o por la aplicación del método de participación patrimonial.',
      'Los dividendos recibidos correspondientes a períodos anteriores a la fecha de adquisición.',
    ],
    comments: [
      `Las inversiones en instrumentos de deuda, a ser mantenidas hasta el vencimiento,
        cuyo valor se encuentre expresado en moneda extranjera, se re-expresarán a la tasa
        de cambio aplicable a la fecha del estado de situación financiera.`,
    ]
  },
  {
    code: '31',
    name: 'PROPIEDADES DE INVERSIÓN',
    description: `Incluye las propiedades (terrenos o edificaciones) cuya tenencia (por el propietario o por
      el arrendatario que haya acordado un arrendamiento financiero para financiar una
      propiedad de inversión), tiene el propósito de obtener rentas, aumentar el valor del
      capital o ambos, en lugar de utilizar dichas propiedades para: a) la producción o
      suministro de bienes o servicios, o para fines administrativos; o, para, b) su venta en el
      curso normal de las operaciones`,
    subAccounts: [
      {
        code: '311',
        name: 'Terrenos',
        description: `Urbanos o rurales que se mantienen para obtener ganancias de
          capital y/o para su arrendamiento a terceros.`
      },
      {
        code: '312',
        name: 'Edificaciones',
        description: `Incluye los inmuebles destinados a la obtención de rentas
          mediante su alquiler a terceros o mediante su incremento de valor.`
      },
    ],
    recognitionAndMeasurement: [
      `Los bienes que componen esta cuenta deben registrarse inicialmente al costo de
        adquisición, incluyendo los costos asociados (NIC 40, párrafo 20). Si la propiedad de
        inversión fue financiada con una operación de arrendamiento financiero, el costo inicial
        se reconocerá al importe que resulte menor entre el valor razonable de la propiedad y
        el valor presente de los pagos mínimos por arrendamiento (NIC 40, párrafo 25).`,
      `Con posterioridad a su reconocimiento inicial todas las partidas de propiedades de
        inversión deben ser medidas a su valor razonable con cambios en resultados, o al costo
        menos el importe acumulado de las pérdidas por deterioro de valor y menos la
        depreciación acumulada (NIC 40, párrafo 30).`,
      `Los intereses devengados durante el período de construcción de propiedades de
        inversiones que clasifican como activos aptos, según se definen en la NIC 23, se
        capitalizan hasta el momento en que el activo esté en condiciones de ser utilizado en el
        propósito de negocio.`,
      `NIIF PYMES:
        Mientras que de acuerdo con las NIIF completas, la elección del modelo de medición en
        el reconocimiento posterior, valor razonable o costo, no está sujeto a condición, la
        sección 16 de la NIIF PYMES establece como modelo de medición el de valor razonable,
        cuando dicho valor puede ser medido sin costo o esfuerzo desproporcionado. Si ese no
        es el caso, entonces puede seguirse el modelo del costo, similar al de los bienes de
        propiedad, planta y equipo.`,
      `Por otro lado, no se admite la capitalización de intereses en ningún caso.`,
    ],
    debited: [
      'El costo de adquisición o de construcción, acondicionamiento o equipamiento.',
      'La transferencia de activos inmobiliarios de la cuenta de propiedad, planta y equipo, cuyo propósito de negocio se cambia al de este tipo de activo.',
      'La transferencia del costo de construcciones en curso terminadas.',
      'Los costos de financiación en el caso de activos aptos, acumulados durante la etapa de construcción.',
      'Las mejoras y renovaciones capitalizables.',
      'Los incrementos de valor por medición al valor razonable.',
    ],
    accredited: [
      'El costo de las unidades vendidas o retiradas, o transferidas a la cuenta de activos no corrientes disponibles para la venta.',
      'La transferencia a la cuenta de propiedad, planta y equipo, cuando se destinan al uso de la entidad.',
      'Las disminuciones de valor por medición al valor razonable.',
    ],
    comments: [
      `Aquellas inversiones en inmuebles cuya política contable de medición se realice a
        valor razonable, no están sujetas a depreciación. En el caso de no existir un mercado
        activo que determine dicho valor, se podrá optar por el valor razonable sobre la base
        de una valuación hecha por un tasador independiente.`,
      `En el caso que un inmueble se utilice, en una parte para arrendar a terceros o
        aumentar el valor del capital y en otra, para uso en la producción o propósitos
        administrativos, y si estas porciones pueden ser reconocidas separadamente, la
        entidad deberá registrar tales porciones en forma separada, en las cuentas, 31
        Propiedades de inversión y 33 Propiedad, planta y equipo, el valor correspondiente a
        cada porción de activo.`,
      `Un activo que se haya dispuesto para la venta en lugar de su uso continuado, debe
        ser clasificado como activo no corriente mantenido para la venta, en la cuenta 27.`,
    ]
  },
  {
    code: '32',
    name: 'ACTIVOS POR DERECHO DE USO',
    description: `Agrupa las subcuentas en las que se registran los activos que se adquiere bajo la
      modalidad de arrendamiento financiero. También incluye los arrendamientos operativos,
      excepto cuando el arrendamiento es a corto plazo y cuando el activo subyacente es de
      bajo valor, en cuyo caso es opcional su tratamiento como activo.`,
    subAccounts: [
      {
        code: '321',
        name: 'Propiedades de inversión – Arrendamiento financiero',
        description: `Comprende los
          activos de propiedades de inversión que se mantienen para obtener ganancias
          de capital o para su arrendamiento a terceros, adquiridos bajo la modalidad de
          arrendamiento financiero.`
      },
      {
        code: '322',
        name: 'Propiedad, planta y equipo - Arrendamiento financiero',
        description: `Comprende los
          activos de propiedad, planta y equipo, adquiridos en arrendamiento financiero,
          que la entidad utiliza para la producción o suministro de bienes y servicios, para
          arrendarlos a terceros o para propósitos administrativos, y que se espera usar
          por más de un periodo económico.`
      },
      {
        code: '323',
        name: 'Propiedad, planta y equipo - Arrendamiento operativo',
        description: `Incluye activos en
          arrendamiento operativo bajo el control de la entidad.`
      },
    ],
    recognitionAndMeasurement: [
      `Los bienes por derecho de uso se reconocerán al inicio del contrato de arrendamiento
        conjuntamente con un pasivo por arrendamiento, en la contabilidad del arrendatario
        (NIIF 16, párrafo 22). El costo inicial del activo incluirá todos los siguientes componentes:
        el pasivo por arrendamiento inicial; los pagos por arrendamiento realizados antes o a
        partir de la fecha de inicio del contrato, menos los incentivos de arrendamiento recibidos;
        los costos directos iniciales incurridos; y, una estimación por desmantelamiento y
        restauración del lugar de emplazamiento del activo arrendado (NIIF 16, párrafo 24).`,
      `El pasivo por arrendamiento inicialmente se mide al valor presente de los pagos por
        arrendamiento no desembolsados. La tasa de descuento es la tasa de interés implícita
        si puede ser determinada, sino se usará la tasa marginal de endeudamiento (NIIF 16,
        párrafo 26). El pasivo incluye los pagos fijos menos cualquier incentivo de arrendamiento
        por cobrar, los pagos variables que dependen de un índice o una tasa, importes que se
        espera pagar por garantías de valor residual, el precio por una opción de compra,
        cuando razonablemente se espera ejercer la opción, y penalizaciones, si se acuerda
        contractualmente una opción para la terminación anticipada a favor del arrendatario
        (NIIF 16, párrafo 27).`,
      `En la medición posterior, el activo se mide al costo menos depreciación y
        desvalorización acumuladas, salvo que activos similares en propiedad de inversión se
        midan al valor razonable, o en propiedad, planta y equipo, al valor revaluado, en cuyo
        caso aplicará estas mediciones a los bienes por derecho de uso similares (NIIF 16,
        párrafos 30 A, 34 y 35). A su vez, el pasivo se medirá posteriormente, incrementándolo
        para reflejar el interés sobre el valor descontado previo, y reduciéndolo por los pagos
        efectuados.`,
      `También se actualizará el pasivo por los cambios contractuales de variaciones en el
        arrendamiento, y otros cambios contractuales como la ampliación o extensión de los
        contratos (NIIF 16, párrafo 36). En caso no se opte por seguir el tratamiento descrito
        para activos por arrendamiento operativo, cuando ello es posible a opción del
        arrendatario, se continuará reconociendo gasto por alquileres. La elección del
        reconocimiento de gastos por alquileres, en lugar de un activo por derecho de uso,
        solamente está permitida para arrendamientos de hasta un año de plazo, o
        arrendamientos donde el activo subyacente es de bajo valor (NIIF 16, párrafo 5).`,
      `La contabilidad del arrendador reflejará el activo físico por el control del atributo de
        propiedad, siguiendo el tratamiento prescrito en las NIIF para ese tipo de activos. Sus
        ingresos, en casos de activos por derecho de uso originados en operaciones de
        arrendamiento financiero, serán del tipo financiero, y por arrendamientos operativos,
        reconocerá ingresos por arrendamiento.`,
      `NIIF PYMES:
        Los gastos por alquileres se reconocen en forma lineal, conforme se devengan, por lo
        que se prescribe un tratamiento contable distinto al establecido en las NIIF completas.`,
    ],
    debited: [
      'El costo de adquisición y otros directamente relacionados.',
      'Los costos posteriores capitalizables.',
      'Véase también la dinámica de las cuentas 31 y 33.',
    ],
    accredited: [
      'La desapropiación o devolución del bien.',
      'El traslado a la cuenta de propiedad inmobiliaria y propiedad, planta y equipo, según sea el caso, al finalizar el contrato de arrendamiento financiero al ejercer la opción de compra.',
      'La terminación de los contratos de arrendamiento.',
      'Véase también la dinámica de las cuentas 31 y 33.',
    ],
    comments: [
      `Los activos por derecho de uso acumulan derechos en la contabilidad del arrendatario
        que están bajo el control de la entidad, en tanto tienen la facultad de decidir sobre el
        atributo de uso o gestión del activo. Su tratamiento es igual a la de un activo de
        propiedad, planta y equipo.`,
    ]
  },
  {
    code: '33',
    name: 'PROPIEDAD, PLANTA Y EQUIPO',
    description: `Agrupa los activos tangibles que: a) posee una entidad para su uso en la producción o
      suministro de bienes y servicios, para arrendarlos a terceros o para propósitos
      administrativos; y b) se espera usar durante más de un período. La clasificación para
      efectos de reconocimiento en registros distingue los componentes del valor de cada
      activo.`,
    subAccounts: [
      {
        code: '330',
        name: 'Planta productora',
        description: `Corresponde a los activos biológicos vivos que: se utilizan
          en el suministro de productos agrícolas, se espera produzcan durante más de
          un periodo, y la probabilidad de su venta como producto agrícola es remota. Esta
          clase de propiedad, planta y equipo, es clasificada como activo biológico de
          acuerdo con la NIIF PYMES.`
      },
      {
        code: '331',
        name: 'Terrenos',
        description: `Comprende el valor de los terrenos destinados al uso de la entidad;
          pueden ser urbanos o agrícolas.`
      },
      {
        code: '332',
        name: 'Edificaciones',
        description: `Incluye aquellos que están destinados al proceso productivo o al
          uso administrativo. También se incluyen como parte de esta subcuenta, las
          mejoras en locales arrendados.`
      },
      {
        code: '333',
        name: 'Maquinarias y equipos de explotación',
        description: `Corresponde a las que se utilizan en
          el proceso productivo.`
      },
      {
        code: '334',
        name: 'Unidades de transporte',
        description: `Incluye los vehículos motorizados y no motorizados
          para el transporte de bienes o para uso del personal.`
      },
      {
        code: '335',
        name: 'Muebles y enseres',
        description: `Comprende el mobiliario y los enseres utilizados en todos
          los procesos empresariales, incluyendo el administrativo.`
      },
      {
        code: '336',
        name: 'Equipos diversos',
        description: `Incluye los equipos no utilizados directamente en el proceso
          productivo, además de aquellos para el soporte administrativo.`
      },
      {
        code: '337',
        name: 'Herramientas y unidades de reemplazo',
        description: `Contiene herramientas de
          importancia material, y activos cuyo propósito es sustituir a otros en uso.`
      },
      {
        code: '338',
        name: 'Unidades por recibir',
        description: `Bienes de propiedad, planta y equipo, para los cuales se
          ha incurrido en costos y que están pendientes de ingreso a la entidad.`
      },
      {
        code: '339',
        name: 'Obras en curso',
        description: `Bienes en proceso de construcción o montaje.`
      },
    ],
    recognitionAndMeasurement: [
      `Los bienes que componen esta cuenta deben registrarse inicialmente al costo de
        adquisición o de construcción (NIC 16, párrafo 15), o al valor razonable determinado
        mediante tasación, en el caso de bienes aportados, donados, recibidos en pago de
        deuda, y otros similares.`,
      `El costo incluye el total del valor de compra más todos los gastos necesarios para tener
        el activo en el lugar y condiciones que permitan su funcionamiento y uso en las
        condiciones planeadas. En particular este tipo de bienes incorporan como parte del
        costo, aquellos relacionados con la instalación y desmantelamiento de los bienes (NIC
        16, párrafos 16 y 17).`,
      `Los intereses devengados durante el período de construcción e instalación de activos
        aptos (véase la NIC 23) de propiedad, planta y equipo, se capitalizan hasta el momento
        en que el activo esté en condiciones de entrar en servicio, independientemente de la
        fecha en que sea efectivamente utilizado o trasladado a la respectiva cuenta de
        propiedad, planta y equipo. A partir de esta ocurrencia los intereses deben afectarse a
        los resultados del período.`,
      `Los costos posteriores a la adquisición de un bien de propiedad, planta y equipo, deben
        añadirse al valor en libros del activo cuando sea probable que de los mismos se deriven
        beneficios económicos futuros adicionales a los originalmente evaluados, siguiendo
        pautas normales de rendimiento para el activo existente (NIC 16, párrafos 11 al 14).
        Tales costos posteriores corresponden a sustituciones e inspecciones. El
        mantenimiento rutinario de los bienes corresponde a un gasto de mantenimiento.`,
      `Con posterioridad a su reconocimiento inicial como un activo, todas las partidas de
        propiedad, planta y equipo, deben ser medidas como sigue:`,
      `- A su costo, menos el importe acumulado de las pérdidas por deterioro de valor y
        menos la depreciación acumulada; o,`,
      `- A su valor revaluado, menos el importe acumulado de las pérdidas por deterioro de
        valor y menos la depreciación acumulada.`,
      `En el caso de propiedades, planta y equipo, adquiridos bajo la modalidad de
        arrendamiento financiero (activos por derecho de uso), su reconocimiento es en la
        cuenta 32.`,
      `NIIF PYMES:
        No está permitida la capitalización de costos financieros (17.11), los que se reconocen
        directamente como gastos en todos los casos.`,
    ],
    debited: [
      'El costo de adquisición, de las construcciones, instalaciones, equipamiento, montaje de bienes, necesarios para estar en condiciones de ser utilizados.',
      'El costo de desarrollo de los activos biológicos.',
      'El valor de los activos, convenido o determinado mediante tasación de los inmuebles, y avalúo técnico de los otros bienes, recibidos por cesión, donación o aporte otorgado.',
      'Las mejoras capitalizables.',
      'La revaluación de activos.',
      'Las transferencias de cuentas de propiedades de inversión.',
      'Los costos de financiación, con abono a la subcuenta 725.',
      'Las reclasificaciones entre cuentas en lo que hace a unidades por recibir, obras en curso, y de activos no corrientes mantenidos para la venta.',
    ],
    accredited: [
      'El valor de las unidades vendidas, cedidas, o dadas de baja.',
      'El costo de los bienes devueltos a los proveedores.',
      'Las transferencias a cuentas de propiedades de inversión y activos no corrientes disponibles para la venta.',
      'La desvalorización hasta por el monto revaluado previamente.',
      'Las reclasificaciones entre cuentas en lo que hace a unidades por recibir y obras en curso.',
    ],
    comments: [
      `Las plantas productoras que califican como bienes de propiedad, planta y equipo, son
        aquellas donde el producto agrícola es cosechado, separándolo del activo biológico.
        Un activo que se haya dispuesto para la venta y si su importe en libros será
        recuperado, fundamentalmente a través de una transacción de venta en lugar de su
        uso continuado, debe ser clasificado como activo no corriente mantenido para la
        venta. Los inmuebles adquiridos o construidos por una entidad para su
        comercialización serán clasificados como existencias.`,
      `Los montos revaluados de cada tipo de activo se deben registrar en las subcuentas
        que para el efecto existen, separados del costo. En consecuencia, el valor revaluado
        podrá ser disminuido por el deterioro de valor que pueda sufrir posteriormente el
        activo.`,
      `Cuando se opta por el modelo de revaluación, se debe contemplar el tratamiento
        previsto en la NIC 12, párrafo 20, para el impuesto diferido asociado al excedente de
        revaluación.`,
      `El deterioro de valor de propiedad, planta y equipo, se reconoce en las cuentas de
        valuación descritas en la cuenta 36.`,
      `La divisionaria 3391 Adaptación de terrenos, como parte de la subcuenta 339
        Construcciones y obras en curso, acumula el costo invertido en la adecuación de
        terrenos, cuyo propósito (destino) aún no ha sido decidido.`,
      `La acumulación de activos de herramientas y similares prevista en la subcuenta 337,
        como si se tratara de un solo activo, es adecuada cuando tales herramientas y
        similares son de costo individual reducido, pero el monto total adquirido es
        significativo.`,
    ]
  },
  {
    code: '34',
    name: 'INTANGIBLES',
    description: `Agrupa las subcuentas que representan activos identificables, de carácter no monetario
      y sin sustancia o contenido físico.`,
    subAccounts: [
      {
        code: '341',
        name: 'Concesiones, licencias y otros derechos',
        description: `Incluye los derechos obtenidos para
          desarrollar proyectos o para explorar y/o explotar recursos naturales, entre otros;
          permisos para efectuar operaciones específicas, por tiempo limitado o
          indeterminado; y concesiones (de servicios públicos) adquiridas del Estado.`
      },
      {
        code: '342',
        name: 'Patentes y propiedad industrial',
        description: `Costos de adquisición, desarrollo y registro
          de patentes y otros activos de propiedad industrial.`
      },
      {
        code: '343',
        name: 'Programas de computadora (software)',
        description: `Costos de inversión en el desarrollo
          interno o costo de adquisición de programas de procesamiento electrónico de
          datos.`
      },
      {
        code: '344',
        name: 'Costos de exploración y desarrollo',
        description: `Comprende los costos que representan
          la búsqueda de reservas de recursos naturales.`
      },
      {
        code: '345',
        name: 'Fórmulas, diseños y prototipos',
        description: `Incluye los costos de desarrollo de fórmulas,
          diseños y prototipos obtenidos con nuevos conocimientos científicos y
          tecnológicos aprovechables por la entidad, de los que se obtendrán beneficios
          económicos futuros.`
      },
      {
        code: '347',
        name: 'Plusvalía mercantil',
        description: `Corresponde al exceso en la fecha de adquisición, del
          costo de combinación de negocios sobre el valor razonable de los activos
          identificables adquiridos menos el de los pasivos asumidos.`
      },
      {
        code: '349',
        name: 'Otros activos intangibles',
        description: `Para reconocer cualquier otro activo intangible no
          registrado en las subcuentas anteriores.`
      },
    ],
    recognitionAndMeasurement: [
      `Los Intangibles pueden ser adquiridos o generados (desarrollados) internamente. El
        desarrollo interno puede corresponder a una fase de investigación, en cuyo caso se
        reconocen como gastos directamente, o a una fase de desarrollo, etapa en la que
        pueden dar lugar al reconocimiento de activos (NIC 38, párrafos 54 al 64). Se registran
        inicialmente al costo de adquisición que incluye todos los costos incurridos atribuibles a
        la preparación del activo para su uso previsto (NIC 38, párrafo 27).`,
      `Después del tratamiento inicial los activos intangibles se miden al costo menos la
        amortización acumulada y menos las pérdidas por deterioro. Si la entidad opta por el
        modelo de la revaluación, se miden a su valor revaluado menos su amortización
        acumulada y menos cualquier pérdida acumulada por desvalorización (NIC 38, párrafos
        72 al 87).`,
      `NIIF PYMES:
        Los costos de investigación y desarrollo se reconocen como gasto, a menos que formen
        parte de otro activo que cumpla los criterios para su reconocimiento (18.14): probabilidad
        de beneficios económicos futuros; medición confiable; y, el activo no resulta de
        desembolsos internos en un elemento intangible (18.4). Por otro lado, no se permite el
        método de la revaluación en la medición posterior, debiendo medirse al costo menos
        amortización y desvalorización acumulados.`,
    ],
    debited: [
      'El costo de adquisición o desarrollo de los activos intangibles.',
      'El valor asignado a los intangibles recibidos como donación o aporte.',
      'La revaluación de activos intangibles.',
    ],
    accredited: [
      'El costo de los intangibles vendidos o retirados.',
      'La desvalorización de intangibles.',
    ],
    comments: [
      `Los intangibles en fase de investigación no se incorporan como activos, ni aquellos,
        que estando en fase de desarrollo, no cumplen las condiciones establecidas en la NIC
        38 (párrafo 57).`,
      `La capitalización de los costos de exploración y desarrollo de recursos naturales es
        permitida, más no exigida, por la NIIF 6 Exploración y evaluación de recursos
        minerales, sujeta a evaluaciones periódicas de pérdidas por desvalorización.`,
      `NIIF PYMES:
        No se reconocen activos generados internamente, excepto cuando corresponden a
        otro activo existente`,
    ]
  },
  {
    code: '35',
    name: 'ACTIVOS BIOLÓGICOS',
    description: `Agrupa a los animales vivos y las plantas que forman parte de una actividad agrícola,
      pecuaria y/o piscícola, que resultan de la gestión por parte de una entidad, de las
      transformaciones de los activos biológicos, ya sea para destinarlos a la venta, para dar
      lugar a productos agrícolas (activos realizables) o para convertirlos en otros activos
      biológicos diferentes.`,
    subAccounts: [
      {
        code: '351',
        name: 'Activos biológicos en producción',
        description: `Activos de origen animal o vegetal que se
          encuentran en etapa productiva.`
      },
      {
        code: '352',
        name: 'Activos biológicos en desarrollo',
        description: `Activos de origen animal o vegetal en
          crecimiento o desarrollo, que aún no alcanzaron su etapa productiva.`
      },
    ],
    recognitionAndMeasurement: [
      `El activo biológico debe ser medido, al momento de su reconocimiento inicial, como en
        la fecha de cada estado de situación financiera, a su valor razonable menos los costos
        de venta estimados (NIC 41, párrafo 12). El valor razonable en el reconocimiento inicial
        es generalmente el costo de adquisición. En el caso de que el valor razonable no pueda
        ser medido confiablemente, y sólo en el momento del reconocimiento inicial, se puede
        reconocer y medir el activo biológico, al costo sujeto a la depreciación acumulada y al
        deterioro acumulado, posteriores. (NIC 41, párrafo 30).`,
      `Por su parte, los productos agrícolas cosechados o recolectados que proceden de
        activos biológicos, son medidos a su valor razonable menos los costos de venta
        estimados, en el punto de cosecha o recolección. Ese valor razonable neto se considera
        como costo para efectos de su reconocimiento como inventario (NIC 41, párrafo 13).`,
      `NIIF PYMES:
        La medición es al valor razonable cuando éste es fácilmente determinable sin costo o
        esfuerzo desproporcionado; de no ser así, se miden al costo.`,
    ],
    debited: [
      'La adquisición y/o costos incurridos en el desarrollo del activo biológico.',
      'Incrementos por medición a valor razonable.',
    ],
    accredited: [
      'El retiro o venta de los activos biológicos.',
      'Reducción por medición a valor razonable.',
    ],
    comments: [
      `Para propósitos del reconocimiento contable, se distinguen los componentes de la
        valorización: costo, costo de financiación y valor razonable.`,
      `Las ganancias o pérdidas surgidas por causa del reconocimiento inicial y posterior de
        un activo biológico a su valor razonable, se incluyen en los resultados del periodo
        (estado de resultados integrales), en las divisionarias 6622 y 7622, para gastos e
        ingresos, respectivamente.`,
      `Los activos que se hayan dispuesto para la venta y si su importe en libros será
        recuperado, fundamentalmente a través de una transacción de venta en lugar de su
        uso continuado, deben ser clasificados como activos no corrientes mantenidos para
        la venta, en la subcuenta 274.`,
    ]
  },
  {
    code: '36',
    name: 'DESVALORIZACIÓN DE ACTIVO INMOVILIZADO',
    description: `Agrupa las subcuentas de medición de deterioro para: propiedad de inversión, cuando
      es medida al costo; propiedad, planta y equipo; activos intangibles; activos biológicos
      medidos al costo; e inversiones mobiliarias, individualmente considerados o por grupos
      homogéneos.`,
    subAccounts: [
      {
        code: '361',
        name: 'Desvalorización de propiedades de inversión',
        description: `Comprende la estimación del
          deterioro de los activos que se mantienen para obtener ganancias de capital o
          para su arrendamiento a terceros, cuando para su registro se ha empleado el
          método del costo. Estos activos son registrados en la cuenta 31.`
      },
      {
        code: '362',
        name: 'Desvalorización de propiedades de inversión - Arrendamiento financiero',
        description: `Acumula la estimación por desvalorización de los activos de propiedades de
          inversión financiados con operaciones de arrendamiento financiero.`
      },
      {
        code: '363',
        name: 'Desvalorización de propiedad, planta y equipo - Arrendamiento financiero',
        description: `Acumula la estimación por desvalorización de los activos de propiedad, planta y
          equipo financiados con operaciones de arrendamiento financiero.`
      },
      {
        code: '364',
        name: 'Desvalorización de propiedad, planta y equipo',
        description: `Comprende la estimación del
          deterioro de los activos registrados en la cuenta 33.`
      },
      {
        code: '365',
        name: 'Desvalorización de intangibles',
        description: `Comprende la estimación del deterioro de los
          activos registrados en la cuenta 34.`
      },
      {
        code: '366',
        name: 'Desvalorización de activos biológicos',
        description: `Comprende la estimación del deterioro
          de los activos registrados en la cuenta 35, cuando son medidos al costo menos
          la depreciación y el deterioro acumulados.`
      },
      {
        code: '367',
        name: 'Desvalorización de inversiones mobiliarias',
        description: `Incluye la estimación de pérdida
          de valor de los instrumentos financieros reconocidos en la cuenta 30, cuando
          son medidos al costo.`
      },
    ],
    recognitionAndMeasurement: [
      `La evaluación de la desvalorización de activos inmovilizados se inicia con un análisis de
        indicadores (indicios), de fuentes interna y externa, dando mayor consideración a las
        últimas. Si en el análisis global de diversos indicadores, se estima que podrían existir
        pérdidas por desvalorización, se procederá a la medición correspondiente del monto
        recuperable del activo (NIC 36, párrafo 9). La medición puede efectuarse para cada
        activo por separado o para un conjunto de activos agrupados por unidad generadora de
        efectivo.`,
      `Se registrará la desvalorización de los activos mencionados en las subcuentas
        precedentes, en los casos en que el valor recuperable de un activo, ya sea por su precio
        de venta neto o valor presente de las estimaciones de los flujos de efectivo futuros que
        se prevé resultara del aprovechamiento de dichos activos, exceda su valor neto en
        libros, deduciendo la depreciación o amortización acumuladas, según sea el caso, y las
        estimaciones de desvalorización anteriores (NIC 36, párrafo 18).`,
      `La pérdida por disminución de valor debe ser reconocida en el estado de resultados
        (estado de resultados integrales). Es posible revertir una pérdida por deterioro sólo si se
        presentan cambios en estimados anteriores y hasta que el valor no supere el costo neto
        del activo, si éste hubiese seguido depreciándose o amortizándose normalmente.`,
    ],
    debited: [
      'La reversión de pérdidas reconocidas previamente.',
      'El importe del deterioro de los bienes retirados o vendidos.',
      'El monto del deterioro de los bienes transferidos a Activos no corrientes disponibles para la venta.',
    ],
    accredited: [
      'El valor estimado de la desvalorización de activos inmovilizados.',
    ],
    comments: [
      `Las pérdidas por desvalorización se reconocen en la subcuenta 688, mientras que los
        importes recuperados se reconocen en la subcuenta 757.`,
      `Cuando la medición del activo inmovilizado se efectúa al valor razonable, no se
        reconoce estimación por desvalorización.`,
    ]
  },
  {
    code: '37',
    name: 'ACTIVO DIFERIDO',
    description: `Incorpora los activos que se generan por diferencias temporales deducibles entre la
      base contable y la base tributaria de activos y pasivos, y por el derecho a compensar
      pérdidas tributarias en periodos posteriores. Asimismo, se incluyen en esta cuenta los
      intereses diferidos no devengados, contenidos en cuentas por pagar.`,
    subAccounts: [
      {
        code: '371',
        name: 'Impuesto a las ganancias diferido',
        description: `Contiene el efecto acumulado en el
          impuesto a las ganancias, originado en diferencias temporales deducibles, que
          se espera recuperar en periodos futuros. También acumula el efecto del escudo
          fiscal asociado a pérdidas tributarias que razonablemente se espera compensar
          en el futuro.`
      },
      {
        code: '372',
        name: 'Participaciones de los trabajadores diferidas',
        description: `Acumula el efecto en las
          participaciones de los trabajadores que se calculan sobre la base de la renta
          tributaria (y no contable), originada en diferencias temporales deducibles, que se
          espera recuperar en periodos futuros. También acumula el efecto del escudo
          fiscal asociado a pérdidas tributarias que razonablemente se espera compensar
          en el futuro.`
      },
      {
        code: '373',
        name: 'Intereses diferidos',
        description: `Comprende los intereses no devengados como gasto en
          transacciones con terceros, como préstamos y adquisiciones de activos que
          incorporan costos financieros. Además, incluye los intereses no devengados en
          medición a valor descontado, asociados a pasivos del tipo provisión.`
      },
    ],
    recognitionAndMeasurement: [
      `Se reconocen activos por impuesto a las ganancias en la medida que resulte probable
        que la entidad disponga de rentas tributarias (fiscales) futuras que permitan la aplicación
        de las diferencias temporales deducibles, y de las pérdidas tributarias que se espera,
        razonablemente, compensar en periodos futuros (NIC 12, párrafos 24 y 34). Cuando se
        reconozcan participaciones de los trabajadores diferidas, se utilizará la subcuenta 372.`,
      `La medición, en el reconocimiento inicial y posterior, es al costo, sin ningún descuento
        financiero, utilizando las tasas impositivas que se espera sean de aplicación en el
        periodo que las diferencias temporales deducibles reviertan (NIC 12, párrafos 47 y 53).`,
      `NIIF PYMES:
        Las actualizaciones de valor por medición a valor razonable, como las revaluaciones,
        no da lugar al reconocimiento de activos o pasivos diferidos (29.13, párrafo final).`,
    ],
    debited: [
      'El importe del activo por diferencias temporales deducibles o por pérdidas tributarias compensables en periodos futuros, o por cambios en la legislación originadas en el periodo.',
      'El importe del activo que surja de una transacción reconocida directamente en el patrimonio.',
      'Los intereses no devengados incorporados por el financiamiento recibido.',
    ],
    accredited: [
      'Las reducciones de activos por diferencias temporales deducibles, que revirtieron en el periodo o por cambios en la legislación.',
      'Las reducciones de activos por reversión de las diferencias temporales deducibles, reconocidas directamente en el patrimonio.',
      'Los intereses devengados por el financiamiento recibido.',
    ],
    comments: [
      `El impuesto a las ganancias diferido tiene como contrapartida la subcuenta 882,
        cuando el impacto es en resultados, mientras que afecta la subcuenta de excedente
        de revaluación cuando corresponde a una actualización de valor reconocida
        directamente en el patrimonio. El mismo tratamiento corresponde a la participación
        de trabajadores diferida, cuando se opta por reconocer el impacto de las diferencias
        temporales deducibles en esa participación, afectando en el caso de los resultados
        del periodo a la sub divisionaria 62942. El efecto de los reconocimientos en resultados
        es de un ahorro o menor gasto.`,
      `Los intereses diferidos no se presentan en los estados financieros, pues son
        compensados contra las cuentas por pagar que los contienen.`,
      `La divisionaria 3732 Intereses no devengados en medición a valor descontado,
        acumula los intereses implícitos incorporados en el valor de compra de bienes y
        servicios. El devengado de los gastos por intereses se acumula en la divisionaria 6792
        Gastos financieros en medición a valor descontado.`,
    ]
  },
  {
    code: '38',
    name: 'OTROS ACTIVOS',
    description: `Agrupa las subcuentas en las que se registra el costo de adquisición de los bienes que
      no están destinados para la venta ni para el desarrollo de las actividades propias de la
      entidad, como es el caso de las obras de arte, las bibliotecas, las monedas
      conmemorativas, entre otros.`,
    subAccounts: [
      {
        code: '381',
        name: 'Bienes de arte y cultura',
        description: `Incluye obras de arte como cuadros de pintura y
          esculturas, así como antigüedades, libros, revistas, entre otros.`
      },
      {
        code: '382',
        name: 'Diversos',
        description: `Incluye monedas y joyas, y cualquier otro bien de similar naturaleza,
          no incluidos en la subcuenta anterior.`
      },
    ],
    recognitionAndMeasurement: [
      `Los bienes que componen esta cuenta deben registrarse al costo de adquisición, o a su
        valor razonable en el caso de bienes aportados, recibidos por donación o ingresados al
        patrimonio por cualquier otro concepto.`,
      `El costo de adquisición incluye el total de los desembolsos por los bienes incluyendo
        aquellos relacionados con: honorarios profesionales, comisiones, impuestos de compra
        no recuperables y otros similares.`,
    ],
    debited: [
      'El costo de adquisición de los bienes de arte y cultura y otros similares que se registran en otros activos.',
    ],
    accredited: [
      'El costo de adquisición de activos vendidos o retirados.',
      'Las pérdidas de valor.',
    ],
    comments: [
      `Para efectos de presentación en el estado de situación financiera, este rubro se
        presentará como última partida del activo a largo plazo. Por su naturaleza, los bienes
        en esta cuenta no están sujetos a depreciación, en tanto, generalmente, su valor se
        incrementa con el transcurso del tiempo.`,
    ]
  },
  {
    code: '39',
    name: 'DEPRECIACIÓN y AMORTIZACIÓN ACUMULADOS',
    description: `Acumula la distribución sistemática del importe depreciable de un activo a lo largo de su
      vida útil, así como la amortización de los intangibles.`,
    subAccounts: [
      {
        code: '391',
        name: 'Depreciación acumulada propiedades de inversión',
        description: `Corresponde a la
          depreciación acumulada de los activos contenidos en la cuenta 31.`
      },
      {
        code: '392',
        name: 'Depreciación acumulada propiedades de inversión – Arrendamiento financiero',
        description: `Corresponde a la depreciación acumulada de los activos contenidos
          en la subcuenta 321.`
      },
      {
        code: '393',
        name: 'Depreciación acumulada propiedad, planta y equipo – Arrendamiento financiero',
        description: `Corresponde a la depreciación acumulada de activos contenidos en
          la subcuenta 322.`
      },
      {
        code: '394',
        name: 'Depreciación acumulada – Arrendamiento operativo',
        description: `Corresponde a la
          depreciación acumulada de activos contenidos en la subcuenta 323.`
      },
      {
        code: '395',
        name: 'Depreciación acumulada propiedad, planta y equipo',
        description: `Corresponde a la
          depreciación acumulada de activos contenidos en la subcuenta 33.`
      },
      {
        code: '396',
        name: 'Amortización acumulada',
        description: `Incluye la amortización de activos intangibles. La
          amortización corresponde a los activos reconocidos en la cuenta 34.`
      },
      {
        code: '398',
        name: 'Depreciación acumulada - Activos biológicos en producción',
        description: `Incluye la
          depreciación acumulada de los activos reconocidos en la cuenta 35.`
      },
    ],
    recognitionAndMeasurement: [
      `La depreciación y amortización se reconocen a lo largo de la vida útil de los activos con
        los que están relacionados, siguiendo un método que refleje el patrón de consumo de
        beneficios económicos incorporados en el activo.`,
      `En todos los casos, la vida útil resulta de una estimación, por lo que cualquier cambio
        en los supuestos que dan origen a la estimación, y que resulta en una nueva estimación
        de vida útil, debe ser reconocido a partir de la oportunidad en que tales cambios se
        producen.`,
      `Se debe depreciar o amortizar por separado cada unidad de activo reconocido
        individualmente. La vida útil de cada activo se debe revisar por lo menos una vez al año,
        al cierre del periodo económico y, si las expectativas difieren de las estimaciones
        previas, los cambios se contabilizarán como un cambio en una estimación contable (NIC
        8, párrafos 32 a 38).`,
      `La depreciación se inicia cuando el activo está disponible para su uso, lo que ocurre
        cuando se encuentra en la ubicación y condiciones necesarias para operar en la forma
        prevista por la Gerencia.`,
    ],
    debited: [
      'La reducción o anulación, de la depreciación o amortización acumulados correspondiente a activos vendidos, retirados o transferidos a disponibles para la venta.',
      `La disminución de la depreciación
        acumulada y de la amortización
        acumulada, cuando los valores de
        revaluación son menores que el valor
        en libros y se sigue el método de
        reajuste proporcional de la
        depreciación y amortización, o
        cuando se sigue el método de
        eliminación de la depreciación.`
    ],
    accredited: [
      'La depreciación y amortización del periodo.',
      `El incremento en la depreciación y
        amortización por la revaluación de los
        activos relacionados, cuando se sigue
        el método de reajuste proporcional de
        la depreciación y amortización.`
    ],
    comments: [
      `La depreciación y amortización acumuladas, reflejan el consumo de beneficios
        económicos incorporados en los activos relacionados. Su presentación es la de una
        cuenta de valuación, reduciendo los valores de los activos relacionados.`,
      `El reconocimiento de la depreciación o amortización se hace para cada componente
        de valor por separado, distinguiendo costo, revaluación y costos de financiación. `,
    ]
  },
  {
    code: '40',
    name: 'TRIBUTOS CONTRAPRESTACIONES Y APORTES AL SISTEMA PÚBLICO DE PENSIONES Y DE SALUD POR PAGAR',
    description: `Agrupa las subcuentas que representan obligaciones por impuestos, contribuciones y
      otros tributos, a cargo de la entidad, por cuenta propia o como agente retenedor.
      También incluye el impuesto a las transacciones financieras que la entidad liquida.`,
    subAccounts: [
      {
        code: '401',
        name: 'Gobierno nacional',
        description: `Incluye los tributos que representan ingresos del Gobierno
          nacional, provenientes de la entidad, en su calidad de contribuyente y en su
          calidad de agente retenedor.`
      },
      {
        code: '402',
        name: 'Certificados tributarios',
        description: `Contiene los documentos recibidos por reintegro de
          tributos. Esta subcuenta es de naturaleza deudora.`
      },
      {
        code: '403',
        name: 'Instituciones públicas',
        description: `Incluye las obligaciones por contribuciones de la
          entidad en diferentes instituciones públicas, tales como las de seguridad social,
          y las contribuciones a la ONP. Estas obligaciones se originan en los descuentos
          efectuados a los trabajadores y las aportaciones de la entidad.`
      },
      {
        code: '405',
        name: 'Gobiernos regionales',
        description: `Contemplado para la acumulación de obligaciones por
          tributos para los gobiernos regionales en el futuro. Por el momento, la ley no los
          ha establecido.`
      },
      {
        code: '406',
        name: 'Gobiernos locales',
        description: `Comprende el importe de tributos por concepto de licencias,
          arbitrios y otros impuestos municipales.`
      },
      {
        code: '409',
        name: 'Otros costos administrativos e intereses',
        description: `Incluye obligaciones por sanciones
          administrativas, tributarias y no tributarias, otros costos legales relacionados con
          deuda tributaria y otros con los niveles de gobierno en su capacidad
          sancionadora.`
      },
    ],
    recognitionAndMeasurement: [
      `Los tributos, y aportes a los sistemas de pensiones y de salud, se reconocen a su valor
        nominal menos los pagos efectuados. Su valor nominal corresponde al monto calculado
        cuando es de cuenta propia, o retenido cuando es por cuenta de terceros, en las fechas
        de las transacciones.`,
    ],
    debited: [
      'El pago de las obligaciones tributarias.',
      'La compensación de pagos o tributos por acreditar reconocidos en la subcuenta 167. impuesto a las ganancias',
      'El importe nominal de los certificados de reintegro tributario recibido.',
      'El IGV acreditable.',
    ],
    accredited: [
      'El importe de todos los tributos a cargo de la entidad.',
      'El importe de los impuestos y contribuciones retenidos.',
      'El IGV facturado.',
      'La venta o aplicación de los certificados tributarios.',
    ],
    comments: [
      `El detalle de las divisionarias y otras clasificaciones adicionales que se utilicen en esta
        cuenta, debe considerar la forma y detalle con que se liquidan los tributos de acuerdo
        a lo requerido por los órganos competentes para administrar tributos.`,
      `Para efectos de presentación de los tributos de saldo deudor, se debe considerar el
        plazo en que razonablemente se espera sean aplicados, a efectos de determinar su
        clasificación como corriente o no corriente; su presentación corresponde al activo del
        estado de situación financiera.`,
      `En la divisionaria 4011 se registra el Impuesto General a las Ventas (IGV) declarado,
        pendiente de acreditación.`,
      `La subcuenta 167 acumula los pagos de tributos por cuenta propia, y el IGV por
        acreditar, que se compensa con tributos similares acumulados en esta cuenta.`,
      `Los pasivos con las administradoras de fondos de pensiones se reconocen en la
        cuenta 41. A su vez, los pasivos con entidades prestadoras de servicios de salud, se
        reconocen como parte de las cuentas por pagar comerciales.`,
    ]
  },
  {
    code: '41',
    name: 'REMUNERACIONES Y PARTICIPACIONES POR PAGAR',
    description: `Agrupa las subcuentas que representan las obligaciones devengadas con los
      trabajadores por concepto de remuneraciones, participaciones por pagar, y beneficios
      sociales.`,
    subAccounts: [
      {
        code: '411',
        name: 'Remuneraciones por pagar',
        description: `Comprende los sueldos, salarios, comisiones,
          incluyendo las remuneraciones en especie, devengadas a favor de los
          trabajadores, así como las obligaciones devengadas por vacaciones y
          gratificaciones legales.`
      },
      {
        code: '413',
        name: 'Participaciones de los trabajadores por pagar',
        description: `Incluye las obligaciones que
          por disposiciones de ley o convenio laboral, o de manera voluntaria, corresponde
          pagar a los trabajadores por concepto de participaciones en las utilidades.`
      },
      {
        code: '415',
        name: 'Beneficios sociales de los trabajadores por pagar',
        description: `Comprende las
          obligaciones por concepto de compensación por tiempo de servicios y pensiones
          de jubilación.`
      },
      {
        code: '417',
        name: 'Administradoras de fondos de pensiones',
        description: `Incluye las obligaciones con fondos
          de pensiones privados, originadas en retenciones a los trabajadores o en aportes
          de la entidad.`
      },
      {
        code: '419',
        name: 'Otras remuneraciones y participaciones por pagar',
        description: `Incluye cualquier otra
          obligación de la entidad con sus trabajadores no considerada en las subcuentas
          anteriores, tales como gratificaciones extraordinarias y otros beneficios como los
          que se derivan de convenios colectivos.`
      },
    ],
    recognitionAndMeasurement: [
      `Las obligaciones por remuneraciones y participaciones por pagar, tanto para las que
        representan beneficios a corto o largo plazos, como los beneficios posteriores al retiro
        de los trabajadores, se reconocen al costo que normalmente es su valor nominal. El
        importe total de dichos beneficios será descontado de cualquier importe ya pagado.`,
      `Si existieran importes por pagar en moneda extranjera a la fecha de los estados
        financieros, éstos se expresarán al tipo de cambio aplicable a las transacciones a dicha
        fecha.`,
      `Las pensiones por jubilación o cesantía resultan del valor actual de las pensiones que
        se tendrían que pagar a partir de la fecha en que se adquiere ese derecho, utilizando
        hipótesis actuariales y financieras, y acumuladas a lo largo del periodo activo del
        trabajador.`,
    ],
    debited: [
      'El pago de las obligaciones acreditadas a esta cuenta.',
    ],
    accredited: [
      'Las remuneraciones por pagar.',
      'Las participaciones por pagar y otras remuneraciones devengadas.',
      'Los beneficios sociales devengados.',
    ],
    comments: [
      `Las remuneraciones y participaciones por pagar suponen una relación de
        subordinación de un trabajador hacia una entidad.`,
      `Las obligaciones con trabajadores independientes se reconocen dentro de la
        subcuenta 424 Honorarios por pagar.`,
      `Para efectos de presentación, deben distinguirse las obligaciones corrientes de las
        que corresponde al pasivo no corriente.`,
    ]
  },
  {
    code: '42',
    name: 'CUENTAS POR PAGAR COMERCIALES – TERCEROS',
    description: `Agrupa las subcuentas que representan obligaciones que contrae la entidad por la
      compra de bienes y servicios en operaciones que son parte del objeto del negocio.`,
    subAccounts: [
      {
        code: '421',
        name: 'Facturas, boletas y otros comprobantes por pagar',
        description: `Obligaciones por
          concepto de bienes o servicios adquiridos.`
      },
      {
        code: '422',
        name: 'Anticipos a proveedores',
        description: `Efectivo o sus equivalentes, entregado a
          proveedores a cuenta de compras posteriores. Es de naturaleza deudora.`
      },
      {
        code: '423',
        name: 'Letras por pagar',
        description: `Obligaciones sustentadas en documentos de cambio
          aceptados por la entidad.`
      },
      {
        code: '424',
        name: 'Honorarios por pagar',
        description: `Obligaciones con personas naturales, proveedores de
          servicios prestados en relación de independencia.`
      },
    ],
    recognitionAndMeasurement: [
      `Las cuentas por pagar comerciales se reconocerán por el monto nominal de la
        transacción, menos los pagos efectuados, lo que es igual al costo amortizado.`,
      `Las cuentas en moneda extranjera pendientes de pago a la fecha de los estados
        financieros, se expresarán al tipo de cambio aplicable a las transacciones a dicha fecha.`,
    ],
    debited: [
      'Los pagos efectuados a los proveedores.',
      'La disminución de las obligaciones por devoluciones de compras a los proveedores.',
      'Las notas de débito emitidas por los proveedores, y las notas de crédito emitidas por la entidad.',
      'Los movimientos entre subcuentas, por ejemplo cuando se canjean las facturas por letras.',
      'La diferencia de cambio si disminuye el tipo de cambio de la moneda extranjera.',
    ],
    accredited: [
      'El importe de los bienes adquiridos y servicios recibidos de los proveedores.',
      'Los movimientos entre subcuentas, por ejemplo cuando se canjean las facturas con letras.',
      'La diferencia de cambio si se incrementa el tipo de cambio de la moneda extranjera.',
    ],
    comments: [
      `En tanto para propósitos contables se contempla la forma financiera sin descuidar la
        forma legal, las obligaciones comerciales no sustentadas en comprobantes de pago,
        se reconocen en la divisionaria 4211 No emitidas. Con la recepción de la
        documentación de sustento, se reclasifican a la divisionaria 4212 Emitidas.`,
      `Los anticipos otorgados a proveedores, en cuanto corresponden a compra de bienes
        o servicios pactados, deben reclasificarse para efectos de presentación, de acuerdo
        con la naturaleza de la transacción. Si el anticipo no corresponde a una compra de
        bienes o servicios pactados, corresponde presentarse como Otras cuentas por cobrar
        en el estado de situación financiera.`,
      `Para efectos de presentación, deben distinguirse las obligaciones corrientes de las
        que corresponde al pasivo no corriente.`,
    ]
  },
  {
    code: '43',
    name: 'CUENTAS POR PAGAR COMERCIALES – RELACIONADAS',
    description: `Agrupa las subcuentas que representan obligaciones que se contrae con entidades
      relacionadas, derivadas de la compra de bienes y servicios en operaciones objeto del
      negocio.`,
    subAccounts: [
      {
        code: '431',
        name: 'Facturas, boletas y otros comprobantes por pagar',
        description: `Obligaciones por
          concepto de bienes o servicios adquiridos.`
      },
      {
        code: '432',
        name: 'Anticipos otorgados',
        description: `Efectivo o sus equivalentes, entregado a cuenta de
          compras posteriores. Es de naturaleza deudora.`
      },
      {
        code: '433',
        name: 'Letras por pagar',
        description: `Obligaciones sustentadas en documentos de cambio
          aceptados por la entidad.`
      },
      {
        code: '434',
        name: 'Honorarios por pagar',
        description: `Incluye las obligaciones con Gerentes, Directores u otros
          funcionarios de entidades relacionadas.`
      },
    ],
    recognitionAndMeasurement: [
      `Las cuentas por pagar comerciales se reconocerán por el monto nominal de la
        transacción, menos los pagos efectuados, lo que es igual al costo amortizado. `,
      `Las cuentas en moneda extranjera pendientes de pago a la fecha de los estados
        financieros, se expresarán al tipo de cambio aplicable a las transacciones a dicha fecha.`,
    ],
    debited: [
      'Lo pagos efectuados.',
      'La disminución de las obligaciones por devoluciones de compras.',
      'Notas de débito emitidas por entidades relacionadas o notas de crédito emitidas por la entidad.',
      'Los movimientos entre subcuentas, por ejemplo cuando se canjean facturas por letras.',
      'La diferencia de cambio si disminuye el tipo de cambio de la moneda extranjera.',
    ],
    accredited: [
      'El importe de los bienes adquiridos y servicios recibidos.',
      'Los movimientos entre subcuentas, por ejemplo cuando se canjean facturas por letras.',
      'La diferencia de cambio si se incrementa el tipo de cambio de la moneda extranjera.',
    ],
    comments: [
      `Los saldos que resulten deudores, en adición a la subcuenta 432, deben ser
        presentados como parte del activo. Su presentación en el activo es de acuerdo con la
        naturaleza y objeto del anticipo.`,
      `De acuerdo con la NIC 24, Información a revelar sobre partes relacionadas, deberá
        exponerse información por separado respecto de los saldos por cobrar y pagar,
        ingresos y gastos, entre otra información, por transacciones efectuadas con entes
        vinculados.`,
      `La entidad podrá incorporar dentro de los códigos contables no prescritos por este
        PCGE, cuentas de detalle adicional para acumular información por separado sobre
        tipos de vinculadas.`,
      `Para efectos de presentación, deben distinguirse las obligaciones corrientes de las
        que corresponde al pasivo no corriente.`,
    ]
  },
  {
    code: '44',
    name: 'CUENTAS POR PAGAR A LOS ACCIONISTAS (SOCIOS, PARTÍCIPES) y DIRECTORES',
    description: `Agrupa las subcuentas que representan las sumas adeudadas por la entidad a los
      accionistas (o socios) y directores.`,
    subAccounts: [
      {
        code: '441',
        name: 'Accionistas (o socios)',
        description: `Obligaciones con los accionistas por concepto de
          préstamos y dividendos, entre otros.`
      },
      {
        code: '442',
        name: 'Directores',
        description: `Obligaciones con los directores por dietas u otros conceptos.`
      },
    ],
    recognitionAndMeasurement: [
      `Las cuentas por pagar a accionistas, directores y gerentes, se reconocerán por el monto
        de la transacción, menos los pagos efectuados.`,
      `El saldo de moneda extranjera se expresará al tipo de cambio al que se pagarían las
        transacciones a la fecha de los estados financieros.`,
    ],
    debited: [
      'Los pagos efectuados a los accionistas y directores.',
      'La diferencia de cambio si disminuye el tipo de cambio de la moneda extranjera.',
      'La capitalización legal de préstamos recibidos de accionistas.',
    ],
    accredited: [
      'Los préstamos recibidos de accionistas (o socios).',
      'Los dividendos declarados a favor de los accionistas (o socios) menos cualquier impuesto o retención.',
      'Las dietas devengadas a favor de los directores.',
      'La diferencia de cambio, si se incrementa el tipo de cambio de la moneda extranjera.',
    ],
    comments: [
      `En esta cuenta sólo se incluye las transacciones realizadas con accionistas que son
        personas naturales; las realizadas con personas jurídicas se presentan en la cuenta
        47.`,
      `Para efectos de presentación, deben distinguirse las obligaciones corrientes de las
        que corresponde al pasivo no corriente.`,
    ]
  },
  {
    code: '45',
    name: 'OBLIGACIONES FINANCIERAS',
    description: `Agrupa las subcuentas que representan obligaciones por operaciones de financiación
      que contrae la entidad con instituciones financieras y otras entidades no vinculadas, y
      por emisión de instrumentos financieros de deuda. También se incluyen las
      acumulaciones y costos financieros asociados a dicha financiación y otras obligaciones
      por derivados financieros.`,
    subAccounts: [
      {
        code: '451',
        name: 'Préstamos de instituciones financieras y otras entidades',
        description: `Operaciones de
          préstamos en general obtenidos de bancos y otras instituciones.`
      },
      {
        code: '452',
        name: 'Contratos de arrendamiento financiero',
        description: `Préstamos obtenidos bajo la
          modalidad de arrendamiento financiero, los que están relacionados con los
          activos adquiridos (Propiedades de inversión y Propiedad, planta y equipo).`
      },
      {
        code: '453',
        name: 'Obligaciones emitidas',
        description: `Obligaciones por concepto de deuda emitida para la
          obtención de fondos, tales como papeles comerciales y bonos corporativos.`
      },
      {
        code: '454',
        name: 'Otros instrumentos financieros por pagar',
        description: `Obligaciones por concepto de
          letras; papeles comerciales; bonos; pagarés, entre otros, que la entidad ha
          adquirido.`
      },
      {
        code: '455',
        name: 'Costos de financiación por pagar',
        description: `Acumula todos los costos de financiación
          relacionados con obligaciones financieras contraídas de acuerdo con las
          subcuentas precedentes, tales como: intereses, comisiones, costos de
          reestructuración de deuda, legales y costos incrementales relacionados con la
          obligación financiera contraída.`
      },
      {
        code: '456',
        name: 'Préstamos con compromisos de recompra',
        description: `Registra las obligaciones
          contraídas con terceros referidas a préstamos obtenidos, entregando a cambio
          valores en garantía (con pacto de recompra), los que son readquiridos en plazos
          y condiciones predeterminados.`
      },
    ],
    recognitionAndMeasurement: [
      `Los préstamos de instituciones financieras y otros instrumentos financieros por pagar
        se reconocen al valor razonable, que es generalmente igual al costo. Después de su
        reconocimiento inicial se medirán al costo amortizado, utilizando el método de la tasa
        de interés efectiva, o al valor razonable cuando la obligación está vinculada a un activo
        que se mide al valor razonable.`,
      `Las cuentas en moneda extranjera pendientes de pago a la fecha de los estados
        financieros, se expresarán al tipo de cambio aplicable a las transacciones a dicha fecha.`,
    ],
    debited: [
      'Los pagos de préstamos o instrumentos financieros de deuda.',
      'Los pagos de costos de financiación.',
      'La reducción de valor por la aplicación del valor razonable.',
      'La diferencia de cambio si disminuye el tipo de cambio de la moneda extranjera.',
    ],
    accredited: [
      'Los préstamos y otras formas de financiación recibidos de las instituciones financieras, distintos a los sobregiros en cuenta corriente.',
      'Los instrumentos financieros de deuda emitidos y colocados.',
      'Los costos de financiación devengados.',
      'Las obligaciones que se contraen por contratos de arrendamiento financiero.',
      'El incremento de valor por la aplicación del valor razonable.',
      'La diferencia de cambio si el tipo de cambio de la moneda extranjera sube.',
    ],
    comments: [
      `Los costos de financiación deben incrementar el valor del activo cuando éste tiene las
        características de activo apto a que se refiere la NIC 23.`,
      `Los activos dados en garantía se registran en cuentas de orden, subcuenta 012
        Valores y bienes entregados en garantía.`,
      `Para efectos de presentación, deben distinguirse las obligaciones corrientes de las
        que corresponde al pasivo no corriente.`,
      `NIIF PYMES: No se admite la capitalización de intereses al valor de los activos (sección 25).`,
    ]
  },
  {
    code: '46',
    name: 'CUENTAS POR PAGAR DIVERSAS – TERCEROS',
    description: `Agrupa las subcuentas que representan cuentas por pagar a terceros, que contrae la
      entidad por transacciones distintas a las comerciales, tributarias, laborales y de
      financiamiento.`,
    subAccounts: [
      {
        code: '461',
        name: 'Reclamaciones de terceros',
        description: `Obligaciones con terceros por reclamos
          pendientes de resolución, relacionadas con actividades comerciales y no
          comerciales.`
      },
      {
        code: '464',
        name: 'Pasivos por instrumentos financieros',
        description: `Incluye los pasivos financieros para los
          que existe un acuerdo de venta cuando se reconocen en la fecha de
          contratación, con cambios en el patrimonio. También acumula los pasivos
          financieros por variaciones en los valores razonables, cuando el acuerdo de
          venta se reconoce en la fecha de liquidación.`
      },
      {
        code: '465',
        name: 'Pasivos por compra de activo inmovilizado',
        description: `Obligaciones por compra de
          activos inmovilizados a terceros.`
      },
      {
        code: '466',
        name: 'Participación de terceros en acuerdos conjuntos',
        description: `. Incorpora los pasivos por
          contribuciones de operadores o participes a un acuerdo conjunto, cuando el
          acuerdo conjunto no lleva contabilidad independiente.`
      },
      {
        code: '467',
        name: 'Depósitos recibidos en garantía',
        description: `Importes recibidos por la entidad por
          contratos o convenios como condición de garantía.`
      },
      {
        code: '469',
        name: 'Otras cuentas por pagar diversas',
        description: `Cualquier cuenta por pagar a terceros no
          considerada en las subcuentas anteriores, incluyendo las subvenciones
          gubernamentales sujetas al cumplimiento de condiciones o distribuibles en más
          de un periodo.`
      },
    ],
    recognitionAndMeasurement: [
      `Estas subcuentas se reconocen inicialmente a su valor razonable, generalmente igual
        al costo. Después de su reconocimiento inicial se reconocen a su costo amortizado,
        utilizando el método de la tasa de interés efectiva, excepto para los pasivos por
        instrumentos financieros derivados y pasivos financieros por compromiso de venta, los
        que deben reflejar el valor razonable de los instrumentos relacionados.`,
      `Las cuentas en moneda extranjera pendientes de pago a la fecha de los estados
        financieros, se expresarán al tipo de cambio aplicable a las transacciones a dicha fecha.`,
    ],
    debited: [
      'Los pagos efectuados por acreencias reconocidas en esta cuenta.',
      'La devolución de los depósitos recibidos en garantía.',
      'La diferencia de cambio si disminuye el tipo de cambio de la moneda extranjera.',
      'El cumplimiento de los compromisos de venta.',
    ],
    accredited: [
      'Las reclamaciones de terceros.',
      'Las obligaciones con terceros por compra de activos inmovilizados.',
      'Los depósitos que se reciben de terceros en calidad de garantía por préstamos otorgados u otras operaciones contractuales.',
      'La diferencia de cambio si el tipo de cambio de la moneda extranjera sube.',
      'Los compromisos de venta cuando se reconocen en la fecha de contratación y las variaciones de dichos compromisos reconocidos en la fecha de contratación o liquidación.',
    ],
    comments: [
      `Los subsidios gubernamentales (divisionaria) y las donaciones condicionadas
        (divisionaria 4692) pueden estar sujetos al cumplimiento de condiciones, y por lo
        tanto, de haberse recibido de manera anticipada, se reconoce un pasivo por la
        obligación de devolver tal subsidio (subvención) o donación condicionada, en caso de
        incumplimiento. En otros casos, las subvenciones y donaciones recibidas deben
        reconocerse a lo largo de períodos en que se compensarán los costos relacionados
        a su objeto. Las divisionarias de ingresos relacionadas son las 7591 y 7593.`,
      `La subcuenta 465, pasivos por compra de activo inmovilizado, permite identificar los
        montos no desembolsados en dichas compras para efectos de preparar el estado de
        flujos de efectivo. Los cambios en la subcuenta 464, se reconocen directamente en el
        patrimonio, en la cuenta 563.`,
      `Para efectos de presentación, deben distinguirse las obligaciones corrientes de las
        que corresponde al pasivo no corriente.`,
    ]
  },
  {
    code: '47',
    name: 'CUENTAS POR PAGAR DIVERSAS – RELACIONADAS',
    description: `Agrupa las subcuentas que representan obligaciones a favor de entidades relacionadas,
      que contrae la entidad por operaciones diferentes a las comerciales y a las obligaciones
      financieras.`,
    subAccounts: [
      {
        code: '471',
        name: 'Préstamos',
        description: `Financiamiento obtenido, sujeto o no a costos financieros.`
      },
      {
        code: '472',
        name: 'Costos de financiación',
        description: `Incluye los costos de financiación relacionados con las
          obligaciones financieras.`
      },
      {
        code: '473',
        name: 'Anticipos recibidos',
        description: `Efectivo o sus equivalentes, recibido en calidad de
          anticipos a ser aplicados a cuenta de compras posteriores.`
      },
      {
        code: '474',
        name: 'Regalías',
        description: `Obligaciones originadas en el uso o explotación de intangibles que
          posee otra entidad, y que se determina de acuerdo con el contrato que sustente
          las regalías.`
      },
      {
        code: '475',
        name: 'Dividendos',
        description: `Comprende las obligaciones con los accionistas, como
          remuneración al capital invertido, por declaración de dividendos. Asimismo,
          incluye las obligaciones que con carácter similar se distribuye en otros tipos de
          organización.`
      },
      {
        code: '476',
        name: 'Depósitos en garantía',
        description: `Importes recibidos por la entidad por contratos o
          convenios como condición de garantía.`
      },
      {
        code: '477',
        name: 'Pasivo por compra de activo inmovilizado',
        description: `Obligaciones por compra de
          activos inmovilizados.`
      },
      {
        code: '479',
        name: 'Otras cuentas por pagar diversas',
        description: `Obligaciones con entidades relacionadas
          por conceptos distintos de las subcuentas precedentes.`
      },
    ],
    recognitionAndMeasurement: [
      `Las obligaciones con entidades relacionadas se reconocerán inicialmente por el monto
        de la transacción. Posteriormente se medirán a su costo amortizado, utilizando el
        método de la tasa de interés efectiva menos los pagos realizados.`,
      `Las cuentas en moneda extranjera pendientes de pago a la fecha de los estados
        financieros, se expresarán al tipo de cambio aplicable a las transacciones a dicha fecha.`,
    ],
    debited: [
      'Los pagos efectuados por los conceptos acreditados en esta cuenta.',
      'La diferencia de cambio, si disminuye el tipo de cambio de la moneda extranjera.',
    ],
    accredited: [
      'Los préstamos recibidos.',
      'Los costos de financiación, las regalías y los dividendos.',
      'Los anticipos recibidos.',
      'La obligación por compra de activo inmovilizado.',
      'La diferencia de cambio, si el tipo de cambio de la moneda extranjera sube.',
    ],
    comments: [
      `Para facilitar la presentación de saldos, las entidades pueden distinguir los saldos de
        obligaciones sujetas a costos financieros de aquellas no sujetas a dichos costos.`,
      `Los pasivos por compra de activos inmovilizados facilitan la preparación del estado
        de flujos de efectivo, en lo que corresponde a la determinación de flujos obtenidos o
        aplicados en las actividades de inversión. Véase la NIC 7 Estado de flujos de efectivo.`,
      `Para efectos de presentación, deben distinguirse las obligaciones corrientes de las
        que corresponde al pasivo no corriente.`,
    ]
  },
  {
    code: '48',
    name: 'PROVISIONES',
    description: `Agrupa las subcuentas que expresan los valores estimados por obligaciones de monto
      u oportunidad inciertos. `,
    subAccounts: [
      {
        code: '481',
        name: 'Provisión para litigios',
        description: `Estimación de la provisión en casos de litigios en curso.`
      },
      {
        code: '482',
        name: 'Provisión por desmantelamiento, retiro o rehabilitación del inmovilizado',
        description: `Importe estimado de los costos de desmantelamiento o retiro del activo
          inmovilizado, así como la rehabilitación del lugar donde se encuentra. La
          obligación se reconoce paralelamente con el activo.`
      },
      {
        code: '483',
        name: 'Provisión para reestructuraciones',
        description: `Estimación de los costos que surgen de
          una reestructuración, como por ejemplo en la venta o liquidación de una línea de
          actividad, la clausura de emplazamiento de la entidad en un país o región, o los
          cambios en la estructura gerencial. Existe obligación implícita sólo si la entidad
          tiene un plan formal y detallado para proceder y se ha producido una expectativa
          válida entre los afectados.`
      },
      {
        code: '484',
        name: 'Provisión para protección y remediación del medio ambiente',
        description: `Obligaciones
          legales, contractuales o implícitas de la entidad, para prevenir o reparar daños
          sobre el medio ambiente, salvo las que tengan origen en el desmantelamiento,
          retiro o rehabilitación del activo inmovilizado.`
      },
      {
        code: '485',
        name: 'Provisión para gastos de responsabilidad social',
        description: `Comprende las
          obligaciones por los gastos en los que la entidad estima incurrir en la atención
          de aspectos de responsabilidad social.`
      },
      {
        code: '486',
        name: 'Provisión para garantías',
        description: `Incluye la estimación de gastos a incurrir por la
          reparación o reposición de activos vendidos, durante el periodo de garantía.`
      },
      {
        code: '487',
        name: 'Provisión para activos por derecho de uso',
        description: `Directamente relacionados con el
          reconocimiento de este tipo de activos en la cuenta 32.`
      },
      {
        code: '489',
        name: 'Otras provisiones',
        description: `Comprende cualquier otra provisión no incluida en las
          subcuentas precedentes.`
      },
    ],
    recognitionAndMeasurement: [
      `Una provisión se debe reconocer sólo cuando: a) la entidad tiene una obligación
        presente como resultado de un suceso pasado; b) es probable que la entidad tenga que
        desprenderse de recursos que involucren beneficios económicos, para pagar la
        obligación; y c) puede estimarse de manera fiable el importe de la obligación (NIC 37,
        párrafo 14).`,
      `Las provisiones en moneda extranjera a la fecha de los estados financieros, se
        expresarán al tipo de cambio aplicable a las transacciones a dicha fecha.`,
    ],
    debited: [
      'La transferencia de las provisiones efectuadas a otras cuentas de pasivo.',
      'La reversión de las provisiones.',
      'La diferencia de cambio, si disminuye el tipo de cambio de la moneda extranjera',
    ],
    accredited: [
      'Las provisiones estimadas para cubrir obligaciones.',
      'El incremento de la provisión por nuevas estimaciones o actualización financiera de valor.',
      'La diferencia de cambio, si se incrementa el tipo de cambio de la moneda extranjera.',
    ],
    comments: [
      `A diferencia de las cuentas por pagar comerciales y de las obligaciones devengadas,
        las provisiones corresponden a obligaciones de monto u oportunidad de pago,
        inciertos. Una provisión es distinta a una estimación de recuperación de un activo; la
        primera representa una obligación, mientras que la estimación permite mostrar el
        monto recuperable del activo.`,
      `Algunas de las subcuentas aquí contenidas se deben reconocer inicialmente al valor
        descontado, según lo establece la NIC 37. En esos casos, la actualización financiera
        de valor se reconoce en la sub divisionaria correspondiente de las subcuentas 6792
        y 6793.`,
      `Una vez confirmada la obligación, la provisión es ajustada y trasladada a la cuenta de
        pasivo correspondiente para su desembolso.`,
      `Para efectos de presentación, deben distinguirse las obligaciones corrientes de las
        que corresponde al pasivo no corriente.`,
    ]
  },
  {
    code: '49',
    name: 'PASIVO DIFERIDO',
    description: `Incluye los pasivos por impuestos que se generan por diferencias temporales gravables
      (imponibles) y en actualizaciones de valor de activos inmovilizados, cuando se sigue
      una medición valor razonable o valor revaluado, sin efecto impositivo. También contiene
      la participación de los trabajadores diferidas cuando se opta por su reconocimiento.
      Asimismo, incorpora los intereses referidos a cuentas por cobrar que aún no han
      devengado, y otros ingresos y costos diferidos.`,
    subAccounts: [
      {
        code: '491',
        name: 'Impuesto a las ganancias diferido',
        description: `Acumula los efectos del gasto contable por
          impuesto a las ganancias originado en diferencias temporales gravables, que se
          estima dará lugar al pago de impuesto a las ganancias en periodos futuros.
          Asimismo, acumula el efecto del impuesto a las ganancias diferido por
          actualización de valor sin efecto tributario, como es el caso de las revaluaciones,
          reconocidas directamente en el patrimonio neto.`
      },
      {
        code: '492',
        name: 'Participaciones de los trabajadores diferidas',
        description: `. Acumula el efecto del gasto en
          las participaciones de los trabajadores que se calculan sobre la base de la renta
          tributaria (y no contable), originado en diferencias temporales gravables, que se
          estima darán lugar al pago de participaciones en periodos futuros. Asimismo,
          acumula el efecto de las participaciones de los trabajadores diferidas por
          actualización de valor sin efecto tributario, como es el caso de las revaluaciones,
          reconocidas directamente en el patrimonio neto.`
      },
      {
        code: '493',
        name: 'Intereses diferidos',
        description: `Incorpora los intereses relacionados con cuentas por
          cobrar, los que aún no han devengado. Estos intereses pueden incluir tanto
          aquellos que se pactan explícitamente, como los que están implícitamente
          contenidos en las cuentas por cobrar.`
      },
      {
        code: '494',
        name: 'Ganancia en venta con arrendamiento financiero paralelo',
        description: `Acumula el
          ingreso en la venta de activos con arrendamiento financiero paralelo, el que se
          devenga durante el plazo del contrato del arrendamiento.`
      },
      {
        code: '495',
        name: 'Subsidios recibidos diferidos',
        description: `Acumulan ingresos no devengados por
          subsidios recibidos del Estado, para los cuales no existe obligación de
          devolución.`
      },
      {
        code: '496',
        name: 'Ingresos diferidos',
        description: `Incluye los ingresos que se devengan en resultados en el
          futuro no contenidos en las subcuentas anteriores. No incluye la contabilización
          de ingresos de contratos de construcción, los anticipos recibidos por venta futura
          de bienes o servicios, ni los adelantos por venta de bienes futuros.`
      },
      {
        code: '497',
        name: 'Costos diferidos',
        description: `Corresponde a los costos asociados con los ingresos
          diferidos acumulados en la subcuenta 496.`
      },
    ],
    recognitionAndMeasurement: [
      `Las transacciones acumuladas en esta cuenta se miden al costo. Se reconocen pasivos
        diferidos por impuesto a las ganancias y participaciones de los trabajadores por las
        diferencias temporales gravables (imponibles) en períodos futuros y por las
        actualizaciones de valor reconocidas directamente en el patrimonio neto (NIC 12,
        párrafos 15 y 20).`,
      `La ganancia en venta con pacto de retro arrendamiento se reconoce en resultados en
        el plazo del arrendamiento financiero.`,
      `Los subsidios recibidos relacionados con la inversión en un activo o ejecución de
        actividades, se reconocen como ingresos en resultados, asociándolos al consumo de
        beneficios económicos del activo o la ejecución de las actividades.`,
      `NIIF PYMES:
        Las actualizaciones de valor por medición a valor razonable, como las revaluaciones,
        no da lugar al reconocimiento de activos o pasivos diferidos (29.13, párrafo final).`,
    ],
    debited: [
      'Disminución del impuesto a las ganancias y participaciones de los trabajadores diferidas por la reversión de las diferencias temporales gravables (imponibles) relacionadas.',
      'Disminución del impuesto a las ganancias y participaciones de los trabajadores diferidas por transacciones relacionadas con el patrimonio',
      'Intereses devengados en el financiamiento entregado a terceros.',
      'Los costos diferidos, asociados a ingresos diferidos.',
      'El reconocimiento en resultados de los ingresos diferidos y de la ganancia en venta de activos en transacciones paralelas de arrendamiento financiero.',
    ],
    accredited: [
      'El impuesto a las ganancias y participaciones de los trabajadores diferidas, originadas en diferencias temporales gravables (imponibles) relacionadas con transacciones que se reconocen en los resultados del período o en el patrimonio.',
      'El incremento de estos pasivos por cambios en la legislación tributaria en relación con el impuesto a las ganancias y participaciones de los trabajadores.',
      'Los subsidios recibidos y la ganancia en venta de activos y arrendamiento financiero paralelo.',
      'Los intereses no devengados incorporados por el financiamiento otorgado a terceros.',
      'La ganancia en la venta de activos en transacciones con arrendamiento financiero paralelo.',
      'Los ingresos diferidos y el reconocimiento en resultados de los costos diferidos.',
    ],
    comments: [
      `La subcuenta 491 se relaciona con la subcuenta 882, Impuesto a las ganancias
        diferido. En el caso de optar por el reconocimiento de participaciones de los
        trabajadores diferidas, la subcuenta relacionada es la 62942. `,
      `El reconocimiento en resultados (estado de resultado integral) de ingresos por
        subsidios recibidos del Estado, previamente acumulados en la subcuenta 495, se
        registran en la divisionaria 7591.`,
      `Los intereses diferidos reconocidos en la divisionaria 4931, no se presentan en los
        estados financieros; son compensados con la cuenta por cobrar correspondiente, en
        tanto constituyen intereses no devengados.`,
      `La NIIF 15 para los ingresos por ventas, de manera consistente con otras Normas
        sobre activos que involucran financiamiento otorgado o recibido, requiere la
        diferenciación entre los componentes comerciales y financieros en las transacciones
        con terceros. Así, cuando una cuenta por cobrar originada en una venta contiene
        intereses, sin diferenciarlos, se requiere el reconocimiento por separado del ingreso
        por la venta, del de intereses, para lo cual expone la medición a valor actual de las
        cuentas por cobrar.`,
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
